---
layout: page
title: "Q130836: Windows NT: List of Currently Validated Clients Not Available"
permalink: /kb/130/Q130836/
---

## Q130836: Windows NT: List of Currently Validated Clients Not Available

	Article: Q130836
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows NT domain environment, it is not possible to view a
	list of all currently validated users logged into a domain.
	
	MORE INFORMATION
	================
	
	You can run Server Manager and choose Show Domain Members Only from the View
	Menu to view a list of computers running Windows NT that are members of the
	selected domain. This is a list of computer accounts and is not an indication if
	the computer is running or has been validated by its primary domain.
	
	If Show Domain Members is not selected, browsing information is incorporated into
	the list of computers. Domain member computers that are active will have a
	non-gray computer icon along with the version number of Windows NT. Windows For
	Workgroup computers that are using the domain name for their workgroup name will
	also be added to the list when they are active, and removed from the list when
	they are inactive. This does not indicate if the computer has been validated by
	the domain.
	
	
	Additional query words: 3.10 3.11 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	
	=============================================================================
	
