
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Personal
 * 
 */
export type Personal = $Result.DefaultSelection<Prisma.$PersonalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personals
 * const personals = await prisma.personal.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Personals
   * const personals = await prisma.personal.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.personal`: Exposes CRUD operations for the **Personal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personals
    * const personals = await prisma.personal.findMany()
    * ```
    */
  get personal(): Prisma.PersonalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Personal: 'Personal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "personal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Personal: {
        payload: Prisma.$PersonalPayload<ExtArgs>
        fields: Prisma.PersonalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          findFirst: {
            args: Prisma.PersonalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          findMany: {
            args: Prisma.PersonalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>[]
          }
          create: {
            args: Prisma.PersonalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          createMany: {
            args: Prisma.PersonalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>[]
          }
          delete: {
            args: Prisma.PersonalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          update: {
            args: Prisma.PersonalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          deleteMany: {
            args: Prisma.PersonalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>[]
          }
          upsert: {
            args: Prisma.PersonalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalPayload>
          }
          aggregate: {
            args: Prisma.PersonalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal>
          }
          groupBy: {
            args: Prisma.PersonalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    personal?: PersonalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Personal
   */

  export type AggregatePersonal = {
    _count: PersonalCountAggregateOutputType | null
    _avg: PersonalAvgAggregateOutputType | null
    _sum: PersonalSumAggregateOutputType | null
    _min: PersonalMinAggregateOutputType | null
    _max: PersonalMaxAggregateOutputType | null
  }

  export type PersonalAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonalSumAggregateOutputType = {
    id: number | null
  }

  export type PersonalMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    documentType: string | null
    documentNumber: string | null
    profile: string | null
    scrumMaster: string | null
    technicalLead: string | null
    squad: string | null
    phone: string | null
    birthDate: Date | null
    department: string | null
    province: string | null
    district: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    documentType: string | null
    documentNumber: string | null
    profile: string | null
    scrumMaster: string | null
    technicalLead: string | null
    squad: string | null
    phone: string | null
    birthDate: Date | null
    department: string | null
    province: string | null
    district: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    documentType: number
    documentNumber: number
    profile: number
    scrumMaster: number
    technicalLead: number
    squad: number
    phone: number
    birthDate: number
    department: number
    province: number
    district: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonalAvgAggregateInputType = {
    id?: true
  }

  export type PersonalSumAggregateInputType = {
    id?: true
  }

  export type PersonalMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    documentType?: true
    documentNumber?: true
    profile?: true
    scrumMaster?: true
    technicalLead?: true
    squad?: true
    phone?: true
    birthDate?: true
    department?: true
    province?: true
    district?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    documentType?: true
    documentNumber?: true
    profile?: true
    scrumMaster?: true
    technicalLead?: true
    squad?: true
    phone?: true
    birthDate?: true
    department?: true
    province?: true
    district?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    documentType?: true
    documentNumber?: true
    profile?: true
    scrumMaster?: true
    technicalLead?: true
    squad?: true
    phone?: true
    birthDate?: true
    department?: true
    province?: true
    district?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personal to aggregate.
     */
    where?: PersonalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personals to fetch.
     */
    orderBy?: PersonalOrderByWithRelationInput | PersonalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personals
    **/
    _count?: true | PersonalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalMaxAggregateInputType
  }

  export type GetPersonalAggregateType<T extends PersonalAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal[P]>
      : GetScalarType<T[P], AggregatePersonal[P]>
  }




  export type PersonalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalWhereInput
    orderBy?: PersonalOrderByWithAggregationInput | PersonalOrderByWithAggregationInput[]
    by: PersonalScalarFieldEnum[] | PersonalScalarFieldEnum
    having?: PersonalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalCountAggregateInputType | true
    _avg?: PersonalAvgAggregateInputType
    _sum?: PersonalSumAggregateInputType
    _min?: PersonalMinAggregateInputType
    _max?: PersonalMaxAggregateInputType
  }

  export type PersonalGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    documentType: string
    documentNumber: string
    profile: string
    scrumMaster: string | null
    technicalLead: string | null
    squad: string | null
    phone: string
    birthDate: Date
    department: string
    province: string
    district: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: PersonalCountAggregateOutputType | null
    _avg: PersonalAvgAggregateOutputType | null
    _sum: PersonalSumAggregateOutputType | null
    _min: PersonalMinAggregateOutputType | null
    _max: PersonalMaxAggregateOutputType | null
  }

  type GetPersonalGroupByPayload<T extends PersonalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalGroupByOutputType[P]>
        }
      >
    >


  export type PersonalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    documentType?: boolean
    documentNumber?: boolean
    profile?: boolean
    scrumMaster?: boolean
    technicalLead?: boolean
    squad?: boolean
    phone?: boolean
    birthDate?: boolean
    department?: boolean
    province?: boolean
    district?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["personal"]>

  export type PersonalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    documentType?: boolean
    documentNumber?: boolean
    profile?: boolean
    scrumMaster?: boolean
    technicalLead?: boolean
    squad?: boolean
    phone?: boolean
    birthDate?: boolean
    department?: boolean
    province?: boolean
    district?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["personal"]>

  export type PersonalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    documentType?: boolean
    documentNumber?: boolean
    profile?: boolean
    scrumMaster?: boolean
    technicalLead?: boolean
    squad?: boolean
    phone?: boolean
    birthDate?: boolean
    department?: boolean
    province?: boolean
    district?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["personal"]>

  export type PersonalSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    documentType?: boolean
    documentNumber?: boolean
    profile?: boolean
    scrumMaster?: boolean
    technicalLead?: boolean
    squad?: boolean
    phone?: boolean
    birthDate?: boolean
    department?: boolean
    province?: boolean
    district?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "documentType" | "documentNumber" | "profile" | "scrumMaster" | "technicalLead" | "squad" | "phone" | "birthDate" | "department" | "province" | "district" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["personal"]>

  export type $PersonalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      documentType: string
      documentNumber: string
      profile: string
      scrumMaster: string | null
      technicalLead: string | null
      squad: string | null
      phone: string
      birthDate: Date
      department: string
      province: string
      district: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["personal"]>
    composites: {}
  }

  type PersonalGetPayload<S extends boolean | null | undefined | PersonalDefaultArgs> = $Result.GetResult<Prisma.$PersonalPayload, S>

  type PersonalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalCountAggregateInputType | true
    }

  export interface PersonalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personal'], meta: { name: 'Personal' } }
    /**
     * Find zero or one Personal that matches the filter.
     * @param {PersonalFindUniqueArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalFindUniqueArgs>(args: SelectSubset<T, PersonalFindUniqueArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalFindUniqueOrThrowArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalFindFirstArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalFindFirstArgs>(args?: SelectSubset<T, PersonalFindFirstArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalFindFirstOrThrowArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personals
     * const personals = await prisma.personal.findMany()
     * 
     * // Get first 10 Personals
     * const personals = await prisma.personal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalWithIdOnly = await prisma.personal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalFindManyArgs>(args?: SelectSubset<T, PersonalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal.
     * @param {PersonalCreateArgs} args - Arguments to create a Personal.
     * @example
     * // Create one Personal
     * const Personal = await prisma.personal.create({
     *   data: {
     *     // ... data to create a Personal
     *   }
     * })
     * 
     */
    create<T extends PersonalCreateArgs>(args: SelectSubset<T, PersonalCreateArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personals.
     * @param {PersonalCreateManyArgs} args - Arguments to create many Personals.
     * @example
     * // Create many Personals
     * const personal = await prisma.personal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalCreateManyArgs>(args?: SelectSubset<T, PersonalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personals and returns the data saved in the database.
     * @param {PersonalCreateManyAndReturnArgs} args - Arguments to create many Personals.
     * @example
     * // Create many Personals
     * const personal = await prisma.personal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personals and only return the `id`
     * const personalWithIdOnly = await prisma.personal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personal.
     * @param {PersonalDeleteArgs} args - Arguments to delete one Personal.
     * @example
     * // Delete one Personal
     * const Personal = await prisma.personal.delete({
     *   where: {
     *     // ... filter to delete one Personal
     *   }
     * })
     * 
     */
    delete<T extends PersonalDeleteArgs>(args: SelectSubset<T, PersonalDeleteArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal.
     * @param {PersonalUpdateArgs} args - Arguments to update one Personal.
     * @example
     * // Update one Personal
     * const personal = await prisma.personal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalUpdateArgs>(args: SelectSubset<T, PersonalUpdateArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personals.
     * @param {PersonalDeleteManyArgs} args - Arguments to filter Personals to delete.
     * @example
     * // Delete a few Personals
     * const { count } = await prisma.personal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalDeleteManyArgs>(args?: SelectSubset<T, PersonalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personals
     * const personal = await prisma.personal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalUpdateManyArgs>(args: SelectSubset<T, PersonalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personals and returns the data updated in the database.
     * @param {PersonalUpdateManyAndReturnArgs} args - Arguments to update many Personals.
     * @example
     * // Update many Personals
     * const personal = await prisma.personal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personals and only return the `id`
     * const personalWithIdOnly = await prisma.personal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personal.
     * @param {PersonalUpsertArgs} args - Arguments to update or create a Personal.
     * @example
     * // Update or create a Personal
     * const personal = await prisma.personal.upsert({
     *   create: {
     *     // ... data to create a Personal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal we want to update
     *   }
     * })
     */
    upsert<T extends PersonalUpsertArgs>(args: SelectSubset<T, PersonalUpsertArgs<ExtArgs>>): Prisma__PersonalClient<$Result.GetResult<Prisma.$PersonalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalCountArgs} args - Arguments to filter Personals to count.
     * @example
     * // Count the number of Personals
     * const count = await prisma.personal.count({
     *   where: {
     *     // ... the filter for the Personals we want to count
     *   }
     * })
    **/
    count<T extends PersonalCountArgs>(
      args?: Subset<T, PersonalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalAggregateArgs>(args: Subset<T, PersonalAggregateArgs>): Prisma.PrismaPromise<GetPersonalAggregateType<T>>

    /**
     * Group by Personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalGroupByArgs['orderBy'] }
        : { orderBy?: PersonalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personal model
   */
  readonly fields: PersonalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personal model
   */
  interface PersonalFieldRefs {
    readonly id: FieldRef<"Personal", 'Int'>
    readonly firstName: FieldRef<"Personal", 'String'>
    readonly lastName: FieldRef<"Personal", 'String'>
    readonly documentType: FieldRef<"Personal", 'String'>
    readonly documentNumber: FieldRef<"Personal", 'String'>
    readonly profile: FieldRef<"Personal", 'String'>
    readonly scrumMaster: FieldRef<"Personal", 'String'>
    readonly technicalLead: FieldRef<"Personal", 'String'>
    readonly squad: FieldRef<"Personal", 'String'>
    readonly phone: FieldRef<"Personal", 'String'>
    readonly birthDate: FieldRef<"Personal", 'DateTime'>
    readonly department: FieldRef<"Personal", 'String'>
    readonly province: FieldRef<"Personal", 'String'>
    readonly district: FieldRef<"Personal", 'String'>
    readonly address: FieldRef<"Personal", 'String'>
    readonly createdAt: FieldRef<"Personal", 'DateTime'>
    readonly updatedAt: FieldRef<"Personal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Personal findUnique
   */
  export type PersonalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Filter, which Personal to fetch.
     */
    where: PersonalWhereUniqueInput
  }

  /**
   * Personal findUniqueOrThrow
   */
  export type PersonalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Filter, which Personal to fetch.
     */
    where: PersonalWhereUniqueInput
  }

  /**
   * Personal findFirst
   */
  export type PersonalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Filter, which Personal to fetch.
     */
    where?: PersonalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personals to fetch.
     */
    orderBy?: PersonalOrderByWithRelationInput | PersonalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personals.
     */
    cursor?: PersonalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * Personal findFirstOrThrow
   */
  export type PersonalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Filter, which Personal to fetch.
     */
    where?: PersonalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personals to fetch.
     */
    orderBy?: PersonalOrderByWithRelationInput | PersonalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personals.
     */
    cursor?: PersonalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * Personal findMany
   */
  export type PersonalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Filter, which Personals to fetch.
     */
    where?: PersonalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personals to fetch.
     */
    orderBy?: PersonalOrderByWithRelationInput | PersonalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personals.
     */
    cursor?: PersonalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personals.
     */
    skip?: number
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * Personal create
   */
  export type PersonalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * The data needed to create a Personal.
     */
    data: XOR<PersonalCreateInput, PersonalUncheckedCreateInput>
  }

  /**
   * Personal createMany
   */
  export type PersonalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personals.
     */
    data: PersonalCreateManyInput | PersonalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personal createManyAndReturn
   */
  export type PersonalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * The data used to create many Personals.
     */
    data: PersonalCreateManyInput | PersonalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personal update
   */
  export type PersonalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * The data needed to update a Personal.
     */
    data: XOR<PersonalUpdateInput, PersonalUncheckedUpdateInput>
    /**
     * Choose, which Personal to update.
     */
    where: PersonalWhereUniqueInput
  }

  /**
   * Personal updateMany
   */
  export type PersonalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personals.
     */
    data: XOR<PersonalUpdateManyMutationInput, PersonalUncheckedUpdateManyInput>
    /**
     * Filter which Personals to update
     */
    where?: PersonalWhereInput
    /**
     * Limit how many Personals to update.
     */
    limit?: number
  }

  /**
   * Personal updateManyAndReturn
   */
  export type PersonalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * The data used to update Personals.
     */
    data: XOR<PersonalUpdateManyMutationInput, PersonalUncheckedUpdateManyInput>
    /**
     * Filter which Personals to update
     */
    where?: PersonalWhereInput
    /**
     * Limit how many Personals to update.
     */
    limit?: number
  }

  /**
   * Personal upsert
   */
  export type PersonalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * The filter to search for the Personal to update in case it exists.
     */
    where: PersonalWhereUniqueInput
    /**
     * In case the Personal found by the `where` argument doesn't exist, create a new Personal with this data.
     */
    create: XOR<PersonalCreateInput, PersonalUncheckedCreateInput>
    /**
     * In case the Personal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalUpdateInput, PersonalUncheckedUpdateInput>
  }

  /**
   * Personal delete
   */
  export type PersonalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
    /**
     * Filter which Personal to delete.
     */
    where: PersonalWhereUniqueInput
  }

  /**
   * Personal deleteMany
   */
  export type PersonalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personals to delete
     */
    where?: PersonalWhereInput
    /**
     * Limit how many Personals to delete.
     */
    limit?: number
  }

  /**
   * Personal without action
   */
  export type PersonalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personal
     */
    select?: PersonalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personal
     */
    omit?: PersonalOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonalScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    documentType: 'documentType',
    documentNumber: 'documentNumber',
    profile: 'profile',
    scrumMaster: 'scrumMaster',
    technicalLead: 'technicalLead',
    squad: 'squad',
    phone: 'phone',
    birthDate: 'birthDate',
    department: 'department',
    province: 'province',
    district: 'district',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonalScalarFieldEnum = (typeof PersonalScalarFieldEnum)[keyof typeof PersonalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonalWhereInput = {
    AND?: PersonalWhereInput | PersonalWhereInput[]
    OR?: PersonalWhereInput[]
    NOT?: PersonalWhereInput | PersonalWhereInput[]
    id?: IntFilter<"Personal"> | number
    firstName?: StringFilter<"Personal"> | string
    lastName?: StringFilter<"Personal"> | string
    documentType?: StringFilter<"Personal"> | string
    documentNumber?: StringFilter<"Personal"> | string
    profile?: StringFilter<"Personal"> | string
    scrumMaster?: StringNullableFilter<"Personal"> | string | null
    technicalLead?: StringNullableFilter<"Personal"> | string | null
    squad?: StringNullableFilter<"Personal"> | string | null
    phone?: StringFilter<"Personal"> | string
    birthDate?: DateTimeFilter<"Personal"> | Date | string
    department?: StringFilter<"Personal"> | string
    province?: StringFilter<"Personal"> | string
    district?: StringFilter<"Personal"> | string
    address?: StringFilter<"Personal"> | string
    createdAt?: DateTimeFilter<"Personal"> | Date | string
    updatedAt?: DateTimeFilter<"Personal"> | Date | string
  }

  export type PersonalOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    profile?: SortOrder
    scrumMaster?: SortOrderInput | SortOrder
    technicalLead?: SortOrderInput | SortOrder
    squad?: SortOrderInput | SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    department?: SortOrder
    province?: SortOrder
    district?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentNumber?: string
    AND?: PersonalWhereInput | PersonalWhereInput[]
    OR?: PersonalWhereInput[]
    NOT?: PersonalWhereInput | PersonalWhereInput[]
    firstName?: StringFilter<"Personal"> | string
    lastName?: StringFilter<"Personal"> | string
    documentType?: StringFilter<"Personal"> | string
    profile?: StringFilter<"Personal"> | string
    scrumMaster?: StringNullableFilter<"Personal"> | string | null
    technicalLead?: StringNullableFilter<"Personal"> | string | null
    squad?: StringNullableFilter<"Personal"> | string | null
    phone?: StringFilter<"Personal"> | string
    birthDate?: DateTimeFilter<"Personal"> | Date | string
    department?: StringFilter<"Personal"> | string
    province?: StringFilter<"Personal"> | string
    district?: StringFilter<"Personal"> | string
    address?: StringFilter<"Personal"> | string
    createdAt?: DateTimeFilter<"Personal"> | Date | string
    updatedAt?: DateTimeFilter<"Personal"> | Date | string
  }, "id" | "documentNumber">

  export type PersonalOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    profile?: SortOrder
    scrumMaster?: SortOrderInput | SortOrder
    technicalLead?: SortOrderInput | SortOrder
    squad?: SortOrderInput | SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    department?: SortOrder
    province?: SortOrder
    district?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonalCountOrderByAggregateInput
    _avg?: PersonalAvgOrderByAggregateInput
    _max?: PersonalMaxOrderByAggregateInput
    _min?: PersonalMinOrderByAggregateInput
    _sum?: PersonalSumOrderByAggregateInput
  }

  export type PersonalScalarWhereWithAggregatesInput = {
    AND?: PersonalScalarWhereWithAggregatesInput | PersonalScalarWhereWithAggregatesInput[]
    OR?: PersonalScalarWhereWithAggregatesInput[]
    NOT?: PersonalScalarWhereWithAggregatesInput | PersonalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Personal"> | number
    firstName?: StringWithAggregatesFilter<"Personal"> | string
    lastName?: StringWithAggregatesFilter<"Personal"> | string
    documentType?: StringWithAggregatesFilter<"Personal"> | string
    documentNumber?: StringWithAggregatesFilter<"Personal"> | string
    profile?: StringWithAggregatesFilter<"Personal"> | string
    scrumMaster?: StringNullableWithAggregatesFilter<"Personal"> | string | null
    technicalLead?: StringNullableWithAggregatesFilter<"Personal"> | string | null
    squad?: StringNullableWithAggregatesFilter<"Personal"> | string | null
    phone?: StringWithAggregatesFilter<"Personal"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Personal"> | Date | string
    department?: StringWithAggregatesFilter<"Personal"> | string
    province?: StringWithAggregatesFilter<"Personal"> | string
    district?: StringWithAggregatesFilter<"Personal"> | string
    address?: StringWithAggregatesFilter<"Personal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Personal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Personal"> | Date | string
  }

  export type PersonalCreateInput = {
    firstName: string
    lastName: string
    documentType: string
    documentNumber: string
    profile: string
    scrumMaster?: string | null
    technicalLead?: string | null
    squad?: string | null
    phone: string
    birthDate: Date | string
    department: string
    province: string
    district: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    documentType: string
    documentNumber: string
    profile: string
    scrumMaster?: string | null
    technicalLead?: string | null
    squad?: string | null
    phone: string
    birthDate: Date | string
    department: string
    province: string
    district: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    scrumMaster?: NullableStringFieldUpdateOperationsInput | string | null
    technicalLead?: NullableStringFieldUpdateOperationsInput | string | null
    squad?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    scrumMaster?: NullableStringFieldUpdateOperationsInput | string | null
    technicalLead?: NullableStringFieldUpdateOperationsInput | string | null
    squad?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    documentType: string
    documentNumber: string
    profile: string
    scrumMaster?: string | null
    technicalLead?: string | null
    squad?: string | null
    phone: string
    birthDate: Date | string
    department: string
    province: string
    district: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    scrumMaster?: NullableStringFieldUpdateOperationsInput | string | null
    technicalLead?: NullableStringFieldUpdateOperationsInput | string | null
    squad?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    scrumMaster?: NullableStringFieldUpdateOperationsInput | string | null
    technicalLead?: NullableStringFieldUpdateOperationsInput | string | null
    squad?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonalCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    profile?: SortOrder
    scrumMaster?: SortOrder
    technicalLead?: SortOrder
    squad?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    department?: SortOrder
    province?: SortOrder
    district?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonalMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    profile?: SortOrder
    scrumMaster?: SortOrder
    technicalLead?: SortOrder
    squad?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    department?: SortOrder
    province?: SortOrder
    district?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    profile?: SortOrder
    scrumMaster?: SortOrder
    technicalLead?: SortOrder
    squad?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    department?: SortOrder
    province?: SortOrder
    district?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}