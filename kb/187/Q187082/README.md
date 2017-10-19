---
layout: page
title: "Q187082: BackOffice 4.0 Exchange Setup Fails"
permalink: /kb/187/Q187082/
---

## Q187082: BackOffice 4.0 Exchange Setup Fails

	Article: Q187082
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Exchange version 5.5 using the BackOffice 4.0
	installer, installation fails with the following error:
	
	  Processing file '<drive
	  letter>\cd3\exchsrvr\server\setup\i38\server.ins', at or near line 205.
	  The directory name is invalid
	
	After closing this box, another error box is displayed stating that the directory
	name is invalid. Closing this will give the message that Exchange Setup was
	interrupted and did not install successfully.
	
	  Line 205 of the file server.ins states:
	  CreateProcess:%windir%\system32:lodctr Eseperf.ini;180000
	
	CAUSE
	=====
	
	This problem occurs when the server is in the change user/execute mode. This
	does not happen when Exchange is installed in the change user/install mode.
	
	STATUS
	======
	
	To work around the problem, install Exchange by going to Control Panel,
	Add/Remove programs in All users Mode or open a command prompt and type in
	change User/install.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
