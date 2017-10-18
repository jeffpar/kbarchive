---
layout: page
title: "Q181762: SMS: INVMAC Appears to Stop Responding During Inventory Scan"
permalink: kb/181/Q181762/
---

## Q181762: SMS: INVMAC Appears to Stop Responding During Inventory Scan

	Article: Q181762
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	INVMAC appears to stop responding during early stages of inventory. The status
	indicator bar does not show any new progress. After a brief period of time, the
	inventory scan will continue.
	
	CAUSE
	=====
	
	INVMAC is reading the Resync.cfg file. INVMAC reads the Resync.cfg file 48 bytes
	at a time. The larger the Resync.cfg file, the longer the delay.
	
	WORKAROUND
	==========
	
	To work around this problem, periodically use Dumpsync.exe from the BackOffice
	Resource Kit to purge the Resync.cfg file. Doing this will reduce the size of
	the Resync.cfg file, which should avoid the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms hang hangs hung freeze freezes frozen stop stopped lock locks locked up
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
