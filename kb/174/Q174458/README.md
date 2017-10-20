---
layout: page
title: "Q174458: SMS: Failure Playing AVIs During a Win95 Remote Control Session"
permalink: /kb/174/Q174458/
---

## Q174458: SMS: Failure Playing AVIs During a Win95 Remote Control Session

{% raw %}

	Article: Q174458
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
	
	When you run an audio-video interleaved (AVI) file through Remote Control to a
	computer running Windows 95, the computer running the Systems Management Server
	Administrator program may be abruptly disconnected. This problem only appears to
	occur when both of the following conditions are true:
	
	- The default protocol is set to TCP/IP in Control Panel Network.
	
	-and-
	
	- The Sms.ini file parameter for Default Protocol is set to NetBIOS.
	
	This configuration forces a NetBT type of protocol to be used between the Windows
	95 client computer and the computer running the Systems Management Server
	Administrator program.
	
	CAUSE
	=====
	
	The client computer running Windows 95 is sending a session RESET command that
	closes the Remote Control session.
	
	WORKAROUND
	==========
	
	To work around this problem, Change the Default Protocol parameter in the
	Sms.ini file from NetBIOS to IP.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms helpdesk
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
