---
layout: page
title: "Q267928: SMS: Remote Control Temporarily Disabled With IP Address Change"
permalink: kb/267/Q267928/
---

## Q267928: SMS: Remote Control Temporarily Disabled With IP Address Change

	Article: Q267928
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2 SP4,2.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbsms120 kbsms120bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP4, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change a Microsoft Windows 2000-based System Management Server (SMS) 1.2
	client Internet Protocol (IP) address without restarting the computer, an
	administrator cannot remotely control the client computer.
	
	CAUSE
	=====
	
	In previous versions of the Windows operating systems, you had to restart the
	computer to change the client IP address. In Windows 2000, the change is
	immediate and you do not need to restart the computer. However, the SMS Remote
	Control agent continues to use the previous IP address for Transmission Control
	Protocol/Internet Protocol (TCP/IP) Listen until you restart the client computer
	or stop and then start the SMS Remote Control agent.
	
	WORKAROUND
	==========
	
	After the user changes the IP address on a Windows 2000-based client, you must
	either restart the client computer or stop and then restart the SMS Remote
	Control agent to re-enable remote control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbClient kbsms120 kbsms120bug 
	Component         : SystemManagement
	Technology        : kbSMSSearch kbSMS120SP4 kbSMS200SP2
	Version           : winnt:1.2 SP4,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
