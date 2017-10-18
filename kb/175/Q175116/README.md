---
layout: page
title: "Q175116: XADM: Error 0xc8000713 Occurred After a Restore Operation"
permalink: kb/175/Q175116/
---

## Q175116: XADM: Error 0xc8000713 Occurred After a Restore Operation

	Article: Q175116
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Server Information Store
	service, the following errors may be reported in the event log:
	
	  5000 Unable to initialize the Microsoft Exchange Information Store
	  service. Error 0xc8000713.
	
	  1081 Unable to recover the database because error 0xc8000713 occurred
	  after a restore operation.
	
	CAUSE
	=====
	
	When you start an information store restore operation, a new Windows NT registry
	key is created. If the restore operation fails, the key is not removed.
	Therefore, when the information store sees the key during startup, it does not
	attempt to recreate the Pub.edb and Priv.edb files and fails to start.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	For the information store to recreate the Pub.edb and Priv.edb files and start
	successfully, you must start the Windows NT Registry Editor and delete the
	following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ 
	  RestoreInProgress
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
