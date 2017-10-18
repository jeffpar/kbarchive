---
layout: page
title: "Q169619: SMS: SMS 1.2 SP2 Does Not Prompt for a Restart of Windows NT"
permalink: kb/169/Q169619/
---

## Q169619: SMS: SMS 1.2 SP2 Does Not Prompt for a Restart of Windows NT

	Article: Q169619
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2 SP2
	Operating System(s): 
	Keyword(s): kbsetup smsetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply Systems Management Server Service Pack 2 to a site, the clients
	are automatically upgraded. In Service Pack 1, this upgrade process notified the
	user to restart Windows for all the changes to take effect during verification.
	However, Service Pack 2 does not always provide this notification.
	
	Note that the Windows NT dialog box for Systems Management Server Client Services
	Change Notification continues to function as normal.
	
	WORKAROUND
	==========
	
	To work around this problem, ensure that all Windows Systems Management Server
	clients are restarted after Service Pack 2 has been installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms smsrun16 smsrun32 sp sp2
	
	======================================================================
	Keywords          : kbsetup smsetup 
	Technology        : kbSMSSearch kbSMS120SP2
	Version           : winnt:1.2 SP2
	Issue type        : kbbug
	
	=============================================================================
	
