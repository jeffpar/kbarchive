---
layout: page
title: "Q82752: Windows 3.1 and Soft Font Limitations"
permalink: /kb/082/Q82752/
---

## Q82752: Windows 3.1 and Soft Font Limitations

	Article: Q82752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the Microsoft Windows operating system version 3.1 with the
	PSCRIPT.DRV version 3.5, there is no limit on the number of PostScript soft
	fonts you can install. The only limit is the size of the WIN.INI file, which is
	64K. (The useful size is approximately 50K.)
	
	The Windows 3.0 PostScript driver versions 3.3 and 3.4 require that the font
	directory (which lists metrics for all installed fonts) fit in a 64K block of
	memory. At approximately 170 entries, the directory would need to be larger than
	64K.
	
	
	KBCategory: kbprint
	KBSubcategory: win31 winmem
	
	Additional query words: 3.10 3.11 true type ATM
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
