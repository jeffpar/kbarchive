---
layout: page
title: "Q250415: SMS: Remote Control May Not Work for Component Servers"
permalink: kb/250/Q250415/
---

## Q250415: SMS: Remote Control May Not Work for Component Servers

	Article: Q250415
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 28-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to remotely control a Systems Management Server (SMS) 2.0
	component server, the Remote Tools window may take a long time to open or may
	not open at all. In some instances, the window may take over one hour to open.
	
	CAUSE
	=====
	
	When the Remote Tools window opens, it runs a query against all the discovery
	data for the target computer. There is more discovery data in the database for
	component servers than there is for a standard client because of the extra
	discovery method (WINNT_SERVER_DISCOVERY) that SMS uses to periodically
	rediscover servers acting as site systems. This results in a very large result
	set, which in turn results in a delay before the window opens.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	A component server is an SMS site system that runs the SMS Executive service.
	SMS logon points are also component servers. For more information about
	component servers, see the "SMS 2.0 Administrators Guide," Chapter 1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
