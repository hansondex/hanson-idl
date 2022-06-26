import type * as p from "@movingco/prelude";

export type OptionData = {
  vec: ReadonlyArray<unknown>;
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::Option`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Option",
  /** The name of the module. */
  NAME: "Option",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "Option",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "Option",
        },
        name: "Option",
        fields: [{ name: "vec", ty: { vector: { type_parameter: 0 } } }],
        type_params: ["Element"],
        abilities: ["copy", "drop", "store"],
      },
    ],
    errors: {
      EOPTION_IS_SET: { code: 0, name: "EOPTION_IS_SET" },
      EOPTION_NOT_SET: { code: 1, name: "EOPTION_NOT_SET" },
    },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: { Option: "0x1::Option::Option" },

  ...builders,
} as const;

export const OptionModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Option"
> as typeof moduleImpl;
