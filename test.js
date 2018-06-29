import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('„Fix    Schwyz!“ !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~quäkt Jürgen blöd vom Paß ÄÖÜ.');

	t.deepEqual(result, [
		{
			title: 'fix-schwyz-quaekt-juergen-bloed-vom-pass-ae-oe-ue',
			subtitle: '„Fix    Schwyz!“ !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~quäkt Jürgen blöd vom Paß ÄÖÜ. => fix-schwyz-quaekt-juergen-bloed-vom-pass-ae-oe-ue',
			arg: 'fix-schwyz-quaekt-juergen-bloed-vom-pass-ae-oe-ue',
			icon: {
				type: 'fileicon',
				path: '~/Desktop'
			}
		}
	]);
});
