---
layout: page
title: "Q152741: Err Msg: The Domain Password You Supplied Is Not Correct"
permalink: /kb/152/Q152741/
---

## Q152741: Err Msg: The Domain Password You Supplied Is Not Correct

	Article: Q152741
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.11a,3.11b,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When logging on to the domain, a client will get one of the following error
	messages:
	
	
	  If a Windows 95 client: "The domain password you supplied is not correct, or
	  access to the logon server has been denied."
	
	  A Windows for Workgroups 3.11 client: "The password you specified is
	  incorrect or your account is inactive. See your network administrator for the
	  password or to activate your account."
	
	  A MAC client: "The password is not correct"
	
	The logon is unsuccessful when logging on as a user; however, the administrator
	successfully logs on from the same client.
	
	CAUSE
	=====
	
	This error occurs because the Everyone Group has been removed from "Access this
	computer from network" user right from User Rights Policy in User Manager on the
	primary domain controller (PDC). This built-in right is required for Domain
	Users to log on to the domain.
	
	
	RESOLUTION
	==========
	
	To correct this problem,perform the folowing steps.
	
	1. Log on to the domain as administrator and start User Manager for Domains.
	
	2. From the policies menu, choose User rights and select "Access this Computer
	  From Network."
	
	3. Click Add and select the Everyone Group.
	
	Note: The Everyone Group is not required to access the domain. Specific users and
	groups can be added to accomplish the same goal, but if any user is not on the
	list they will not be able to log on to the domain.
	
	Additional query words: 3.50 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b,3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
