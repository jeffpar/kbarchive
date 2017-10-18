---
layout: page
title: "Q80436: HP DeskJet, Print Manager, and Enhanced Error Detection"
permalink: kb/080/Q80436/
---

## Q80436: HP DeskJet, Print Manager, and Enhanced Error Detection

	Article: Q80436
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hewlett-Packard (HP) has confirmed that when using the HP DeskJet Series printer
	driver versions 2.0 and 3.0 with enhanced error detection enabled, Windows Print
	Manager is ignored.
	
	To enable Print Manager, disable the enhanced error detection feature.
	
	MORE INFORMATION
	================
	
	To use Print Manager with the HP DeskJet printer driver versions 2.0 and 3.0,
	the printer driver's enhanced error detection must be disabled. To enable the
	Print Manager, select the Use Print Manager check box in Control Panel.
	
	To turn off the enhanced error detection, add the following lines to the WIN.INI
	configuration file (located in the directory in which Windows was installed):
	
	     [STATDLL]
	     override=yes
	
	If these lines are not added to the WIN.INI file, or if the following entry is
	used, the printer driver will default to using enhanced error detection:
	
	     [STATDLL]
	     override=no
	
	For additional information, contact HP technical support.
	
	The products included here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 KBHW win30 500c win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
