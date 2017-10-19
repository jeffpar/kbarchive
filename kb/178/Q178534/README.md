---
layout: page
title: "Q178534: XCON: Delivery Restriction May Not Work After Moving a User"
permalink: /kb/178/Q178534/
---

## Q178534: XCON: Delivery Restriction May Not Work After Moving a User

	Article: Q178534
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If a delivery restriction is set on a connector to "Reject Messages from" UserA,
	and UserA is moved to another server, the user may be able to temporarily send
	messages to that connector.
	
	CAUSE
	=====
	
	The Microsoft Exchange message transfer agent (MTA) maintains a cached list of
	all routing and restriction information. This cache is updated periodically.
	When a user is moved from ServerA to ServerB within a site, the ServerB MTA will
	have a brief period of time where it does not have UserA in its cache.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	By default, the MTA reloads the cache every 60 seconds. This interval can be
	adjusted to scan more frequently by adjusting the following registry entry:
	
	1. Start the Registry Editor.
	
	2. Go to the following key:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	     \MSExchangeMTA\Parameters
	
	3. Find the following value:
	
	  ds_read cache latency (secs)
	
	This value defaults to 60 seconds but can be lowered. Note that lowering this
	value can result in degradation of system performance, because the MTA will be
	performing a DS_READ function more often.
	
	Additionally, if ServerB is processing a large number of replication updates
	(such as moving a large group of users), there may be an increased delay in the
	directory being updated with the new delivery restriction lists.
	
	Stopping and restarting the MTA is the best way of forcing the update to the
	cache.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
