---
layout: page
title: "Q186518: Using Microsoft Exchange Forms with Terminal Server"
permalink: /kb/186/Q186518/
---

## Q186518: Using Microsoft Exchange Forms with Terminal Server

	Article: Q186518
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Clients running inside Terminal Server Client sessions may
	not be able to access Exchange forms.
	
	CAUSE
	=====
	
	The problem is that Exchange looks for the forms (Frmcache.dat) in the Terminal
	Server SystemRoot\Forms directory. By default, when an application asks for the
	system directory, the system responds with the Terminal Server user's Windows
	directory located in the user's home directory.
	
	RESOLUTION
	==========
	
	This problem is resolved by running the Microsoft Office 97 compatibility
	script. Alternatively, if Microsoft Outlook 98 is installed without Office 97,
	the Outlook 98 compatibility script should be used. The Outlook 98 compatibility
	script can be downloaded from the following Microsoft Web site:
	
	  http://www.microsoft.com/ntserver/terminalserver/exec/vendors/showcase/Outlookreport.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
