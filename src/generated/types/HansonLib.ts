import type * as p from "@movingco/prelude";

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::HansonLib`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b",
  /** The full module name. */
  FULL_NAME:
    "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b::HansonLib",
  /** The name of the module. */
  NAME: "HansonLib",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b",
      name: "HansonLib",
    },
    functions: [],
    structs: [],
    errors: {
      EINSUFFICIENT_INPUT_AMOUNT: {
        code: 1,
        name: "EINSUFFICIENT_INPUT_AMOUNT",
        description: "Insufficient input amount.",
      },
      EINSUFFICIENT_LIQUIDITY: {
        code: 3,
        name: "EINSUFFICIENT_LIQUIDITY",
        description: "Not enough liquidity in the LP pool.",
      },
      EINSUFFICIENT_OUTPUT_AMOUNT: {
        code: 2,
        name: "EINSUFFICIENT_OUTPUT_AMOUNT",
        description: "Insufficient output amount.",
      },
    },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: {},

  ...builders,
} as const;

export const HansonLibModule = moduleImpl as p.MoveModuleDefinition<
  "0x9efd8b54dfc3c9e3adc607891dc3a113ad77462d44876a16d45319e1f45ac49b",
  "HansonLib"
> as typeof moduleImpl;
