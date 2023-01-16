export const testeContratoGETCast = {
    type: 'array',
    items: {
        type: 'object',
        required: [
            'person',
            'character',
            'self',
            'voice'
        ],
        properties: {
            person: {
                type: 'object',
                required: [
                    'id',
                    'url',
                    'name',
                    'country',
                    'birthday',
                    'deathday',
                    'gender',
                    'image',
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
                    country: {
                        type: [
                            'object',
                            'null'
                        ],
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
                    birthday: {
                        type: [
                            'string',
                            'null'
                        ]
                    },
                    deathday: {
                        type: 'null'
                    },
                    gender: {
                        type: 'string'
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
                    updated: {
                        type: 'integer'
                    },
                    _links: {
                        type: 'object',
                        required: [
                            'self'
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
                            }
                        }
                    }
                }
            },
            character: {
                type: 'object',
                required: [
                    'id',
                    'url',
                    'name',
                    'image',
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
                    image: {
                        type: [
                            'object',
                            'null'
                        ],
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
                    _links: {
                        type: 'object',
                        required: [
                            'self'
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
                            }
                        }
                    }
                }
            },
            self: {
                type: 'boolean'
            },
            voice: {
                type: 'boolean'
            }
        }
    }
}