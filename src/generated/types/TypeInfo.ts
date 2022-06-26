import type * as p from "@movingco/prelude";

export type TypeInfoData = {
  account_address: p.HexStringArg;
  module_name: p.HexStringArg;
  struct_name: p.HexStringArg;
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::TypeInfo`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::TypeInfo",
  /** The name of the module. */
  NAME: "TypeInfo",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "TypeInfo",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "TypeInfo",
        },
        name: "TypeInfo",
        fields: [
          { name: "account_address", ty: "address" },
          { name: "module_name", ty: { vector: "u8" } },
          { name: "struct_name", ty: { vector: "u8" } },
        ],
        abilities: ["copy", "drop", "store"],
      },
    ],
    errors: {},
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: { TypeInfo: "0x1::TypeInfo::TypeInfo" },

  ...builders,
} as const;

export const TypeInfoModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "TypeInfo"
> as typeof moduleImpl;
