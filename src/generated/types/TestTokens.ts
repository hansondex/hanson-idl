import type * as p from "@movingco/prelude";

export type AVAXData = {
  dummy_field: boolean;
};

export type AVERYData = {
  dummy_field: boolean;
};

export type BAMBAData = {
  dummy_field: boolean;
};

export type BAUMData = {
  dummy_field: boolean;
};

export type CHINGData = {
  dummy_field: boolean;
};

export type DATData = {
  dummy_field: boolean;
};

export type ETHData = {
  dummy_field: boolean;
};

export type FARData = {
  dummy_field: boolean;
};

export type JAINData = {
  dummy_field: boolean;
};

export type KNVData = {
  dummy_field: boolean;
};

export type KSAMData = {
  dummy_field: boolean;
};

export type MOData = {
  dummy_field: boolean;
};

export type NEARData = {
  dummy_field: boolean;
};

export type SBFData = {
  dummy_field: boolean;
};

export type SBRData = {
  dummy_field: boolean;
};

export type SHAKEData = {
  dummy_field: boolean;
};

export type SHAMData = {
  dummy_field: boolean;
};

export type SOLData = {
  dummy_field: boolean;
};

export type TINGData = {
  dummy_field: boolean;
};

export type USDCData = {
  dummy_field: boolean;
};

export type USDTData = {
  dummy_field: boolean;
};

export type WSUIData = {
  dummy_field: boolean;
};

/**
 * Payload arguments for {@link TestTokensModule.init_avax}.
 */
export type InitAvaxPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_avery}.
 */
export type InitAveryPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_bamba}.
 */
export type InitBambaPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_baum}.
 */
export type InitBaumPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_ching}.
 */
export type InitChingPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_dat}.
 */
export type InitDatPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_eth}.
 */
export type InitEthPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_far}.
 */
export type InitFarPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_jain}.
 */
export type InitJainPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_knv}.
 */
export type InitKnvPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_ksam}.
 */
export type InitKsamPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_mo}.
 */
export type InitMoPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_near}.
 */
export type InitNearPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_sbf}.
 */
export type InitSbfPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_sbr}.
 */
export type InitSbrPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_shake}.
 */
export type InitShakePayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_sham}.
 */
export type InitShamPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_sol}.
 */
export type InitSolPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_ting}.
 */
export type InitTingPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_usdc}.
 */
export type InitUsdcPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_usdt}.
 */
export type InitUsdtPayload = {};

/**
 * Payload arguments for {@link TestTokensModule.init_wsui}.
 */
export type InitWsuiPayload = {};

/** Function builders. */
const builders = {
  /** Initializes the AVAX token. */
  init_avax: ({}: InitAvaxPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_avax",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the AVERY token. */
  init_avery: ({}: InitAveryPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_avery",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the BAMBA token. */
  init_bamba: ({}: InitBambaPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_bamba",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the BAUM token. */
  init_baum: ({}: InitBaumPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_baum",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the CHING token. */
  init_ching: ({}: InitChingPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_ching",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the DAT token. */
  init_dat: ({}: InitDatPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_dat",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the ETH token. */
  init_eth: ({}: InitEthPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_eth",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the FAR token. */
  init_far: ({}: InitFarPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_far",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the JAIN token. */
  init_jain: ({}: InitJainPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_jain",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the KNV token. */
  init_knv: ({}: InitKnvPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_knv",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the KSAM token. */
  init_ksam: ({}: InitKsamPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_ksam",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the MO token. */
  init_mo: ({}: InitMoPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_mo",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the NEAR token. */
  init_near: ({}: InitNearPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_near",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SBF token. */
  init_sbf: ({}: InitSbfPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_sbf",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SBR token. */
  init_sbr: ({}: InitSbrPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_sbr",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SHAKE token. */
  init_shake: ({}: InitShakePayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_shake",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SHAM token. */
  init_sham: ({}: InitShamPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_sham",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the SOL token. */
  init_sol: ({}: InitSolPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_sol",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the TING token. */
  init_ting: ({}: InitTingPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_ting",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the USDC token. */
  init_usdc: ({}: InitUsdcPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_usdc",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the USDT token. */
  init_usdt: ({}: InitUsdtPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_usdt",
    type_arguments: [],
    arguments: [],
  }),

  /** Initializes the WSUI token. */
  init_wsui: ({}: InitWsuiPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::init_wsui",
    type_arguments: [],
    arguments: [],
  }),
} as const;

/** Payload generators for module `0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens`. */
const moduleImpl = {
  /** The address of the module. */
  ADDRESS: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
  /** The full module name. */
  FULL_NAME:
    "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens",
  /** The name of the module. */
  NAME: "TestTokens",
  /** The IDL of the module. */
  IDL: {
    module_name: {
      address:
        "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
      name: "TestTokens",
    },
    functions: [
      {
        name: "init_avax",
        doc: "Initializes the AVAX token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_avery",
        doc: "Initializes the AVERY token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_bamba",
        doc: "Initializes the BAMBA token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_baum",
        doc: "Initializes the BAUM token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_ching",
        doc: "Initializes the CHING token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_dat",
        doc: "Initializes the DAT token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_eth",
        doc: "Initializes the ETH token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_far",
        doc: "Initializes the FAR token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_jain",
        doc: "Initializes the JAIN token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_knv",
        doc: "Initializes the KNV token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_ksam",
        doc: "Initializes the KSAM token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_mo",
        doc: "Initializes the MO token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_near",
        doc: "Initializes the NEAR token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_sbf",
        doc: "Initializes the SBF token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_sbr",
        doc: "Initializes the SBR token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_shake",
        doc: "Initializes the SHAKE token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_sham",
        doc: "Initializes the SHAM token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_sol",
        doc: "Initializes the SOL token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_ting",
        doc: "Initializes the TING token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_usdc",
        doc: "Initializes the USDC token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_usdt",
        doc: "Initializes the USDT token.",
        ty_args: [],
        args: [],
      },
      {
        name: "init_wsui",
        doc: "Initializes the WSUI token.",
        ty_args: [],
        args: [],
      },
    ],
    structs: [
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "AVAX",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "AVERY",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "BAMBA",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "BAUM",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "CHING",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "DAT",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "ETH",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "FAR",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "JAIN",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "KNV",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "KSAM",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "MO",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "NEAR",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "SBF",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "SBR",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "SHAKE",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "SHAM",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "SOL",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "TING",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "USDC",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "USDT",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
      {
        module_name: {
          address:
            "8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
          name: "TestTokens",
        },
        name: "WSUI",
        fields: [{ name: "dummy_field", ty: "bool" }],
        abilities: [],
      },
    ],
    errors: {},
  },
  /** All module function IDLs. */
  functions: {
    init_avax: {
      name: "init_avax",
      doc: "Initializes the AVAX token.",
      ty_args: [],
      args: [],
    },
    init_avery: {
      name: "init_avery",
      doc: "Initializes the AVERY token.",
      ty_args: [],
      args: [],
    },
    init_bamba: {
      name: "init_bamba",
      doc: "Initializes the BAMBA token.",
      ty_args: [],
      args: [],
    },
    init_baum: {
      name: "init_baum",
      doc: "Initializes the BAUM token.",
      ty_args: [],
      args: [],
    },
    init_ching: {
      name: "init_ching",
      doc: "Initializes the CHING token.",
      ty_args: [],
      args: [],
    },
    init_dat: {
      name: "init_dat",
      doc: "Initializes the DAT token.",
      ty_args: [],
      args: [],
    },
    init_eth: {
      name: "init_eth",
      doc: "Initializes the ETH token.",
      ty_args: [],
      args: [],
    },
    init_far: {
      name: "init_far",
      doc: "Initializes the FAR token.",
      ty_args: [],
      args: [],
    },
    init_jain: {
      name: "init_jain",
      doc: "Initializes the JAIN token.",
      ty_args: [],
      args: [],
    },
    init_knv: {
      name: "init_knv",
      doc: "Initializes the KNV token.",
      ty_args: [],
      args: [],
    },
    init_ksam: {
      name: "init_ksam",
      doc: "Initializes the KSAM token.",
      ty_args: [],
      args: [],
    },
    init_mo: {
      name: "init_mo",
      doc: "Initializes the MO token.",
      ty_args: [],
      args: [],
    },
    init_near: {
      name: "init_near",
      doc: "Initializes the NEAR token.",
      ty_args: [],
      args: [],
    },
    init_sbf: {
      name: "init_sbf",
      doc: "Initializes the SBF token.",
      ty_args: [],
      args: [],
    },
    init_sbr: {
      name: "init_sbr",
      doc: "Initializes the SBR token.",
      ty_args: [],
      args: [],
    },
    init_shake: {
      name: "init_shake",
      doc: "Initializes the SHAKE token.",
      ty_args: [],
      args: [],
    },
    init_sham: {
      name: "init_sham",
      doc: "Initializes the SHAM token.",
      ty_args: [],
      args: [],
    },
    init_sol: {
      name: "init_sol",
      doc: "Initializes the SOL token.",
      ty_args: [],
      args: [],
    },
    init_ting: {
      name: "init_ting",
      doc: "Initializes the TING token.",
      ty_args: [],
      args: [],
    },
    init_usdc: {
      name: "init_usdc",
      doc: "Initializes the USDC token.",
      ty_args: [],
      args: [],
    },
    init_usdt: {
      name: "init_usdt",
      doc: "Initializes the USDT token.",
      ty_args: [],
      args: [],
    },
    init_wsui: {
      name: "init_wsui",
      doc: "Initializes the WSUI token.",
      ty_args: [],
      args: [],
    },
  },
  /** All struct types with ability `key`. */
  resources: {},
  /** All struct types. */
  structs: {
    AVAX: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::AVAX",
    AVERY:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::AVERY",
    BAMBA:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::BAMBA",
    BAUM: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::BAUM",
    CHING:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::CHING",
    DAT: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::DAT",
    ETH: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::ETH",
    FAR: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::FAR",
    JAIN: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::JAIN",
    KNV: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::KNV",
    KSAM: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::KSAM",
    MO: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::MO",
    NEAR: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::NEAR",
    SBF: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::SBF",
    SBR: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::SBR",
    SHAKE:
      "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::SHAKE",
    SHAM: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::SHAM",
    SOL: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::SOL",
    TING: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::TING",
    USDC: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::USDC",
    USDT: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::USDT",
    WSUI: "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b::TestTokens::WSUI",
  },

  ...builders,
} as const;

export const TestTokensModule = moduleImpl as p.MoveModuleDefinition<
  "0x8272ce1ad59a94a73842b11583e963dbc535fec53db3942a3ea71df32d72077b",
  "TestTokens"
> as typeof moduleImpl;
