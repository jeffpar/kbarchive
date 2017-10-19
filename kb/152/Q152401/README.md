---
layout: page
title: "Q152401: Problems If NetWare Server Allows More Than 256 Users"
permalink: /kb/152/Q152401/
---

## Q152401: Problems If NetWare Server Allows More Than 256 Users

	Article: Q152401
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Windows 95 workstation to log on to a Novell NetWare 3.x or 4.x
	server that allows more than 256 users, you may experience one or both of the
	following symptoms:
	
	- The Windows 95 workstation may return an incorrect connection number for more
	  than 256 connections.
	
	- Another user's name may appear on the banner page when you print a document
	  to a NetWare Print Server.
	
	CAUSE
	=====
	
	The Microsoft Login Script Processor for NetWare (NWLSPROC) incorrectly reports
	the number of connections if that number is greater than 256. This causes some
	users to receive an incorrect connection ID.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	When you send a print job to a NetWare Print Server, the connection ID is used
	to determine the name that is printed on the banner page. If the connection ID
	is incorrect, the wrong name may be printed on the banner page.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
