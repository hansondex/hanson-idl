import type * as p from "@movingco/prelude";

export type GUIDData = {
  id: {
    creation_num: p.U64;
    addr: p.HexStringArg;
  };
};

export type CreateCapabilityData = {
  addr: p.HexStringArg;
};

export type GeneratorData = {
  counter: p.U64;
};

export type IDData = {
  creation_num: p.U64;
  addr: p.HexStringArg;
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::GUID`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::GUID",
  /** The name of the module. */
  NAME: "GUID",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "GUID",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "GUID",
        },
        name: "GUID",
        fields: [
          {
            name: "id",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "GUID",
                },
                name: "ID",
              },
            },
          },
        ],
        abilities: ["drop", "store"],
      },
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "GUID",
        },
        name: "CreateCapability",
        fields: [{ name: "addr", ty: "address" }],
        abilities: ["drop", "store", "key"],
      },
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "GUID",
        },
        name: "Generator",
        fields: [{ name: "counter", ty: "u64" }],
        abilities: ["key"],
      },
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "GUID",
        },
        name: "ID",
        fields: [
          { name: "creation_num", ty: "u64" },
          { name: "addr", ty: "address" },
        ],
        abilities: ["copy", "drop", "store"],
      },
    ],
    errors: {
      EGUID_GENERATOR_NOT_PUBLISHED: {
        code: 0,
        name: "EGUID_GENERATOR_NOT_PUBLISHED",
      },
    },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {
    CreateCapability: "0x1::GUID::CreateCapability",
    Generator: "0x1::GUID::Generator",
  },
  /** All struct types. */
  structs: {
    CreateCapability: "0x1::GUID::CreateCapability",
    GUID: "0x1::GUID::GUID",
    Generator: "0x1::GUID::Generator",
    ID: "0x1::GUID::ID",
  },

  ...builders,
} as const;

export const GUIDModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "GUID"
> as typeof moduleImpl;
