import {CourtsConfig} from "../../../documents/courts/CourtsConfig";
import moment from "moment";
import config from "../../../config/config";

export async function courtTypeVal(court: CourtsConfig | null) {
  if (!court)
    return 'Court does not exist'


}

export async function courtIdVal(court: CourtsConfig | null, courtId: number) {
  //checks if court with entered id doesn't exist
  if (!court!.courts.some(court => court.courtId === courtId))
    return 'Court with such id does not exist'
}

export async function courtTimeVal(court: CourtsConfig | null, courtId: number, time: string) {
  //checks if entered time has the same format as defined
  if (!moment(time, config.time_format.momentTimeCustomFormat, true).isValid())
    return 'Wrong time format'

  let found_court = court!.courts.find(court => court.courtId === courtId)
  if (!found_court!.time.includes(time))
    return 'Entered time does not exist'
}