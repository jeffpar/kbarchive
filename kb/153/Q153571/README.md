---
layout: page
title: "Q153571: PCM Causes Dr. Watson AV if CurrentLogonServer Unavailable"
permalink: /kb/153/Q153571/
---

## Q153571: PCM Causes Dr. Watson AV if CurrentLogonServer Unavailable

{% raw %}

	Article: Q153571
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If the CurrentLogonServer is unavailable, Package Command Manager (PCMWIN32) can
	cause a Dr. Watson access violation (AV) error. The PCM log file will contain
	entries similar to the following:
	
	  \\<servername>\sms_pkgd\x8600001
	     Attempting to connect to package server \\<servername>\sms_pkgd\...
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms pcmwin32
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
