---
layout: page
title: "Q113232: Printing Problems with WPS and MS-DOS-Based Downloadable Fonts"
permalink: kb/113/Q113232/
---

## Q113232: Printing Problems with WPS and MS-DOS-Based Downloadable Fonts

	Article: Q113232
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows Printing System, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows Printing System (WPS) version 1.0 with MS-DOS-based
	programs that download fonts to the printer, the printer either acts erratically
	(for example, it generates garbled printouts), or it does not print at all.
	
	CAUSE
	=====
	
	WPS misinterprets some downloadable fonts from MS-DOS-based programs as code to
	switch WPS in and out of the WPS mode.
	
	NOTE: This problem can occur whether or not Windows is running.
	
	WORKAROUND
	==========
	
	To work around this problem, you can remove the WPS cartridge and print from
	your MS-DOS-based programs before or after running Windows. If you are running
	the MS-DOS-based program under Windows, removing the cartridge may not work. If
	you must run these programs under Windows, uninstall the Windows Printing System
	to achieve reliable printouts.
	
	Additional query words: FONTS DOS windows printing 1.00 1.0 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbWinPrint100
	Version           : :1.0,3.1,3.11
	
	=============================================================================
	
