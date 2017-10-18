---
layout: page
title: "Q121406: Err Msg: The Process Cannot Switch to the Startup Current..."
permalink: kb/121/Q121406/
---

## Q121406: Err Msg: The Process Cannot Switch to the Startup Current...

	Article: Q121406
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Workstation version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to start a service from the Services portion of Control Panel,
	the following error message may appear:
	
	  The process cannot switch to the startup current directory
	  <C:\WINNT>\SYSTEM32\. Select OK to set the current directory to
	  C:\WINNT or Cancel to exit.
	
	NOTE: <C:\WINNT> is the location of the Windows NT system files.
	
	After choosing OK, another message appears:
	
	  Could not start xxxx service on \\<ComputerName>
	  Error 0005: Access is Denied
	
	NOTE: xxxx is the name of the service you are attempting to start and
	<ComputerName> is the name of your computer.
	
	CAUSE
	=====
	
	You do not have the appropriate directory permissions to access the SYSTEM32
	directory.
	
	RESOLUTION
	==========
	
	To avoid these errors, the system administrator must grant you the appropriate
	rights to the directories that contain files required to start the services and
	any directories used by the services. (For example, the Directory Replication
	service requires that the replication user account has at least read and execute
	permissions for the SYSTEM32 directory).
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
