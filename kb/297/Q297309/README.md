---
layout: page
title: "Q297309: ADDUSERS.EXE Does Not Add Accounts and Does Not Return Error"
permalink: kb/297/Q297309/
---

## Q297309: ADDUSERS.EXE Does Not Add Accounts and Does Not Return Error

	Article: Q297309
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Addusers.exe Resource Kit utility to add user accounts to a
	domain, and you include the /c option with an input file, no user accounts are
	added. After the utility runs, the system returns you to the command prompt and
	no error message appears.
	
	CAUSE
	=====
	
	This behavior can occur because of a syntax error in the online documentation
	for the Addusers utility. The documentation shows the syntax for the input file
	header for user accounts as [Users]. The correct syntax is [User].
	
	RESOLUTION
	==========
	
	To resolve this behavior, make sure that the input file header for the user
	names is [User]:
	
	  [User]
	  <User Name>, <Full Name>, <Password>, <Home Drive>,
	  <Home Path>, <Profile>, <Script>
	
	STATUS
	======
	
	This behavior is corrected in Microsoft Windows NT Resource Kit Supplement 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
