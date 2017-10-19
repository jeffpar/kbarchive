---
layout: page
title: "Q179303: XADM: Reducing Event Service Firing Delays"
permalink: /kb/179/Q179303/
---

## Q179303: XADM: Reducing Event Service Firing Delays

	Article: Q179303
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to shorten the delay between when an event trigger
	occurs and when the script is run. It can be useful to change this setting for
	testing or demonstration purposes.
	
	MORE INFORMATION
	================
	
	The Event Service uses the Information Store's local replication interface
	(Incremental Change Synchronization, or ICS) to retrieve a list of changes that
	have occurred in the store. When something changes in the store, the Event
	Service gets notified, which causes it to initiate a "local replication" session
	with the store. This produces a "change list" and the Event Service then fires
	an event for each qualifying item on the list. By default, the information store
	only sends out replication change notifications at 60-second intervals.
	
	The information store has a registry key that controls this interval. You can add
	a registry entry to shorten this interval.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	WARNING: You should not change this setting on production machines. There is
	overhead associated with local replication session. The Information Store will
	operate much more efficiently if it is allowed to process several changes in a
	single replication session, rather than starting a new session for each change.
	
	To add the new entry, perform the following steps:
	
	1. Start the registry editor (regedit.exe).
	
	2. Open the following subkey:
	
	  \HKLM\System\currentControlSet\Services\MSExchangeIS\ParametersSystem
	
	3. Add the following DWORD value:
	
	  ICS Notification Interval
	
	4. Change this value to the number of seconds that you want the store to wait
	  for replication notifications.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
