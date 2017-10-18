---
layout: page
title: "Q288151: Shortcuts in Startup Group Do Not Run in Windows NT Workstation"
permalink: kb/288/Q288151/
---

## Q288151: Shortcuts in Startup Group Do Not Run in Windows NT Workstation

	Article: Q288151
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a domain where you are not a domain administrator or a member
	of the Administrator group, you may find that the shortcuts in the Startup group
	do not work. The following error message may appear when you type a password:
	
	  Incorrect password or unknown user name for \\LocalComputerName\c$
	
	CAUSE
	=====
	
	This behavior can occur if an administrator creates shortcuts and places them in
	the Default User profile and All Users profile folders.
	
	RESOLUTION
	==========
	
	To resolve this behavior, log on as a domain user or local user, and then delete
	and recreate the shortcuts in the Startup group.
	
	WORKAROUND
	==========
	
	To work around this behavior, log on to the group by using the username and
	password for the domain administrator or local administrators account.
	
	MORE INFORMATION
	================
	
	If you start Task Manager from the %Windir%\System32 folder, no error message
	appears. You also can start other Windows programs directly from their
	executable files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
