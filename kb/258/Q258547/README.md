---
layout: page
title: "Q258547: SMS: Upgrade Process May Hang When Upgrading Site Server to SP2"
permalink: /kb/258/Q258547/
---

## Q258547: SMS: Upgrade Process May Hang When Upgrading Site Server to SP2

	Article: Q258547
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug
	Last Modified: 26-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a Systems Management Server (SMS) 2.0 Service Pack 1 site
	server to Service Pack 2, the upgrade process may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior occurs when a site system running as a Software Metering server
	cannot be stopped remotely.
	
	WORKAROUND
	==========
	
	To work around this behavior, stop the SMS_License_Server service on site
	systems that are acting as Software Metering servers, or remove the Software
	Metering role from site systems before you run the Service Pack 2 upgrade.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms fail
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
