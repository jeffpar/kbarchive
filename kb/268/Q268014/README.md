---
layout: page
title: "Q268014: SMS: Error Message on a Blue Screen After You Upgrade to SMS 2.0"
permalink: /kb/268/Q268014/
---

## Q268014: SMS: Error Message on a Blue Screen After You Upgrade to SMS 2.0

	Article: Q268014
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kb3rdparty kbDriver kbsms200 kbsms200bug
	Last Modified: 04-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a client computer to System Management Server (SMS) 2.0 Service
	Pack 2 (SP2) on a computer running Windows NT 4.0 and using NeoMagic video
	drivers, you may receive an error message on a blue screen.
	
	CAUSE
	=====
	
	This problem can occur if video acceleration is enabled on the computer.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Remove NeoMagic from the list of accelerated drivers
	
	  -or-
	
	2. Start the laptop computer in VGA mode, and then reinstall the service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem has also been reported on computers that have the same
	configuration mentioned in the "Symptoms" section when Microsoft NetMeeting is
	installed. For additional information about this problem, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q264627 SMS: Video Acceleration and NetMeeting Cause Error Message
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbDriver kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
