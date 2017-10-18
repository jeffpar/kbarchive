---
layout: page
title: "Q165699: SMS_WORKING_DIR Environment Variable Ignored on Win16 Clients"
permalink: kb/165/Q165699/
---

## Q165699: SMS_WORKING_DIR Environment Variable Ignored on Win16 Clients

	Article: Q165699
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to set an MS-DOS environment variable, SMS_WORKING_DIR, that can
	be used to point a shared application to a default working directory. However,
	this variable is ignored by shared applications on Win16 clients. As a result,
	when a user clicks Open on a shared application's File menu, the default
	directory is the distribution server's package share.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms PGC
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
