import * as p from "@movingco/prelude";

/**
 * Payload arguments for {@link RouterModule.create}.
 */
export type CreatePayload = {
  typeArgs: {
    coin0: string;
    coin1: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.add_liquidity}.
 */
export type AddLiquidityPayload = {
  args: {
    /** IDL type: `U64` */
    amount_a_desired: p.U64;
    /** IDL type: `U64` */
    amount_b_desired: p.U64;
    /** IDL type: `U64` */
    amount_a_min: p.U64;
    /** IDL type: `U64` */
    amount_b_min: p.U64;
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
  };
  typeArgs: {
    coin_a: string;
    coin_b: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.add_liquidity_ordered}.
 */
export type AddLiquidityOrderedPayload = {
  args: {
    /** IDL type: `U64` */
    amount0_desired: p.U64;
    /** IDL type: `U64` */
    amount1_desired: p.U64;
    /** IDL type: `U64` */
    amount0_min: p.U64;
    /** IDL type: `U64` */
    amount1_min: p.U64;
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
  };
  typeArgs: {
    coin0: string;
    coin1: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.add_liquidity_with_store}.
 */
export type AddLiquidityWithStorePayload = {
  args: {
    /** IDL type: `U64` */
    amount_a_desired: p.U64;
    /** IDL type: `U64` */
    amount_b_desired: p.U64;
    /** IDL type: `U64` */
    amount_a_min: p.U64;
    /** IDL type: `U64` */
    amount_b_min: p.U64;
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
  };
  typeArgs: {
    coin_a: string;
    coin_b: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.remove_liquidity}.
 */
export type RemoveLiquidityPayload = {
  args: {
    /** IDL type: `U64` */
    lp_amount: p.U64;
    /** IDL type: `U64` */
    amount0_min: p.U64;
    /** IDL type: `U64` */
    amount1_min: p.U64;
    /** IDL type: `Address` */
    recipient_addr: p.HexStringArg;
  };
  typeArgs: {
    coin0: string;
    coin1: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.swap_exact_tokens_for_tokens}.
 */
export type SwapExactTokensForTokensPayload = {
  args: {
    /** IDL type: `U64` */
    amount_in: p.U64;
    /** IDL type: `U64` */
    minimum_amount_out: p.U64;
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
  };
  typeArgs: {
    coin_in: string;
    coin_out: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.swap_raw}.
 */
export type SwapRawPayload = {
  args: {
    /** IDL type: `U64` */
    amount_in_a: p.U64;
    /** IDL type: `U64` */
    amount_in_b: p.U64;
    /** IDL type: `U64` */
    amount_out_a: p.U64;
    /** IDL type: `U64` */
    amount_out_b: p.U64;
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
  };
  typeArgs: {
    coin0: string;
    coin1: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.swap_raw_unordered}.
 */
export type SwapRawUnorderedPayload = {
  args: {
    /** IDL type: `U64` */
    amount_in: p.U64;
    /** IDL type: `U64` */
    amount_out: p.U64;
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
  };
  typeArgs: {
    coin_in: string;
    coin_out: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.swap_raw_with_order}.
 */
export type SwapRawWithOrderPayload = {
  args: {
    /** IDL type: `U64` */
    amount_in: p.U64;
    /** IDL type: `U64` */
    amount_out: p.U64;
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
    /** IDL type: `Bool` */
    forward: boolean;
  };
  typeArgs: {
    coin_in: string;
    coin_out: string;
  };
};

/**
 * Payload arguments for {@link RouterModule.swap_tokens_for_exact_tokens}.
 */
export type SwapTokensForExactTokensPayload = {
  args: {
    /** IDL type: `U64` */
    max_amount_in: p.U64;
    /** IDL type: `U64` */
    amount_out: p.U64;
    /** IDL type: `Address` */
    recipient: p.HexStringArg;
  };
  typeArgs: {
    coin_in: string;
    coin_out: string;
  };
};

/** Function builders. */
const builders = {
  /** Creates a new pair. */
  create: ({ typeArgs }: CreatePayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::create",
    type_arguments: [typeArgs.coin0, typeArgs.coin1],
    arguments: [],
  }),

  /** Adds liquidity into the Pair. */
  add_liquidity: ({
    args,
    typeArgs,
  }: AddLiquidityPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::add_liquidity",
    type_arguments: [typeArgs.coin_a, typeArgs.coin_b],
    arguments: [
      p.serializers.u64(args.amount_a_desired),
      p.serializers.u64(args.amount_b_desired),
      p.serializers.u64(args.amount_a_min),
      p.serializers.u64(args.amount_b_min),
      p.serializers.hexString(args.recipient),
    ],
  }),

  /** Adds liquidity into the Pair. */
  add_liquidity_ordered: ({
    args,
    typeArgs,
  }: AddLiquidityOrderedPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::add_liquidity_ordered",
    type_arguments: [typeArgs.coin0, typeArgs.coin1],
    arguments: [
      p.serializers.u64(args.amount0_desired),
      p.serializers.u64(args.amount1_desired),
      p.serializers.u64(args.amount0_min),
      p.serializers.u64(args.amount1_min),
      p.serializers.hexString(args.recipient),
    ],
  }),

  /**
   * Creates a new pair and adds initial liquidity.
   *  This is a separate function from `add_liquidity` since it requires
   *  the `lp_store` key to be present.
   */
  add_liquidity_with_store: ({
    args,
    typeArgs,
  }: AddLiquidityWithStorePayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::add_liquidity_with_store",
    type_arguments: [typeArgs.coin_a, typeArgs.coin_b],
    arguments: [
      p.serializers.u64(args.amount_a_desired),
      p.serializers.u64(args.amount_b_desired),
      p.serializers.u64(args.amount_a_min),
      p.serializers.u64(args.amount_b_min),
      p.serializers.hexString(args.recipient),
    ],
  }),

  /** Removes liquidity from a Pair. */
  remove_liquidity: ({
    args,
    typeArgs,
  }: RemoveLiquidityPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::remove_liquidity",
    type_arguments: [typeArgs.coin0, typeArgs.coin1],
    arguments: [
      p.serializers.u64(args.lp_amount),
      p.serializers.u64(args.amount0_min),
      p.serializers.u64(args.amount1_min),
      p.serializers.hexString(args.recipient_addr),
    ],
  }),

  /** Swaps an exact amount of `CoinIn` for `CoinOut`. */
  swap_exact_tokens_for_tokens: ({
    args,
    typeArgs,
  }: SwapExactTokensForTokensPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::swap_exact_tokens_for_tokens",
    type_arguments: [typeArgs.coin_in, typeArgs.coin_out],
    arguments: [
      p.serializers.u64(args.amount_in),
      p.serializers.u64(args.minimum_amount_out),
      p.serializers.hexString(args.recipient),
    ],
  }),

  /** Performs a swap with the amounts and ordering already computed. */
  swap_raw: ({ args, typeArgs }: SwapRawPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::swap_raw",
    type_arguments: [typeArgs.coin0, typeArgs.coin1],
    arguments: [
      p.serializers.u64(args.amount_in_a),
      p.serializers.u64(args.amount_in_b),
      p.serializers.u64(args.amount_out_a),
      p.serializers.u64(args.amount_out_b),
      p.serializers.hexString(args.recipient),
    ],
  }),

  /** Performs a swap with the amounts already computed. */
  swap_raw_unordered: ({
    args,
    typeArgs,
  }: SwapRawUnorderedPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::swap_raw_unordered",
    type_arguments: [typeArgs.coin_in, typeArgs.coin_out],
    arguments: [
      p.serializers.u64(args.amount_in),
      p.serializers.u64(args.amount_out),
      p.serializers.hexString(args.recipient),
    ],
  }),

  /** Performs a swap with the amounts already computed. */
  swap_raw_with_order: ({
    args,
    typeArgs,
  }: SwapRawWithOrderPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::swap_raw_with_order",
    type_arguments: [typeArgs.coin_in, typeArgs.coin_out],
    arguments: [
      p.serializers.u64(args.amount_in),
      p.serializers.u64(args.amount_out),
      p.serializers.hexString(args.recipient),
      args.forward,
    ],
  }),

  /** Swaps `Coin0` for an exact amount of `Coin1`. */
  swap_tokens_for_exact_tokens: ({
    args,
    typeArgs,
  }: SwapTokensForExactTokensPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router::swap_tokens_for_exact_tokens",
    type_arguments: [typeArgs.coin_in, typeArgs.coin_out],
    arguments: [
      p.serializers.u64(args.max_amount_in),
      p.serializers.u64(args.amount_out),
      p.serializers.hexString(args.recipient),
    ],
  }),
} as const;

/** Payload generators for module `0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b",
  /** The full module name. */
  FULL_NAME:
    "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::Router",
  /** The name of the module. */
  NAME: "Router",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b",
      name: "Router",
    },
    functions: [
      {
        name: "create",
        doc: "Creates a new pair.",
        ty_args: ["coin0", "coin1"],
        args: [],
      },
      {
        name: "add_liquidity",
        doc: "Adds liquidity into the Pair.",
        ty_args: ["coin_a", "coin_b"],
        args: [
          { name: "amount_a_desired", ty: "u64" },
          { name: "amount_b_desired", ty: "u64" },
          { name: "amount_a_min", ty: "u64" },
          { name: "amount_b_min", ty: "u64" },
          { name: "recipient", ty: "address" },
        ],
      },
      {
        name: "add_liquidity_ordered",
        doc: "Adds liquidity into the Pair.",
        ty_args: ["coin0", "coin1"],
        args: [
          { name: "amount0_desired", ty: "u64" },
          { name: "amount1_desired", ty: "u64" },
          { name: "amount0_min", ty: "u64" },
          { name: "amount1_min", ty: "u64" },
          { name: "recipient", ty: "address" },
        ],
      },
      {
        name: "add_liquidity_with_store",
        doc: "Creates a new pair and adds initial liquidity.\n This is a separate function from `add_liquidity` since it requires\n the `lp_store` key to be present.",
        ty_args: ["coin_a", "coin_b"],
        args: [
          { name: "amount_a_desired", ty: "u64" },
          { name: "amount_b_desired", ty: "u64" },
          { name: "amount_a_min", ty: "u64" },
          { name: "amount_b_min", ty: "u64" },
          { name: "recipient", ty: "address" },
        ],
      },
      {
        name: "remove_liquidity",
        doc: "Removes liquidity from a Pair.",
        ty_args: ["coin0", "coin1"],
        args: [
          { name: "lp_amount", ty: "u64" },
          { name: "amount0_min", ty: "u64" },
          { name: "amount1_min", ty: "u64" },
          { name: "recipient_addr", ty: "address" },
        ],
      },
      {
        name: "swap_exact_tokens_for_tokens",
        doc: "Swaps an exact amount of `CoinIn` for `CoinOut`.",
        ty_args: ["coin_in", "coin_out"],
        args: [
          { name: "amount_in", ty: "u64" },
          { name: "minimum_amount_out", ty: "u64" },
          { name: "recipient", ty: "address" },
        ],
      },
      {
        name: "swap_raw",
        doc: "Performs a swap with the amounts and ordering already computed.",
        ty_args: ["coin0", "coin1"],
        args: [
          { name: "amount_in_a", ty: "u64" },
          { name: "amount_in_b", ty: "u64" },
          { name: "amount_out_a", ty: "u64" },
          { name: "amount_out_b", ty: "u64" },
          { name: "recipient", ty: "address" },
        ],
      },
      {
        name: "swap_raw_unordered",
        doc: "Performs a swap with the amounts already computed.",
        ty_args: ["coin_in", "coin_out"],
        args: [
          { name: "amount_in", ty: "u64" },
          { name: "amount_out", ty: "u64" },
          { name: "recipient", ty: "address" },
        ],
      },
      {
        name: "swap_raw_with_order",
        doc: "Performs a swap with the amounts already computed.",
        ty_args: ["coin_in", "coin_out"],
        args: [
          { name: "amount_in", ty: "u64" },
          { name: "amount_out", ty: "u64" },
          { name: "recipient", ty: "address" },
          { name: "forward", ty: "bool" },
        ],
      },
      {
        name: "swap_tokens_for_exact_tokens",
        doc: "Swaps `Coin0` for an exact amount of `Coin1`.",
        ty_args: ["coin_in", "coin_out"],
        args: [
          { name: "max_amount_in", ty: "u64" },
          { name: "amount_out", ty: "u64" },
          { name: "recipient", ty: "address" },
        ],
      },
    ],
    structs: [],
    errors: {
      EINSUFFICIENT_A_AMOUNT: {
        code: 2,
        name: "EINSUFFICIENT_A_AMOUNT",
        description: "Insufficient balance of token A.",
      },
      EINSUFFICIENT_B_AMOUNT: {
        code: 3,
        name: "EINSUFFICIENT_B_AMOUNT",
        description: "Insufficient balance of token B.",
      },
      ESLIPPAGE: {
        code: 1,
        name: "ESLIPPAGE",
        description: "Exceeded desired maximum slippage.",
      },
    },
  },
  /** All module function IDLs. */
  functions: {
    add_liquidity: {
      name: "add_liquidity",
      doc: "Adds liquidity into the Pair.",
      ty_args: ["coin_a", "coin_b"],
      args: [
        { name: "amount_a_desired", ty: "u64" },
        { name: "amount_b_desired", ty: "u64" },
        { name: "amount_a_min", ty: "u64" },
        { name: "amount_b_min", ty: "u64" },
        { name: "recipient", ty: "address" },
      ],
    },
    add_liquidity_ordered: {
      name: "add_liquidity_ordered",
      doc: "Adds liquidity into the Pair.",
      ty_args: ["coin0", "coin1"],
      args: [
        { name: "amount0_desired", ty: "u64" },
        { name: "amount1_desired", ty: "u64" },
        { name: "amount0_min", ty: "u64" },
        { name: "amount1_min", ty: "u64" },
        { name: "recipient", ty: "address" },
      ],
    },
    add_liquidity_with_store: {
      name: "add_liquidity_with_store",
      doc: "Creates a new pair and adds initial liquidity.\n This is a separate function from `add_liquidity` since it requires\n the `lp_store` key to be present.",
      ty_args: ["coin_a", "coin_b"],
      args: [
        { name: "amount_a_desired", ty: "u64" },
        { name: "amount_b_desired", ty: "u64" },
        { name: "amount_a_min", ty: "u64" },
        { name: "amount_b_min", ty: "u64" },
        { name: "recipient", ty: "address" },
      ],
    },
    create: {
      name: "create",
      doc: "Creates a new pair.",
      ty_args: ["coin0", "coin1"],
      args: [],
    },
    remove_liquidity: {
      name: "remove_liquidity",
      doc: "Removes liquidity from a Pair.",
      ty_args: ["coin0", "coin1"],
      args: [
        { name: "lp_amount", ty: "u64" },
        { name: "amount0_min", ty: "u64" },
        { name: "amount1_min", ty: "u64" },
        { name: "recipient_addr", ty: "address" },
      ],
    },
    swap_exact_tokens_for_tokens: {
      name: "swap_exact_tokens_for_tokens",
      doc: "Swaps an exact amount of `CoinIn` for `CoinOut`.",
      ty_args: ["coin_in", "coin_out"],
      args: [
        { name: "amount_in", ty: "u64" },
        { name: "minimum_amount_out", ty: "u64" },
        { name: "recipient", ty: "address" },
      ],
    },
    swap_raw: {
      name: "swap_raw",
      doc: "Performs a swap with the amounts and ordering already computed.",
      ty_args: ["coin0", "coin1"],
      args: [
        { name: "amount_in_a", ty: "u64" },
        { name: "amount_in_b", ty: "u64" },
        { name: "amount_out_a", ty: "u64" },
        { name: "amount_out_b", ty: "u64" },
        { name: "recipient", ty: "address" },
      ],
    },
    swap_raw_unordered: {
      name: "swap_raw_unordered",
      doc: "Performs a swap with the amounts already computed.",
      ty_args: ["coin_in", "coin_out"],
      args: [
        { name: "amount_in", ty: "u64" },
        { name: "amount_out", ty: "u64" },
        { name: "recipient", ty: "address" },
      ],
    },
    swap_raw_with_order: {
      name: "swap_raw_with_order",
      doc: "Performs a swap with the amounts already computed.",
      ty_args: ["coin_in", "coin_out"],
      args: [
        { name: "amount_in", ty: "u64" },
        { name: "amount_out", ty: "u64" },
        { name: "recipient", ty: "address" },
        { name: "forward", ty: "bool" },
      ],
    },
    swap_tokens_for_exact_tokens: {
      name: "swap_tokens_for_exact_tokens",
      doc: "Swaps `Coin0` for an exact amount of `Coin1`.",
      ty_args: ["coin_in", "coin_out"],
      args: [
        { name: "max_amount_in", ty: "u64" },
        { name: "amount_out", ty: "u64" },
        { name: "recipient", ty: "address" },
      ],
    },
  },
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: {},

  ...builders,
} as const;

export const RouterModule = moduleImpl as p.MoveModuleDefinition<
  "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b",
  "Router"
> as typeof moduleImpl;
