---
layout: page
title: "Q156387: XADM: JET Asserts in ISINTEG During a Check on Database"
permalink: /kb/156/Q156387/
---

## Q156387: XADM: JET Asserts in ISINTEG During a Check on Database

	Article: Q156387
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
	
	While running ISINTEG in check mode against a database, an assert may occur in
	JET (if running the debug build of Edb.dll), or possibly ISINTEG may stop with a
	Dr. Watson exception error.
	
	
	CAUSE
	=====
	
	When calculating the weight that moved to new page, it did not count the node
	that is bumped by the new node. So when a real split occurs on this page, JET
	asserts because there is no space for the split.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below. With the hotfix,
	the calculation was corrected to count the node that is bumped by the new node.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: terminate unhandled terminated access violation AV
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
