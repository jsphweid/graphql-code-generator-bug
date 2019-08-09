import Moment from "moment";

// NODE: simply commenting this out gets codegen to work again
import * as Archive from "../../../raw-archive/src";

export interface Context {
  now: Moment.Moment;
  archive: Archive.Archive;
}

export const context = async (): Promise<Context> => {
  return { now: Moment(), archive: Archive.makeArchive({}) };
};
