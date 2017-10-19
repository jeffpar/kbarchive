---
layout: page
title: "Q173786: SMS: Error 87 When Using RSERVICE"
permalink: /kb/173/Q173786/
---

## Q173786: SMS: Error 87 When Using RSERVICE

	Article: Q173786
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start or stop a service using the RSERVICE utility with the
	/C switch, an error 87 occurs. Although RSERVICE gives messages about not
	succeeding to start or stop a service, the command actually does succeed.
	
	NOTE: The /C switch is used to specify that a connection is to be made to each
	computer using the service account prior to executing the service command(s).
	
	Uninstalling a service using the RSERVICE with the /C switch does not give an
	error 87 like start or stop. It also does not give the usual output about
	removing files and accounts from the client, nor does it successfully uninstall
	the service from the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: Rservice error service de-install de-installing deinstall deinstalling prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
