---
layout: page
title: "Q256894: Windows 95 Clients Hang at Startup Randomly"
permalink: kb/256/Q256894/
---

## Q256894: Windows 95 Clients Hang at Startup Randomly

	Article: Q256894
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix
	Last Modified: 16-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) clients that are running Microsoft Windows 95
	may stop responding (hang) randomly at startup. When this occurs, both
	Explorer.exe and Microsoft Office Toolbar are displayed as "Not responding" in
	the Close Program dialog box; you must reboot the client computer to continue.
	
	CAUSE
	=====
	
	This behavior can occur if two Clisvc95.exe threads are running at the same
	time. The first thread owns an object that the second thread needs. Because one
	thread is not responding to a system broadcast message, the rest of the system
	hangs pending the message delivery. Both threads are attempting to load a
	dynamic-link library (DLL); because they currently own each other's lock, the
	process deadlocks.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. For additional information regarding this fix please
	the following article:
	
	  Q244034 SMS: Windows 95/98 Clients Hang Opening E-mail Attachments or
	  Associated Files
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
