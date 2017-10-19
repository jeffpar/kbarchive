---
layout: page
title: "Q153406: SMS: Client Icons Do Not Deinstall"
permalink: /kb/153/Q153406/
---

## Q153406: SMS: Client Icons Do Not Deinstall

	Article: Q153406
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you a NULL username to log on, the Client icons for Systems Management
	Server are not removed during the second phase of the Client de-install
	process.
	
	
	CAUSE
	=====
	
	SMSRUNxx.EXE considers the a NULL username as a user who is not logged on.
	Therefore the de-install process does not continue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms erase program group
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
