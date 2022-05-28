import { BigNumber } from "ethers";
import { NFTAsset, Option, OptionWithNFTDetails } from "../types";
import { getSignedContract } from "../metamask";
import addresses from "../../../addresses.json";

async function fetchNFTImage(address: string, id: BigNumber) {
    const abi_IERC721: any = [
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "tokenURI",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
    ];

    let NFTContract = getSignedContract(address, abi_IERC721);

    var data = await NFTContract.tokenURI(id);

    return JSON.parse(atob(data.slice(29))).image;
}

export async function fetchAssetsForAddress(account: string, setAssetsCallback: (assets: NFTAsset[]) => void) {
    const assets: NFTAsset[] = [];

    const abi_IERC721: any = [
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "ownerOf",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
    ];

    const NFTContractAddress = addresses["localhost"].NFTDummy;
    let NFTContract = getSignedContract(NFTContractAddress, abi_IERC721);

    for (let i = 1; i < 21; ++i) {
        var data = await NFTContract.ownerOf(i);

        data = data.toLowerCase();

        if (data === account) {
            assets.push({
                tokenId: BigNumber.from(i),
                address: NFTContractAddress,
                name: "X Collection - " + i,
                image: await fetchNFTImage(NFTContractAddress, BigNumber.from(i)),
                url: "",
            });
        }
    }

    setAssetsCallback(assets);
}

export async function fetchNFTDetailsForOneOptions(
    nftContract: string,
    nftTokenId: BigNumber,
    setAssetCallback: (asset: NFTAsset) => void
) {
    let asset: NFTAsset | null = null;

    asset = {
        tokenId: nftTokenId,
        address: nftContract,
        name: "???",
        image: await fetchNFTImage(nftContract, nftTokenId),
        url: "https://freesvg.org/img/Placeholder.png",
    };

    setAssetCallback(asset);
}

export async function fetchNFTDetailsForMultipleOptions(
    options: Option[],
    setOptionsCallback: (optionsWithNFTDetails: OptionWithNFTDetails[]) => void
) {
    const optionsWithNFTDetails: OptionWithNFTDetails[] = [];
    let asset: NFTAsset | null = null;

    for (let option of options) {
        asset = {
            tokenId: option.nftId,
            address: option.nftContract,
            name: `Option ${option.id}`,
            image: await fetchNFTImage(option.nftContract, option.nftId),
            url: "https://freesvg.org/img/Placeholder.png",
        };

        optionsWithNFTDetails.push({
            ...option,
            asset,
        });
    }

    setOptionsCallback(optionsWithNFTDetails);
}