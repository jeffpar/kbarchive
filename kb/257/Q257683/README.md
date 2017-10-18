---
layout: page
title: "Q257683: SMS: TMP Variable Not Consistent in SMSCliToknAcct&amp; Environment"
permalink: kb/257/Q257683/
---

## Q257683: SMS: TMP Variable Not Consistent in SMSCliToknAcct&amp; Environment

	Article: Q257683
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbAdvertisement kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an advertised program is run with the following properties, the value of
	the TMP environment variable after the reboot is not the same as the value
	before the reboot:
	
	- Run mode: Run with administrative rights (no account specified)
	
	- After running: SMS restarts computer
	
	When this behavior occurs, a software distribution that uses a two-phase process
	and shares data by using the TMP variable may not work. Files that are stored by
	using the TMP variable are not available after the reboot because the TMP
	variable is changed.
	
	CAUSE
	=====
	
	The value of the TMP variable is not properly restored within Advertisement
	Program Manager (APM).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbAdvertisement kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : :2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
