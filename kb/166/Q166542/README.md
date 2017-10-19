---
layout: page
title: "Q166542: XADM: Database in Inconsistent State After Soft Recovery"
permalink: /kb/166/Q166542/
---

## Q166542: XADM: Database in Inconsistent State After Soft Recovery

	Article: Q166542
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If your system crashes after the Jet database has completed recovery from a
	previous crash, but before any subsequent log records are flushed, the database
	is in an inconsistent state. A -550 error recorded from source EDB may appear in
	the application log.
	
	CAUSE
	=====
	
	The RecoveryQuit transaction from the first recovery operation is in the last
	log file when another recovery is attempted.
	
	
	RESOLUTION
	==========
	
	Apply the fix described below. Jet's soft recovery was fixed to handle the
	existence of a RecoveryQuit transaction in the last log file. This allows the
	second recovery to complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: JET_errDatabaseInconsistent JET_err
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
