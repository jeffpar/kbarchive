---
layout: page
title: "Q164900: SMS: Processor Name Only Allows 20 Characters"
permalink: kb/164/Q164900/
---

## Q164900: SMS: Processor Name Only Allows 20 Characters

	Article: Q164900
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbInventory kbsmsAdmin smsadmin smsinv smsdatabasekbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the client upgrade process from Systems Management Server version 1.1 to
	version 1.2, the client's processor name property may be truncated.
	
	CAUSE
	=====
	
	The processor name property that appears in a client's Personal Computer
	Properties in the Systems Management Server Administrator program can only
	display a maximum of 20 characters. For example, the string
	
	  INTEL PENTIUM PRO-200
	
	Appears as:
	
	  INTEL PENTIUM PRO-20
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbInventory kbsmsAdmin smsadmin smsinv smsdatabase kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
