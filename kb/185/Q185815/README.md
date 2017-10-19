---
layout: page
title: "Q185815: WINS Event 4294: Client Does Not Have the Permissions..."
permalink: /kb/185/Q185815/
---

## Q185815: WINS Event 4294: Client Does Not Have the Permissions...

	Article: Q185815
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Internet Name Service (WINS) servers log the following event in the
	System Log in Event Viewer:
	
	  Event ID: 4294
	  Source: WINS
	  The client does not have the permissions required to execute the
	  function.
	
	WINS replication still occurs.
	
	CAUSE
	=====
	
	The user logged on to the console of the WINS server does not have sufficient
	permissions to perform a replication.
	
	MORE INFORMATION
	================
	
	When WINS replication is triggered (manually or automatically), Event 4294 will
	be logged in the system log, depending on the permissions of the user currently
	logged on to the WINS server.
	
	Administrator and Domain Administrator - Everything Works:
	
	- Can view replication partner and configuration information
	
	- Can view wins databases
	
	- Does not log event 4294
	
	Account Operator and Server Operator:
	
	- Cannot view replication partner or configuration information
	
	- Can view wins database
	
	- Does not log event 4294
	
	Backup Operator, Domain Guests, Domain Users, Guest, Print Operator, Replicator,
	Users:
	
	- Cannot view replication partner or configuration information
	
	- Cannot view wins database
	
	- Logs event 4294
	
	NOTE: Regardless of the users' permissions, and whether event 4294 is logged or
	not, replication will still work.
	
	Additional query words: access denied
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
