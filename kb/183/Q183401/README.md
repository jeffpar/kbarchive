---
layout: page
title: "Q183401: Poor Print Quality from Adobe Acrobat on 600 DPI Printer"
permalink: kb/183/Q183401/
---

## Q183401: Poor Print Quality from Adobe Acrobat on 600 DPI Printer

	Article: Q183401
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain graphics printed from Adobe Acrobat appear light when printed to a 600
	dpi laser printer. When the same graphic is printed on a 300 dpi printer, the
	printout is darker.
	
	CAUSE
	=====
	
	The application is drawing 1 pixel wide lines so, at 600 dpi, diagonal lines
	appear very light because laser printers cannot hold a single isolated dot on
	the drum. This is also because of the application not specifying a logical pen
	width.
	
	RESOLUTION
	==========
	
	To print the graphic correctly, you can use one of the following workarounds:
	
	- Change the resolution to 300 dpi.
	
	- Print your graphic using a PostScript printer driver.
	
	- Change the line width in the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
