---
layout: page
title: "Q154066: Removing Everyone(Read) from %WinRoot% Shuts Down at Logon"
permalink: /kb/154/Q154066/
---

## Q154066: Removing Everyone(Read) from %WinRoot% Shuts Down at Logon

	Article: Q154066
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kbenv kbother kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When read access for the Everyone Group has been removed from the %WinRoot%
	directory tree and read permissions have not been granted for the current user
	or group attempting to logon, an automatic shutdown of the system is initiated.
	
	This will occur if the current user is not a member of the Administrators
	group(s) (either local or domain).
	
	MORE INFORMATION
	================
	
	The system shutdown is caused by the inability to access the files necessary to
	create the Win32 subsystem process in which Program Manager will run. Because
	this process cannot be initiated, the system begins a shutdown.
	
	To ensure that new users will be able to logon locally you will need to allow
	read access to the %WinRoot% directory tree for the group the users will belong
	to.
	
	For further information on this problem, please see the following article in the
	Microsoft Knowledge Base:
	
	Q137155Users Without System32 Permissions Cannot Log On.
	
	Additional query words: prodnt logon shutdown read access everyone group
	
	======================================================================
	Keywords          : kbenv kbother kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
