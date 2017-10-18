---
layout: page
title: "Q187293: SMS: Raw File May Cause Inventory Processor to Stop Responding"
permalink: kb/187/Q187293/
---

## Q187293: SMS: Raw File May Cause Inventory Processor to Stop Responding

	Article: Q187293
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The inventory processor (InvProc) may stop responding when converting a RAW file
	to MIF. No new RAW files are processed, which can lead to a backlog of RAW
	files. InvProc may eventually cause a Dr. Watson error in the SMS_Executive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article, or wait for the next Systems Management Server service pack.
	The hotfix should have the following timestamp:
	
	     5/15/98   5:14am        110,560 Invproc.dll (Intel)
	     5/15/98   5:14am        227,088 Invproc.dll (Alpha)
	
	Additional query words: prodsms hang hangs hung
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
