---
layout: page
title: "Q155507: SMS: Remote Reboot Fails on Clients Running Windows NT 4.0"
permalink: kb/155/Q155507/
---

## Q155507: SMS: Remote Reboot Fails on Clients Running Windows NT 4.0

	Article: Q155507
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Remote Reboot option under Help Desk does not work with clients running
	Windows NT 4.0 when nobody is logged on to the system.
	
	When you first try to use Remote Reboot, only the "Begin Logon...Press Ctrl + Alt
	+ Delete to log on" screen might disappear on the client. If you try to use
	Remote Reboot again, the client is shut down but not restarted. Remote Reboot
	works under Windows NT 4.0 if at least one person is logged on to the client
	computer.
	
	WORKAROUND
	==========
	
	To work around this problem, use Remote Control to log the client on, before
	using Remote Reboot. Then close the Remote Control session, and use Remote
	Reboot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms boot shutdown
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
