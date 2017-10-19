---
layout: page
title: "Q187334: SMS: Inventory Processor Does Not Indicate When MIF Not Created"
permalink: /kb/187/Q187334/
---

## Q187334: SMS: Inventory Processor Does Not Indicate When MIF Not Created

	Article: Q187334
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Inventory Processor (InvProc) service does not
	provide any additional log entries to help distinguish when a MIF is created and
	when one is not. If no changes are detected between the client's RAW file and
	its history file, the log entries lead one to believe that a MIF was actually
	created.
	
	For example, the following are sample entries from the Invproc.log file:
	
	     ~Reading the RAW file
	     ~It's for machine GO11B000
	     ~Processing Machine ISV MIF Files...
	     ~Converting RAW data to MIF
	     ~Appending no ID group COMPAQ CPU
	     .
	     .
	     .
	     ~Appending no ID group PC BIOS
	     Writing ~~
	     ~Waiting for MIF ........~
	
	The "Writing ~~" entry seems to indicate that a MIF was created, when in fact it
	was not.
	
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
	
	To work around this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack.
	
	The fix should have the following timestamp:
	
	     3/30/98     3:49pm        111,072 Invproc.dll (Intel)
	     3/30/98     3:49pm        228,624 Invproc.dll (Alpha)
	
	With the above fix installed, the Inventory Processor will log the following
	message when no MIF file is created:
	
	     No inventory changes for this machine, delta-mif not created
	
	Additional query words: prodsms Invproc
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
