// NODE: simply commenting this out gets codegen to work again
import * as Archive from "../../../raw-archive/src";

export interface Context {
  now: Date;
  archive: Archive.Archive;
}

export const context = async (): Promise<Context> => {
  return { now: new Date(), archive: Archive.makeArchive({}) };
};
