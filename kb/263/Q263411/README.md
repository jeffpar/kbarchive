---
layout: page
title: "Q263411: SMS: Can't Upgrade Client to SP2 w/ SMSMan from Logon Point"
permalink: kb/263/Q263411/
---

## Q263411: SMS: Can't Upgrade Client to SP2 w/ SMSMan from Logon Point

	Article: Q263411
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the SMSMan utility to manually upgrade a Systems
	Management Server (SMS) 2.0 client to SMS 2.0 Service Pack 2 (SP2), you may
	receive the following error message:
	
	  Unable to complete the installation process.
	
	CAUSE
	=====
	
	Running the SMSMan utility from a Logon Point does not upgrade a client
	workstation to the latest service pack. This failure is by design, because the
	Logon Point may have a different version of code than the Client Access Point
	(CAP). This protects workstations in the enterprise from using mixed versions of
	Service Pack 1 and Service Pack 2.
	
	Because client upgrade should only be initiated during the Client Configuration
	and Installation Manager (CCIM) maintenance cycle, the message received on the
	workstation may be misleading.
	
	RESOLUTION
	==========
	
	Allow the workstations to be upgraded through the normal CCIM maintenance cycle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
