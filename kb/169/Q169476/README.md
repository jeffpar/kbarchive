---
layout: page
title: "Q169476: SMS: Using RSERVICE Returns Error 203"
permalink: /kb/169/Q169476/
---

## Q169476: SMS: Using RSERVICE Returns Error 203

	Article: Q169476
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using RSERVICE to install the Package Command Manager (PCM) service for
	client computers running Windows NT, you may receive the following error:
	
	  Cannot install service SMS_PACKAGE_COMMAND_MANAGER_NT on
	  <COMPUTERNAME>!
	  [Error 203. The system could not find the environment option that was
	  entered.]
	
	WORKAROUND
	==========
	
	The service is installed correctly; however, when the /deinstall option is used,
	the service is not removed. Therefore, you can remove pcmsvc by using instsrv or
	instsvc from the Windows NT Resource Kit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sp2 service pack sp
	
	======================================================================
	Keywords          : kbnetwork kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
