---
layout: page
title: "Q179560: SMS: Remote Control Fails to Bring Up the Quick Viewer Window"
permalink: kb/179/Q179560/
---

## Q179560: SMS: Remote Control Fails to Bring Up the Quick Viewer Window

	Article: Q179560
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to start a Remote Control session with a Windows NT Server from
	the Systems Management Server Administrator program, you may see the Current
	Status change from "Viewing" to "Done" without ever bringing up the Quick
	Windows Viewer.
	
	MORE INFORMATION
	================
	
	To work around this problem, stop and restart the Systems Management Server
	Remote Control Agent Service on the Windows NT Server client computer.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
