const { gql } = require("apollo-server-express");

function createTypeDefs() {
  const typeDefs = gql`
    "A Foreign and Unexplored Planet"
    type Exoplanet {
      """
      **Declination (Decimal Degrees)**
      Declination of the planetary system in decimal degrees.
      """
      dec: Float
      """
      **Declination (Sexagesimal)**
      Declination of the planetary system in sexagesimal notation.
      """
      dec_str: String
      """
      **G Band**
        Brightness of the host star as measuring using the Gaia band in units of magnitudes. Objects matched to Gaia using the Hipparcos or 2MASS IDs provided in Gaia DR2.
      """
      gaia_gmag: Float
      """
      Margin of error for gaia_gmag
      """
      gaia_gmagerr: String
      """
      Upper limit for gaia_gmag
      """
      gaia_gmaglim: Int
      """
      **Planet Mass (Jupiter mass)**
      Amount of matter contained in the planet, measured in units of masses of Jupiter.
      """
      pl_bmassj: Float
      """
      + error for pl_bmassj
      """
      pl_bmassjerr1: Float
      """
      - error for pl_bmassj
      """
      pl_bmassjerr2: Float
      """
      limit for pl_bmassj
      """
      pl_bmassjlim: Float
      """
      Number of measurements for pl_bmassj.
      """
      pl_bmassn: Int
      """
      **Planet Mass or M*sin(i) Provenance**
      Provenance of the measurement of the best mass. Options are: Mass, M*sin(i)/sin(i), and M*sini.
      """
      pl_pmassprov: String
      """
      **Controversial Flag**
      Flag indicating whether the confirmation status of a planet has been questioned in the published literature (1=yes, 0=no)
      """
      pl_controvflag: Boolean
      """
      **Planet Density (g/cm^3)**
      Amount of mass per unit of volume of the planet.
      """
      pl_dens: Float
      """
      + margin of error for pl_dens
      """
      pl_densnerr1: Float
      """
      - margin of error for pl_dens
      """
      pl_denserr2: Float
      """
      limit for pl_dens
      """
      pl_denslim: Float
      """
      Number of measurements for pl_dens
      """
      pl_densn: Int
      """
      **Discovery Method**
      Method by which the planet was first identified.
      """
      pl_discmethod: String
      """
      **Discovery Facility**
      Name of facility of planet discovery observations
      """
      pl_facility: String
      """
      **Host Star Name**
      Stellar name most commonly used in the literature.
      """
      pl_hostname: String
      """
      **K2 Mission Flag**
      Flag indicating if the planetary system signature is present in data taken with the K2 Mission (1=yes, 0=no).
      """
      pl_k2flag: Boolean
      """
      **Kepler Field Flag**
      Flag indicating if the planetary system signature is present in data taken with the Kepler mission (1=yes, 0=no).
      """
      pl_kepflag: Boolean
      """
      **Planet Letter**
      Letter assigned to the planetary component of a planetary system.
      """
      pl_letter: String
      """
      **Planet Name**
      Planet name most commonly used in the literature.
      """
      pl_name: String
      """
      **Number of Notes**
      Number of Notes associated with the planet. View all notes in the Confirmed Planet Overview page.
      """
      pl_nnotes: Int
      """
      **Eccentricity**
      Amount by which the orbit of the planet deviates from a perfect circle.
      """
      pl_orbeccen: Float
      """
      **Inclination (deg)**
      Angle of the plane of the orbit relative to the plane perpendicular to the line-of-sight from Earth to the object.
      """
      pl_orbincl: Float
      """
      + Margin of Error for pl_orbeccen
      """
      pl_orbinclerr1: Float
      """
      - Margin of Error for pl_orbeccen
      """
      pl_orbinclerr2: Float
      """
      Limit for pl_orbeccen
      """
      pl_orbincllim: Float
      """
      Number of measurements for pl_orbeccen
      """
      pl_orbincln: Int
      """
      **Orbital Period (days)**
      Time the planet takes to make a complete orbit around the host star or system.
      """
      pl_orbper: Float
      """
      + Margin of Error for pl_orbper
      """
      pl_orbpererr1: Float
      """
      - Margin of Error for pl_orbper
      """
      pl_orbpererr2: Float
      """
      Limit for pl_orbper
      """
      pl_orbperlim: Float
      """
      Number of measurements for pl_orbper
      """
      pl_orbpern: Int
      """
      **Orbit Semi-Major Axis (AU)**
      The longest radius of an elliptic orbit, or, for exoplanets detected via gravitational microlensing or direct imaging, the projected separation in the plane of the sky.
      """
      pl_orbsmax: Float
      """
      + Margin of Error for pl_orbsmax
      """
      pl_orbsmaxerr1: Float
      """
      - Margin of Error for pl_orbsmax
      """
      pl_orbsmaxerr2: Float
      """
      Limit for pl_orbsmax
      """
      pl_orbsmaxlim: Float
      """
      Number of Measurements for pl_orbsmax
      """
      pl_orbsmaxn: Int
      """
      Number of planets in the planetary system.
      """
      pl_pnum: Int
      """
      **Planet Radius (Jupiter radii)**
      Length of a line segment from the center of the planet to its surface, measured in units of radius of Jupiter.
      """
      pl_radj: Float
      """
      + Margin of Error for Planet Jupiter Radii
      """
      pl_radjerr1: Float
      """
      - Margin of Error for Planet Jupiter Radii
      """
      pl_radjerr2: Float
      """
      + Limit for Planet Jupiter Radii
      """
      pl_radjlim: Float
      """
      Number of Measurements for Planet Jupiter Radii
      """
      pl_radn: Int
      """
      **Transit Timing Variations Flag**
      Flag indicating if the planet orbit exhibits transit timing variations from another planet in the system (1=yes, 0=no).

      Note: Non-transiting planets discovered via the transit timing variations of another planet in the system will not have their TTV flag set, since they do not themselves demonstrate TTVs.
      """
      pl_ttvflag: Boolean
      """
      **Right Ascension (decimal degrees)**
      Right Ascension of the planetary system in decimal degrees.
      """
      ra: Float
      """
      **Right Ascension (sexagesimal)**
      Right Ascension of the planetary system in sexagesimal format.
      """
      ra_str: String
      """
      **Date of Last Update**
      Date of last update of the planet parameters.
      """
      rowupdate: String
      """
      ?
      """
      st_decerr: Float
      """
      **Distance (Parsecs)**
      Distance to the planetary system in units of parsecs.
      """
      st_dist: Float
      """
      + Margin of Error for st_dist
      """
      st_disterr1: Float
      """
      - Margin of Error for st_dist
      """
      st_disterr2: Float
      """
      - Limit for st_dist
      """
      st_distlim: Float
      """
      - Number of measurements for st_dist
      """
      st_distn: Float
      """
      **Stellar Mass (solar mass)**
      Amount of matter contained in the star, measured in units of masses of the Sun.
      """
      st_mass: Float
      """
      + Margin of Error for st_mass
      """
      st_masserr1: Float
      """
      - Margin of Error for st_mass
      """
      st_masserr2: Float
      """
      Limit for st_mass
      """
      st_masslim: Float
      """
      Number of Measurements for st_mass
      """
      st_massn: Int
      """
      **Optical Magnitude Band**
      Band corresponding to the Optical Magnitude. Options are: V (Johnson) or Kepler-band.
      """
      st_optband: String
      """
      **Optical Magnitude [mag]**
      Brightness of the host star as measured using the V (Johnson) or the Kepler-band in units of magnitudes.
      """
      st_optmag: Float
      """
      Margin of Error for st_optmag
      """
      st_optmagerr: Float
      """
      Limit for st_optmag
      """
      st_optmaglim: Float
      """
      Number of Measurements of the Star (for many fields)
      """
      st_posn: Float
      """
      **Stellar Radius (solar radii)**
      Length of a line segment from the center of the star to its surface, measured in units of radius of the Sun.
      """
      st_rad: Float
      """
      + Margin of Error for st_rad
      """
      st_raderr1: Float
      """
      - Margin of Error for st_rad
      """
      st_raderr2: Float
      """
      + Limit for st_rad
      """
      st_radlim: Float
      """
      Number of Measurementsfor st_rad
      """
      st_radn: Float
      """
      ?
      """
      st_raerr: Float
      """
      **Effective Temperature (K)**
      Temperature of the star as modeled by a black body emitting the same total amount of electromagnetic radiation.
      """
      st_teff: Float
      """
      + Margin of error for st_teff
      """
      st_tefferr1: Float
      """
      - Margin of error for st_teff
      """
      st_tefferr2: Float
      """
      Limit for st_teff
      """
      st_tefflim: Float
      """
      Number of measurements for st_teff
      """
      st_teffn: Float
    }
    type Query {
      exoplanets: [Exoplanet]
      exoplanet(name: String!): Exoplanet
      randomExoplanet: Exoplanet
    }
  `;

  return typeDefs;
}

module.exports = createTypeDefs;
