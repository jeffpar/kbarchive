---
layout: page
title: "Q175525: SMS: Win 95 Clients Hang When Shut Down Using Remote Control"
permalink: kb/175/Q175525/
---

## Q175525: SMS: Win 95 Clients Hang When Shut Down Using Remote Control

	Article: Q175525
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a Remote Control session with a Windows 95 client computer, if the
	administrator clicks Shut Down on the remote client's Start Menu, the client
	computer may hang or experience a blue screen failure. When the administrator
	presses CTRL+ALT+DEL, the client does not reboot and a physical reset of the
	client computer is required.
	
	Systems Management Server version 1.2 supports Remote Reboot through the HelpDesk
	Reboot button, and does not support shutting down a client computer using the
	Quick Windows viewer. Shutting down a Windows 95 client through Quick Windows
	viewer may result in data loss on the Systems Management Server client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words: sms prodsms kbnetwork smsremtshoot bluescreen crash
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
