import type * as p from "@movingco/prelude";

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::Vector`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Vector",
  /** The name of the module. */
  NAME: "Vector",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "Vector",
    },
    functions: [],
    structs: [],
    errors: { EINDEX_OUT_OF_BOUNDS: { code: 0, name: "EINDEX_OUT_OF_BOUNDS" } },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: {},

  ...builders,
} as const;

export const VectorModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Vector"
> as typeof moduleImpl;
