---
layout: page
title: "Q154791: MS-DOS-based Applications May Not Find All Files"
permalink: kb/154/Q154791/
---

## Q154791: MS-DOS-based Applications May Not Find All Files

	Article: Q154791
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a 16-bit MS-DOS-based application uses FindFirst or FindNext requests to
	search for files, the results may not be complete. This may cause the
	application to not operate properly.
	
	CAUSE
	=====
	
	The Windows NT Virtual DOS Machine (NTVDM) subsystem does not properly handle
	the scenario where a returned value from a function indicates the buffer that
	was passed to it was too small to hold all of the data.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For more information, please see the following article in the Microsoft
	Knowledge Base.
	
	Q152734How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	
	Additional query words: DOS Incomplete Missing
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
