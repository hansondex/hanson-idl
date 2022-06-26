import type * as p from "@movingco/prelude";

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162::Meta`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
  /** The full module name. */
  FULL_NAME:
    "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162::Meta",
  /** The name of the module. */
  NAME: "Meta",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "fcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
      name: "Meta",
    },
    functions: [],
    structs: [],
    errors: {},
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: {},

  ...builders,
} as const;

export const MetaModule = moduleImpl as p.MoveModuleDefinition<
  "0xfcf44ae2a6938ebed4d2cb7882ae9e1c4110d02afcf80a3995bd887cee734162",
  "Meta"
> as typeof moduleImpl;
