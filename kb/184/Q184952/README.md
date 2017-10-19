---
layout: page
title: "Q184952: Errors When Installing Lexmark Optra Drivers in Windows NT 4.0"
permalink: /kb/184/Q184952/
---

## Q184952: Errors When Installing Lexmark Optra Drivers in Windows NT 4.0

	Article: Q184952
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install LexMark Optra 3.51 printer drivers on a computer running
	Windows NT 4.0, the following errors may occur:
	
	If you install the Windows NT 3.51 LexMark drivers while creating a new printer
	on a computer running Windows NT 4.0, the following error will occur:
	
	  A Microsoft Setup Usage dialog box will appear. You must select OK.
	  Printer driver for NT 3.5 or 3.51 x86 could not be installed.
	  An unexpected error occurred.
	
	If installing the Windows NT 3.51 drivers after the Windows NT 4.0 printer has
	been installed, the following error will occur:
	
	  A Microsoft Setup Usage dialog box will appear. You must select OK.
	  Alternate drivers could not be installed. An unexpected error occurred.
	
	
	CAUSE
	=====
	
	The LexMark 3.51 drivers are located in a directory that is longer than eight
	characters.
	
	RESOLUTION
	==========
	
	Move the LexMark 3.51 drivers to a directory that is less than or equal to eight
	characters. When you install the 3.51 drivers, point the Printer Wizard to the
	newer directory that contains the drivers.
	
	MORE INFORMATION
	================
	
	For more information, please see the following Microsoft Knowledge Base
	article:
	
	  ARTICLE-ID: Q160902
	  TITLE : Windows NT Error Msg: Alternate Drivers Cannot Be Installed
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: share sharing tab Printer.inf
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
