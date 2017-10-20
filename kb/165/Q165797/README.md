---
layout: page
title: "Q165797: SMS: Remote Control Disables Windows NT Screen Saver"
permalink: /kb/165/Q165797/
---

## Q165797: SMS: Remote Control Disables Windows NT Screen Saver

{% raw %}

	Article: Q165797
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the remote control of a client computer running Windows NT 3.5x, the
	screen saver wait time is disabled. This means that the screen saver will not
	start automatically until either the client is restarted, or the workaround
	below is followed.
	
	Client computers running Windows NT 4.0 are unaffected.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Stop the Systems Management Server Remote Control Agent service running on
	  the client.
	
	2. In the Desktop Control Panel, enter the screen saver setup and simply click
	  OK.
	
	3. Start the Systems Management Server Remote Control Agent service running on
	  the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms RC helpdesk winnt
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2,3.5,3.51
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
