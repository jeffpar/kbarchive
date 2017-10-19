---
layout: page
title: "Q63767: Screen Fonts Mapping Incorrectly in Windows 3.0"
permalink: /kb/063/Q63767/
---

## Q63767: Screen Fonts Mapping Incorrectly in Windows 3.0

	Article: Q63767
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using soft fonts (such as those produced by Bitstream or Hewlett-Packard)
	in Microsoft Windows, the font displayed on the screen may be different from the
	font selected. This often occurs if you have changed the order of your screen
	fonts in the [Fonts] section of the WIN.INI file. Changing the order of the
	fonts that are listed in this section can sometimes correct this problem.
	
	For example, change the order from
	
	     Symbol 8,10 (VGA res)=SYMBOLE.FON
	     ITCZapfDingbats 6,8 (VGA res)=zd24e.fon
	
	To the following:
	
	     ITCZapfDingbats 6,8 (VGA res)=zd24e.fon
	     Symbol 8,10 (VGA res)=SYMBOLE.FON
	
	After you modify the WIN.INI file, you must exit Windows for the change to take
	effect.
	
	MORE INFORMATION
	================
	
	Windows programs search the WIN.INI file for screen font information and stop at
	the first font file that returns the correct information, based on the search.
	Different programs may indicate different results, based on the criteria that
	they use. There are fonts that may have similar information in the beginning of
	the file, causing the program to stop its search and display an incorrect screen
	font. Font installation packages such as the Bitstream Font Installation program
	create and install screen fonts into the WIN.INI file.
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3RDPARTY
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
