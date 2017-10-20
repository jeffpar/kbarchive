---
layout: page
title: "Q213001: SMS: Remote Control Session Fails if Command Contains Quotes"
permalink: /kb/213/Q213001/
---

## Q213001: SMS: Remote Control Session Fails if Command Contains Quotes

{% raw %}

	Article: Q213001
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbMMC kbRemote kbsms200 kbsms200bug kbHelpDesk kbsmsUtil kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an administrator runs a remote execute command containing quotes during a
	remote control session, Microsoft Systems Management Server (SMS) tries to run
	the command on the client but fails. As a result, the remote-control session on
	the site server computer temporarily stops responding.
	
	The status responds with a "Communication Failure" error, and the site server
	loses the connection with the client, causing the tools window to close.
	
	After the tools window is closed, subsequent attempts to re-establish another
	remote tools session fail. The client remains stuck trying to run a command that
	it cannot process.
	
	CAUSE
	=====
	
	This behavior occurs because the client is holding onto the initial remote
	session, preventing it from responding to another remote control request.
	
	WORKAROUND
	==========
	
	To work around this issue, manually close the command dialog box that is running
	on the client computer; doing so allows a remote tools session to reconnect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbMMC kbRemote kbsms200 kbsms200bug kbHelpDesk kbsmsUtil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
