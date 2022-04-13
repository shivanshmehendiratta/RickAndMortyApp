import {Keyboard} from 'react-native';

export default class Utils {
	static parseResponse(promise) {
		return promise
			.then(data => {
				return [null, data];
			})
			.catch(err => [err]);
	}

	static validateEmail(email) {
		const re =
			// eslint-disable-next-line no-useless-escape
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	static isPasswordValid(password) {
		let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
		return reg.test(password);
	}
	static dismissKeyboard() {
		Keyboard.dismiss();
	}
	static youtube_parser(url) {
		var regExp =
			/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url?.match(regExp);
		return match && match[7].length == 11 ? match[7] : false;
	}
	static getRandomId(length) {
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	static isEmailValid = email => {
		let pattern =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return pattern.test(String(email).toLowerCase());
	};
	static getColorForDifficulty = difficulty => {
		if (difficulty === 'Hard') {
			return 'FF001A';
		} else if (difficulty === 'Medium') {
			return 'FF9900';
		} else {
			return '96E55A';
		}
	};
	static _convertExerciseToGroup = exercise => {
		let group = {
			groupExercises: {
				[exercise.SK]: exercise,
			},
			groupName: 'AUTO GENERATED',
			SK: Utils.getRandomId(8),
		};
		return group;
	};
	static _getThumbnailURI = (exercise, quality) => {
		if (exercise?.exerciseVideoURL?.includes('fitteo-videos')) {
			return exercise?.exerciseVideoURL
				?.replace('fitteo-videos', 'fitteo-video-thumbnails')
				?.replace('.mp4', `-${quality || 0}.jpg`)
				?.replace('.MOV', `.MOV-${quality || 0}.jpg`);
		} else {
			return `https://img.youtube.com/vi/${this.youtube_parser(
				exercise?.exerciseVideoURL,
			)}/0.jpg`;
		}
	};
	static _isThumbnailURIAccepted = exerciseVideoURL => {
		if (
			exerciseVideoURL?.includes('fitteo-videos') ||
			Utils.youtube_parser(exerciseVideoURL)
		) {
			return true;
		} else {
			return false;
		}
	};
}

export const GENDERS = [
	{
		label: 'Male',
		value: 'Male',
	},
	{
		label: 'Female',
		value: 'Female',
	},
	{
		label: 'Other',
		value: 'Other',
	},
];

export const BANK_ACCOUNT_TYPES = [
	{
		label: 'Checking',
		value: 'Checking',
	},
	{
		label: 'Savings',
		value: 'Savings',
	},
];

export const countryJSON2 = [
	{
		label: 'United States',
		value: 'United States',
	},
	{
		label: 'Afghanistan',
		value: 'Afghanistan',
	},
	{
		label: 'Aland Islands',
		value: 'Aland Islands',
	},
	{
		label: 'Albania',
		value: 'Albania',
	},
	{
		label: 'Algeria',
		value: 'Algeria',
	},
	{
		label: 'AmericanSamoa',
		value: 'AmericanSamoa',
	},
	{
		label: 'Andorra',
		value: 'Andorra',
	},
	{
		label: 'Angola',
		value: 'Angola',
	},
	{
		label: 'Anguilla',
		value: 'Anguilla',
	},
	{
		label: 'Antarctica',
		value: 'Antarctica',
	},
	{
		label: 'Antigua and Barbuda',
		value: 'Antigua and Barbuda',
	},
	{
		label: 'Argentina',
		value: 'Argentina',
	},
	{
		label: 'Armenia',
		value: 'Armenia',
	},
	{
		label: 'Aruba',
		value: 'Aruba',
	},
	{
		label: 'Ascension Island',
		value: 'Ascension Island',
	},
	{
		label: 'Australia',
		value: 'Australia',
	},
	{
		label: 'Austria',
		value: 'Austria',
	},
	{
		label: 'Azerbaijan',
		value: 'Azerbaijan',
	},
	{
		label: 'Bahamas',
		value: 'Bahamas',
	},
	{
		label: 'Bahrain',
		value: 'Bahrain',
	},
	{
		label: 'Bangladesh',
		value: 'Bangladesh',
	},
	{
		label: 'Barbados',
		value: 'Barbados',
	},
	{
		label: 'Belarus',
		value: 'Belarus',
	},
	{
		label: 'Belgium',
		value: 'Belgium',
	},
	{
		label: 'Belize',
		value: 'Belize',
	},
	{
		label: 'Benin',
		value: 'Benin',
	},
	{
		label: 'Bermuda',
		value: 'Bermuda',
	},
	{
		label: 'Bhutan',
		value: 'Bhutan',
	},
	{
		label: 'Bolivia',
		value: 'Bolivia',
	},
	{
		label: 'Bosnia and Herzegovina',
		value: 'Bosnia and Herzegovina',
	},
	{
		label: 'Botswana',
		value: 'Botswana',
	},
	{
		label: 'Brazil',
		value: 'Brazil',
	},
	{
		label: 'British Indian Ocean Territory',
		value: 'British Indian Ocean Territory',
	},
	{
		label: 'Brunei Darussalam',
		value: 'Brunei Darussalam',
	},
	{
		label: 'Bulgaria',
		value: 'Bulgaria',
	},
	{
		label: 'Burkina Faso',
		value: 'Burkina Faso',
	},
	{
		label: 'Burundi',
		value: 'Burundi',
	},
	{
		label: 'Cambodia',
		value: 'Cambodia',
	},
	{
		label: 'Cameroon',
		value: 'Cameroon',
	},
	{
		label: 'Cape Verde',
		value: 'Cape Verde',
	},
	{
		label: 'Cayman Islands',
		value: 'Cayman Islands',
	},
	{
		label: 'Central African Republic',
		value: 'Central African Republic',
	},
	{
		label: 'Chad',
		value: 'Chad',
	},
	{
		label: 'Chile',
		value: 'Chile',
	},
	{
		label: 'China',
		value: 'China',
	},
	{
		label: 'Christmas Island',
		value: 'Christmas Island',
	},
	{
		label: 'Cocos (Keeling) Islands',
		value: 'Cocos (Keeling) Islands',
	},
	{
		label: 'Colombia',
		value: 'Colombia',
	},
	{
		label: 'Comoros',
		value: 'Comoros',
	},
	{
		label: 'Congo',
		value: 'Congo',
	},
	{
		label: 'Cook Islands',
		value: 'Cook Islands',
	},
	{
		label: 'Costa Rica',
		value: 'Costa Rica',
	},
	{
		label: 'Croatia',
		value: 'Croatia',
	},
	{
		label: 'Cuba',
		value: 'Cuba',
	},
	{
		label: 'Cyprus',
		value: 'Cyprus',
	},
	{
		label: 'Czech Republic',
		value: 'Czech Republic',
	},
	{
		label: 'Democratic Republic of the Congo',
		value: 'Democratic Republic of the Congo',
	},
	{
		label: 'Denmark',
		value: 'Denmark',
	},
	{
		label: 'Djibouti',
		value: 'Djibouti',
	},
	{
		label: 'Dominica',
		value: 'Dominica',
	},
	{
		label: 'Dominican Republic',
		value: 'Dominican Republic',
	},
	{
		label: 'Ecuador',
		value: 'Ecuador',
	},
	{
		label: 'Egypt',
		value: 'Egypt',
	},
	{
		label: 'El Salvador',
		value: 'El Salvador',
	},
	{
		label: 'Equatorial Guinea',
		value: 'Equatorial Guinea',
	},
	{
		label: 'Eritrea',
		value: 'Eritrea',
	},
	{
		label: 'Estonia',
		value: 'Estonia',
	},
	{
		label: 'Eswatini',
		value: 'Eswatini',
	},
	{
		label: 'Ethiopia',
		value: 'Ethiopia',
	},
	{
		label: 'Falkland Islands (Malvinas)',
		value: 'Falkland Islands (Malvinas)',
	},
	{
		label: 'Faroe Islands',
		value: 'Faroe Islands',
	},
	{
		label: 'Fiji',
		value: 'Fiji',
	},
	{
		label: 'Finland',
		value: 'Finland',
	},
	{
		label: 'France',
		value: 'France',
	},
	{
		label: 'French Guiana',
		value: 'French Guiana',
	},
	{
		label: 'French Polynesia',
		value: 'French Polynesia',
	},
	{
		label: 'Gabon',
		value: 'Gabon',
	},
	{
		label: 'Gambia',
		value: 'Gambia',
	},
	{
		label: 'Georgia',
		value: 'Georgia',
	},
	{
		label: 'Germany',
		value: 'Germany',
	},
	{
		label: 'Ghana',
		value: 'Ghana',
	},
	{
		label: 'Gibraltar',
		value: 'Gibraltar',
	},
	{
		label: 'Greece',
		value: 'Greece',
	},
	{
		label: 'Greenland',
		value: 'Greenland',
	},
	{
		label: 'Grenada',
		value: 'Grenada',
	},
	{
		label: 'Guadeloupe',
		value: 'Guadeloupe',
	},
	{
		label: 'Guam',
		value: 'Guam',
	},
	{
		label: 'Guatemala',
		value: 'Guatemala',
	},
	{
		label: 'Guernsey',
		value: 'Guernsey',
	},
	{
		label: 'Guinea',
		value: 'Guinea',
	},
	{
		label: 'Guinea-Bissau',
		value: 'Guinea-Bissau',
	},
	{
		label: 'Guyana',
		value: 'Guyana',
	},
	{
		label: 'Haiti',
		value: 'Haiti',
	},
	{
		label: 'Holy See (Vatican City State)',
		value: 'Holy See (Vatican City State)',
	},
	{
		label: 'Honduras',
		value: 'Honduras',
	},
	{
		label: 'Hong Kong',
		value: 'Hong Kong',
	},
	{
		label: 'Hungary',
		value: 'Hungary',
	},
	{
		label: 'Iceland',
		value: 'Iceland',
	},
	{
		label: 'India',
		value: 'India',
	},
	{
		label: 'Indonesia',
		value: 'Indonesia',
	},
	{
		label: 'Iran',
		value: 'Iran',
	},
	{
		label: 'Iraq',
		value: 'Iraq',
	},
	{
		label: 'Ireland',
		value: 'Ireland',
	},
	{
		label: 'Isle of Man',
		value: 'Isle of Man',
	},
	{
		label: 'Israel',
		value: 'Israel',
	},
	{
		label: 'Italy',
		value: 'Italy',
	},
	{
		name: "Ivory Coast / Cote d'Ivoire",
		dialCode: '+225',
	},
	{
		label: 'Jamaica',
		value: 'Jamaica',
	},
	{
		label: 'Japan',
		value: 'Japan',
	},
	{
		label: 'Jersey',
		value: 'Jersey',
	},
	{
		label: 'Jordan',
		value: 'Jordan',
	},
	{
		label: 'Kazakhstan',
		value: 'Kazakhstan',
	},
	{
		label: 'Kenya',
		value: 'Kenya',
	},
	{
		label: 'Kiribati',
		value: 'Kiribati',
	},
	{
		name: "Korea, Democratic People's Republic of Korea",
		dialCode: '+850',
	},
	{
		label: 'Korea, Republic of South Korea',
		value: 'Korea, Republic of South Korea',
	},
	{
		label: 'Kosovo',
		value: 'Kosovo',
	},
	{
		label: 'Kuwait',
		value: 'Kuwait',
	},
	{
		label: 'Kyrgyzstan',
		value: 'Kyrgyzstan',
	},
	{
		label: 'Laos',
		value: 'Laos',
	},
	{
		label: 'Latvia',
		value: 'Latvia',
	},
	{
		label: 'Lebanon',
		value: 'Lebanon',
	},
	{
		label: 'Lesotho',
		value: 'Lesotho',
	},
	{
		label: 'Liberia',
		value: 'Liberia',
	},
	{
		label: 'Libya',
		value: 'Libya',
	},
	{
		label: 'Liechtenstein',
		value: 'Liechtenstein',
	},
	{
		label: 'Lithuania',
		value: 'Lithuania',
	},
	{
		label: 'Luxembourg',
		value: 'Luxembourg',
	},
	{
		label: 'Macau',
		value: 'Macau',
	},
	{
		label: 'Madagascar',
		value: 'Madagascar',
	},
	{
		label: 'Malawi',
		value: 'Malawi',
	},
	{
		label: 'Malaysia',
		value: 'Malaysia',
	},
	{
		label: 'Maldives',
		value: 'Maldives',
	},
	{
		label: 'Mali',
		value: 'Mali',
	},
	{
		label: 'Malta',
		value: 'Malta',
	},
	{
		label: 'Marshall Islands',
		value: 'Marshall Islands',
	},
	{
		label: 'Martinique',
		value: 'Martinique',
	},
	{
		label: 'Mauritania',
		value: 'Mauritania',
	},
	{
		label: 'Mauritius',
		value: 'Mauritius',
	},
	{
		label: 'Mayotte',
		value: 'Mayotte',
	},
	{
		label: 'Mexico',
		value: 'Mexico',
	},
	{
		label: 'Micronesia, Federated States of Micronesia',
		value: 'Micronesia, Federated States of Micronesia',
	},
	{
		label: 'Moldova',
		value: 'Moldova',
	},
	{
		label: 'Monaco',
		value: 'Monaco',
	},
	{
		label: 'Mongolia',
		value: 'Mongolia',
	},
	{
		label: 'Montenegro',
		value: 'Montenegro',
	},
	{
		label: 'Montserrat',
		value: 'Montserrat',
	},
	{
		label: 'Morocco',
		value: 'Morocco',
	},
	{
		label: 'Mozambique',
		value: 'Mozambique',
	},
	{
		label: 'Myanmar',
		value: 'Myanmar',
	},
	{
		label: 'Namibia',
		value: 'Namibia',
	},
	{
		label: 'Nauru',
		value: 'Nauru',
	},
	{
		label: 'Nepal',
		value: 'Nepal',
	},
	{
		label: 'Netherlands',
		value: 'Netherlands',
	},
	{
		label: 'Netherlands Antilles',
		value: 'Netherlands Antilles',
	},
	{
		label: 'New Caledonia',
		value: 'New Caledonia',
	},
	{
		label: 'New Zealand',
		value: 'New Zealand',
	},
	{
		label: 'Nicaragua',
		value: 'Nicaragua',
	},
	{
		label: 'Niger',
		value: 'Niger',
	},
	{
		label: 'Nigeria',
		value: 'Nigeria',
	},
	{
		label: 'Niue',
		value: 'Niue',
	},
	{
		label: 'Norfolk Island',
		value: 'Norfolk Island',
	},
	{
		label: 'North Macedonia',
		value: 'North Macedonia',
	},
	{
		label: 'Northern Mariana Islands',
		value: 'Northern Mariana Islands',
	},
	{
		label: 'Norway',
		value: 'Norway',
	},
	{
		label: 'Oman',
		value: 'Oman',
	},
	{
		label: 'Pakistan',
		value: 'Pakistan',
	},
	{
		label: 'Palau',
		value: 'Palau',
	},
	{
		label: 'Palestine',
		value: 'Palestine',
	},
	{
		label: 'Panama',
		value: 'Panama',
	},
	{
		label: 'Papua New Guinea',
		value: 'Papua New Guinea',
	},
	{
		label: 'Paraguay',
		value: 'Paraguay',
	},
	{
		label: 'Peru',
		value: 'Peru',
	},
	{
		label: 'Philippines',
		value: 'Philippines',
	},
	{
		label: 'Pitcairn',
		value: 'Pitcairn',
	},
	{
		label: 'Poland',
		value: 'Poland',
	},
	{
		label: 'Portugal',
		value: 'Portugal',
	},
	{
		label: 'Puerto Rico',
		value: 'Puerto Rico',
	},
	{
		label: 'Qatar',
		value: 'Qatar',
	},
	{
		label: 'Reunion',
		value: 'Reunion',
	},
	{
		label: 'Romania',
		value: 'Romania',
	},
	{
		label: 'Russia',
		value: 'Russia',
	},
	{
		label: 'Rwanda',
		value: 'Rwanda',
	},
	{
		label: 'Saint Barthelemy',
		value: 'Saint Barthelemy',
	},
	{
		label: 'Saint Helena, Ascension and Tristan Da Cunha',
		value: 'Saint Helena, Ascension and Tristan Da Cunha',
	},
	{
		label: 'Saint Kitts and Nevis',
		value: 'Saint Kitts and Nevis',
	},
	{
		label: 'Saint Lucia',
		value: 'Saint Lucia',
	},
	{
		label: 'Saint Martin',
		value: 'Saint Martin',
	},
	{
		label: 'Saint Pierre and Miquelon',
		value: 'Saint Pierre and Miquelon',
	},
	{
		label: 'Saint Vincent and the Grenadines',
		value: 'Saint Vincent and the Grenadines',
	},
	{
		label: 'Samoa',
		value: 'Samoa',
	},
	{
		label: 'San Marino',
		value: 'San Marino',
	},
	{
		label: 'Sao Tome and Principe',
		value: 'Sao Tome and Principe',
	},
	{
		label: 'Saudi Arabia',
		value: 'Saudi Arabia',
	},
	{
		label: 'Senegal',
		value: 'Senegal',
	},
	{
		label: 'Serbia',
		value: 'Serbia',
	},
	{
		label: 'Seychelles',
		value: 'Seychelles',
	},
	{
		label: 'Sierra Leone',
		value: 'Sierra Leone',
	},
	{
		label: 'Singapore',
		value: 'Singapore',
	},
	{
		label: 'Sint Maarten',
		value: 'Sint Maarten',
	},
	{
		label: 'Slovakia',
		value: 'Slovakia',
	},
	{
		label: 'Slovenia',
		value: 'Slovenia',
	},
	{
		label: 'Solomon Islands',
		value: 'Solomon Islands',
	},
	{
		label: 'Somalia',
		value: 'Somalia',
	},
	{
		label: 'South Africa',
		value: 'South Africa',
	},
	{
		label: 'South Georgia and the South Sandwich Islands',
		value: 'South Georgia and the South Sandwich Islands',
	},
	{
		label: 'South Sudan',
		value: 'South Sudan',
	},
	{
		label: 'Spain',
		value: 'Spain',
	},
	{
		label: 'Sri Lanka',
		value: 'Sri Lanka',
	},
	{
		label: 'Sudan',
		value: 'Sudan',
	},
	{
		label: 'Suriname',
		value: 'Suriname',
	},
	{
		label: 'Svalbard and Jan Mayen',
		value: 'Svalbard and Jan Mayen',
	},
	{
		label: 'Sweden',
		value: 'Sweden',
	},
	{
		label: 'Switzerland',
		value: 'Switzerland',
	},
	{
		label: 'Syrian Arab Republic',
		value: 'Syrian Arab Republic',
	},
	{
		label: 'Taiwan',
		value: 'Taiwan',
	},
	{
		label: 'Tajikistan',
		value: 'Tajikistan',
	},
	{
		label: 'Tanzania, United Republic of Tanzania',
		value: 'Tanzania, United Republic of Tanzania',
	},
	{
		label: 'Thailand',
		value: 'Thailand',
	},
	{
		label: 'Timor-Leste',
		value: 'Timor-Leste',
	},
	{
		label: 'Togo',
		value: 'Togo',
	},
	{
		label: 'Tokelau',
		value: 'Tokelau',
	},
	{
		label: 'Tonga',
		value: 'Tonga',
	},
	{
		label: 'Trinidad and Tobago',
		value: 'Trinidad and Tobago',
	},
	{
		label: 'Tunisia',
		value: 'Tunisia',
	},
	{
		label: 'Turkey',
		value: 'Turkey',
	},
	{
		label: 'Turkmenistan',
		value: 'Turkmenistan',
	},
	{
		label: 'Turks and Caicos Islands',
		value: 'Turks and Caicos Islands',
	},
	{
		label: 'Tuvalu',
		value: 'Tuvalu',
	},
	{
		label: 'Uganda',
		value: 'Uganda',
	},
	{
		label: 'Ukraine',
		value: 'Ukraine',
	},
	{
		label: 'United Arab Emirates',
		value: 'United Arab Emirates',
	},
	{
		label: 'United Kingdom',
		value: 'United Kingdom',
	},

	{
		label: 'Uruguay',
		value: 'Uruguay',
	},
	{
		label: 'Uzbekistan',
		value: 'Uzbekistan',
	},
	{
		label: 'Vanuatu',
		value: 'Vanuatu',
	},
	{
		label: 'Venezuela, Bolivarian Republic of Venezuela',
		value: 'Venezuela, Bolivarian Republic of Venezuela',
	},
	{
		label: 'Vietnam',
		value: 'Vietnam',
	},
	{
		label: 'Virgin Islands, British',
		value: 'Virgin Islands, British',
	},
	{
		label: 'Virgin Islands, U.S.',
		value: 'Virgin Islands, U.S.',
	},
	{
		label: 'Wallis and Futuna',
		value: 'Wallis and Futuna',
	},
	{
		label: 'Yemen',
		value: 'Yemen',
	},
	{
		label: 'Zambia',
		value: 'Zambia',
	},
	{
		label: 'Zimbabwe',
		value: 'Zimbabwe',
	},
];
export const countryJSON = [
	{
		label: 'United States',
		value: '+1',
	},
	{
		label: 'Afghanistan',
		value: '+93',
	},
	{
		label: 'Aland Islands',
		value: '+358',
	},
	{
		label: 'Albania',
		value: '+355',
	},
	{
		label: 'Algeria',
		value: '+213',
	},
	{
		label: 'AmericanSamoa',
		value: '+1684',
	},
	{
		label: 'Andorra',
		value: '+376',
	},
	{
		label: 'Angola',
		value: '+244',
	},
	{
		label: 'Anguilla',
		value: '+1264',
	},
	{
		label: 'Antarctica',
		value: '+672',
	},
	{
		label: 'Antigua and Barbuda',
		value: '+1268',
	},
	{
		label: 'Argentina',
		value: '+54',
	},
	{
		label: 'Armenia',
		value: '+374',
	},
	{
		label: 'Aruba',
		value: '+297',
	},
	{
		label: 'Ascension Island',
		value: '+247',
	},
	{
		label: 'Australia',
		value: '+61',
	},
	{
		label: 'Austria',
		value: '+43',
	},
	{
		label: 'Azerbaijan',
		value: '+994',
	},
	{
		label: 'Bahamas',
		value: '+1242',
	},
	{
		label: 'Bahrain',
		value: '+973',
	},
	{
		label: 'Bangladesh',
		value: '+880',
	},
	{
		label: 'Barbados',
		value: '+1246',
	},
	{
		label: 'Belarus',
		value: '+375',
	},
	{
		label: 'Belgium',
		value: '+32',
	},
	{
		label: 'Belize',
		value: '+501',
	},
	{
		label: 'Benin',
		value: '+229',
	},
	{
		label: 'Bermuda',
		value: '+1441',
	},
	{
		label: 'Bhutan',
		value: '+975',
	},
	{
		label: 'Bolivia',
		value: '+591',
	},
	{
		label: 'Bosnia and Herzegovina',
		value: '+387',
	},
	{
		label: 'Botswana',
		value: '+267',
	},
	{
		label: 'Brazil',
		value: '+55',
	},
	{
		label: 'British Indian Ocean Territory',
		value: '+246',
	},
	{
		label: 'Brunei Darussalam',
		value: '+673',
	},
	{
		label: 'Bulgaria',
		value: '+359',
	},
	{
		label: 'Burkina Faso',
		value: '+226',
	},
	{
		label: 'Burundi',
		value: '+257',
	},
	{
		label: 'Cambodia',
		value: '+855',
	},
	{
		label: 'Cameroon',
		value: '+237',
	},
	{
		label: 'Cape Verde',
		value: '+238',
	},
	{
		label: 'Cayman Islands',
		value: '+1345',
	},
	{
		label: 'Central African Republic',
		value: '+236',
	},
	{
		label: 'Chad',
		value: '+235',
	},
	{
		label: 'Chile',
		value: '+56',
	},
	{
		label: 'China',
		value: '+86',
	},
	{
		label: 'Christmas Island',
		value: '+61',
	},
	{
		label: 'Cocos (Keeling) Islands',
		value: '+61',
	},
	{
		label: 'Colombia',
		value: '+57',
	},
	{
		label: 'Comoros',
		value: '+269',
	},
	{
		label: 'Congo',
		value: '+242',
	},
	{
		label: 'Cook Islands',
		value: '+682',
	},
	{
		label: 'Costa Rica',
		value: '+506',
	},
	{
		label: 'Croatia',
		value: '+385',
	},
	{
		label: 'Cuba',
		value: '+53',
	},
	{
		label: 'Cyprus',
		value: '+357',
	},
	{
		label: 'Czech Republic',
		value: '+420',
	},
	{
		label: 'Democratic Republic of the Congo',
		value: '+243',
	},
	{
		label: 'Denmark',
		value: '+45',
	},
	{
		label: 'Djibouti',
		value: '+253',
	},
	{
		label: 'Dominica',
		value: '+1767',
	},
	{
		label: 'Dominican Republic',
		value: '+1849',
	},
	{
		label: 'Ecuador',
		value: '+593',
	},
	{
		label: 'Egypt',
		value: '+20',
	},
	{
		label: 'El Salvador',
		value: '+503',
	},
	{
		label: 'Equatorial Guinea',
		value: '+240',
	},
	{
		label: 'Eritrea',
		value: '+291',
	},
	{
		label: 'Estonia',
		value: '+372',
	},
	{
		label: 'Eswatini',
		value: '+268',
	},
	{
		label: 'Ethiopia',
		value: '+251',
	},
	{
		label: 'Falkland Islands (Malvinas)',
		value: '+500',
	},
	{
		label: 'Faroe Islands',
		value: '+298',
	},
	{
		label: 'Fiji',
		value: '+679',
	},
	{
		label: 'Finland',
		value: '+358',
	},
	{
		label: 'France',
		value: '+33',
	},
	{
		label: 'French Guiana',
		value: '+594',
	},
	{
		label: 'French Polynesia',
		value: '+689',
	},
	{
		label: 'Gabon',
		value: '+241',
	},
	{
		label: 'Gambia',
		value: '+220',
	},
	{
		label: 'Georgia',
		value: '+995',
	},
	{
		label: 'Germany',
		value: '+49',
	},
	{
		label: 'Ghana',
		value: '+233',
	},
	{
		label: 'Gibraltar',
		value: '+350',
	},
	{
		label: 'Greece',
		value: '+30',
	},
	{
		label: 'Greenland',
		value: '+299',
	},
	{
		label: 'Grenada',
		value: '+1473',
	},
	{
		label: 'Guadeloupe',
		value: '+590',
	},
	{
		label: 'Guam',
		value: '+1671',
	},
	{
		label: 'Guatemala',
		value: '+502',
	},
	{
		label: 'Guernsey',
		value: '+44',
	},
	{
		label: 'Guinea',
		value: '+224',
	},
	{
		label: 'Guinea-Bissau',
		value: '+245',
	},
	{
		label: 'Guyana',
		value: '+592',
	},
	{
		label: 'Haiti',
		value: '+509',
	},
	{
		label: 'Holy See (Vatican City State)',
		value: '+379',
	},
	{
		label: 'Honduras',
		value: '+504',
	},
	{
		label: 'Hong Kong',
		value: '+852',
	},
	{
		label: 'Hungary',
		value: '+36',
	},
	{
		label: 'Iceland',
		value: '+354',
	},
	{
		label: 'India',
		value: '+91',
	},
	{
		label: 'Indonesia',
		value: '+62',
	},
	{
		label: 'Iran',
		value: '+98',
	},
	{
		label: 'Iraq',
		value: '+964',
	},
	{
		label: 'Ireland',
		value: '+353',
	},
	{
		label: 'Isle of Man',
		value: '+44',
	},
	{
		label: 'Israel',
		value: '+972',
	},
	{
		label: 'Italy',
		value: '+39',
	},
	{
		name: "Ivory Coast / Cote d'Ivoire",
		dialCode: '+225',
	},
	{
		label: 'Jamaica',
		value: '+1876',
	},
	{
		label: 'Japan',
		value: '+81',
	},
	{
		label: 'Jersey',
		value: '+44',
	},
	{
		label: 'Jordan',
		value: '+962',
	},
	{
		label: 'Kazakhstan',
		value: '+77',
	},
	{
		label: 'Kenya',
		value: '+254',
	},
	{
		label: 'Kiribati',
		value: '+686',
	},
	{
		name: "Korea, Democratic People's Republic of Korea",
		dialCode: '+850',
	},
	{
		label: 'Korea, Republic of South Korea',
		value: '+82',
	},
	{
		label: 'Kosovo',
		value: '+383',
	},
	{
		label: 'Kuwait',
		value: '+965',
	},
	{
		label: 'Kyrgyzstan',
		value: '+996',
	},
	{
		label: 'Laos',
		value: '+856',
	},
	{
		label: 'Latvia',
		value: '+371',
	},
	{
		label: 'Lebanon',
		value: '+961',
	},
	{
		label: 'Lesotho',
		value: '+266',
	},
	{
		label: 'Liberia',
		value: '+231',
	},
	{
		label: 'Libya',
		value: '+218',
	},
	{
		label: 'Liechtenstein',
		value: '+423',
	},
	{
		label: 'Lithuania',
		value: '+370',
	},
	{
		label: 'Luxembourg',
		value: '+352',
	},
	{
		label: 'Macau',
		value: '+853',
	},
	{
		label: 'Madagascar',
		value: '+261',
	},
	{
		label: 'Malawi',
		value: '+265',
	},
	{
		label: 'Malaysia',
		value: '+60',
	},
	{
		label: 'Maldives',
		value: '+960',
	},
	{
		label: 'Mali',
		value: '+223',
	},
	{
		label: 'Malta',
		value: '+356',
	},
	{
		label: 'Marshall Islands',
		value: '+692',
	},
	{
		label: 'Martinique',
		value: '+596',
	},
	{
		label: 'Mauritania',
		value: '+222',
	},
	{
		label: 'Mauritius',
		value: '+230',
	},
	{
		label: 'Mayotte',
		value: '+262',
	},
	{
		label: 'Mexico',
		value: '+52',
	},
	{
		label: 'Micronesia, Federated States of Micronesia',
		value: '+691',
	},
	{
		label: 'Moldova',
		value: '+373',
	},
	{
		label: 'Monaco',
		value: '+377',
	},
	{
		label: 'Mongolia',
		value: '+976',
	},
	{
		label: 'Montenegro',
		value: '+382',
	},
	{
		label: 'Montserrat',
		value: '+1664',
	},
	{
		label: 'Morocco',
		value: '+212',
	},
	{
		label: 'Mozambique',
		value: '+258',
	},
	{
		label: 'Myanmar',
		value: '+95',
	},
	{
		label: 'Namibia',
		value: '+264',
	},
	{
		label: 'Nauru',
		value: '+674',
	},
	{
		label: 'Nepal',
		value: '+977',
	},
	{
		label: 'Netherlands',
		value: '+31',
	},
	{
		label: 'Netherlands Antilles',
		value: '+599',
	},
	{
		label: 'New Caledonia',
		value: '+687',
	},
	{
		label: 'New Zealand',
		value: '+64',
	},
	{
		label: 'Nicaragua',
		value: '+505',
	},
	{
		label: 'Niger',
		value: '+227',
	},
	{
		label: 'Nigeria',
		value: '+234',
	},
	{
		label: 'Niue',
		value: '+683',
	},
	{
		label: 'Norfolk Island',
		value: '+672',
	},
	{
		label: 'North Macedonia',
		value: '+389',
	},
	{
		label: 'Northern Mariana Islands',
		value: '+1670',
	},
	{
		label: 'Norway',
		value: '+47',
	},
	{
		label: 'Oman',
		value: '+968',
	},
	{
		label: 'Pakistan',
		value: '+92',
	},
	{
		label: 'Palau',
		value: '+680',
	},
	{
		label: 'Palestine',
		value: '+970',
	},
	{
		label: 'Panama',
		value: '+507',
	},
	{
		label: 'Papua New Guinea',
		value: '+675',
	},
	{
		label: 'Paraguay',
		value: '+595',
	},
	{
		label: 'Peru',
		value: '+51',
	},
	{
		label: 'Philippines',
		value: '+63',
	},
	{
		label: 'Pitcairn',
		value: '+872',
	},
	{
		label: 'Poland',
		value: '+48',
	},
	{
		label: 'Portugal',
		value: '+351',
	},
	{
		label: 'Puerto Rico',
		value: '+1939',
	},
	{
		label: 'Qatar',
		value: '+974',
	},
	{
		label: 'Reunion',
		value: '+262',
	},
	{
		label: 'Romania',
		value: '+40',
	},
	{
		label: 'Russia',
		value: '+7',
	},
	{
		label: 'Rwanda',
		value: '+250',
	},
	{
		label: 'Saint Barthelemy',
		value: '+590',
	},
	{
		label: 'Saint Helena, Ascension and Tristan Da Cunha',
		value: '+290',
	},
	{
		label: 'Saint Kitts and Nevis',
		value: '+1869',
	},
	{
		label: 'Saint Lucia',
		value: '+1758',
	},
	{
		label: 'Saint Martin',
		value: '+590',
	},
	{
		label: 'Saint Pierre and Miquelon',
		value: '+508',
	},
	{
		label: 'Saint Vincent and the Grenadines',
		value: '+1784',
	},
	{
		label: 'Samoa',
		value: '+685',
	},
	{
		label: 'San Marino',
		value: '+378',
	},
	{
		label: 'Sao Tome and Principe',
		value: '+239',
	},
	{
		label: 'Saudi Arabia',
		value: '+966',
	},
	{
		label: 'Senegal',
		value: '+221',
	},
	{
		label: 'Serbia',
		value: '+381',
	},
	{
		label: 'Seychelles',
		value: '+248',
	},
	{
		label: 'Sierra Leone',
		value: '+232',
	},
	{
		label: 'Singapore',
		value: '+65',
	},
	{
		label: 'Sint Maarten',
		value: '+1721',
	},
	{
		label: 'Slovakia',
		value: '+421',
	},
	{
		label: 'Slovenia',
		value: '+386',
	},
	{
		label: 'Solomon Islands',
		value: '+677',
	},
	{
		label: 'Somalia',
		value: '+252',
	},
	{
		label: 'South Africa',
		value: '+27',
	},
	{
		label: 'South Georgia and the South Sandwich Islands',
		value: '+500',
	},
	{
		label: 'South Sudan',
		value: '+211',
	},
	{
		label: 'Spain',
		value: '+34',
	},
	{
		label: 'Sri Lanka',
		value: '+94',
	},
	{
		label: 'Sudan',
		value: '+249',
	},
	{
		label: 'Suriname',
		value: '+597',
	},
	{
		label: 'Svalbard and Jan Mayen',
		value: '+47',
	},
	{
		label: 'Sweden',
		value: '+46',
	},
	{
		label: 'Switzerland',
		value: '+41',
	},
	{
		label: 'Syrian Arab Republic',
		value: '+963',
	},
	{
		label: 'Taiwan',
		value: '+886',
	},
	{
		label: 'Tajikistan',
		value: '+992',
	},
	{
		label: 'Tanzania, United Republic of Tanzania',
		value: '+255',
	},
	{
		label: 'Thailand',
		value: '+66',
	},
	{
		label: 'Timor-Leste',
		value: '+670',
	},
	{
		label: 'Togo',
		value: '+228',
	},
	{
		label: 'Tokelau',
		value: '+690',
	},
	{
		label: 'Tonga',
		value: '+676',
	},
	{
		label: 'Trinidad and Tobago',
		value: '+1868',
	},
	{
		label: 'Tunisia',
		value: '+216',
	},
	{
		label: 'Turkey',
		value: '+90',
	},
	{
		label: 'Turkmenistan',
		value: '+993',
	},
	{
		label: 'Turks and Caicos Islands',
		value: '+1649',
	},
	{
		label: 'Tuvalu',
		value: '+688',
	},
	{
		label: 'Uganda',
		value: '+256',
	},
	{
		label: 'Ukraine',
		value: '+380',
	},
	{
		label: 'United Arab Emirates',
		value: '+971',
	},
	{
		label: 'United Kingdom',
		value: '+44',
	},

	{
		label: 'Uruguay',
		value: '+598',
	},
	{
		label: 'Uzbekistan',
		value: '+998',
	},
	{
		label: 'Vanuatu',
		value: '+678',
	},
	{
		label: 'Venezuela, Bolivarian Republic of Venezuela',
		value: '+58',
	},
	{
		label: 'Vietnam',
		value: '+84',
	},
	{
		label: 'Virgin Islands, British',
		value: '+1284',
	},
	{
		label: 'Virgin Islands, U.S.',
		value: '+1340',
	},
	{
		label: 'Wallis and Futuna',
		value: '+681',
	},
	{
		label: 'Yemen',
		value: '+967',
	},
	{
		label: 'Zambia',
		value: '+260',
	},
	{
		label: 'Zimbabwe',
		value: '+263',
	},
];
