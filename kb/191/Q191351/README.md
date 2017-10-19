---
layout: page
title: "Q191351: SMS: Long Environment Paths May Cause Incomplete Inventory"
permalink: /kb/191/Q191351/
---

## Q191351: SMS: Long Environment Paths May Cause Incomplete Inventory

	Article: Q191351
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
	
	On Microsoft Windows NT client computers that have a path set that is longer
	than approximately 240 or 250 characters, the inventory collected is incomplete,
	particularly in the Environment category.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.2 Service Pack 1 and 2. This problem was corrected in the latest
	Microsoft Systems Management Server 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	On Windows NT clients that had a path of less than 50 characters, the following
	10 entries were created under Environment:
	
	     Comspec, OS, OS2LibPath, Path, Windir, Processor_archecture,
	     Processor_level, Processor_identifier, Processor_revision, Number of
	     Processors.
	
	When the path was increased to more than 240 characters, the inventory
	information that appeared under Environment contained only the following
	entries:
	
	     Comspec, Number of processors, OS, OS2LibPath
	
	Additional query words: prodsms sp sp4
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
