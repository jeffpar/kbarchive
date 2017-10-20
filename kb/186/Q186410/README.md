---
layout: page
title: "Q186410: SMS: 16-bit Background Job Causes WOW VDM Error Message"
permalink: /kb/186/Q186410/
---

## Q186410: SMS: 16-bit Background Job Causes WOW VDM Error Message

{% raw %}

	Article: Q186410
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM kbsmsUtil smsinst smspcm smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When performing distribution to Microsoft Windows NT clients using Package
	Command Manager (PCM) as a service, you may receive the following message on the
	clients:
	
	  16 bit windows subsystem hidden console WOW VDM error setting up environment
	
	  A job is currently running in the background
	
	CAUSE
	=====
	
	The first error occurs because environment variables specified in the
	Autoexec.nt are not valid for a background session. When PCMSVC32 attempts to
	start a 16-bit application (usually a Setup.exe or Systems Management Server
	Installer executable) it starts the WOW subsystem. During the subsystem
	initialization, the Autoexec.nt file is parsed. If this file contains a
	reference to a variable that does not exist, this error occurs. An example of an
	invalid line would be SET LOGONNAME=%USERNAME%.
	
	The second error occurs because the Package Command Manager Service is running an
	SMS Installer package in a Dos VDM and can not close the VDM when the package
	installation is complete.
	
	WORKAROUND
	==========
	
	To avoid receiving this message, use a 32-bit setup application instead of
	16-bit. For a Systems Management Server Installer package, use the True Win32
	option which is available in advanced configuration. To correct the problem the
	SMS Installer Package should be recompiled using True Win32.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbPCM kbsmsUtil smsinst smspcm smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
