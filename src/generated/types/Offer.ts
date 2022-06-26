import type * as p from "@movingco/prelude";

export type OfferData = {
  offered: unknown;
  for: p.HexStringArg;
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::Offer`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Offer",
  /** The name of the module. */
  NAME: "Offer",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "Offer",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "Offer",
        },
        name: "Offer",
        fields: [
          { name: "offered", ty: { type_parameter: 0 } },
          { name: "for", ty: "address" },
        ],
        type_params: ["Offered"],
        abilities: ["key"],
      },
    ],
    errors: {
      EOFFER_ALREADY_CREATED: { code: 1, name: "EOFFER_ALREADY_CREATED" },
      EOFFER_DNE_FOR_ACCOUNT: { code: 0, name: "EOFFER_DNE_FOR_ACCOUNT" },
      EOFFER_DOES_NOT_EXIST: { code: 2, name: "EOFFER_DOES_NOT_EXIST" },
    },
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: { Offer: "0x1::Offer::Offer" },
  /** All struct types. */
  structs: { Offer: "0x1::Offer::Offer" },

  ...builders,
} as const;

export const OfferModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Offer"
> as typeof moduleImpl;
