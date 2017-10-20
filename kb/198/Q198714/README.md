---
layout: page
title: "Q198714: SMS: Enabling Power Management May Cause Remote Control to Fail"
permalink: /kb/198/Q198714/
---

## Q198714: SMS: Enabling Power Management May Cause Remote Control to Fail

{% raw %}

	Article: Q198714
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbRemote kbsms200 kbsms120 kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server versions 1.2 and 2.0, if you enable Power
	Management, remote control may fail. Windows 95 and Windows 98 clients that use
	remote control over TCP/IP may experience problems if they are idle for an
	extended period.
	
	CAUSE
	=====
	
	This problem occurs when power management is enabled through CMOS or software on
	Windows 95 and Windows 98 computers. This can occur on either portable or
	desktop systems that have power management enabled.
	
	When the timeout value is reached, the BIOS enables power management on the
	system. On some systems running TCP/IP, this causes Windows 95 and Windows 98
	clients to send a DHCP release of its IP address, causing all TCP/IP sessions to
	lose connectivity. If the systems are using TCP/IP as the remote access
	protocol, the Remote Control Agent (Wuser.exe) no longer listens on the released
	IP address.
	
	WORKAROUND
	==========
	
	To work around this problem, disable power management through either CMOS or
	software.
	
	Additional query words: prodsms sms200
	
	======================================================================
	Keywords          : kbRemote kbsms200 kbsms120 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
