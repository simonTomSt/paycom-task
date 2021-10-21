import type { ApolloServer, ExpressContext } from 'apollo-server-express';
import type { Application } from 'express';
import type http from 'http';

type Apollo = ApolloServer<ExpressContext>;

export default class Server {
  private app: Application;
  private apolloServer: Apollo;
  private readonly port: number;

  constructor(app: Application, apolloServer: Apollo, port: number) {
    this.app = app;
    this.apolloServer = apolloServer;
    this.port = port;
  }

  async initApollo() {
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({ app: this.app });
  }

  run(): http.Server {
    return this.app.listen(this.port, () => {
      console.log(`SERVER RUNNING ON PORT: ${this.port}`);
    });
  }
}
