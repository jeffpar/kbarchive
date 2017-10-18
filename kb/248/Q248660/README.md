---
layout: page
title: "Q248660: Using the Command Line to Change Startup Value of Services"
permalink: kb/248/Q248660/
---

## Q248660: Using the Command Line to Change Startup Value of Services

	Article: Q248660
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to change the startup values for services on local and
	remote computers by using the command line locally.
	
	MORE INFORMATION
	================
	
	The Reg.exe utility from the Microsoft Windows NT Resource Kit must be installed
	on your computer.
	
	To change the startup value for a service on a local computer by using the
	command line, type the following at the command prompt and then press ENTER:
	
	  REG UPDATE HKLM\SYSTEM\CurrentControlSet\Services\servicename\Start=X
	
	where servicename is the name of the service as it appears in the registry and X
	is either a 2, a 3, or a 4 (representing automatic startup, manual startup, or
	disabled, respectively).
	
	To change the startup value for a service on a remote computer by using the
	command line locally, type the following at the command prompt and press ENTER:
	
	  REG UPDATE HKLM\SYSTEM\CurrentControlSet\Services\servicename\Start=X
	  \\servername
	
	where servicename is the name of the service as it appears in the registry, X is
	either a 2, a 3, or a 4 (representing automatic startup, manual startup, or
	disabled, respectively), and servername is the name of the remote server.
	
	To see how the service name appears in the registry, view the following registry
	key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
