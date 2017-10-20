---
layout: page
title: "Q171289: SMS: Grey Quick Windows Viewer with Remote Control"
permalink: /kb/171/Q171289/
---

## Q171289: SMS: Grey Quick Windows Viewer with Remote Control

{% raw %}

	Article: Q171289
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbenv kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to Remote Control a client computer running Windows NT, the Quick
	Windows Viewer appears "empty" and the background color is grey.
	
	The remote keyboard and the remote mouse are correctly driven.
	
	CAUSE
	=====
	
	The Systems Management Server Remote Control Agent is probably not configured
	correctly. Check the properties of the Systems Management Server Remote Control
	Agent service on the Systems Management Server client.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Open Control Panel and double-click the Services icon.
	
	2. Select the SMS Remote Control Agent and click Startup.
	
	3. Ensure that the "Allow Service to Interact with Desktop" option is enabled.
	
	4. Restart the Systems Management Server Remote Control Agent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms helpdesk rc gray
	
	======================================================================
	Keywords          : kbenv kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
