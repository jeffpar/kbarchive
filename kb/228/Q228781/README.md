---
layout: page
title: "Q228781: SMS:SmsrunStartupDelay Fails If Sms.ini Is Not in Root Directory"
permalink: kb/228/Q228781/
---

## Q228781: SMS:SmsrunStartupDelay Fails If Sms.ini Is Not in Root Directory

	Article: Q228781
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120bug
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SmsrunStartupDelay function in Systems Management Server 1.2, the
	specified delay will not occur if the Sms.ini file is not in the root directory
	of the boot drive (example: C:\).
	
	CAUSE
	=====
	
	SmsRun16.exe is only looking for the Sms.ini file in the root directory of the
	boot drive. In some instances of Systems Management Server Installations, this
	file may be located in the %windir% directory.
	
	WORKAROUND
	==========
	
	Move the Sms.ini file from %windir% to C:\.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	MORE INFORMATION
	================
	
	For additional information about using the SmsrunStartupDelay function, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q191067 SMS: PGC Fails to Configure Applications When Roaming Profiles Are
	  Used
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
