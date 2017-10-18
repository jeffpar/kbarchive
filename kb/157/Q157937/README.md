---
layout: page
title: "Q157937: Not Able to Add Users from Domain"
permalink: kb/157/Q157937/
---

## Q157937: Not Able to Add Users from Domain

	Article: Q157937
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbdomain
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A computer running Windows NT Workstation or Server that recently joined a
	domain may not be able to add domain user or group accounts to its local groups.
	When User Manager is used on this recent installation, and the name is typed in
	the Add Names text box instead of selecting it by double- clicking the name from
	the list, you may receive the following error:
	
	  The account DomainName\UserName could not be found.
	
	This error may be most apparent when using scripts to automate the installation
	of Windows NT.
	
	MORE INFORMATION
	================
	
	After a computer running Windows NT Server or Workstation joins a domain, the
	user is asked to restart the computer. If the machine is not restarted, the
	Netlogon service is not started and the above error can occur.
	
	Instead of typing the user name in the Add Names text box, double-click the name
	from the Names list box, which allows the name to be added without the use of
	the Netlogon service.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbdomain 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
