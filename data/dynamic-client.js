
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
  variables: ['HS'],
  version: 'Harbor porpoise',
  projection: 'SSP119',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp126.zarr',
  variables: ['HS'],
  version: 'Harbor porpoise',
  projection: 'SSP126',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp245.zarr',
  variables: ['HS'],
  version: 'Harbor porpoise',
  projection: 'SSP245',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp370.zarr',
  variables: ['HS'],
  version: 'Harbor porpoise2',
  projection: 'SSP370',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp460.zarr',
  variables: ['HS'],
  version: 'Harbor porpoise',
  projection: 'SSP460',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  selectors: {
    time: [0, 7],
  },
},
{
  ...SHARED_ATTRS,
  id: '137117_ensemble_decade_future_ssp585.zarr',
  variables: ['HS'],
  version: 'Harbor porpoise',
  projection: 'SSP585',
  timesteps: [0, 3653, 7305, 10958, 14610, 18263, 21915, 25568],
  selectors: {
    time: [0, 7],
  },
},


]
