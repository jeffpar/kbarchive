---
layout: page
title: "Q263665: SMS: Travel Mode Switch Prevents New Clients from Being Assigned"
permalink: kb/263/Q263665/
---

## Q263665: SMS: Travel Mode Switch Prevents New Clients from Being Assigned

	Article: Q263665
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you modify the Site Control file (Sitectrl.ct0) and add a Travel Mode Switch
	property that is equal to 9 (0x0001: Traveling Mode Always On + 0x0008: Never
	Display Traveling Mode Message Box), new clients are not assigned.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, set the Travel Mode Switch to be equal to 8, or
	completely remove the Travel Mode Switch property from the Site Control file.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms travel mode new assigned
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
