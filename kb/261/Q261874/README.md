---
layout: page
title: "Q261874: LAN_Sender Generates Error 487 on WNetAddConnection2 to Child"
permalink: /kb/261/Q261874/
---

## Q261874: LAN_Sender Generates Error 487 on WNetAddConnection2 to Child

	Article: Q261874
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 17-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) LAN Sender may generate connection failure
	messages connecting to child sites. When this occurs, the Sender.log file
	states:
	
	  Error during WNetAddConnection2 to \\Server\SMS_SITE (487).
	
	This does not prevent connectivity between LAN Sender and the child sites.
	
	CAUSE
	=====
	
	This error message can occur on the SMS site server if you are using version 4.7
	of the NetWare redirector and a drive is mapped to a NetWare resource.
	
	RESOLUTION
	==========
	
	Upgrade to a supported version of the NetWare redirector as defined in the
	Release Notes included with your version of the SMS service pack.
	
	Additional query words: prodsms intranetware netware
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
