---
layout: page
title: "Q159788: XADM: SP3 Update Fails on Admin Only Server"
permalink: /kb/159/Q159788/
---

## Q159788: XADM: SP3 Update Fails on Admin Only Server

	Article: Q159788
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error when attempting to run the Microsoft Exchange
	Server Service Pack 3 (SP3) Update program:
	
	  This version of Exchange setup is older than the one you previously used. Use
	  a newer version of the Server Setup Program.
	
	This occurs with a computer that is running only the Microsoft Exchange Server
	Administrator program.
	
	CAUSE
	=====
	
	The NewestBuild registry value has a higher setting than expected.
	
	RESOLUTION
	==========
	
	To resolve this problem, modify the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     SOFTWARE/Microsoft/Exchange/Setup
	
	3. Change the NewestBuild value. This should be a REG_DWORD. Enter the data
	  "3e1" in hexadecimal.
	
	  The full entry in the registry should look like this:
	
	    NewestBuild : REG_DWORD : 0x3e1
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
