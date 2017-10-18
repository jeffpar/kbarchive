---
layout: page
title: "Q260826: SMS: Multiple Advertisements May Not Work If One Is Unscheduled"
permalink: kb/260/Q260826/
---

## Q260826: SMS: Multiple Advertisements May Not Work If One Is Unscheduled

	Article: Q260826
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 28-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you schedule multiple advertisements and then unschedule one of the multiple
	advertisements in the Administrator console, the client receives an "Unable to
	connect to the server... You can't schedule any programs to run at this time"
	error message, and no advertisements run on the client workstation.
	
	CAUSE
	=====
	
	This behavior occurs if multiple programs are advertised to run on a client and
	the administrator unschedules one of the advertisements in the Administrator
	console while the client is running the Advertised Programs Wizard and is
	viewing the list of available programs. If the client schedules all the
	advertisements to run, the error message is displayed and no programs are run.
	
	WORKAROUND
	==========
	
	Cancel the selection of the unscheduled advertisement in the Advertised Programs
	Wizard, or quit and restart the Advertised Programs Wizard to refresh the
	advertisement list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
