---
layout: page
title: "Q110881: Poor Sound Quality Using TrueSpeech Compression"
permalink: /kb/110/Q110881/
---

## Q110881: Poor Sound Quality Using TrueSpeech Compression

	Article: Q110881
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When playing a file compressed using the Windows Sound System TrueSpeech
	compression scheme with the Turtle Beach MultiSound audio card, you may hear
	popping or scratchy noises. This is due to a limitation of the audio card and
	its Windows driver.
	
	MORE INFORMATION
	================
	
	There are currently two versions of the MultiSound Windows driver: 1.0 and 2.0.
	Version 1.0 of this driver supports sampling frequencies of 11.025 kHz, 22.050
	kHz, and 44.100 kHz. The TrueSpeech compression scheme, however, uses an 8.00
	kHz sample that the driver does not support.
	
	The range of sample frequencies in MultiSound Windows driver version 2.0 is
	increased through a process known as frequency dithering. This allows the
	MultiSound's built-in Digital Signal Processor (DSP) to contour the frequencies
	into a more usable range by filling in the gaps. However, the process is not
	compatible with the TrueSpeech compression method.
	
	For further information about the Turtle Beach MultiSound audio card or the
	availability of Windows drivers, contact Turtle Beach.
	
	The MultiSound audio card and its Windows drivers are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 2.00 multi sound monterey play back record digital samples sampled
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	
	=============================================================================
	
