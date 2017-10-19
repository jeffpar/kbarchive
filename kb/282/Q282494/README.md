---
layout: page
title: "Q282494: SMS: Courier Sender Does Not Work When Sent to Grandchild Site"
permalink: /kb/282/Q282494/
---

## Q282494: SMS: Courier Sender Does Not Work When Sent to Grandchild Site

	Article: Q282494
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbsms200 kbsms200bug kbPackage kbScheduler kbSender kbsmsAdmin kbSoftw
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a package is configured and sent from the central site to a grandchild site
	by using the courier sender, and there is no direct LAN-sender address from the
	central site to the grandchild site, the package distribution does not work.
	
	Instead, the package is listed at the grandchild site without any distribution
	point information. It is also possible to import the parcel to the grandchild
	site, but when you attempt to advertise the package, the package is not present
	in the drop-down list box.
	
	CAUSE
	=====
	
	This problem can occur when the only address to a downlevel site is a Courier
	Sender address.
	
	NOTE: If there is a direct, non-courier sender address to the child site, the
	package can be distributed correctly.
	
	WORKAROUND
	==========
	
	To work around this problem, use direct addressing from the central to each
	child site in this configuration instead of courier-sender addressing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	When Scheduler attempts to send the package definition, a message is recorded in
	the Sched.log that states that there is direct addressing to the grandchild site
	and the send request goes into a pending state.
	
	  "There is direct address to site ST2, no need for routing for send request
	  1_027ST0."
	
	Later when the Scheduler attempts to hand the package off to the correct sender,
	it determines that the lone courier sender address is not sufficient to send the
	package and records the following in the Sched.log.
	
	  "Scheduling send request 1_027ST0.
	  No addresses available for site ST2.
	  No backup addresses available for site ST2."
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtool kbsms200 kbsms200bug kbPackage kbScheduler kbSender kbsmsAdmin kbSoftwareDist kbsms200preSP4fix kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
