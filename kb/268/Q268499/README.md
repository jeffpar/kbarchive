---
layout: page
title: "Q268499: SMS: Software Distribution Does Not Function on Alpha Platform"
permalink: /kb/268/Q268499/
---

## Q268499: SMS: Software Distribution Does Not Function on Alpha Platform

{% raw %}

	Article: Q268499
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 19-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Systems Management Server (SMS) Service Pack 2 (SP2), software
	distribution may not work on Alpha-based computers that have the Network Monitor
	Agent tool version 2 installed. The last entry that is reported in the the log
	for the Smsapm32.exe tool is "Checking if a user is actually logged on." At this
	point Smsapm32.exe quits silently.
	
	CAUSE
	=====
	
	This behavior is caused by an issue with the Network Monitor Performance Counter
	Nmperf.dll dynamic link library (DLL) file. This file causes the Smsapm32.exe
	process to quit unexpectedly while it is attempting to determine if a user is
	logged on. This behavior does not occur with earlier versions of SMS because the
	process that Smsapm32.exe uses to determine if a user is logged on locally has
	been modified.
	
	WORKAROUND
	==========
	
	To work around this issue, rename or remove the Nmperf.dll file from the
	%SystemRoot%\System32 folder. This procedure removes the Network Segment
	Performance Counter object, and therefore prevents Smsapm32.exe from quitting
	unexpectedly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
