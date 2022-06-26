import type * as p from "@movingco/prelude";

export type CharData = {
  byte: number;
};

export type StringData = {
  bytes: p.HexStringArg;
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::ASCII`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ASCII",
  /** The name of the module. */
  NAME: "ASCII",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "ASCII",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "ASCII",
        },
        name: "Char",
        fields: [{ name: "byte", ty: "u8" }],
        abilities: ["copy", "drop", "store"],
      },
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "ASCII",
        },
        name: "String",
        fields: [{ name: "bytes", ty: { vector: "u8" } }],
        abilities: ["copy", "drop", "store"],
      },
    ],
    errors: {
      EINVALID_ASCII_CHARACTER: { code: 0, name: "EINVALID_ASCII_CHARACTER" },
    },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: { Char: "0x1::ASCII::Char", String: "0x1::ASCII::String" },

  ...builders,
} as const;

export const ASCIIModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ASCII"
> as typeof moduleImpl;
