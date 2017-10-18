---
layout: page
title: "Q128430: Cannot Install TCP/IP After Installing SQL Server"
permalink: kb/128/Q128430/
---

## Q128430: Cannot Install TCP/IP After Installing SQL Server

	Article: Q128430
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install SQL server and then run Control Panel to install TCP/IP,
	Connectivity Utilities is unavailable (grayed out), even though TCP/IP is not
	installed.
	
	CAUSE
	=====
	
	When you install SQL Server and choose to include the TCP/IP connectivity on a
	computer running Windows NT without TCP/IP installed, a message is displayed
	that asks you if you want to proceed. If you select Yes, false TCP/IP and
	Parameter keys are created in the following registry key under the
	HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CURRENTCONTROLSET\SERVICES
	
	When you attempt to install TCP/IP, Windows NT finds the registry entries, and
	believes that TCP/IP is already installed, and installs utilities, but not the
	protocol.
	
	WORKAROUND
	==========
	
	To work around this problem, delete the registry keys created by SQL Server,
	install TCP/IP, and then reinstall SQL Server.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
