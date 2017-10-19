---
layout: page
title: "Q240385: XADM: Directory Service Stops Responding with Event ID 1186"
permalink: /kb/240/Q240385/
---

## Q240385: XADM: Directory Service Stops Responding with Event ID 1186

	Article: Q240385
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Directory service stops responding (hangs) and logs the following error
	message in the event log:
	
	  Event ID: 1186
	  Source: MSExchangeDS
	  Type: Error
	  Category: Replication
	  Description: The internal directory replication agent (DRA) Dispatcher thread
	  is waiting in a remote procedure call (RPC) to directory XXXX. The directory
	  has attempted to cancel the call and recover the thread, with status 0x0. If
	  this condition persists, stop and restart that Microsoft Exchange Server
	  computer.
	
	CAUSE
	=====
	
	This behavior occurs if the directory replication agent (DRA) waits for more
	than 35 minutes for directory replication to complete within a site. This
	default timeout is normally sufficient and is exceeded only if a very large
	distribution list is being replicated or if there is limited usable bandwidth
	between the servers within the Exchange Server site.
	
	WORKAROUND
	==========
	
	To work around this behavior, restart the server that is experiencing the error,
	as well as the server that is specified in the text of the event. This works
	only if you find and resolve the underlying cause of the behavior (for example,
	saturated network links). The client may also need to look into breaking up
	large distribution lists.
	
	If the problem persists after you restart both servers, you can change the
	behavior of the DRA by modifying the following registry values:
	
	- Directory Replication Timeout
	
	- Max Threads
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Directory Replication Timeout
	-----------------------------
	
	You can change the default directory replication timeout value by adding the
	following key into the registry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDs\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Replicator async thread check (minutes)
	  Data Type: REG_DWORD
	  Value: 35 (Dec,default)
	
	4. Quit Registry Editor.
	
	NOTE: Increase this value in increments of 30 until you no longer receive the
	error message.
	
	Max Threads
	-----------
	
	To increase the number of threads available for directory replication, adjust the
	following parameter:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Max Threads value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\
	  MSExchangeDS\Parameters\Max Threads (EXDS+NSP+DRA)
	
	3. Click the Max Threads value.
	
	4. On the Edit menu, click DWORD.
	
	5. In the Data field, type "200" (without the quotation marks) (Dec), and then
	  click OK.
	
	6. Quit Registry Editor.
	
	This action increases the number of threads available from the default of 50 to
	200. You may need to adjust this value for best results.
	
	Additional query words: dsamain hang
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
