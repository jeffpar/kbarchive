---
layout: page
title: "Q168309: XADM: Error -1605 Jet_errKey Duplicate"
permalink: /kb/168/Q168309/
---

## Q168309: XADM: Error -1605 Jet_errKey Duplicate

	Article: Q168309
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The following error may occur when you try to start the Microsoft Exchange
	Server Information Store service after an online restore:
	
	  -1605 Jet_errKeyDuplicate.
	
	CAUSE
	=====
	
	This can occur when the RestoreInProgress key is not removed from the registry.
	This key is removed when the log files are replayed. If no log files have been
	replayed, you need to remove the key yourself.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Remove the RestoreInProgress key from:
	
	     HKEY_Local_Machine\System\CurrentControlSet\Services\MSExchangeIS
	
	2. Restore the information store again.
	
	Additional query words: delete
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
