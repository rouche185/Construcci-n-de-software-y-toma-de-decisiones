const paisesRegiones = [
    {
        countryName: "México",
        countryShortCode: "MX",
        regions: [
            { name: "Aguascalientes", shortCode: "AGU" },
            { name: "Baja California", shortCode: "BCN" },
            { name: "Baja California Sur", shortCode: "BCS" },
            { name: "Campeche", shortCode: "CAM" },
            { name: "Chiapas", shortCode: "CHP" },
            { name: "Chihuahua", shortCode: "CHH" },
            { name: "Ciudad de México", shortCode: "CMX" },
            { name: "Coahuila", shortCode: "COA" },
            { name: "Colima", shortCode: "COL" },
            { name: "Durango", shortCode: "DUR" },
            { name: "Estado de México", shortCode: "MEX" },
            { name: "Guanajuato", shortCode: "GUA" },
            { name: "Guerrero", shortCode: "GRO" },
            { name: "Hidalgo", shortCode: "HID" },
            { name: "Jalisco", shortCode: "JAL" },
            { name: "Michoacán", shortCode: "MIC" },
            { name: "Morelos", shortCode: "MOR" },
            { name: "Nayarit", shortCode: "NAY" },
            { name: "Nuevo León", shortCode: "NLE" },
            { name: "Oaxaca", shortCode: "OAX" },
            { name: "Puebla", shortCode: "PUE" },
            { name: "Querétaro", shortCode: "QUE" },
            { name: "Quintana Roo", shortCode: "ROO" },
            { name: "San Luis Potosí", shortCode: "SLP" },
            { name: "Sinaloa", shortCode: "SIN" },
            { name: "Sonora", shortCode: "SON" },
            { name: "Tabasco", shortCode: "TAB" },
            { name: "Tamaulipas", shortCode: "TAM" },
            { name: "Tlaxcala", shortCode: "TLA" },
            { name: "Veracruz", shortCode: "VER" },
            { name: "Yucatán", shortCode: "YUC" },
            { name: "Zacatecas", shortCode: "ZAC" }
        ]
    },
    {
        countryName: "Estados Unidos",
        countryShortCode: "US",
        regions: [
            { name: "Alabama", shortCode: "AL" }, { name: "Alaska", shortCode: "AK" },
            { name: "Arizona", shortCode: "AZ" }, { name: "Arkansas", shortCode: "AR" },
            { name: "California", shortCode: "CA" }, { name: "Colorado", shortCode: "CO" },
            { name: "Connecticut", shortCode: "CT" }, { name: "Delaware", shortCode: "DE" },
            { name: "Distrito de Columbia", shortCode: "DC" }, { name: "Florida", shortCode: "FL" },
            { name: "Georgia", shortCode: "GA" }, { name: "Hawái", shortCode: "HI" },
            { name: "Idaho", shortCode: "ID" }, { name: "Illinois", shortCode: "IL" },
            { name: "Indiana", shortCode: "IN" }, { name: "Iowa", shortCode: "IA" },
            { name: "Kansas", shortCode: "KS" }, { name: "Kentucky", shortCode: "KY" },
            { name: "Luisiana", shortCode: "LA" }, { name: "Maine", shortCode: "ME" },
            { name: "Maryland", shortCode: "MD" }, { name: "Massachusetts", shortCode: "MA" },
            { name: "Michigan", shortCode: "MI" }, { name: "Minnesota", shortCode: "MN" },
            { name: "Misisipi", shortCode: "MS" }, { name: "Misuri", shortCode: "MO" },
            { name: "Montana", shortCode: "MT" }, { name: "Nebraska", shortCode: "NE" },
            { name: "Nevada", shortCode: "NV" }, { name: "Nueva Hampshire", shortCode: "NH" },
            { name: "Nueva Jersey", shortCode: "NJ" }, { name: "Nuevo México", shortCode: "NM" },
            { name: "Nueva York", shortCode: "NY" }, { name: "Carolina del Norte", shortCode: "NC" },
            { name: "Dakota del Norte", shortCode: "ND" }, { name: "Ohio", shortCode: "OH" },
            { name: "Oklahoma", shortCode: "OK" }, { name: "Oregón", shortCode: "OR" },
            { name: "Pensilvania", shortCode: "PA" }, { name: "Rhode Island", shortCode: "RI" },
            { name: "Carolina del Sur", shortCode: "SC" }, { name: "Dakota del Sur", shortCode: "SD" },
            { name: "Tennessee", shortCode: "TN" }, { name: "Texas", shortCode: "TX" },
            { name: "Utah", shortCode: "UT" }, { name: "Vermont", shortCode: "VT" },
            { name: "Virginia", shortCode: "VA" }, { name: "Washington", shortCode: "WA" },
            { name: "Virginia Occidental", shortCode: "WV" }, { name: "Wisconsin", shortCode: "WI" },
            { name: "Wyoming", shortCode: "WY" }
        ]
    },
    {
        countryName: "Canadá",
        countryShortCode: "CA",
        regions: [
            { name: "Alberta", shortCode: "AB" }, { name: "Columbia Británica", shortCode: "BC" },
            { name: "Manitoba", shortCode: "MB" }, { name: "Nuevo Brunswick", shortCode: "NB" },
            { name: "Terranova y Labrador", shortCode: "NL" }, { name: "Territorios del Noroeste", shortCode: "NT" },
            { name: "Nueva Escocia", shortCode: "NS" }, { name: "Nunavut", shortCode: "NU" },
            { name: "Ontario", shortCode: "ON" }, { name: "Isla del Príncipe Eduardo", shortCode: "PE" },
            { name: "Quebec", shortCode: "QC" }, { name: "Saskatchewan", shortCode: "SK" },
            { name: "Yukón", shortCode: "YT" }
        ]
    },
    {
        countryName: "España",
        countryShortCode: "ES",
        regions: [
            { name: "Andalucía", shortCode: "AN" }, { name: "Aragón", shortCode: "AR" },
            { name: "Asturias", shortCode: "AS" }, { name: "Islas Baleares", shortCode: "IB" },
            { name: "Canarias", shortCode: "CN" }, { name: "Cantabria", shortCode: "CB" },
            { name: "Castilla-La Mancha", shortCode: "CM" }, { name: "Castilla y León", shortCode: "CL" },
            { name: "Cataluña", shortCode: "CT" }, { name: "Extremadura", shortCode: "EX" },
            { name: "Galicia", shortCode: "GA" }, { name: "La Rioja", shortCode: "RI" },
            { name: "Comunidad de Madrid", shortCode: "MD" }, { name: "Región de Murcia", shortCode: "MC" },
            { name: "Comunidad Foral de Navarra", shortCode: "NC" }, { name: "País Vasco", shortCode: "PV" },
            { name: "Comunidad Valenciana", shortCode: "VC" }
        ]
    },
    {
        countryName: "Argentina",
        countryShortCode: "AR",
        regions: [
            { name: "Buenos Aires", shortCode: "BA" }, { name: "Ciudad Autónoma de Buenos Aires", shortCode: "CABA" },
            { name: "Catamarca", shortCode: "CT" }, { name: "Chaco", shortCode: "CC" },
            { name: "Chubut", shortCode: "CH" }, { name: "Córdoba", shortCode: "CB" },
            { name: "Corrientes", shortCode: "CN" }, { name: "Entre Ríos", shortCode: "ER" },
            { name: "Formosa", shortCode: "FM" }, { name: "Jujuy", shortCode: "JY" },
            { name: "La Pampa", shortCode: "LP" }, { name: "La Rioja", shortCode: "LR" },
            { name: "Mendoza", shortCode: "MZ" }, { name: "Misiones", shortCode: "MN" },
            { name: "Neuquén", shortCode: "NQ" }, { name: "Río Negro", shortCode: "RN" },
            { name: "Salta", shortCode: "SA" }, { name: "San Juan", shortCode: "SJ" },
            { name: "San Luis", shortCode: "SL" }, { name: "Santa Cruz", shortCode: "SC" },
            { name: "Santa Fe", shortCode: "SF" }, { name: "Santiago del Estero", shortCode: "SE" },
            { name: "Tierra del Fuego", shortCode: "TF" }, { name: "Tucumán", shortCode: "TM" }
        ]
    },
    {
        countryName: "Colombia",
        countryShortCode: "CO",
        regions: [
            { name: "Amazonas", shortCode: "AMA" }, { name: "Antioquia", shortCode: "ANT" },
            { name: "Arauca", shortCode: "ARA" }, { name: "Atlántico", shortCode: "ATL" },
            { name: "Bogotá D.C.", shortCode: "DC" }, { name: "Bolívar", shortCode: "BOL" },
            { name: "Boyacá", shortCode: "BOY" }, { name: "Caldas", shortCode: "CAL" },
            { name: "Caquetá", shortCode: "CAQ" }, { name: "Casanare", shortCode: "CAS" },
            { name: "Cauca", shortCode: "CAU" }, { name: "Cesar", shortCode: "CES" },
            { name: "Chocó", shortCode: "CHO" }, { name: "Córdoba", shortCode: "COR" },
            { name: "Cundinamarca", shortCode: "CUN" }, { name: "Guainía", shortCode: "GUA" },
            { name: "Guaviare", shortCode: "GUV" }, { name: "Huila", shortCode: "HUI" },
            { name: "La Guajira", shortCode: "LAG" }, { name: "Magdalena", shortCode: "MAG" },
            { name: "Meta", shortCode: "MET" }, { name: "Nariño", shortCode: "NAR" },
            { name: "Norte de Santander", shortCode: "NSA" }, { name: "Putumayo", shortCode: "PUT" },
            { name: "Quindío", shortCode: "QUI" }, { name: "Risaralda", shortCode: "RIS" },
            { name: "San Andrés y Providencia", shortCode: "SAP" }, { name: "Santander", shortCode: "SAN" },
            { name: "Sucre", shortCode: "SUC" }, { name: "Tolima", shortCode: "TOL" },
            { name: "Valle del Cauca", shortCode: "VAC" }, { name: "Vaupés", shortCode: "VAU" },
            { name: "Vichada", shortCode: "VID" }
        ]
    },
    {
        countryName: "Chile",
        countryShortCode: "CL",
        regions: [
            { name: "Arica y Parinacota", shortCode: "AP" }, { name: "Tarapacá", shortCode: "TA" },
            { name: "Antofagasta", shortCode: "AN" }, { name: "Atacama", shortCode: "AT" },
            { name: "Coquimbo", shortCode: "CO" }, { name: "Valparaíso", shortCode: "VS" },
            { name: "Metropolitana de Santiago", shortCode: "RM" }, { name: "O'Higgins", shortCode: "LI" },
            { name: "Maule", shortCode: "ML" }, { name: "Ñuble", shortCode: "NB" },
            { name: "Biobío", shortCode: "BI" }, { name: "La Araucanía", shortCode: "AR" },
            { name: "Los Ríos", shortCode: "LR" }, { name: "Los Lagos", shortCode: "LL" },
            { name: "Aysén", shortCode: "AI" }, { name: "Magallanes", shortCode: "MA" }
        ]
    },
    {
        countryName: "Perú",
        countryShortCode: "PE",
        regions: [
            { name: "Amazonas", shortCode: "AMA" }, { name: "Áncash", shortCode: "ANC" },
            { name: "Apurímac", shortCode: "APU" }, { name: "Arequipa", shortCode: "ARE" },
            { name: "Ayacucho", shortCode: "AYA" }, { name: "Cajamarca", shortCode: "CAJ" },
            { name: "Callao", shortCode: "CAL" }, { name: "Cusco", shortCode: "CUS" },
            { name: "Huancavelica", shortCode: "HUV" }, { name: "Huánuco", shortCode: "HUC" },
            { name: "Ica", shortCode: "ICA" }, { name: "Junín", shortCode: "JUN" },
            { name: "La Libertad", shortCode: "LAL" }, { name: "Lambayeque", shortCode: "LAM" },
            { name: "Lima", shortCode: "LIM" }, { name: "Loreto", shortCode: "LOR" },
            { name: "Madre de Dios", shortCode: "MDD" }, { name: "Moquegua", shortCode: "MOQ" },
            { name: "Pasco", shortCode: "PAS" }, { name: "Piura", shortCode: "PIU" },
            { name: "Puno", shortCode: "PUN" }, { name: "San Martín", shortCode: "SAM" },
            { name: "Tacna", shortCode: "TAC" }, { name: "Tumbes", shortCode: "TUM" },
            { name: "Ucayali", shortCode: "UCA" }
        ]
    },
    {
        countryName: "Venezuela",
        countryShortCode: "VE",
        regions: [
            { name: "Amazonas", shortCode: "AMA" }, { name: "Anzoátegui", shortCode: "ANZ" },
            { name: "Apure", shortCode: "APU" }, { name: "Aragua", shortCode: "ARA" },
            { name: "Barinas", shortCode: "BAR" }, { name: "Bolívar", shortCode: "BOL" },
            { name: "Carabobo", shortCode: "CAR" }, { name: "Cojedes", shortCode: "COJ" },
            { name: "Delta Amacuro", shortCode: "DEL" }, { name: "Distrito Capital", shortCode: "DCA" },
            { name: "Falcón", shortCode: "FAL" }, { name: "Guárico", shortCode: "GUA" },
            { name: "Lara", shortCode: "LAR" }, { name: "Mérida", shortCode: "MER" },
            { name: "Miranda", shortCode: "MIR" }, { name: "Monagas", shortCode: "MON" },
            { name: "Nueva Esparta", shortCode: "NES" }, { name: "Portuguesa", shortCode: "POR" },
            { name: "Sucre", shortCode: "SUC" }, { name: "Táchira", shortCode: "TAC" },
            { name: "Trujillo", shortCode: "TRU" }, { name: "La Guaira", shortCode: "VAR" },
            { name: "Yaracuy", shortCode: "YAR" }, { name: "Zulia", shortCode: "ZUL" }
        ]
    },
    {
        countryName: "Guatemala",
        countryShortCode: "GT",
        regions: [
            { name: "Alta Verapaz", shortCode: "AVE" }, { name: "Baja Verapaz", shortCode: "BVE" },
            { name: "Chimaltenango", shortCode: "CHM" }, { name: "Chiquimula", shortCode: "CHQ" },
            { name: "El Progreso", shortCode: "EPR" }, { name: "Escuintla", shortCode: "ESC" },
            { name: "Guatemala", shortCode: "GUA" }, { name: "Huehuetenango", shortCode: "HUE" },
            { name: "Izabal", shortCode: "IZA" }, { name: "Jalapa", shortCode: "JAL" },
            { name: "Jutiapa", shortCode: "JUT" }, { name: "Petén", shortCode: "PET" },
            { name: "Quetzaltenango", shortCode: "QUE" }, { name: "Quiché", shortCode: "QUI" },
            { name: "Retalhuleu", shortCode: "RET" }, { name: "Sacatepéquez", shortCode: "SAC" },
            { name: "San Marcos", shortCode: "SNM" }, { name: "Santa Rosa", shortCode: "STR" },
            { name: "Sololá", shortCode: "SOL" }, { name: "Suchitepéquez", shortCode: "SUC" },
            { name: "Totonicapán", shortCode: "TOT" }, { name: "Zacapa", shortCode: "ZAC" }
        ]
    },
    {
        countryName: "Honduras",
        countryShortCode: "HN",
        regions: [
            { name: "Atlántida", shortCode: "ATL" }, { name: "Choluteca", shortCode: "CHO" },
            { name: "Colón", shortCode: "COL" }, { name: "Comayagua", shortCode: "COM" },
            { name: "Copán", shortCode: "COP" }, { name: "Cortés", shortCode: "COR" },
            { name: "El Paraíso", shortCode: "PAR" }, { name: "Francisco Morazán", shortCode: "FMO" },
            { name: "Gracias a Dios", shortCode: "GRA" }, { name: "Intibucá", shortCode: "INT" },
            { name: "Islas de la Bahía", shortCode: "BAY" }, { name: "La Paz", shortCode: "LPZ" },
            { name: "Lempira", shortCode: "LEM" }, { name: "Ocotepeque", shortCode: "OCO" },
            { name: "Olancho", shortCode: "OLA" }, { name: "Santa Bárbara", shortCode: "SBA" },
            { name: "Valle", shortCode: "VAL" }, { name: "Yoro", shortCode: "YOR" }
        ]
    },
    {
        countryName: "El Salvador",
        countryShortCode: "SV",
        regions: [
            { name: "Ahuachapán", shortCode: "AHU" }, { name: "Cabañas", shortCode: "CAB" },
            { name: "Chalatenango", shortCode: "CHA" }, { name: "Cuscatlán", shortCode: "CUS" },
            { name: "La Libertad", shortCode: "LIB" }, { name: "La Paz", shortCode: "PAZ" },
            { name: "La Unión", shortCode: "UNI" }, { name: "Morazán", shortCode: "MOR" },
            { name: "San Miguel", shortCode: "SMI" }, { name: "San Salvador", shortCode: "SSA" },
            { name: "San Vicente", shortCode: "SVI" }, { name: "Santa Ana", shortCode: "SAN" },
            { name: "Sonsonate", shortCode: "SON" }, { name: "Usulután", shortCode: "USU" }
        ]
    },
    {
        countryName: "Nicaragua",
        countryShortCode: "NI",
        regions: [
            { name: "Boaco", shortCode: "BOA" }, { name: "Carazo", shortCode: "CAR" },
            { name: "Chinandega", shortCode: "CHI" }, { name: "Chontales", shortCode: "CHO" },
            { name: "Estelí", shortCode: "EST" }, { name: "Granada", shortCode: "GRA" },
            { name: "Jinotega", shortCode: "JIN" }, { name: "León", shortCode: "LEO" },
            { name: "Madriz", shortCode: "MAD" }, { name: "Managua", shortCode: "MAN" },
            { name: "Masaya", shortCode: "MAS" }, { name: "Matagalpa", shortCode: "MAT" },
            { name: "Nueva Segovia", shortCode: "NSE" }, { name: "Río San Juan", shortCode: "RSJ" },
            { name: "Rivas", shortCode: "RIV" }, { name: "Costa Caribe Norte", shortCode: "RCN" },
            { name: "Costa Caribe Sur", shortCode: "RCS" }
        ]
    },
    {
        countryName: "Costa Rica",
        countryShortCode: "CR",
        regions: [
            { name: "San José", shortCode: "SJO" }, { name: "Alajuela", shortCode: "ALA" },
            { name: "Cartago", shortCode: "CAR" }, { name: "Heredia", shortCode: "HER" },
            { name: "Guanacaste", shortCode: "GUA" }, { name: "Puntarenas", shortCode: "PUN" },
            { name: "Limón", shortCode: "LIM" }
        ]
    },
    {
        countryName: "Panamá",
        countryShortCode: "PA",
        regions: [
            { name: "Bocas del Toro", shortCode: "BOC" }, { name: "Coclé", shortCode: "COC" },
            { name: "Colón", shortCode: "COL" }, { name: "Chiriquí", shortCode: "CHI" },
            { name: "Darién", shortCode: "DAR" }, { name: "Herrera", shortCode: "HER" },
            { name: "Los Santos", shortCode: "SAN" }, { name: "Panamá", shortCode: "PAN" },
            { name: "Panamá Oeste", shortCode: "POE" }, { name: "Veraguas", shortCode: "VER" }
        ]
    },
    {
        countryName: "Cuba",
        countryShortCode: "CU",
        regions: [
            { name: "Pinar del Río", shortCode: "PRI" }, { name: "Artemisa", shortCode: "ART" },
            { name: "La Habana", shortCode: "HAB" }, { name: "Mayabeque", shortCode: "MAY" },
            { name: "Matanzas", shortCode: "MAT" }, { name: "Cienfuegos", shortCode: "CIE" },
            { name: "Villa Clara", shortCode: "VCL" }, { name: "Sancti Spíritus", shortCode: "SSP" },
            { name: "Ciego de Ávila", shortCode: "CAV" }, { name: "Camagüey", shortCode: "CAM" },
            { name: "Las Tunas", shortCode: "TUN" }, { name: "Granma", shortCode: "GRA" },
            { name: "Holguín", shortCode: "HOL" }, { name: "Santiago de Cuba", shortCode: "SCU" },
            { name: "Guantánamo", shortCode: "GUA" }, { name: "Isla de la Juventud", shortCode: "IJU" }
        ]
    },
    {
        countryName: "República Dominicana",
        countryShortCode: "DO",
        regions: [
            { name: "Distrito Nacional", shortCode: "DN" }, { name: "Azua", shortCode: "AZ" },
            { name: "Santiago", shortCode: "ST" }, { name: "Puerto Plata", shortCode: "PP" },
            { name: "La Vega", shortCode: "LV" }, { name: "San Cristóbal", shortCode: "SC" },
            { name: "La Romana", shortCode: "LR" }, { name: "Duarte", shortCode: "DU" },
            { name: "Espaillat", shortCode: "ES" }, { name: "Santo Domingo", shortCode: "SD" }
        ]
    },
    {
        countryName: "Ecuador",
        countryShortCode: "EC",
        regions: [
            { name: "Azuay", shortCode: "AZU" }, { name: "Bolívar", shortCode: "BOL" },
            { name: "Cañar", shortCode: "CAN" }, { name: "Carchi", shortCode: "CAR" },
            { name: "Chimborazo", shortCode: "CHI" }, { name: "Cotopaxi", shortCode: "COT" },
            { name: "El Oro", shortCode: "ORO" }, { name: "Esmeraldas", shortCode: "ESM" },
            { name: "Galápagos", shortCode: "GAL" }, { name: "Guayas", shortCode: "GUA" },
            { name: "Imbabura", shortCode: "IMB" }, { name: "Loja", shortCode: "LOJ" },
            { name: "Los Ríos", shortCode: "LRI" }, { name: "Manabí", shortCode: "MAN" },
            { name: "Morona Santiago", shortCode: "MOR" }, { name: "Napo", shortCode: "NAP" },
            { name: "Orellana", shortCode: "ORE" }, { name: "Pastaza", shortCode: "PAS" },
            { name: "Pichincha", shortCode: "PIC" }, { name: "Santa Elena", shortCode: "SEL" },
            { name: "Santo Domingo de los Tsáchilas", shortCode: "SDO" }, { name: "Sucumbíos", shortCode: "SUC" },
            { name: "Tungurahua", shortCode: "TUN" }, { name: "Zamora Chinchipe", shortCode: "ZCH" }
        ]
    },
    {
        countryName: "Bolivia",
        countryShortCode: "BO",
        regions: [
            { name: "Beni", shortCode: "BEN" }, { name: "Chuquisaca", shortCode: "CHU" },
            { name: "Cochabamba", shortCode: "COC" }, { name: "La Paz", shortCode: "LPZ" },
            { name: "Oruro", shortCode: "ORU" }, { name: "Pando", shortCode: "PAN" },
            { name: "Potosí", shortCode: "POT" }, { name: "Santa Cruz", shortCode: "SCZ" },
            { name: "Tarija", shortCode: "TAR" }
        ]
    },
    {
        countryName: "Paraguay",
        countryShortCode: "PY",
        regions: [
            { name: "Asunción", shortCode: "ASU" }, { name: "Concepción", shortCode: "CON" },
            { name: "San Pedro", shortCode: "SPE" }, { name: "Cordillera", shortCode: "COR" },
            { name: "Guairá", shortCode: "GUA" }, { name: "Caaguazú", shortCode: "CAA" },
            { name: "Caazapá", shortCode: "CAZ" }, { name: "Itapúa", shortCode: "ITA" },
            { name: "Misiones", shortCode: "MIS" }, { name: "Paraguarí", shortCode: "PGR" },
            { name: "Alto Paraná", shortCode: "APA" }, { name: "Central", shortCode: "CEN" },
            { name: "Ñeembucú", shortCode: "NEE" }, { name: "Amambay", shortCode: "AMA" },
            { name: "Canindeyú", shortCode: "CAN" }, { name: "Presidente Hayes", shortCode: "PHA" },
            { name: "Boquerón", shortCode: "BOQ" }, { name: "Alto Paraguay", shortCode: "APY" }
        ]
    },
    {
        countryName: "Uruguay",
        countryShortCode: "UY",
        regions: [
            { name: "Artigas", shortCode: "ART" }, { name: "Canelones", shortCode: "CAN" },
            { name: "Cerro Largo", shortCode: "CLA" }, { name: "Colonia", shortCode: "COL" },
            { name: "Durazno", shortCode: "DUR" }, { name: "Flores", shortCode: "FLO" },
            { name: "Florida", shortCode: "FLR" }, { name: "Lavalleja", shortCode: "LAV" },
            { name: "Maldonado", shortCode: "MAL" }, { name: "Montevideo", shortCode: "MVD" },
            { name: "Paysandú", shortCode: "PAY" }, { name: "Río Negro", shortCode: "RNE" },
            { name: "Rivera", shortCode: "RIV" }, { name: "Rocha", shortCode: "ROC" },
            { name: "Salto", shortCode: "SAL" }, { name: "San José", shortCode: "SJO" },
            { name: "Soriano", shortCode: "SOR" }, { name: "Tacuarembó", shortCode: "TAC" },
            { name: "Treinta y Tres", shortCode: "TYT" }
        ]
    },
    {
        countryName: "Brasil",
        countryShortCode: "BR",
        regions: [
            { name: "Acre", shortCode: "AC" }, { name: "Alagoas", shortCode: "AL" },
            { name: "Amapá", shortCode: "AP" }, { name: "Amazonas", shortCode: "AM" },
            { name: "Bahía", shortCode: "BA" }, { name: "Ceará", shortCode: "CE" },
            { name: "Distrito Federal", shortCode: "DF" }, { name: "Espírito Santo", shortCode: "ES" },
            { name: "Goiás", shortCode: "GO" }, { name: "Maranhão", shortCode: "MA" },
            { name: "Mato Grosso", shortCode: "MT" }, { name: "Mato Grosso do Sul", shortCode: "MS" },
            { name: "Minas Gerais", shortCode: "MG" }, { name: "Pará", shortCode: "PA" },
            { name: "Paraíba", shortCode: "PB" }, { name: "Paraná", shortCode: "PR" },
            { name: "Pernambuco", shortCode: "PE" }, { name: "Piauí", shortCode: "PI" },
            { name: "Río de Janeiro", shortCode: "RJ" }, { name: "Río Grande do Norte", shortCode: "RN" },
            { name: "Río Grande do Sul", shortCode: "RS" }, { name: "Rondônia", shortCode: "RO" },
            { name: "Roraima", shortCode: "RR" }, { name: "Santa Catarina", shortCode: "SC" },
            { name: "São Paulo", shortCode: "SP" }, { name: "Sergipe", shortCode: "SE" },
            { name: "Tocantins", shortCode: "TO" }
        ]
    },
    {
        countryName: "Francia",
        countryShortCode: "FR",
        regions: [
            { name: "Auvernia-Ródano-Alpes", shortCode: "ARA" }, { name: "Borgoña-Franco Condado", shortCode: "BFC" },
            { name: "Bretaña", shortCode: "BRE" }, { name: "Centro-Valle de Loira", shortCode: "CVL" },
            { name: "Córcega", shortCode: "COR" }, { name: "Gran Este", shortCode: "GES" },
            { name: "Alta Francia", shortCode: "HDF" }, { name: "Isla de Francia", shortCode: "IDF" },
            { name: "Normandía", shortCode: "NOR" }, { name: "Nueva Aquitania", shortCode: "NAQ" },
            { name: "Occitania", shortCode: "OCC" }, { name: "Países del Loira", shortCode: "PDL" },
            { name: "Provenza-Alpes-Costa Azul", shortCode: "PAC" }
        ]
    },
    {
        countryName: "Alemania",
        countryShortCode: "DE",
        regions: [
            { name: "Baden-Wurtemberg", shortCode: "BW" }, { name: "Baviera", shortCode: "BY" },
            { name: "Berlín", shortCode: "BE" }, { name: "Brandeburgo", shortCode: "BB" },
            { name: "Bremen", shortCode: "HB" }, { name: "Hamburgo", shortCode: "HH" },
            { name: "Hesse", shortCode: "HE" }, { name: "Mecklemburgo-Pomerania Occidental", shortCode: "MV" },
            { name: "Baja Sajonia", shortCode: "NI" }, { name: "Renania del Norte-Westfalia", shortCode: "NW" },
            { name: "Renania-Palatinado", shortCode: "RP" }, { name: "Sarre", shortCode: "SL" },
            { name: "Sajonia", shortCode: "SN" }, { name: "Sajonia-Anhalt", shortCode: "ST" },
            { name: "Schleswig-Holstein", shortCode: "SH" }, { name: "Turingia", shortCode: "TH" }
        ]
    },
    {
        countryName: "Italia",
        countryShortCode: "IT",
        regions: [
            { name: "Abruzzo", shortCode: "ABR" }, { name: "Basilicata", shortCode: "BAS" },
            { name: "Calabria", shortCode: "CAL" }, { name: "Campania", shortCode: "CAM" },
            { name: "Emilia-Romaña", shortCode: "EMR" }, { name: "Friuli-Venecia Julia", shortCode: "FVG" },
            { name: "Lacio", shortCode: "LAZ" }, { name: "Liguria", shortCode: "LIG" },
            { name: "Lombardía", shortCode: "LOM" }, { name: "Marcas", shortCode: "MAR" },
            { name: "Molise", shortCode: "MOL" }, { name: "Piamonte", shortCode: "PIE" },
            { name: "Puglia", shortCode: "PUG" }, { name: "Cerdeña", shortCode: "SAR" },
            { name: "Sicilia", shortCode: "SIC" }, { name: "Toscana", shortCode: "TOS" },
            { name: "Trentino-Alto Adigio", shortCode: "TAA" }, { name: "Umbría", shortCode: "UMB" },
            { name: "Valle de Aosta", shortCode: "VDA" }, { name: "Véneto", shortCode: "VEN" }
        ]
    },
    {
        countryName: "Reino Unido",
        countryShortCode: "GB",
        regions: [
            { name: "Inglaterra", shortCode: "ENG" }, { name: "Escocia", shortCode: "SCT" },
            { name: "Gales", shortCode: "WLS" }, { name: "Irlanda del Norte", shortCode: "NIR" }
        ]
    }
];

if (typeof window !== "undefined") {
    window.paisesRegiones = paisesRegiones;
}
