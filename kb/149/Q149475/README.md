---
layout: page
title: "Q149475: Unable to Start Services Using User Account"
permalink: /kb/149/Q149475/
---

## Q149475: Unable to Start Services Using User Account

	Article: Q149475
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience problems trying to start a service using anything other than
	the default LocalSystem account. Those problems include failure of the hourglass
	cursor to disappear or an inordinate delay before the appearance of the
	Attempting to Start Service dialog box.
	
	CAUSE
	=====
	
	When starting a service with a specific user account, the service control
	manager must verify that a valid user name and password have been provided. The
	service control manager checks with each Network Provider for valid user
	credentials.
	
	If any of the Network Providers has trouble validating the user, the service
	control manager will not complete successfully.
	
	
	Additional query words: Start Services
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
