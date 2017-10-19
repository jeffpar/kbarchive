---
layout: page
title: "Q235739: SMS: Intel P3 CPU Name Incorrectly Reported"
permalink: /kb/235/Q235739/
---

## Q235739: SMS: Intel P3 CPU Name Incorrectly Reported

	Article: Q235739
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When viewing Hardware Inventory information in Systems Management Server 2.0
	Administrator Console, the Intel Pentium III processor is reported as "Unknown
	Intel P6 processor."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This fix was released with SP1 and will allow Intel P3 processors running Under
	600MHz to be identified correctly. Processors greater than 600 MHz are still
	being reported as Unknown.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
