const DAYS = [0, 99]

const UNUSED_ATTRS = {
  pyramids: true,
  pixelsPerTile: 128,
  dtype: 'f4',
  coordinateChunking: 0,
  coordinateSharding: 1,
  inflevel: 100,
  gcm: 'ACCESS-CM2',
  emptyChunks: true,
}

const SHARED_ATTRS = {
  ...UNUSED_ATTRS,
  selectors: {
    time: DAYS,
  },
  clim: [200, 300],
}

export const DATASETS = [
  {
    ...SHARED_ATTRS,
    id: 'new_pyramid3.zarr',
    variables: ['tasmax'],
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 1,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
]
