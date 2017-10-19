---
layout: page
title: "Q121161: Access Denied Using User Manager for Domains in Server Tools"
permalink: /kb/121/Q121161/
---

## Q121161: Access Denied Using User Manager for Domains in Server Tools

	Article: Q121161
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create new user accounts from User Manager for Domains
	provided in the Windows NT version 3.5 Server Tools for Windows for Workgroups
	version 3.11, the following message may appear if you are not a member of the
	Domain Admin group:
	
	  Access Denied
	
	Users in the Account Operators group should be able to add new accounts to the
	domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the Server Tools included on the Windows NT Server
	3.51 CD.
	
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.5
	
	=============================================================================
	
