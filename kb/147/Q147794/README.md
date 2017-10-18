---
layout: page
title: "Q147794: Implementing Per Server RAS Permissions"
permalink: kb/147/Q147794/
---

## Q147794: Implementing Per Server RAS Permissions

	Article: Q147794
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you implement dial-in security, the Remote Access Admin utility sets
	dial-in permissions on a global, per domain basis. There are no settings to
	implement security on a server by server basis in the Remote Access Admin
	Utility. However, you can set the Per server security by allowing or denying the
	"Access this computer from network" user right in User Manager.
	
	NOTE: A user that does not have the "Access this computer from the network" user
	right cannot access the computer for other purposes.
	
	MORE INFORMATION
	================
	
	To implement dial-in security on a per server basis:
	
	1. Determine which users are to dial in to which RAS servers
	
	2. On each RAS server, assign the "Access this computer from network" user right
	  only to the users who should have access to that specific server.
	
	3. Make sure you disable the "Access this computer from network" user right for
	  the users who should not have access to the RAS server.
	
	4. Grant dial-in permissions to all dial-in users in Remote Access Admin.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
