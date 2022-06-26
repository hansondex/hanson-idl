import * as p from "@movingco/prelude";

export type MintWrapperData = {
  mint_capability: {
    dummy_field: boolean;
  };
  burn_capability: {
    dummy_field: boolean;
  };
  hard_cap: p.U64;
};

export type MinterData = {
  mint_capability: {
    dummy_field: boolean;
  };
  allowance: p.U64;
};

export type MinterOffersData = {
  offers: {
    handle: p.U128;
    length: p.U64;
  };
};

export type OwnerData = {
  base: p.HexStringArg;
};

/**
 * Payload arguments for {@link MintWrapperModule.mint}.
 */
export type MintPayload = {
  args: {
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
    /** IDL type: `U64` */
    amount: p.U64;
  };
  typeArgs: {
    coin_type: string;
  };
};

/**
 * Payload arguments for {@link MintWrapperModule.accept_minter}.
 */
export type AcceptMinterPayload = {
  args: {
    /** IDL type: `Address` */
    base: p.HexStringArg;
  };
  typeArgs: {
    coin_type: string;
  };
};

/**
 * Payload arguments for {@link MintWrapperModule.accept_owner}.
 */
export type AcceptOwnerPayload = {
  args: {
    /** IDL type: `Address` */
    base: p.HexStringArg;
  };
  typeArgs: {
    coin_type: string;
  };
};

/**
 * Payload arguments for {@link MintWrapperModule.create_with_coin}.
 */
export type CreateWithCoinPayload = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: p.HexStringArg;
    /** IDL type: `U64` */
    decimals: p.U64;
    /** IDL type: `U64` */
    hard_cap: p.U64;
  };
  typeArgs: {
    coin_type: string;
  };
};

/**
 * Payload arguments for {@link MintWrapperModule.offer_minter}.
 */
export type OfferMinterPayload = {
  args: {
    /** IDL type: `Address` */
    destination: p.HexStringArg;
    /** IDL type: `U64` */
    allowance: p.U64;
  };
  typeArgs: {
    coin_type: string;
  };
};

/**
 * Payload arguments for {@link MintWrapperModule.offer_owner}.
 */
export type OfferOwnerPayload = {
  args: {
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
  };
  typeArgs: {
    coin_type: string;
  };
};

/** Function builders. */
const builders = {
  mint: ({ args, typeArgs }: MintPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::mint",
    type_arguments: [typeArgs.coin_type],
    arguments: [
      p.serializers.hexString(args.recipient),
      p.serializers.u64(args.amount),
    ],
  }),

  accept_minter: ({
    args,
    typeArgs,
  }: AcceptMinterPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::accept_minter",
    type_arguments: [typeArgs.coin_type],
    arguments: [p.serializers.hexString(args.base)],
  }),

  accept_owner: ({
    args,
    typeArgs,
  }: AcceptOwnerPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::accept_owner",
    type_arguments: [typeArgs.coin_type],
    arguments: [p.serializers.hexString(args.base)],
  }),

  create_with_coin: ({
    args,
    typeArgs,
  }: CreateWithCoinPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::create_with_coin",
    type_arguments: [typeArgs.coin_type],
    arguments: [
      p.serializers.hexString(args.name),
      p.serializers.u64(args.decimals),
      p.serializers.u64(args.hard_cap),
    ],
  }),

  offer_minter: ({
    args,
    typeArgs,
  }: OfferMinterPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::offer_minter",
    type_arguments: [typeArgs.coin_type],
    arguments: [
      p.serializers.hexString(args.destination),
      p.serializers.u64(args.allowance),
    ],
  }),

  offer_owner: ({
    args,
    typeArgs,
  }: OfferOwnerPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::offer_owner",
    type_arguments: [typeArgs.coin_type],
    arguments: [p.serializers.hexString(args.recipient)],
  }),
} as const;

/** Payload generators for module `0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d",
  /** The full module name. */
  FULL_NAME:
    "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper",
  /** The name of the module. */
  NAME: "MintWrapper",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d",
      name: "MintWrapper",
    },
    functions: [
      {
        name: "mint",
        ty_args: ["coin_type"],
        args: [
          { name: "recipient", ty: "address" },
          { name: "amount", ty: "u64" },
        ],
      },
      {
        name: "accept_minter",
        ty_args: ["coin_type"],
        args: [{ name: "base", ty: "address" }],
      },
      {
        name: "accept_owner",
        ty_args: ["coin_type"],
        args: [{ name: "base", ty: "address" }],
      },
      {
        name: "create_with_coin",
        ty_args: ["coin_type"],
        args: [
          { name: "name", ty: { vector: "u8" } },
          { name: "decimals", ty: "u64" },
          { name: "hard_cap", ty: "u64" },
        ],
      },
      {
        name: "offer_minter",
        ty_args: ["coin_type"],
        args: [
          { name: "destination", ty: "address" },
          { name: "allowance", ty: "u64" },
        ],
      },
      {
        name: "offer_owner",
        ty_args: ["coin_type"],
        args: [{ name: "recipient", ty: "address" }],
      },
    ],
    structs: [
      {
        module_name: {
          address:
            "8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d",
          name: "MintWrapper",
        },
        name: "MintWrapper",
        fields: [
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
          { name: "hard_cap", ty: "u64" },
        ],
        type_params: ["CoinType"],
        abilities: ["key"],
      },
      {
        module_name: {
          address:
            "8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d",
          name: "MintWrapper",
        },
        name: "Minter",
        fields: [
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
          { name: "allowance", ty: "u64" },
        ],
        type_params: ["CoinType"],
        abilities: ["store", "key"],
      },
      {
        module_name: {
          address:
            "8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d",
          name: "MintWrapper",
        },
        name: "MinterOffers",
        fields: [
          {
            name: "offers",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "Table",
                },
                name: "Table",
              },
            },
          },
        ],
        type_params: ["CoinType"],
        abilities: ["key"],
      },
      {
        module_name: {
          address:
            "8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d",
          name: "MintWrapper",
        },
        name: "Owner",
        fields: [{ name: "base", ty: "address" }],
        type_params: ["CoinType"],
        abilities: ["store", "key"],
      },
    ],
    errors: { ENOT_OWNER: { code: 1, name: "ENOT_OWNER" } },
  },
  /** All module function IDLs. */
  functions: {
    accept_minter: {
      name: "accept_minter",
      ty_args: ["coin_type"],
      args: [{ name: "base", ty: "address" }],
    },
    accept_owner: {
      name: "accept_owner",
      ty_args: ["coin_type"],
      args: [{ name: "base", ty: "address" }],
    },
    create_with_coin: {
      name: "create_with_coin",
      ty_args: ["coin_type"],
      args: [
        { name: "name", ty: { vector: "u8" } },
        { name: "decimals", ty: "u64" },
        { name: "hard_cap", ty: "u64" },
      ],
    },
    mint: {
      name: "mint",
      ty_args: ["coin_type"],
      args: [
        { name: "recipient", ty: "address" },
        { name: "amount", ty: "u64" },
      ],
    },
    offer_minter: {
      name: "offer_minter",
      ty_args: ["coin_type"],
      args: [
        { name: "destination", ty: "address" },
        { name: "allowance", ty: "u64" },
      ],
    },
    offer_owner: {
      name: "offer_owner",
      ty_args: ["coin_type"],
      args: [{ name: "recipient", ty: "address" }],
    },
  },
  /** All struct types with ability `key`. */
  resources: {
    MintWrapper:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::MintWrapper",
    Minter:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::Minter",
    MinterOffers:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::MinterOffers",
    Owner:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::Owner",
  },
  /** All struct types. */
  structs: {
    MintWrapper:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::MintWrapper",
    Minter:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::Minter",
    MinterOffers:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::MinterOffers",
    Owner:
      "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d::MintWrapper::Owner",
  },

  ...builders,
} as const;

export const MintWrapperModule = moduleImpl as p.MoveModuleDefinition<
  "0x8209d19e48e4e999c3413fb20c6b5506a1eaee3daece5553efb9b5d6f32a940d",
  "MintWrapper"
> as typeof moduleImpl;
