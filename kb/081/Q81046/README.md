---
layout: page
title: "Q81046: Epson LQ Support of Extended Characters in Windows"
permalink: /kb/081/Q81046/
---

## Q81046: Epson LQ Support of Extended Characters in Windows

{% raw %}

	Article: Q81046
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
	
	The extended or international ANSI characters set (character values 128 through
	255) is supported on the Epson LQ printers listed below:
	
	  LQ-500
	  LQ-2500
	  LQ-850
	  LQ-1050
	
	No other LQ printer models catered by EPSON24.DRV support the extended
	characters.
	
	MORE INFORMATION
	================
	
	Other Epson LQ printer models do not provide support for these characters, and
	the characters are not available to Windows when printing with the resident
	fonts of the printer.
	
	NOTE: This limitation applies only to printer fonts; raster fonts print the
	extended characters. Screen fonts provided by Windows also print the extended
	ANSI characters above 128.
	
	
	Additional query words: 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	

{% endraw %}
