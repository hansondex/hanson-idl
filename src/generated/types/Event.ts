import type * as p from "@movingco/prelude";

export type EventHandleData = {
  counter: p.U64;
  guid: {
    len_bytes: number;
    guid: {
      id: {
        creation_num: p.U64;
        addr: p.HexStringArg;
      };
    };
  };
};

export type EventHandleGeneratorData = {
  counter: p.U64;
  addr: p.HexStringArg;
};

export type GUIDWrapperData = {
  len_bytes: number;
  guid: {
    id: {
      creation_num: p.U64;
      addr: p.HexStringArg;
    };
  };
};

/** Function builders. */
const builders = {} as const;

/** Payload generators for module `0x1::Event`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Event",
  /** The name of the module. */
  NAME: "Event",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "0000000000000000000000000000000000000000000000000000000000000001",
      name: "Event",
    },
    functions: [],
    structs: [
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "Event",
        },
        name: "EventHandle",
        fields: [
          { name: "counter", ty: "u64" },
          {
            name: "guid",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "Event",
                },
                name: "GUIDWrapper",
              },
            },
          },
        ],
        type_params: ["T"],
        abilities: ["store"],
      },
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "Event",
        },
        name: "EventHandleGenerator",
        fields: [
          { name: "counter", ty: "u64" },
          { name: "addr", ty: "address" },
        ],
        abilities: ["key"],
      },
      {
        module_name: {
          address:
            "0000000000000000000000000000000000000000000000000000000000000001",
          name: "Event",
        },
        name: "GUIDWrapper",
        fields: [
          { name: "len_bytes", ty: "u8" },
          {
            name: "guid",
            ty: {
              struct: {
                module_name: {
                  address:
                    "0000000000000000000000000000000000000000000000000000000000000001",
                  name: "GUID",
                },
                name: "GUID",
              },
            },
          },
        ],
        abilities: ["drop", "store"],
      },
    ],
    errors: {},
  },
  /** All module function IDLs. */
  functions: {},
  /** All struct types with ability `key`. */
  resources: { EventHandleGenerator: "0x1::Event::EventHandleGenerator" },
  /** All struct types. */
  structs: {
    EventHandle: "0x1::Event::EventHandle",
    EventHandleGenerator: "0x1::Event::EventHandleGenerator",
    GUIDWrapper: "0x1::Event::GUIDWrapper",
  },

  ...builders,
} as const;

export const EventModule = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Event"
> as typeof moduleImpl;
