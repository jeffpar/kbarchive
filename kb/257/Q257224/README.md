---
layout: page
title: "Q257224: SMS: Remote Control Reinstalled During Periodic Component Verify"
permalink: kb/257/Q257224/
---

## Q257224: SMS: Remote Control Reinstalled During Periodic Component Verify

	Article: Q257224
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig _IK964 kbsms200 kbsms200bug kbsms200sp2fix kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) 2.0 Remote Control tool may become
	unavailable on client computers approximately every 30 days. On the Component
	Status tab in the Systems Management tool in Control Panel, Remote Control may
	show a status of "Install pending."
	
	CAUSE
	=====
	
	The verification process for the Remote Tools component of the SMS client
	inadvertently disables the Remote Control agent.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, restart the client computers to restore Remote
	Control functionality.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig _IK964 kbsms200 kbsms200bug kbsms200sp2fix kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
