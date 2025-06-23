import { Request, Response, NextFunction } from 'express';
import { Cr } from '../models/dbTypesModel';
import { getPersonalCRs, setPersonalCRs, examplePersonalCRs } from "../models/personalViewModel";

class PersonalViewController {
	public constructor() {}

	public getPersonalCRs(req: Request, res: Response, next: NextFunction): void {
		try {
			let personalCRs: Cr[] = getPersonalCRs();

			if ( personalCRs.length == 0 ) {
				console.log('hello');
				personalCRs = this.getPersonalCRsFromDB();
			}
			
			if ( personalCRs.length !== 0 ) {
				setPersonalCRs(personalCRs);

				res.status(200).json({
						personalCRs: personalCRs,
				});
			} else {
				res.status(404).json({
					message: 'No personal CRs found'
				});
			}
		} catch (error) {
			next(error);
		}
	}

	private getPersonalCRsFromDB(): Cr[] {
		console.log('hello');
		console.log(examplePersonalCRs);
		return examplePersonalCRs;
	}
}

export default new PersonalViewController();