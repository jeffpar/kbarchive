---
layout: page
title: "Q173785: SMS: RService Does Not Stop a Service Before an Uninstall"
permalink: kb/173/Q173785/
---

## Q173785: SMS: RService Does Not Stop a Service Before an Uninstall

	Article: Q173785
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
	
	When you use Rservice to uninstall a service on a system that has that service
	running, Rservice does not attempt to stop the service before attempting to
	uninstall it. This disables the service on the remote system since it has only
	been partially uninstalled. The files that were in use by the service are not
	deleted.
	
	CAUSE
	=====
	
	Rservice cannot uninstall files that are being used because the service is still
	running.
	
	WORKAROUND
	==========
	
	Prior to running Rservice with the /DEINSTALL switch, first run it with a /STOP
	switch to ensure that the service is stopped on all of the remote systems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Rservice Stop De-install Deinstall Service
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
