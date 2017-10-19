---
layout: page
title: "Q158731: XADM: SP3 Update Fails When Running Admin Only"
permalink: /kb/158/Q158731/
---

## Q158731: XADM: SP3 Update Fails When Running Admin Only

	Article: Q158731
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error when running the Service Pack 3 (SP3)Update
	program to update a server that is only running the Microsoft Exchange Server
	Administration program:
	
	  This version of Exchange Setup can only upgrade servers that are 4.0a/SP2.
	  Upgrade the server to 4.0a/SP2 and then run Setup again.
	
	CAUSE
	=====
	
	The Update program is looking for registry entries that do not get installed
	when only the Exchange Administrator program is installed.
	
	RESOLUTION
	==========
	
	To resolve the problem, modify the registry;
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     SOFTWARE/Microsoft/Exchange/Setup:
	
	3. Add the following value:
	
	     NewestBuild
	
	  Add this value as a REG_DWORD, and enter the Data "3e2" in hexadecimal.
	
	  The full entry in the registry will look like this:
	
	     NewestBuild : REG_DWORD : 0x3e2
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : SRVRSetup
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
