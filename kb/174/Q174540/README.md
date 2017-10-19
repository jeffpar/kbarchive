---
layout: page
title: "Q174540: Extra Page Printed on Epson Stylus Color Printers"
permalink: /kb/174/Q174540/
---

## Q174540: Extra Page Printed on Epson Stylus Color Printers

	Article: Q174540
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing in color mode to an Epson Stylus printer (Color, Pro, Pro XL, Pro
	XL+) from a computer running Windows NT 4.0, extra lines of different color may
	be present in the output and cause the extra data to be printed on a second
	page. These extra lines will print on the second page after the 3 mm top margin
	if the maximum printable area is used in the application.
	
	CAUSE
	=====
	
	With banding printers, there are normally extra lines in the last band that
	should not be sent, usually because they are blank. However, if the application
	sends data outside the "imageable" area, these extra lines are printed.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: band blank page pages
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
