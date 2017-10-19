---
layout: page
title: "Q263681: SMS: MSI App May Not Install Correctly w/ NT AutoLogon"
permalink: /kb/263/Q263681/
---

## Q263681: SMS: MSI App May Not Install Correctly w/ NT AutoLogon

	Article: Q263681
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbServer kbsms200 kbsms200bug kbsms200fix kbAdvertisement k
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Systems Management Server 2.0 (SMS) to deploy a Microsoft Installer
	(MSI) application that requires a restart to Microsoft Windows NT 4.0 Server or
	Workstation using the autologon functionality, the MSI Setup may either not
	complete, or leave the machine in an unknown state. Either one, or both of these
	events may occur.
	
	CAUSE
	=====
	
	When SMS restarts the client computer, a log-off process occurs before the
	restart initiates. When autologon is used, the client actually logs back on
	immediately after being logged off before the system shutdown is called.
	
	This behavior causes the "RunOnce" sections of the registry to be executed before
	the computer restarts, leaving the computer in an unknown state.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 and 2.0 SP1. This problem was first corrected in Systems Management
	Server version 2.0 Service Pack 2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbServer kbsms200 kbsms200bug kbsms200fix kbAdvertisement kbPackage kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
