---
layout: page
title: "Q190703: XADM: Local Objects Will Backsync From Other Sites"
permalink: kb/190/Q190703/
---

## Q190703: XADM: Local Objects Will Backsync From Other Sites

	Article: Q190703
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you restore the directory to a computer, directory objects not included in
	the restored directory are repopulated with updated entries by other servers in
	the organization. This includes the latest objects or entries that originated
	from the restored server, that were not on the backup.
	
	MORE INFORMATION
	================
	
	This process is called backsyncing. When the directory is restored from backup,
	a special flag is set in the registry which tells the directory to start
	backsyncing. At this point, the restored directory contacts all the other
	directories it is aware of and requests for replication updates starting at
	zero, but with the "backsync" flag set. This causes the other directories to
	search their databases for all objects that were sent by the requesting
	directory.
	
	For example, if you create UserA on Server1, the object for UserA replicates out
	to other sites. If Server1 goes down, and you restore from a backup that was
	done before UserA was created, Server1 will backsync and will get the UserA
	object back from a server which it replicates the object to. This is not limited
	to the local site; Server1 may receive this object from another site.
	
	Note: The updates will not be sent from another site if a "delete" has been
	issued for the Directory Replication connector or the object(s).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
