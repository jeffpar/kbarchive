---
layout: page
title: "Q164130: Scheduler Service Will Not Start if Server Moved from Domain"
permalink: kb/164/Q164130/
---

## Q164130: Scheduler Service Will Not Start if Server Moved from Domain

	Article: Q164130
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Scheduler service will not start if a member server is moved from a domain
	to a workgroup.
	
	The following error appears in the Eventlog:
	
	  Event 7001: Source: Service Control Manager
	  The Schedule service depends on the Netlogon service which failed to start
	  because of the following error:
	
	  The service has returned a service-specific error code.
	
	RESOLUTION
	==========
	
	Configure the Scheduler service to start with a local account, before you move
	the server from a domain to a workgroup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: schedule
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
