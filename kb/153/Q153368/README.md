---
layout: page
title: "Q153368: SMS: Deleting Computers Fails with &quot;Out Of Locks&quot; Errors"
permalink: kb/153/Q153368/
---

## Q153368: SMS: Deleting Computers Fails with &quot;Out Of Locks&quot; Errors

	Article: Q153368
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbsmsAdmin smsadmin smsgeneral smsconfig smsdatabase kbArtTypeINFkb
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Deleting a large number of computers from the SMS Administrator tool fails with
	"out of locks" errors. No computers are deleted, and the following error is
	displayed:
	
	  Couldn't delete all the items.
	
	  Error attempting to delete the requested items. Items have been removed from
	  the query result list but not necessarily from the database. Refresh the data
	  to ensure the result is correct.
	
	The following error is displayed in the SQL messages window:
	
	  Msg SQL Server has run out of LOCKS. Re-run your command when there are fewer
	  active users, or ask your System Administrator reconfigure SQL Server with
	  more LOCKS.
	
	  Msg The rollback transaction request has no corresponding BEGIN TRANSACTION.
	
	
	CAUSE
	=====
	
	All the computers in the query window are locked during a delete. Each lock uses
	32 bytes. For example, 10,000 locks uses 320,000 bytes, which are then
	unavailable for caching the database.
	
	WORKAROUND
	==========
	
	To work around this problem, add more locks in SQL Server. If you must perform a
	one-time delete of a large number of computers, you can increase the number of
	locks specifically for the delete operation and then reduce the number of locks
	later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, and 1.1, and 1.2. This problem is not as severe under Systems
	Management Server version 1.2.
	
	Additional query words: prodsms err error message
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbsmsAdmin smsadmin smsgeneral smsconfig smsdatabase kbArtTypeINF kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
