---
layout: page
title: "Q177445: Use LoadLibraryEx When Loading Printer Drivers"
permalink: /kb/177/Q177445/
---

## Q177445: Use LoadLibraryEx When Loading Printer Drivers

	Article: Q177445
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
	
	In specific instances under Windows NT 4.0, certain Hewlett Packard printer
	drivers may display a pop-up message that indicates that the print driver is not
	installed when it has been installed.
	
	CAUSE
	=====
	
	Some of the Hewlett Packard printer driver files statically link to other
	printer driver files that are listed as dependent files. The Windows NT spooler
	uses a LoadLibrary function call not the LoadLibraryEx function call. This, in
	combination with Hewlett Packard's print driver directory not being in the path,
	causes the Hewlett Packard driver not to work.
	
	
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
	
	
	Additional query words: spoolss localspl HP print driver device point
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
