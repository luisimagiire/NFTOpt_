// @ts-ignore
import classes from "../components/styles/RequestForm.module.scss";

import React from "react";

import { NFTAsset } from "../../models/NFTAsset";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

type Props =
{
    value    : NFTAsset
,   list     : NFTAsset[]
,   onChange : (asset: NFTAsset | undefined | null) => void
};

export default function(props : Props)
{
    return <FormControl className={classes.fieldWrapper}>
        <InputLabel id="select-label">NFT Collection</InputLabel>

        <Select
            MenuProps={{ classes: { paper: classes.menuPaper } }}
            value={props.value.key.nftContract === "" ? "_" : props.value.key.nftContract}
            labelId="select-label"
            label="NFT Collection"
            renderValue={ () => props.value?.name.length ? props.value.name : <em>Select a collection</em> }
        >
            <MenuItem disabled value="_" />
            {
                props.list &&
                props.list.map
                (
                    (item, i) =>
                    <MenuItem
                        key={i}
                        value={item.key.nftContract}
                        onClick={ () => props.onChange(item) }
                    >{item.name}</MenuItem>
                )
            }
        </Select>
    </FormControl>;
}
