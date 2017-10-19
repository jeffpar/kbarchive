---
layout: page
title: "Q116173: Installing the HP HP560C Printer Driver"
permalink: /kb/116/Q116173/
---

## Q116173: Installing the HP HP560C Printer Driver

	Article: Q116173
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot install the new Hewlett-Packard (HP) 560C printer driver by running
	Windows Control Panel, choosing the Printers icon, and choosing Unlisted Or
	Updated Printer.
	
	According to HP, you can install the 560C printer driver by choosing Run from the
	File menu in Program Manager, typing "a:\hpsetup.exe" (without the quotation
	marks), and then choose OK. For more information about installing the 560C
	printer driver, contact HP.
	
	The HP BBS is 208-344-1691 and the filename is D5WN31.EXE. The file date is
	5/9/94 and it installs properly for WFW 3.11. It doesn't replace printman.exe or
	commctrl.dll, even though the HP dates are newer. The HP installation
	HPSETUP.EXE from the file D5WN31.EXE will not let you configure for more than
	one LPT port for any of the individual printer drivers that are supplied with
	D5WN31.EXE.
	
	
	Additional query words: 3.10 hpsetup win31 wfw wfwg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
