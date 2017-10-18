---
layout: page
title: "Q153153: Error Message: &quot;SMS.EXE - Application Error&quot;"
permalink: kb/153/Q153153/
---

## Q153153: Error Message: &quot;SMS.EXE - Application Error&quot;

	Article: Q153153
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure the Default Network to be Multi-protocol on the SQL Server
	Client Configuration Utility, the following error message will occur when you
	close the SMS Administrator application:
	
	  SMS.EXE - Application Error
	  The instruction at "0x77f8d67f" referenced memory at
	  "0x00000010". The memory
	  could not be "read".
	  Click on OK to terminate the application
	
	WORKAROUND
	==========
	
	Run the SQL Server Client Configuration Utility and select Named Pipes as the
	Default Network. After Named Pipes is configured, use the SQL Service Manager to
	stop and restart the SQL service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
