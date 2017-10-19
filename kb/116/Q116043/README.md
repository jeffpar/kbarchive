---
layout: page
title: "Q116043: Network Share Access Denied After Limit Met, Then a Disconnect"
permalink: /kb/116/Q116043/
---

## Q116043: Network Share Access Denied After Limit Met, Then a Disconnect

	Article: Q116043
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two computers access a shared file or application on a network share where
	the limit of connections is set to two, a third computer is still unable to
	access the shared file or application even after one of the other two computers
	have closed the file or quit the application.
	
	CAUSE
	=====
	
	By design, a dormant network connection remains alive for 10 minutes after a
	computer quits a shared file or application on a network share.
	
	In the case above, the computer that closed the shared file or quit the shared
	application still has a dormant network connection and because the network share
	is limited to two, the third computer is still unable to access the shared file
	or application.
	
	NOTE: Microsoft Windows for Workgroups version 3.11 behaves the same way.
	
	WORKAROUND
	==========
	
	To delete a dormant network connection:
	
	- From the computer with the dormant connection, use the following command to
	  delete the connection:
	
	  NET USE \\server\share /d
	
	  -or-
	
	- From the server, an administrator can use the following command to delete the
	  dormant connection:
	
	  net sess \\computername /d
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
