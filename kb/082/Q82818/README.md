---
layout: page
title: "Q82818: Effect of IconTitleFaceName Switch with OLE"
permalink: kb/082/Q82818/
---

## Q82818: Effect of IconTitleFaceName Switch with OLE

	Article: Q82818
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows operating system version 3.1, the WIN.INI file's [desktop]
	section contains an IconTitleFaceName switch that has no effect on OLE Packager
	object titles. Packager uses only the MS Sans Serif 8-point font. If this font
	is not installed on the system, Packager uses the next most similar font
	(Arial).
	
	The IconTitleFaceName WIN.INI switch affects icon titles only in Program Manager,
	File Manager, and the Windows desktop.
	
	Additional query words: 3.10 3.1 face
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
