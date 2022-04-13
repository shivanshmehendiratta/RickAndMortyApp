import {Alert, Share} from 'react-native';
import React from 'react';
export async function useShareUrl(url) {
	try {
		const result = await Share.share({
			message: url,
		});
		if (result.action === Share.sharedAction) {
			if (result.activityType) {
				// shared with activity type of result.activityType
			} else {
				// shared
			}
		} else if (result.action === Share.dismissedAction) {
			// dismissed
		}
	} catch (error) {
		Alert(error.message);
	}
}
