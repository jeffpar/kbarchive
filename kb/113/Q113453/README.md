---
layout: page
title: "Q113453: PC DirSync: Export Required If Server Restored from Backup"
permalink: /kb/113/Q113453/
---

## Q113453: PC DirSync: Export Required If Server Restored from Backup

{% raw %}

	Article: Q113453
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	If the directory synchronization (Dir-Sync) server for Microsoft Mail is
	restored from backup, all requestor postoffices must have a full list of
	addressees submitted to the Dir-Sync server in order to resynchronize their
	address lists with the server's address list.
	
	After the server is restored from a backup copy, the address lists stored
	on the server are out of date. There is no mechanism for the server to
	request an update from the requestors, and the current structure of Dir-
	Sync does not maintain updates on the requestors once the server has
	processed them. Therefore, until the requestors perform a Config, Dir-Sync,
	Requestor, Export, the server will not receive the requestors' last updates
	(updates that occurred immediately before the restore operation). Future
	updates will be processed correctly; however, there will be a "hole" in the
	server's lists for the missing transactions.
	
	Additional query words: 3.00 3.20 3.20a 3.50 dirsync dirsynch
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
