---
layout: page
title: "Q76759: Sound Blaster: 1 Digitized Voice Channel Feature"
permalink: /kb/076/Q76759/
---

## Q76759: Sound Blaster: 1 Digitized Voice Channel Feature

	Article: Q76759
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0; WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the 1 Digitized Voice Channel feature of the Sound
	Blaster card hardware and how it works with Windows with Multimedia Extensions
	or Windows version 3.1.
	
	MORE INFORMATION
	================
	
	The 1 Digitized Voice Channel is referred to as sampled sound, digitized sound,
	and so forth. The Sound Blaster refers to it as a digitized voice, which is NOT
	the same as the voices mentioned above. Multimedia Extensions to Windows calls
	this digitized sound output "waveform output," which is confusing because all
	sound is comprised of waves. Digital enthusiasts call this pulse code modulation
	(PCM), which is actually a more accurate title.
	
	Digitized sound is real sound (human voice, music, effects, and so forth) that is
	sampled and digitized with a digital-to-analog converter (DAC). This is the same
	type of data stored on audio compact discs (CDs); however, CDs have a much
	greater resolution both in sample rate (44.1 kHz) and sample word size (12 to 16
	bits).
	
	PCM is a simple technique of encoding analog audio in a digital format, where the
	waveform amplitude is sampled periodically (at the sampling frequency) and
	stored as a number. The term "8 bit" means that the stored number can have one
	of 256 discrete values; 12 bit has 4096 discrete values; and 16 bit has 65535.
	
	The Sound Blaster has one mono 8-bit DAC that can be set to a sample rate between
	~4 kHz and ~23 kHz. This does not produce very high quality but it can be fun
	none the less.
	
	Incidentally, this is where that 24th voice of the Sound Blaster version 1.0 card
	came from: 12 C/MS (creative music synthesizer) + 11 FM (frequency modulation) +
	1 DAC = 24. This is misleading.
	
	Multimedia Extensions to Windows requires a minimum of 11 kHz and 22 kHz 8-bit
	wave output, which the Sound Blaster can do.
	
	The Sound Blaster supports three different adaptive differential pulse code
	modulation (ADPCM) decompression ratios (as well as no compression) in hardware.
	Below is a list of these ratios:
	
	- 2 to 1 data compression: 4 bit ADPCM
	
	- 3 to 1 data compression: 2.6 bit ADPCM
	
	- 4 to 1 data compression: 2 bit ADPCM
	
	The greater the ratio, the greater the degradation in sample quality.
	
	Multimedia Extensions to Windows does not make use of ADPCM at this time.
	
	
	Sound Blaster is manufactured by Creative Labs, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: MMWIN 3.10 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWinMultiXSearch kbWin310 kbWinMultiX100
	Version           : :1.0; WINDOWS:3.1
	
	=============================================================================
	
