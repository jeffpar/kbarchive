---
layout: page
title: "Q123879: Backup Operators Group Cannot Access Schedule Service"
permalink: kb/123/Q123879/
---

## Q123879: Backup Operators Group Cannot Access Schedule Service

	Article: Q123879
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	The first sentence in the AT-Notes section (AT Command Reference) of
	Windows NT Help (WINNT.HLP) states the following:
	
	  The at command requires you be a member of the local Administrator
	  or Backup Operator group.
	
	The above statement is incorrect. Members of the Backup Operators
	group cannot access to the Schedule Service. When a Backup Operator
	tries to start the Schedule Service or schedule a backup with the AT
	command, the Backup Operator receives an "Access Denied" error message.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
