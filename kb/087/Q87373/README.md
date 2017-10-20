---
layout: page
title: "Q87373: Using Bitstream Facelift (Intellifont &amp; Bubble-Jet) w/Windows"
permalink: /kb/087/Q87373/
---

## Q87373: Using Bitstream Facelift (Intellifont &amp; Bubble-Jet) w/Windows

{% raw %}

	Article: Q87373
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following issues associated with using Bitstream
	Facelift versions 1.0 and 1.2 with Microsoft Windows:
	
	- Bitstream Facelift Version 1.0 with EGA Display Driver
	
	- Using Facelift with Hewlett-Packard (HP) Intellifont
	
	- Using Facelift with Canon Bubble-Jet Printers
	
	NOTE: According to the Bitstream tech support recording, Bitstream no longer
	supports Facelift 1.0 or 1.2. They now advise customers to upgrade to Facelift
	2.0.
	
	MORE INFORMATION
	================
	
	Bitstream Facelift Version 1.0 with EGA Display Driver
	------------------------------------------------------
	
	When running Facelift 1.0 while installed for the EGA video driver, fonts
	displayed in MS-DOS applications that run in a window will not correctly display
	IBM extended character sets. This is a limitation of Facelift. For more
	information, contact Bitstream technical support.
	
	Using Facelift with HP Intellifont
	----------------------------------
	
	Installing Facelift version 1.0 or later while HP Intellifont is installed will
	result in Intellifont being disabled.
	
	Delete Facelift and Intellifont, then reinstall them, installing Facelift first.
	Both Facelift and Intellifont modify the WIN.INI and SYSTEM.INI files; it is
	necessary to remove these modifications before reinstalling. Consult the
	documentation for Intellifont for Windows and Facelift, or the support
	facilities of the respective programs, for instructions on how to delete these
	programs.
	
	Neither of these programs will run in real mode and can prevent Windows running
	in real mode.
	
	Using Facelift with Canon Bubble-Jet Printers
	---------------------------------------------
	
	Facelift version 1.2 will work with the Canon Bubble-Jet printers BJ-10e and
	BJ-130e provided you are using the printer drivers that ship on the Supplemental
	Driver Library (SDL).
	
	If an early version of Facelift is used, the following will result:
	
	1. The Print option may be unavailable (dimmed).
	
	2. Word for Windows and Excel may show no fonts for this printer.
	
	3. Some applications may give a
	
	  Not able to Print
	
	  error message when starting or trying to print.
	
	Bitstream Technical Support: (617) 497-7514
	HP Personal Peripheral Assist Line: (208) 323-2551
	HP National Support line: (800) 752-0900
	
	The Facelift and Intellifont products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
