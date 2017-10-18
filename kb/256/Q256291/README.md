---
layout: page
title: "Q256291: SMS: Mandatory Advertisement Requiring Logged-On UserMay Not Run"
permalink: kb/256/Q256291/
---

## Q256291: SMS: Mandatory Advertisement Requiring Logged-On UserMay Not Run

	Article: Q256291
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you advertise a mandatory advertisement that requires a user to be logged
	on to a Windows NT-based client computer with no user logged on, the
	advertisement may not run when a user logs on to the client computer.
	
	CAUSE
	=====
	
	Advertisement Program Manager (APM) checks to see if a user is logged on to the
	client computer and returns a time-out value of 0 if no user is logged on. This
	eventually causes the advertisement to time out. Therefore, the mandatory
	advertisement does not run when a user logs on after this time-out period.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
