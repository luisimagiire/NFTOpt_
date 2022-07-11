import { ethers } from "ethers";
import { OptionState } from "../models/option";
import { requests } from "./requests";
import { options } from "./options";

export enum OptionViewGroup { REQUEST, OPEN, CLOSED };

export type FilterParams =
{
    account     : string
,   premium     : { min : string, max: string }
,   strikePrice : { min : string, max: string }
,   interval    : { min : string, max: string }
}

export let optionsByStateFiltered = {};

const MAX_INT_STRING = (Number.MAX_SAFE_INTEGER - 1).toString();

export async function doFilter(state : OptionViewGroup, filterParams : FilterParams)
{
    let map = state === OptionViewGroup.REQUEST ? requests : options;

    let stateFilter = (s : OptionState) => true;
    if (state === OptionViewGroup.OPEN)   stateFilter = (s : OptionState) => s === OptionState.OPEN;
    if (state === OptionViewGroup.CLOSED) stateFilter = (s : OptionState) => s === OptionState.CANCELED || s === OptionState.EXERCISED;

    map = map.filter
    (
        o =>
        stateFilter(o.state)
        && (filterParams.account === "" || (o.buyer === filterParams.account || o.seller === filterParams.account))
        && o.premium.gte(ethers.utils.parseEther(filterParams.premium.min === "" ? "0" : filterParams.premium.min))
        && o.premium.lte(ethers.utils.parseEther(filterParams.premium.max === "" ? MAX_INT_STRING : filterParams.premium.max))
        && o.strikePrice.gte(ethers.utils.parseEther(filterParams.strikePrice.min === "" ? "0" : filterParams.strikePrice.min))
        && o.strikePrice.lte(ethers.utils.parseEther(filterParams.strikePrice.max === "" ? MAX_INT_STRING : filterParams.strikePrice.max))
        && o.interval >= (filterParams.interval.min === "" ? 0  : parseInt(filterParams.interval.min))
        && o.interval <= (filterParams.interval.max === "" ? 30 : parseInt(filterParams.interval.max))
    );

    optionsByStateFiltered[state] = map;

    return map;
}