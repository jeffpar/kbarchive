---
layout: page
title: "Q158647: SMS: Autostarting Remote Control Option Behavior"
permalink: /kb/158/Q158647/
---

## Q158647: SMS: Autostarting Remote Control Option Behavior

{% raw %}

	Article: Q158647
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot kbusage smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you set the Site Properties Clients to automatically start the Remote
	Troubleshooting component, you may observe different behaviors, depending on the
	operating system the client is running. The following list shows the observed
	behavior for different operating systems:
	
	- MS-DOS clients: USERTSR and USERIPX are installed and placed in the
	  Autoexec.bat file, to be started automatically when the computer starts.
	
	- Windows 3.1 and 3.11 clients: USERTSR and USERIPX are installed and started
	  automatically from the Autoexec.bat file. WUSER is installed, but must be
	  started manually, regardless of the 'automatically start this component'
	  setting.
	
	- Windows for Workgroups clients: USERTSR is not loaded. If the client is a
	  NetWare client, USERIPX is started automatically. WUSER is not started
	  automatically, regardless of the 'automatically start this component'
	  setting.
	
	- Windows 95 clients: USERTSR and USERIPX are not loaded. WUSER is installed,
	  but must be started manually.
	
	- Windows NT clients: The Remote Control Agent service is installed and started
	  automatically, regardless of the 'automatically start this component'
	  setting.
	
	Additional query words: prodsms helpdesk help desk diagnostics wuser32 agent behaviour
	
	======================================================================
	Keywords          : kbtshoot kbusage smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
