---
layout: page
title: "Q176961: SMS: Wuser32 Fails to Initiate Administrator Quick Viewer"
permalink: /kb/176/Q176961/
---

## Q176961: SMS: Wuser32 Fails to Initiate Administrator Quick Viewer

{% raw %}

	Article: Q176961
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
	
	During a remote control session, if the Windows NT client being remote
	controlled is rebooted using a method other than the Reboot button under Help
	Desk, the Systems Management Server Administrator Quick Viewer window does not
	appear after the remote control session is re-established. The current status
	under Help Desk will show Viewing ... Done. A second attempt returns the
	message:
	
	  Cannot establish a security context with this client
	
	When the client is rebooted again, Windows NT gives the message:
	
	  Help Desk options program is not responding Cancel Wait End
	
	The default values for the Help Desk settings are set properly.
	
	WORKAROUND
	==========
	
	To successfully restart a client computer during a Remote Control session, only
	reboot the client from within the Quick Viewer window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms smsremtshoot
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
