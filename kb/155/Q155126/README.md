---
layout: page
title: "Q155126: Error Message: Unable to Connect to all of the Roots..."
permalink: /kb/155/Q155126/
---

## Q155126: Error Message: Unable to Connect to all of the Roots...

	Article: Q155126
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect to a remote registry in Registry Editor by clicking Connect
	Network Registry on the Registry menu, the following message is displayed:
	
	  Unable to connect to all of the roots of the computer's registry. Disconnect
	  from the remote registry and then reconnect before trying again.
	
	Or, when you open a key in a remote registry, the following message is
	displayed:
	
	  Cannot open <KEY>: Error while opening key.
	
	CAUSE
	=====
	
	You are using Regedit.exe to edit the remote registry.
	
	RESOLUTION
	==========
	
	To edit the registry on a remote computer set up for remote administration, use
	Regedt32.exe instead of Regedit.exe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
