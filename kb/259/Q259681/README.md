---
layout: page
title: "Q259681: SMS: Hardware Inventory Doesn't Capture Variables on Win9x"
permalink: kb/259/Q259681/
---

## Q259681: SMS: Hardware Inventory Doesn't Capture Variables on Win9x

	Article: Q259681
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbWBEM kbsms200 kbsms200bug
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some environment variables that are seen on a Microsoft Windows 95 or Microsoft
	Windows 98 client by a set command, are not reported during the hardware
	inventory cycle even though the Sms_def.mof file has been modified to do so.
	
	CAUSE
	=====
	
	Upon startup, Microsoft Windows Management Instrumentation (WMI) reads the
	global environment variables when it enumerates the Sms_def.mof. Any environment
	variables added after that time (such as through logon scripts), are not
	recognized because the Web-Based Enterprise Management (WBEM) does not requery
	the environment variables.
	
	WORKAROUND
	==========
	
	To work around this issue, you need to set environment variables prior to the
	start of WMI, such as in the Autoexec.bat file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbWBEM kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
