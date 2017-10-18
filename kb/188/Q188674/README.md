---
layout: page
title: "Q188674: XADM: Directory Service Restore to Cluster Fails with Event 1002"
permalink: kb/188/Q188674/
---

## Q188674: XADM: Directory Service Restore to Cluster Fails with Event 1002

	Article: Q188674
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to bring the Microsoft Exchange Directory resource online after
	an online restore, the resource will not start and enters a failed state. The
	Application Event Log reports an event 1002.
	
	CAUSE
	=====
	
	When a service is brought online, the state of the registry is restored to the
	last known good state. This is the state of the registry prior to the failure
	and is known as a Registry CheckPoint. During an online restore, the backup
	program adds the registry key "Restore in Progress". This key is required to
	recover from an online restore. Because of the Registry CheckPoint process in
	Microsoft Cluster Server (MSCS), the Restore in Progress key is overwritten.
	When the directory service is brought online, the Exchange database engine does
	not find a Restore in Progress Key and enters the normal initialization process.
	The Exchange database engine is expecting to find a consecutive log sequence to
	include an EDB.log file. Because this is not the case, the Exchange database
	engine fails to initialize with a -528 JET_errMissingLogFile.
	
	WORKAROUND
	==========
	
	When you are restoring to a cluster setup of Exchange, use the Start Services
	after Restore option. As an alternative, you can start the Microsoft directory
	service from the Services dialog box in Control Panel. This process will
	preserve the Restore in Progress key and allow the Exchange database engine to
	read this key and initialize properly. As a final step, go into Cluster
	Administrator and bring the Microsoft Exchange directory resource online. This
	produces the following System Event log entry, which can be ignored:
	
	  Event ID 1024
	  Source:  ClusSvc
	  Type: Error
	  Category:  (64)
	
	  Description:
	  The registry checkpoint for cluster resource Microsoft Exchange
	  Directory could not be restored to registry key
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS. The
	  resource may not function correctly. Make sure that no other processes
	  have open handles to registry keys in this registry subtree.
	
	MORE INFORMATION
	================
	
	If the Registry CheckPoint process in MSCS overwrites the Restore in Progress
	key, the following events are logged:
	
	  System Log
	  ==========
	  Event ID:  1042
	  Source: ClusSvc
	  Type: Error
	  Category (2050)
	  Description:
	  Cluster generic service 'Microsoft Exchange Directory' failed.
	
	  Application Log
	  ===============
	  Event ID: 1002
	  Source:  MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description:
	  The Microsoft Exchange Server database (EDB) could not be initialized
	  and returned error -528. Unrecoverable error, the directory can't
	  continue.
	
	For more information about the Microsoft Cluster Server (MSCS) Registry
	CheckPoint, see Knowledge Base article Q174070.
	
	Additional query words: Wolfpack Seagate BackupExec Legato Cheyenne Arcserve XADM
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
