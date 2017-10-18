---
layout: page
title: "Q152614: XADM: Removing Objects Whose Tombstone Expired Before DirRep"
permalink: kb/152/Q152614/
---

## Q152614: XADM: Removing Objects Whose Tombstone Expired Before DirRep

	Article: Q152614
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 11-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You delete an object from a Microsoft Exchange Site but the object is never
	removed from one or more other Sites that participate in Directory Replication
	(DirRep).
	
	CAUSE
	=====
	
	The tombstone for the object in question expired before the object was
	replicated.
	
	WORKAROUND
	==========
	
	One way to ensure that this object is removed from all Sites and all other
	changes are propagated properly, is to remove the Directory Replication
	Connectors between the Site where the object was originally and the Site(s)
	which still show the deleted object.
	
	In many circumstances, this workaround is not acceptable. One example of when
	this workaround may not be acceptable is when the Sites are connected by slow
	links. Removing Directory Replication connectors will also affect Distribution
	List (DL) memberships if DLs have members from multiple sites. Please do not
	remove Directory Replication connector without fully understanding all the
	consequences.
	
	Another workaround that addresses the removal of the specific object in question
	only is outlined below. To help illustrate the steps necessary, lets use an
	example. Site USA has a user named Tom Jones on Server Nevada. Site USA has a
	Directory Replication Connector to Site Europe.
	
	                 DirRep Connector
	Site - USA           <--------->        Site - Europe
	Server - Nevada                         Server - England
	
	Tom Jones is then deleted from Server Nevada but the tombstone expires before the
	delete is propagated to Server England. To delete Tom Jones from the England
	Server, follow these steps:
	
	1. On the England Server, get Raw Properties on the stranded Tom Jones object,
	  making note of Obj-Dist-Name and Object-Version.
	
	2. On the Nevada Server, on the File menu, click New Mailbox to create a new
	  Mailbox. Ensure that the Obj-Dist-Name is identical to the one on the England
	  Server.
	
	3. Make minor changes to the new object until its Object-Version is greater than
	  the one on the England Server.
	
	4. Wait for the new object to be replicated from Site USA to Site Europe.
	
	  (This can be hurried by doing a Request Now from the England Server.)
	
	5. Once the object has been replicated, delete the new object from the Nevada
	  Server.
	
	The delete will now be replicated to the England Server and the orphaned Tom
	Jones will be removed.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
