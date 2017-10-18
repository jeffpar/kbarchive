---
layout: page
title: "Q234327: Advertisements Do Not Run if Drive Letter Is Already Mapped"
permalink: kb/234/Q234327/
---

## Q234327: Advertisements Do Not Run if Drive Letter Is Already Mapped

	Article: Q234327
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsms200 kbsms200bug
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advertisements that require a specific drive letter to execute do not execute on
	the first attempt if the required drive letter is already mapped and the
	advertisement is not scheduled. When you select Run Now, the running program is
	present on the taskbar but the program executable is never actually started.
	However, after repeated attempts, the program may start.
	
	RESOLUTION
	==========
	
	To work around this problem, the advertisement can be scheduled to run at a
	future date instead of choosing Run Now. After you do so, the advertisement will
	execute successfully on the first attempt when it is scheduled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
