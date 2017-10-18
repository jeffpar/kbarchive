---
layout: page
title: "Q82751: Maximum Number of TrueType Fonts Installed"
permalink: kb/082/Q82751/
---

## Q82751: Maximum Number of TrueType Fonts Installed

	Article: Q82751
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The number of TrueType fonts in the Microsoft Windows operating system version
	3.1 are limited by the following items:
	
	- The number of fonts that can be declared in the WIN.INI file
	
	  The WIN.INI file cannot be larger than 64K. This allows for between 500 and
	  1000 fonts to be declared (depending on the length of the filenames and
	  paths).
	
	- The number of fonts than can be used simultaneously during a Windows session
	
	  The Graphical Device Interface (GDI) internal tables allow no more than 1600
	  entries. There are stricter limitations because of the size of the TrueType
	  data segment and the number of selectors available in the system. Between 300
	  and 800 different fonts can be used simultaneously during a Windows session.
	
	
	- The number of fonts that can be printed on the same document
	
	Additional query words: 3.10 3.11 true type fonts limit ttf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
