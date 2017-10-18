---
layout: page
title: "Q198760: SMS: RC Causes Win95 Client in Suspend Mode to Stop Responding"
permalink: kb/198/Q198760/
---

## Q198760: SMS: RC Causes Win95 Client in Suspend Mode to Stop Responding

	Article: Q198760
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsUtil
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Systems Management Server 2.0 Windows 95 client computer is being Remote
	Controlled and the client goes into Suspend Mode, Windows 95 will stop
	responding when returning from Suspend Mode.
	
	If the CTRL+ALT+DEL keys are pushed to get the task list, Wuser32 will be in the
	"not responding" state. If the End Task button is clicked on Wuser32, the system
	will be locked up and the client must be restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms rc32 hang hangs hung lock locked up reboot rebooted
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
