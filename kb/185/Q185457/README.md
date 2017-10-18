---
layout: page
title: "Q185457: XADM: Information Store Shuts Down; Database at Maximum Size"
permalink: kb/185/Q185457/
---

## Q185457: XADM: Information Store Shuts Down; Database at Maximum Size

	Article: Q185457
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange information store service shuts down. In the Windows NT
	application event log, the following event is logged:
	
	  Event ID:1112
	  Source: MSExchangeIS
	  Description:  The database has reached the maximum allowed size.
	  Attempting to stop the Microsoft Exchange Information Store.
	
	CAUSE
	=====
	
	The Microsoft Exchange information store utilizes the Exchange database engine.
	The maximum allowed size of a single database in Exchange versions 4.0 and 5.0
	is 16 GB (Priv.edb can be 16 GB and Pub.edb can be 16 GB). After the limit is
	reached, the Exchange database engine stops taking transactions and notifies the
	information store to shut down.
	
	NOTE: Microsoft Exchange Server 5.5 Enterprise Edition information store
	databases are not limited to 16 GB; they are limited only by available hardware.
	
	WORKAROUND
	==========
	
	The database (Priv.edb or Pub.edb) that has hit the 16-GB limit must be
	decreased so that the affected process can be started and remain started.
	
	First, the affected database must be defragmented to reclaim any free space. This
	can be accomplished by doing the following:
	
	1. Defragment the database. To do so, run the following command:
	
	  "edbutil /d /ispriv" (without the quotation marks)
	
	  -OR-
	
	  "edbutil /d /ispub" (without the quotation marks)
	
	  NOTE: If you are using the 5.5 version of Microsoft Exchange Server, run the
	  following command:
	
	  "eseutil /d /ispriv" (without the quotation marks)
	
	  -OR-
	
	  "eseutil /d /ispub" (without the quotation marks)
	
	2. Start the information store service, let it run for a couple of minutes, and
	  then stop the service gracefully. (This is done to make sure all uncommitted
	  transactions are flushed into the database; see the "More Information"
	  section later in this article for details.)
	
	3. After the process is back up and running, perform a FULL online backup.
	
	  -OR-
	
	  After the process is back up and running, stop the information store service
	  and perform an offline backup of the Exchsrvr\Mdbdata directory.
	
	Defragmenting the database should result in a decrease in size of the database;
	however, it is possible that the database will still be very close to the 16-GB
	limit. Therefore, steps must be taken to decrease the amount of information in
	that database. This can be accomplished by either moving some users from this
	server to another server with more free space, or implementing personal
	information store (PSTs) for users and having them move mail into PSTs. The
	Mailbox Resources tab in the Microsoft Exchange Administrator program can assist
	the system administrator in finding the largest mailboxes.
	
	It is a good idea to implement storage limits on user mailboxes in the private
	information store. Storage limits can be configured through the Exchange
	Administrator program and will help prevent from the database reaching the 16-GB
	limit.
	
	For more information about use of personal folders and storage limits, see the
	online documentation.
	
	NOTE: If users are moved to another server, the information store should be
	defragmented again by running "edbutil /d /ispriv" (without the quotation marks)
	or "edbutil /d /ispub" (without the quotation marks) so as to reclaim the space
	used by the users who were moved.
	
	MORE INFORMATION
	================
	
	When the Exchange database is committing a transaction from a log file and that
	transaction, if committed, will make the database surpass the 16-GB limit, the
	Exchange database engine takes the following steps:
	
	1. The transaction is wholly rolled back, meaning that no part of the
	  transaction succeeds, and the checkpoint holds a pointer to this transaction
	  in the log file where it was contained.
	
	2. The Exchange database engine alerts the information store that the 16-GB
	  limit has been reached.
	
	3. The information store then performs a graceful shutdown of the service.
	
	After the database size has been decreased and the service is restarted, the
	transactions that were not committed because the limit was reached will be
	committed. To ensure this happens, do this: After the information store is
	restarted following the defragmentation, stop the service again. This causes all
	the log files to be committed into the database.
	
	If you are using Exchange Server 5.5 Standard Edition and plan to upgrade to
	Exchange Server 5.5 Enterprise Edition with unlimited storage, you do not need
	to defragment the database. Run Setup.exe from the Exchange Server 5.5
	Enterprise CD-ROM or Srvmax.exe from the Select CD-ROM.
	
	Additional query words: JET_errOutOfDatabaseSpace -1012 Gig gigabyte
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Hardware          : ALPHA MIPS x86
	Issue type        : kbprb
	
	=============================================================================
	
