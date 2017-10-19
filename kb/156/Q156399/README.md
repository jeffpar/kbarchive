---
layout: page
title: "Q156399: XADM: JET Asserts on Heavily Used Multivalued Columns in the DS"
permalink: /kb/156/Q156399/
---

## Q156399: XADM: JET Asserts on Heavily Used Multivalued Columns in the DS

	Article: Q156399
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When performing an operation in the directory (for example, adding connectors,
	setting up replication, and so on) the JET may produce an assertion (if running
	the debug build of Edb.dll) or possibly Dr. Watson (if running the retail
	version). The assertion looks similar to the following:
	
	  Jet Assertion Failure
	  Rel. 1416.0, File bm.c, Line 1218
	  (pfucbldx->ssib.pbf)->cWaitLatch > 0 &&
	  (pfucbldx->ssi.pbf)->cPin > 0 &&
	  (pfucbldx0>ssib.pbf)->ppibWaitLatch == (pbmfix->ppib) PID: 416, TID:
	  224
	
	CAUSE
	=====
	
	During the expunge of a back link, JET deletes the old index item and inserts
	another. While inserting another item, it causes another split on the index and
	a move of some items also belonging to this cleanup. Because the new page is not
	wait latched, it asserts. This happens only on indexes of multivalue columns
	that the DS just added and uses heavily.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below. With the hotfix,
	JET aborts the cleanup (expunging) and retries it when it realizes that some
	items were moved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
