---
layout: page
title: "Q244875: SMS: How to Enable Logging for the Sms_License_Server Service"
permalink: /kb/244/Q244875/
---

## Q244875: SMS: How to Enable Logging for the Sms_License_Server Service

{% raw %}

	Article: Q244875
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Sms_License_Server service (Remodbc.exe) runs on Software Metering servers.
	This service reads the data cache and grants or denies access to clients when
	they request licenses.
	
	MORE INFORMATION
	================
	
	By default, no logging is enabled for Remodbc. To enable logging, add the
	following section to the Remodbc.ini file on both the Systems Management Server
	site server and the Software Metering servers:
	
	  [Logging]
	  Logon=1
	  FileName=Remodbc.log
	  BackupName=Remodbc.lo_
	  MaxSize=200000
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
