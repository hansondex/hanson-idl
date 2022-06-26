import type { CoinInfo, CoinList } from "@movingco/core";
import { ChainId, Coin, CoinAmount } from "@movingco/core";
import { default as keyBy } from "lodash.keyby";

import coinList from "./generated/coin-list.json";

const TEST_COIN_INFO: CoinInfo = {
  name: "Test Coin",
  symbol: "TST",
  logoURI:
    "https://raw.githubusercontent.com/movingco/aptos-coin-list/master/assets/devnet/apt.svg",
  decimals: 4,
  address: "0x1::TestCoin::TestCoin",
  chainId: ChainId.AptosDevnet,
};

export const TEST_COIN = new Coin(TEST_COIN_INFO);

export const ZERO_TEST_COINS = new CoinAmount(TEST_COIN, 0);

export const COIN_LIST: CoinList = {
  ...coinList,
  tokens: [...coinList.tokens, TEST_COIN_INFO],
};

export const ALL_COINS = COIN_LIST.tokens.map((c) => new Coin(c));

export const COIN_MAP: Record<string, Coin> = keyBy(
  ALL_COINS,
  (c) => c.address
);
