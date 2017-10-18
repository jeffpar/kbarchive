---
layout: page
title: "Q137926: Underline Not Printed on IBM 40x9 Printers Using Courier"
permalink: kb/137/Q137926/
---

## Q137926: Underline Not Printed on IBM 40x9 Printers Using Courier

	Article: Q137926
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Underlining is not printed with the Courier typeface if you are using the IBM
	40x9 series of drivers to print to an IBM 40x9 series printer.
	
	IBM 40x9 series printers include the IBM 4019 and 4029 printers.
	
	CAUSE
	=====
	
	Windows NT 3.51 does not correctly issue the underline command to the printer
	during the printing process.
	
	WORKAROUND
	==========
	
	To work around this problem, change the program font to the Courier New typeface
	that uses True Type instead of the printer-resident Courier typeface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Printer-resident Courier typefaces include the following:
	
	Courier 10
	Courier 10 Bold
	Courier 12
	Courier 17*1
	
	The third-party products discussed here are manufactured by IBM Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt LaserPrinter laser
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
