---
layout: page
title: "Q174960: SMS: Rservice Does Not Pass Startup Parameters"
permalink: /kb/174/Q174960/
---

## Q174960: SMS: Rservice Does Not Pass Startup Parameters

	Article: Q174960
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Rservice is used to start a service on a target computer, it references the
	[Startup Parameters] section of the Rservice.ini file, if it has been defined.
	The parameters defined in this section are not passed to the service correctly
	when it is started.
	
	WORKAROUND
	==========
	
	You can use the Server Manager utility to start the service after it is
	installed. The startup parameters can be defined prior to starting the service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms rservice.exe
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
