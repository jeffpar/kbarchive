---
layout: page
title: "Q161942: XADM: Setup or Update Fails to Upgrade Admin-Only Computer"
permalink: kb/161/Q161942/
---

## Q161942: XADM: Setup or Update Fails to Upgrade Admin-Only Computer

	Article: Q161942
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error when running the update program for Microsoft
	Exchange Server 4.0 Service Pack 3 to update a server that is only running the
	Microsoft Exchange Server Administration program:
	
	  This version of Exchange Setup can only upgrade servers that are
	  4.0a/SP2. Upgrade the server to 4.0a/SP2 and then run Setup again.
	
	CAUSE
	=====
	
	The update program is looking for registry entries that do not get installed
	when only the Microsoft Exchange Server Administrator program is installed.
	
	WORKAROUND
	==========
	
	To work around this problem, you can make a change to the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     SOFTWARE/Microsoft/Exchange/Setup
	
	3. Add the following value:
	
	     NewestBuild
	
	  Add this value as a REG_DWORD, and enter the Data "3e2" in hexadecimal. The
	  full entry in the registry will look like:
	
	     NewestBuild : REG_DWORD : 0x3e2
	
	4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was also corrected in Microsoft Exchange Server version 5.0.
	
	MORE INFORMATION
	================
	
	The update and setup programs were modified to perform additional checking
	(beyond the registry entry) for previous versions of the product. Microsoft
	Exchange Server 4.0 Service Pack 4 and Microsoft Exchange Server 5.0 setup will
	perform the additional checking, as will all future versions.
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
