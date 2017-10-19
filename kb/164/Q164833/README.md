---
layout: page
title: "Q164833: XADM: EDBUTIL and ISINTEG Fail to Complete on Corrupted Store"
permalink: /kb/164/Q164833/
---

## Q164833: XADM: EDBUTIL and ISINTEG Fail to Complete on Corrupted Store

	Article: Q164833
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Information Store becomes corrupted, you may see the following
	symptoms:
	
	- The store reaches a high percentage of utilization (for example, 70 percent).
	
	- Currently logged on users will see their clients freeze.
	
	- When you run ISINTEG on the Information Store, it stops responding midway
	  through processing and remains that way. The utility fails.
	
	- When you run EDBUTIL /C /ISPRIV, it also stops responding and may indicate
	  which table the problem occurs on.
	
	CAUSE
	=====
	
	The internal pages of the table are corrupted. You may or may not be able to
	find the exact cause of this corruption.
	
	WORKAROUND
	==========
	
	There is no workaround. It is recommended that you run a full restore of your
	Information Store.
	
	As a last resort, you could use a newer version of EDBUTIL to repair the
	corruption.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
