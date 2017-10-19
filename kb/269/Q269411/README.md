---
layout: page
title: "Q269411: SMS: Windows 95 Clients May Hang After Upgrade to Service Pack 2"
permalink: /kb/269/Q269411/
---

## Q269411: SMS: Windows 95 Clients May Hang After Upgrade to Service Pack 2

	Article: Q269411
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbWBEM kbsms200 kbsms200bug kbInventory kbUpgrade kbsms200preSP3fix k
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade your Systems Management Server (SMS) 2.0 hierarchy to Service
	Pack 2 (SP2), Microsoft Windows 95-based clients may stop responding (hang)
	during hardware inventory, when a Microsoft Outlook attachment is opened, or
	when a Microsoft Office document is opened in Windows Explorer.
	
	When this behavior occurs, the following error messages are logged in the
	Hinv32.log file:
	
	  WARNING 1 - Failed to update new cycle info !!! Hardware Inventory Agent
	  7/24/2000 11:49:37 AM 4294127983 (0xFFF3316F)
	
	  ERROR 1 - Cannot get schedule for previous cycle !! Hardware Inventory Agent
	  7/24/2000 11:49:37 AM 4294127983 (0xFFF3316F)
	
	Note that the Windows 95-based clients do not hang if you disable hardware
	inventory.
	
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
	Keywords          : kbClient kbConfig kbWBEM kbsms200 kbsms200bug kbInventory kbUpgrade kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
