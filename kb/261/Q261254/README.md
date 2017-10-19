---
layout: page
title: "Q261254: SMS: APM Enters Endless Loop on Windows NT 3.51 Clients"
permalink: /kb/261/Q261254/
---

## Q261254: SMS: APM Enters Endless Loop on Windows NT 3.51 Clients

	Article: Q261254
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsms200preSP2fi
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you distribute a program that reboots the client computer, Available
	Programs Manager (APM) may enter an endless loop. This causes the program to
	continuously run at startup, followed by a restart. This behavior occurs only
	when the rebooting package is part of a dependency chain, and the target
	computer is running Microsoft Windows NT 3.51.
	
	CAUSE
	=====
	
	This problem occurs if APM quits before the rebooting program quits, causing APM
	to lose the status of the program. This causes APM to run the program again
	after the reboot. The client then becomes stuck in a loop; every time it boots,
	it runs the offer and reboots again.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	You may be able to work around this behavior by un-advertising the rebooting
	package to the Windows NT 3.51-based clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsms200preSP2fix kbsms200sp2fix 
	Component         : SystemManagement
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
