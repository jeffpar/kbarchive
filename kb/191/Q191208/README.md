---
layout: page
title: "Q191208: DOCERR: Manage Documents Security Permission &amp; Printer Actions"
permalink: /kb/191/Q191208/
---

## Q191208: DOCERR: Manage Documents Security Permission &amp; Printer Actions

{% raw %}

	Article: Q191208
	Product(s): Microsoft Windows NT
	Version(s): Windows:4.0,4.0a;WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Server 4.0 Concepts and Planning documentation details how
	assigning the Manage Documents security permission to a user for an individual
	printer allows that user to manage all print jobs aimed at that printer,
	regardless of who actually owns or created the particular print job.
	
	This is incorrect. Manage Documents only allows the user who submitted the print
	job to change of the status of that print job. Users who only have the Manage
	Documents security permission will receive an "Access Denied" error message if
	they attempt to change the status of a print job that they do not own.
	
	A user must have the Full Control permission on the printer to allow management
	of all print jobs aimed at that printer, regardless of owner/creator.
	
	Additional query words: pause resume restart cancel smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbSBServ400 kbSBServ400a
	Version           : Windows:4.0,4.0a;WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
