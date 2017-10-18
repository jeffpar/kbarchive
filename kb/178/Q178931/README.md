---
layout: page
title: "Q178931: XADM: Database Size After Offline Defrag Not Same as Total K"
permalink: kb/178/Q178931/
---

## Q178931: XADM: Database Size After Offline Defrag Not Same as Total K

	Article: Q178931
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an offline defragmentation on the Priv.edb or the Pub.edb, the
	size of your database after defragmentation may not coincide with the Total K of
	all items in Mailbox Resources or Public Folder Resources.
	
	CAUSE
	=====
	
	There are several reasons why the actual database size may not match the total
	size of Mailbox Resources. For example, if you add the Total K for each mailbox
	listed in Mailbox Resources, and it equals 1 GB, and then you run EDBUTIL /D on
	the Priv.edb, the resulting database size may be larger than 1 GB. This
	difference could range from a few megabytes to several gigabytes, depending on
	several factors on the Exchange Server computer, described in 1-4 below:
	
	NOTE: In Microsoft Exchange versions 4.0 and 5.0, you use the EDBUTIL /D command
	to perform an offline defragmentation of a database. In Microsoft Exchange
	version 5.5, you use the ESEUTIL /D command to perform an offline
	defragmentation of a database.
	
	1. The Priv.edb stores more than mailbox messages and folders. Inbox Rules,
	  Views, and other items associated with the mailbox are stored here as well
	  but are not represented in the Mailbox Resources page.
	
	2. After an item is deleted or moved, it is not immediately wiped from the
	  store. A background cleanup process has to run first in order to fully commit
	  the change. For more information about background cleanup, see the following
	  article in the Microsoft Knowledge Base:
	
	  Q159306 XADM: IS Maintenance Tasks Not on IS Schedule.
	
	  Running EDBUTIL /D; after this will give you a better count of what is
	  actually in the database.
	
	3. Because of the Single Instance Storage feature, one message can belong to
	  many mailboxes. For example, if you send a message to several recipients who
	  reside on the same Exchange Server computer, the message is only stored once
	  in the information store, and the recipients just receive a pointer to the
	  message. If one recipient deletes the message from his or her mailbox, the
	  message is not deleted from the information store, only the pointer to it.
	  The message itself is not deleted until the last recipient deletes it. This
	  also means that all messages associated with a user may not be removed from
	  the Exchange Server computer when you move the user's mailbox to another
	  Exchange Server computer. The message sent to several recipients will remain
	  on the Exchange Server computer until all recipients of the message have been
	  moved to another Exchange Server computer or they all delete their pointer.
	
	4. The Exchange database engine uses sector level allocation. Every operation
	  that requests new memory and requires that a new extent be allocated, is
	  given a new extent of 16 pages (a page is 4 KB) -- regardless of the actual
	  number of pages being requested (may be one page). This leads to a relatively
	  sparse database structure. Therefore, it's generally true that the size of a
	  Exchange database will always be larger than the amount of data it contains.
	
	NOTE: Before you perform an EDBUTIL /d on any Microsoft Exchange database, make
	sure the drive that the utility is running against has available free disk space
	equal to twice the size of the database that is being defragmented.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
