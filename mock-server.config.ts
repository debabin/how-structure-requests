import type { MockServerConfig } from 'mock-config-server';

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api',
  interceptors: {
    request: ({ setDelay }) => setDelay(1000)
  },
  rest: {
    configs: [
      {
        method: 'get',
        path: '/users',
        routes: [
          {
            data: [{ id: 1, emoji: '🎉' }]
          },
          {
            data: [{ id: 2, emoji: '🔥' }],
            entities: {
              query: {
                emoji: '🔥'
              }
            }
          }
        ]
      },
      {
        method: 'get',
        path: '/users/:id',
        routes: [
          {
            data: { id: 1, emoji: '🎉' }
          },
          {
            data: { id: 2, emoji: '🔥' },
            entities: {
              params: {
                id: 2
              }
            }
          }
        ]
      },
      {
        method: 'post',
        path: '/users',
        routes: [
          {
            data: { id: 3, emoji: '🍕' }
          }
        ]
      },
      {
        method: 'get',
        path: '/posts',
        routes: [
          {
            data: [{ text: 'Post 1' }, { text: 'Post 2' }]
          }
        ]
      }
    ]
  }
};

export default mockServerConfig;
