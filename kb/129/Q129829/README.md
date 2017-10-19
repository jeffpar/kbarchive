---
layout: page
title: "Q129829: Cannot Logon to Domain After Changing Computer Name"
permalink: /kb/129/Q129829/
---

## Q129829: Cannot Logon to Domain After Changing Computer Name

	Article: Q129829
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are not able to log on to a Windows NT domain from a client computer after
	you have changed the computer name.
	
	RESOLUTION
	==========
	
	From Server Manager for Domains on the domain controller, delete and re- create
	the computer name and then synchronize the entire domain.
	
	Occasionally, after doing this, when you next attempt to log on, the following
	error message appears:
	
	  System can not log you on to the domain because the systems computer account
	  in its primary domain is missing or the password on that account is
	  incorrect.
	
	If you receive this error message, follow these steps:
	
	1. On the client, in the Network component of Control Panel, configure the
	  computer to be a member of a new workgroup. You can use any workgroup name
	  other than the domain name.
	
	2. Using Server Manager for Domains on the domain controller, delete and
	  re-create the computer name.
	
	3. On the client, re-configure the computer to be a member of the domain again.
	
	Additional query words: 3.10 prodnt wfw wfwg rename
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
