export const testeContratoGETSearch = {
    type: 'array',
    items: {
        type: 'object',
        required: [
            'score',
            'show'
        ],
        properties: {
            score: {
                type: 'number'
            },
            show: {
                type: 'object',
                required: [
                    'id',
                    'url',
                    'name',
                    'type',
                    'language',
                    'genres',
                    'status',
                    'runtime',
                    'averageRuntime',
                    'premiered',
                    'ended',
                    'officialSite',
                    'schedule',
                    'rating',
                    'weight',
                    'network',
                    'webChannel',
                    'dvdCountry',
                    'externals',
                    'image',
                    'summary',
                    'updated',
                    '_links'
                ],
                properties: {
                    id: {
                        type: 'integer'
                    },
                    url: {
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    },
                    type: {
                        type: 'string'
                    },
                    language: {
                        type: 'string'
                    },
                    genres: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    status: {
                        type: 'string'
                    },
                    runtime: {
                        type: 'integer'
                    },
                    averageRuntime: {
                        type: 'integer'
                    },
                    premiered: {
                        type: 'string'
                    },
                    ended: {
                        type: 'string'
                    },
                    officialSite: {
                        type: 'string'
                    },
                    schedule: {
                        type: 'object',
                        required: [
                            'time',
                            'days'
                        ],
                        properties: {
                            time: {
                                type: 'string'
                            },
                            days: {
                                type: 'array',
                                items: {
                                    type: 'string'
                                }
                            }
                        }
                    },
                    rating: {
                        type: 'object',
                        required: [
                            'average'
                        ],
                        properties: {
                            average: {
                                type: 'number'
                            }
                        }
                    },
                    weight: {
                        type: 'integer'
                    },
                    network: {
                        type: 'object',
                        required: [
                            'id',
                            'name',
                            'country',
                            'officialSite'
                        ],
                        properties: {
                            id: {
                                type: 'integer'
                            },
                            name: {
                                type: 'string'
                            },
                            country: {
                                type: 'object',
                                required: [
                                    'name',
                                    'code',
                                    'timezone'
                                ],
                                properties: {
                                    name: {
                                        type: 'string'
                                    },
                                    code: {
                                        type: 'string'
                                    },
                                    timezone: {
                                        type: 'string'
                                    }
                                }
                            },
                            officialSite: {
                                type: 'null'
                            }
                        }
                    },
                    webChannel: {
                        type: 'null'
                    },
                    dvdCountry: {
                        type: 'null'
                    },
                    externals: {
                        type: 'object',
                        required: [
                            'tvrage',
                            'thetvdb',
                            'imdb'
                        ],
                        properties: {
                            tvrage: {
                                type: 'null'
                            },
                            thetvdb: {
                                type: 'integer'
                            },
                            imdb: {
                                type: 'string'
                            }
                        }
                    },
                    image: {
                        type: 'object',
                        required: [
                            'medium',
                            'original'
                        ],
                        properties: {
                            medium: {
                                type: 'string'
                            },
                            original: {
                                type: 'string'
                            }
                        }
                    },
                    summary: {
                        type: 'string'
                    },
                    updated: {
                        type: 'integer'
                    },
                    _links: {
                        type: 'object',
                        required: [
                            'self',
                            'previousepisode'
                        ],
                        properties: {
                            self: {
                                type: 'object',
                                required: [
                                    'href'
                                ],
                                properties: {
                                    href: {
                                        type: 'string'
                                    }
                                }
                            },
                            previousepisode: {
                                type: 'object',
                                required: [
                                    'href'
                                ],
                                properties: {
                                    href: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}