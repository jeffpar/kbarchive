---
layout: page
title: "Q87746: WordPerfect Loads Slowly After Installing CorelDRAW 3.0"
permalink: /kb/087/Q87746/
---

## Q87746: WordPerfect Loads Slowly After Installing CorelDRAW 3.0

	Article: Q87746
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running the CorelDRAW 3.0 Setup program from the CD-ROM, it may take up to
	15 minutes to start WordPerfect for Windows. WordPerfect for Windows may also
	start slowly when you select a printer driver in WordPerfect for Windows.
	
	CAUSE
	=====
	
	When installing CorelDRAW 3.0 from the CD, it will add approximately 250
	TrueType fonts (unless otherwise specified). These fonts are added to any
	existing font packages installed, such as the TrueType font pack or the standard
	set of Windows 3.1 TrueType fonts.
	
	When WordPerfect is started, it looks for a .WRS printer file. If this file is
	not available, it will create one. The .WRS file is also updated whenever the
	Windows printer driver settings are changed (including changing paper
	orientation, size, source, and the available fonts).
	
	The large number of fonts installed by CorelDRAW are what cause the very long
	start time for WordPerfect for Windows. WordPerfect is translating the Windows
	3.1 printer driver settings into a format that WordPerfect can use.
	
	Either of the following two workarounds prevent WordPerfect from reading the
	fonts in the WIN.INI file, allowing WordPerfect to start normally.
	
	WORKAROUND
	==========
	
	Workaround One
	--------------
	
	- If the WordPerfect for Windows version date is 11-4-91, make sure the
	  following line is added to the [COMPATIBILITY] section of the WIN.INI file:
	
	  Win2wrs=0x01210
	
	- If the WordPerfect for Windows version date is 4-30-92, make sure the above
	  line is removed from the [COMPATIBILITY] section of the WIN.INI file. The
	  installation program should remove the line from the section.
	
	Workaround Two
	--------------
	
	Set the attribute on all .WRS printer files to read-only by using the MS-DOS
	Attrib command:
	
	     attrib +r *.wrs
	
	For more information on the maximum number of TrueType fonts, query on the
	following words in the Microsoft Knowledge Base:
	
	  TrueType and font and max
	
	The products included here, CorelDRAW and WordPerfect for Windows, are
	manufactured by vendors independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	Additional query words: 3.10 TrueType font max 3.11 tt ttf WIN.INI compact disk disc 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
