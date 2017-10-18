---
layout: page
title: "Q187421: TC Manager Puts Icons in the Program Group"
permalink: kb/187/Q187421/
---

## Q187421: TC Manager Puts Icons in the Program Group

	Article: Q187421
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
	
	Multiple Terminal Server Client program groups may appear on Windows NT- based
	Terminal Server client computers.
	
	CAUSE
	=====
	
	When Client Connection Manager is used to create new connections, the icons for
	the new connections are placed in the users' portion of the profile. The default
	name for the program group is Terminal Server Client.
	
	When the Terminal Server Client is installed on a computer running Windows NT
	4.0, the following program group is created:
	
	     %systemroot%\Profiles\All Users\Start Menu\Programs
	     \Terminal Server Client
	
	NOTE: The above path is one path; it has been wrapped for readability.
	
	This is the only program group that exists until you use the Client Connection
	Manager to create new connections, at that time a new program group is created
	under the following location:
	
	     %userprofile%\Start Menu\Programs\Terminal Server Client
	
	This is the intended behavior of Terminal Server because by default, only
	Administrators have write permissions to %systemroot%\Profiles\All Users.
	
	RESOLUTION
	==========
	
	During creation of the new connection, you can change the program group name.
	Or, you can rename or delete the folder from the user portion at any time. No
	action is necessary.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
