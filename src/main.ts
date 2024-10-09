import { HttpRouter, HttpServer, HttpServerResponse } from "@effect/platform";
import { BunHttpServer, BunRuntime } from "@effect/platform-bun";
import { Layer } from "effect";

const appRouter = HttpRouter.empty.pipe(
  HttpRouter.get("/", HttpServerResponse.text("Hello World"))
)

const port = 3000

BunRuntime.runMain(Layer.launch(Layer.provide(
  appRouter.pipe(HttpServer.serve(), HttpServer.withLogAddress),
  BunHttpServer.layer({ port })
)))