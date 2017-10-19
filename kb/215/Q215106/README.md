---
layout: page
title: "Q215106: SMS: Windows 3.1 Error After Uninstalling Remote Tool"
permalink: /kb/215/Q215106/
---

## Q215106: SMS: Windows 3.1 Error After Uninstalling Remote Tool

	Article: Q215106
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbRemote kbsms200 kbsms200bug kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you uninstall Microsoft Systems Management Server 2.0 remote tool components
	from Microsoft Windows 3.1 clients, application errors may be generated when you
	quit Windows.
	
	The following error messages occur as application pop-up messages on the client
	computer
	
	  "Application Error: WUSER16 caused a Segment Load Failure in module USER.EXE
	  at 0001:3C0F"
	
	  "Application Error: WUSER16 caused a Segment Load Failure in module
	  IDISP16.DLL at ?"
	
	  "Application Error: PROGMAN caused a General Protection Fault in module
	  GDI.EXE at 0004:06A8."
	
	and then Progman.exe is closed.
	
	CAUSE
	=====
	
	This behavior can occur on computers with low conventional memory (less than 400
	kilobytes [KB]), particularly when Wuser.exe remains in memory but all of the
	support files have been removed. At this point, if you exit Windows, you receive
	the application errors described in the "Symptoms" section.
	
	WORKAROUND
	==========
	
	To resolve this problem, increase Windows 3.1 client conventional memory to 400
	KB or higher.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbRemote kbsms200 kbsms200bug kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
