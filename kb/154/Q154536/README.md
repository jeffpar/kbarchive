---
layout: page
title: "Q154536: SMS: Remote Control &quot;Permission Required&quot; Behavior"
permalink: kb/154/Q154536/
---

## Q154536: SMS: Remote Control &quot;Permission Required&quot; Behavior

	Article: Q154536
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbtshoot kbusage smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Systems Management Server versions 1.0 and 1.1, a client only asks you once
	if you will permit the console to connect. This is true for each Helpdesk option
	(that is, Viewing, Reboot, and so forth).
	
	In Systems Management Server version 1.2, each time the server attempts to
	connect to a client, you are prompted to allow the console to connect.
	
	MORE INFORMATION
	================
	
	In Systems Management Server versions 1.0 and 1.1, if the Remote Control Options
	on a client are set to Permission Required, and permission is granted once,
	subsequent attempts to remotely control the computer do not require permission
	until Windows is exited and restarted.
	
	The design was changed in Systems Management Server 1.2. When the Permission
	Required option is enabled, every attempt to initiate a Remote Control session
	generates a prompt asking if you want to allow Remote Control.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot kbusage smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
