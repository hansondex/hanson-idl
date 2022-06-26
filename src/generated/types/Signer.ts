import type * as p from "@movingco/prelude";

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::Signer`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Signer",
  /** The name of the module. */
  NAME: "Signer",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "Signer",
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

export const SignerModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Signer"
> as typeof moduleImpl;
