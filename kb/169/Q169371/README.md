---
layout: page
title: "Q169371: DNS Error Message: No More Endpoints"
permalink: kb/169/Q169371/
---

## Q169371: DNS Error Message: No More Endpoints

	Article: Q169371
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft Domain Name Service (DNS) Server, you
	receive the following error:
	
	  No more endpoints available through the endpoint mapper.
	
	CAUSE
	=====
	
	This is caused by a previous installation of DNS on the computer. DNS attempts
	to use previous settings contained in the %SystemRoot%\WinNT\System32\DNS
	directory.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following steps:
	
	1. Stop the Microsoft DNS service using the Control Panel Services tool.
	
	2. Backup any zone files from the %SystemRoot%\WinNT\System32\DNS directory that
	  you need to keep.
	
	3. Remove the Microsoft DNS Server using the Control Panel Network tool and
	  restart when prompted.
	
	4. Delete the files in the WinNT\System32\DNS subdirectory.
	
	5. Install the Microsoft DNS Server service using the Control Panel Network
	  tool.
	
	Additional query words: no endpoint mapper available
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
