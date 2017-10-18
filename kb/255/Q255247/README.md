---
layout: page
title: "Q255247: Terminal Server Profile Path and Home Directory Missing"
permalink: kb/255/Q255247/
---

## Q255247: Terminal Server Profile Path and Home Directory Missing

	Article: Q255247
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
	
	When your network is using Terminal Server, some user accounts may randomly lose
	their Terminal Server Profile Path, their Terminal Server Home Directory
	location, or both.
	
	CAUSE
	=====
	
	This behavior can occur when there are Microsoft Windows NT Server 3.51-based
	computers on your network and you use the Windows NT 3.51 version of User
	Manager for Domains to edit user account information. Using this version to make
	changes to a user account overwrites the Terminal Server Profile Path and
	Terminal Server Home Directory location for that user.
	
	RESOLUTION
	==========
	
	To work around this behavior, do not use the Windows NT 3.51 version of User
	Manager for Domains to edit any user account information or to administer
	Terminal Server user accounts. Use only the Terminal Server version of User
	Manager for Domains.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
