---
layout: page
title: "Q175076: SMS: Windows 95 Clients Cannot Be Remotely Rebooted"
permalink: /kb/175/Q175076/
---

## Q175076: SMS: Windows 95 Clients Cannot Be Remotely Rebooted

{% raw %}

	Article: Q175076
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
	
	Some Windows 95 clients cannot be remotely restarted from Systems Management
	Server through the Remote Reboot option. (This option is located in Personal
	Computer Properties under the Help Desk.) Using the Remote Reboot option may
	also cause the client computer to stop responding.
	
	CAUSE
	=====
	
	The CPU reset instruction depends on the computer's hardware. This problem is
	hardware-specific, and has been known to manifest itself on Gateway 2000 and HP
	Vectra computers.
	
	Note that the Remote Reboot function works correctly on client computers running
	Windows NT, regardless of hardware.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: prodsms smsremtshoot hang hung
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
