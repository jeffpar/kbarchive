---
layout: page
title: "Q166629: XADM: Store Defrag Fails with Access Violation"
permalink: /kb/166/Q166629/
---

## Q166629: XADM: Store Defrag Fails with Access Violation

	Article: Q166629
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are defragmenting the Microsoft Exchange Server Information Store and
	you specify "EDBUTIL /d /ispriv," Microsoft Exchange Server stops responding. An
	access violation error message similar to the following appears:
	
	  EDBUTIL.EXE - Application Error
	
	  The instruction at "0x<some-memory-address>" referenced memory at
	  "0x00000000". The memory could not be written. Click OK to terminate
	  or CANCEL to debug the application."
	
	In addition, a Drwtsn32.log and User.dmp file are created if Dr. Watson is
	configured properly as the default system debugger.
	
	CAUSE
	=====
	
	While defragmenting the attachments table, even if data to be copied is
	zero-length, the utility assumes that it has traversed down the tree one level,
	and so it inappropriately "backs up" one level to continue defragmenting. This
	can result in the access violation.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
