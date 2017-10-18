---
layout: page
title: "Q62352: Windows 3.0 Enhanced Mode Hangs at Startup on Super VGA"
permalink: kb/062/Q62352/
---

## Q62352: Windows 3.0 Enhanced Mode Hangs at Startup on Super VGA

	Article: Q62352
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows version 3.0 enhanced mode stops responding (hang) during start
	up on a 386 machine equipped with a Super VGA adapter. Real and standard modes
	(WIN /R and WIN /S) work correctly, and Setup runs properly.
	
	CAUSE
	=====
	
	This problem occurs because many Super VGA cards require an EMMExclude=
	statement to work properly under Windows version 3.0 enhanced mode. This is
	because they use an additional memory area in the adapter segment that is not
	detected by Windows.
	
	Adapters that should NOT require an EMMExclude include IBM, Paradise, and Video
	Seven.
	
	RESOLUTION
	==========
	
	To add this statement, insert the following line under the [386Enh] section of
	the SYSTEM.INI file:
	
	     [386Enh]
	     EMMExclude=C400-C7FF
	
	If this does not help, extend the exclusion range to CBFF.
	
	MORE INFORMATION
	================
	
	A Super VGA card is defined as a display card that offers IBM Video Graphics
	Array (VGA) compatibility as well as additional proprietary-extended display
	modes, such as 800 x 600. Most non-IBM VGA cards sold today have Super VGA
	capability.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
