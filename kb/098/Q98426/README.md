---
layout: page
title: "Q98426: Full Sync on LAN Manager 2.1a/2.2 Servers"
permalink: /kb/098/Q98426/
---

## Q98426: Full Sync on LAN Manager 2.1a/2.2 Servers

	Article: Q98426
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	To initiate a "full sync" of the Netlogon service on all of the backup and
	member servers under LAN Manager 2.1a or 2.2, the old trick of adding then
	deleting a user no longer works.
	
	MORE INFORMATION
	================
	
	Here is how to accomplish a full sync on the PDC:
	
	1. Stop the server.
	
	2. Change a user (fullname, comment, something trivial).
	
	3. Delete (or rename) $(lanroot)\ACCOUNTS\UASCHG.LOG.
	
	4. Start Netlogon.
	
	When the primary comes back up, it broadcasts a new serial number that is at
	least one higher than that of all the other servers. The other servers ask for
	the changes, and the primary responds with a NERR_SyncRequired because it has no
	record of that one change.
	
	Additional query words: 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
