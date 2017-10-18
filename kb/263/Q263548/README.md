---
layout: page
title: "Q263548: XADM: Event ID 1016 and 1002 Occurs When Directory Service Fails"
permalink: kb/263/Q263548/
---

## Q263548: XADM: Event ID 1016 and 1002 Occurs When Directory Service Fails

	Article: Q263548
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the directory service, you may receive the following error
	message
	
	  Window NT "Internal Error 2140"
	
	in which case, the application log records the following events:
	
	  Event ID: 1016
	  Source: MsExchangeDS
	  Description: Missing configuration parameter (DSA Database file). The
	  Microsoft Exchange Server database (EDB) may be corrupted. Try to reinstall
	  the software.
	
	  Event ID: 1002
	  Source: MsExchangeDS
	  Description: The Microsoft Exchange Server database (EDB) could not be
	  initialized and returned error 1. Unrecoverable error, the directory can not
	  continue.
	
	CAUSE
	=====
	
	This behavior can occur if a registry key is missing or has been deleted from
	the following registry setting:
	
	  HKeyLocalMachine\System\CurrentControlSet\Services\MSExchangeDS\Parameters
	
	By default, the service account should have full access to the following keys:
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS\Parameters]
	
	  "Database log files path"="[path name]"
	  "Database logging/recovery"="ON"
	  "DSA Temporary file"="[path name]"
	  "EDB max log buffers"=dword:00000040
	  "EDB log buffer flush threshold"=dword:00000020
	  "EDB log flush period"=dword:000001f4
	  "DSA Hierarchy table file"="[path name]"
	  "Hierarchy Table Recalculation interval (minutes)"=dword:000002d0
	  "DSA Working Directory"="[path name]"
	  "Max Threads (EXDS+NSP+DRA)"=dword:00000030
	  "Replicator deleted object conflict lifetime (days)"=dword:00000001
	  "Replicator notify pause after modify (secs)"=dword:0000012c
	  "Replicator notify pause between DSAs (secs)"=dword:0000001e
	  "Replicator inter site packet size"=dword:00000200
	  "Replicator intra site packet size"=dword:00000064
	  "Circular Logging"=dword:00000001
	  "Dsa Database File"="[path name]"
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that the service account has full access to all of
	the registry keys listed in the "Cause" section. If one of these keys is missing
	or has been deleted, you must re-create it.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
