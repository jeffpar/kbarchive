---
layout: page
title: "Q188063: SMS: SMS 1.2 SP3 Cannot Be Distributed Using PCM as a Service"
permalink: /kb/188/Q188063/
---

## Q188063: SMS: SMS 1.2 SP3 Cannot Be Distributed Using PCM as a Service

	Article: Q188063
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbPCM smssetup smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Package Command Manager (PCM) as a service cannot be used to distribute and run
	the Systems Management Server 1.2 Service Pack 3 upgrade.
	
	MORE INFORMATION
	================
	
	To use PCM as a service, you must use the Package setup to set the package to
	run as Automated Command Line and System Background Task. For this to function,
	the program must NOT require user input of any kind. The setup program employed
	by Systems Management Server to apply service pack upgrades does not support the
	use of silent or unattended installations. Therefore, it is not possible to
	update a primary site to Systems Management Server 1.2 Service Pack 3 by means
	of the PCM service. You must use PCM as an application, and it will require user
	interaction to install successfully.
	
	Additional query words: SP SP3 instal installation instalation
	
	======================================================================
	Keywords          : kbsetup kbPCM smssetup smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
