import type * as p from "@movingco/prelude";

export type TableData = {
  handle: p.U128;
  length: p.U64;
};

export type BoxData = {
  val: unknown;
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::Table`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Table",
  /** The name of the module. */
  NAME: "Table",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "Table",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "Table",
        },
        name: "Table",
        fields: [
          { name: "handle", ty: "u128" },
          { name: "length", ty: "u64" },
        ],
        type_params: ["K", "V"],
        abilities: ["store"],
      },
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "Table",
        },
        name: "Box",
        fields: [{ name: "val", ty: { type_parameter: 0 } }],
        type_params: ["V"],
        abilities: ["drop", "store", "key"],
      },
    ],
    errors: {
      EALREADY_EXISTS: { code: 100, name: "EALREADY_EXISTS" },
      ENOT_EMPTY: { code: 102, name: "ENOT_EMPTY" },
      ENOT_FOUND: { code: 101, name: "ENOT_FOUND" },
    },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: { Box: "0x1::Table::Box" },
  /** All struct types. */
  structs: { Box: "0x1::Table::Box", Table: "0x1::Table::Table" },

  ...builders,
} as const;

export const TableModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Table"
> as typeof moduleImpl;
