import type * as p from "@movingco/prelude";

export type LPData = {
  dummy_field: boolean;
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0xb8e1527a15b01acbdc2aaf7509b3723715af6bb84c8b5ffa0259d0e0d8407ab1::LP`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0xb8e1527a15b01acbdc2aaf7509b3723715af6bb84c8b5ffa0259d0e0d8407ab1",
  /** The full module name. */
  FULL_NAME:
    "0xb8e1527a15b01acbdc2aaf7509b3723715af6bb84c8b5ffa0259d0e0d8407ab1::LP",
  /** The name of the module. */
  NAME: "LP",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "b8e1527a15b01acbdc2aaf7509b3723715af6bb84c8b5ffa0259d0e0d8407ab1",
      name: "LP",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "b8e1527a15b01acbdc2aaf7509b3723715af6bb84c8b5ffa0259d0e0d8407ab1",
          name: "LP",
        },
        name: "LP",
        fields: [{ name: "dummy_field", ty: "bool" }],
        type_params: ["Coin0", "Coin1"],
        abilities: ["store"],
      },
    ],
    errors: { ENOT_LP_STORE: { code: 1, name: "ENOT_LP_STORE" } },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: {
    LP: "0xb8e1527a15b01acbdc2aaf7509b3723715af6bb84c8b5ffa0259d0e0d8407ab1::LP::LP",
  },

  ...builders,
} as const;

export const LPModule = moduleImpl as p.MoveModuleDefinition<
  "0xb8e1527a15b01acbdc2aaf7509b3723715af6bb84c8b5ffa0259d0e0d8407ab1",
  "LP"
> as typeof moduleImpl;
