
const UNUSED_ATTRS = {
  pyramids: true,
  pixelsPerTile: 128,
  dtype: 'f4',
  inflevel: 100,
  gcm: 'ACCESS-CM2',
  a_new_attrs: 'COVFEFE'
}

const SHARED_ATTRS = {
  ...UNUSED_ATTRS,
  clim: [0, 1],
}

export const DATASETS = [

{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp119.zarr',
  variables: ['ensemble'],
  version: 'Harbor porpoise',
  projection: 'SSP119',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  labels: ["2020", "2030", "2040", "2050", "2060", "2070", "2080", "2090"], 
  period: "Decade(21e century)",
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp126.zarr',
  variables: ['ensemble'],
  version: 'Harbor porpoise',
  projection: 'SSP126',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  labels: ["2020", "2030", "2040", "2050", "2060", "2070", "2080", "2090"], 
  period: "Decade(21e century)",
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp245.zarr',
  variables: ['ensemble'],
  version: 'Harbor porpoise',
  projection: 'SSP245',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  labels: ["2020", "2030", "2040", "2050", "2060", "2070", "2080", "2090"], 
  period: "Decade(21e century)",
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp370.zarr',
  variables: ['ensemble'],
  version: 'Harbor porpoise',
  projection: 'SSP370',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  labels: ["2020", "2030", "2040", "2050", "2060", "2070", "2080", "2090"], 
  period: "Decade(21e century)",
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp460.zarr',
  variables: ['ensemble'],
  version: 'Harbor porpoise',
  projection: 'SSP460',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  labels: ["2020", "2030", "2040", "2050", "2060", "2070", "2080", "2090"], 
  period: "Decade(21e century)",
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp585.zarr',
  variables: ['ensemble'],
  version: 'Harbor porpoise',
  projection: 'SSP585',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  labels: ["2020", "2030", "2040", "2050", "2060", "2070", "2080", "2090"], 
  period: "Decade(21e century)",
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_monthly.zarr',
  variables: ['ensemble'],
  version: 'Harbor porpoise',
  projection: 'Month',
  timesteps: [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

  period: "Month",
  selectors: {
    time: [0, 11],
  },
},



]
