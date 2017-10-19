---
layout: page
title: "Q108067: PC DirSync: Requestor Inactive for Longer Than Update Window"
permalink: /kb/108/Q108067/
---

## Q108067: PC DirSync: Requestor Inactive for Longer Than Update Window

	Article: Q108067
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages can be logged to the DIRSYNC.LOG file.
	
	For Mail versions 3.0 and 3.0b, the errors are:
	
	  Warning [ 4] Error reading file: MSTTRANS
	
	  Error [ 129] Could not find the specified sync number PCM:Net/PO
	
	For Mail version 3.2 and 3.5, the errors are:
	
	  Error [ ] PCM:Net/PO
	
	  Error [138] Server sync does not exist anymore (0)
	
	  Error [139] Number of missing transactions = 1300 (0->1299)
	
	CAUSE
	=====
	
	These errors occur when a requestor postoffice does not participate in directory
	synchronization (Dir-Sync) for a period greater than the Keep Updates time (in
	Admin, Config Dir-Sync, Server Updates). Global updates that are older than the
	number of update window days will likely be purged, and when the inactive
	requestor becomes active again, these warning messages are logged.
	
	For Mail 3.2 and 3.5, the numbers at the end of the messages report the number
	and location of the missing transactions in the MSTTRANS.GLB file (the master
	list of all transactions to the server). This file is routinely purged of
	transactions that are older than the Keep Updates window. If the requestor does
	not participate in Dir-Sync for a time greater than the Keep Updates time,
	transactions may be purged and the errors reported when the requestor resumes
	Dir-Sync.
	
	In the error messages, Net and PO indicate the requestor that is missing the
	transactions. If the type is a gateway, PCM will be changed to the type of
	gateway involved (for example, SNADS, PROFS, or SMTP).
	
	RESOLUTION
	==========
	
	The requestor postoffice must send its complete address list to the server (via
	the Mail Administrator program Config, Dir-Sync, Requestor, Export command) and
	request the full list from the server (via the Mail Administrator program
	Config, Dir-Sync, Requestor, Import command) in order to re-synchronize with the
	server and have its updated list sent to all other requestor postoffices.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, 3.2, and 3.5
	of Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.00b 3.20 3.50 dirsync dirsynch admin admin.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN350
	Version           : WINDOWS:3.0,3.0a,3.2,3.5
	
	=============================================================================
	
