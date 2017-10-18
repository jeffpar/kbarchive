---
layout: page
title: "Q174648: SMS: RSERVICE May Display Erroneous Error Messages"
permalink: kb/174/Q174648/
---

## Q174648: SMS: RSERVICE May Display Erroneous Error Messages

	Article: Q174648
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kberrmsg kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, RSERVICE options may generate error messages
	indicating failure even though the command executed correctly.
	
	Using the /INSTALL Option
	-------------------------
	
	When RSERVICE is used to install PCMSVC32, the following message may be generated
	even though PCMSVC32 installation on the client has completed successfully:
	
	  Cannot install service SMS_PACKAGE_COMMAND_MANAGER_NT on xxx
	
	Using the /START Option
	-----------------------
	
	When using RSERVICE to start PCMSVC32, the following message may be generated
	even though PCMSVC32 is installed and has been started successfully.
	
	  Cannot start service SMS_PACKAGE_COMMAND_MANAGER_NT on xxx
	
	Using the /STOP Option
	----------------------
	
	When using RSERVICE to stop PCMSVC32, the following message may be generated even
	though PCMSVC32 has been stopped successfully:
	
	  Cannot start service SMS_PACKAGE_COMMAND_MANAGER_NT on xxx
	
	Using the /QUERY Option
	-----------------------
	
	When using RSERVICE with the /QUERY option to determine the status of PCMSVC32,
	the following message may be generated even though PCMSVC32 is installed and
	started:
	
	  Query: service SMS_PACKAGE_COMMAND_MANAGER_NT is not installed on xxx
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
