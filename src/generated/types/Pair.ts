import type * as p from "@movingco/prelude";

export type PairData = {
  reserve0: {
    value: p.U64;
  };
  reserve1: {
    value: p.U64;
  };
  mint_capability: {
    dummy_field: boolean;
  };
  burn_capability: {
    dummy_field: boolean;
  };
  admin_fees: {
    value: p.U64;
  };
  swap_events: {
    counter: p.U64;
    guid: {
      len_bytes: number;
      guid: {
        id: {
          creation_num: p.U64;
          addr: p.HexStringArg;
        };
      };
    };
  };
};

export type SwapEventData = {
  sender_addr: p.HexStringArg;
  amount0_in: p.U64;
  amount1_in: p.U64;
  amount0_out: p.U64;
  amount1_out: p.U64;
};

export type SwapReceiptData = {
  sender_addr: p.HexStringArg;
  reserve0: p.U64;
  reserve1: p.U64;
  amount0_out: p.U64;
  amount1_out: p.U64;
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162::Pair`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
  /** The full module name. */
  FULL_NAME:
    "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162::Pair",
  /** The name of the module. */
  NAME: "Pair",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "fcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
      name: "Pair",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "fcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
          name: "Pair",
        },
        name: "Pair",
        fields: [
          {
            name: "reserve0",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "Coin",
                },
                name: "Coin",
              },
            },
          },
          {
            name: "reserve1",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "Coin",
                },
                name: "Coin",
              },
            },
          },
          {
            name: "mint_capability",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "Coin",
                },
                name: "MintCapability",
              },
            },
          },
          {
            name: "burn_capability",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "Coin",
                },
                name: "BurnCapability",
              },
            },
          },
          {
            name: "admin_fees",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "Coin",
                },
                name: "Coin",
              },
            },
          },
          {
            name: "swap_events",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "Event",
                },
                name: "EventHandle",
              },
            },
          },
        ],
        type_params: ["Coin0", "Coin1"],
        abilities: ["key"],
      },
      {
        module_name: {
          address:
            "fcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
          name: "Pair",
        },
        name: "SwapEvent",
        fields: [
          { name: "sender_addr", ty: "address" },
          { name: "amount0_in", ty: "u64" },
          { name: "amount1_in", ty: "u64" },
          { name: "amount0_out", ty: "u64" },
          { name: "amount1_out", ty: "u64" },
        ],
        abilities: ["drop", "store"],
      },
      {
        module_name: {
          address:
            "fcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
          name: "Pair",
        },
        name: "SwapReceipt",
        fields: [
          { name: "sender_addr", ty: "address" },
          { name: "reserve0", ty: "u64" },
          { name: "reserve1", ty: "u64" },
          { name: "amount0_out", ty: "u64" },
          { name: "amount1_out", ty: "u64" },
        ],
        type_params: ["Coin0", "Coin1"],
        abilities: [],
      },
    ],
    errors: {
      EINSUFFICIENT_INPUT_AMOUNT: {
        code: 6,
        name: "EINSUFFICIENT_INPUT_AMOUNT",
      },
      EINSUFFICIENT_LIQUIDITY: { code: 5, name: "EINSUFFICIENT_LIQUIDITY" },
      EINSUFFICIENT_LIQUIDITY_MINTED: {
        code: 8,
        name: "EINSUFFICIENT_LIQUIDITY_MINTED",
      },
      EINSUFFICIENT_OUTPUT_AMOUNT: {
        code: 4,
        name: "EINSUFFICIENT_OUTPUT_AMOUNT",
      },
      EINVARIANT_K: { code: 7, name: "EINVARIANT_K" },
      EPAIR_ALREADY_PUBLISHED: { code: 1, name: "EPAIR_ALREADY_PUBLISHED" },
      EPAIR_NOT_FOUND: { code: 3, name: "EPAIR_NOT_FOUND" },
    },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {
    Pair: "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162::Pair::Pair",
  },
  /** All struct types. */
  structs: {
    Pair: "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162::Pair::Pair",
    SwapEvent:
      "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162::Pair::SwapEvent",
    SwapReceipt:
      "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162::Pair::SwapReceipt",
  },

  ...builders,
} as const;

export const PairModule = moduleImpl as p.MoveModuleDefinition<
  "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
  "Pair"
> as typeof moduleImpl;
