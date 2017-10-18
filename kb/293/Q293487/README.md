---
layout: page
title: "Q293487: SMS: Advertisements That Should Run at Next Logon May Not Run"
permalink: kb/293/Q293487/
---

## Q293487: SMS: Advertisements That Should Run at Next Logon May Not Run

	Article: Q293487
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) advertisements that contain programs that are
	set to run at the next logon may intermittently not run on computers that run
	Microsoft Windows 95 or Microsoft Windows 98.
	
	If you review the Smsapm32.log file immediately after logging on, you can see
	that the program will not run as shown here:
	
	  SCHEDULER : This is a trigger type job. It will execute either on reboot,
	  logon, or logoff.~.
	
	CAUSE
	=====
	
	The SMS client components are started even if no user logs on after starting the
	computer. Because the network in Windows 95 and Windows 98 does not start until
	a user logs on, the SMS Client Offer data providers (ODPs) cannot connect to the
	Client Access Point (CAP) and generate a "The network is not present or not
	started" error message. When a user does log on, Smsapm32 attempts to schedule
	the advertisement during its user logon event processing, but cannot because the
	ODPs have not recovered from the previous error condition.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
