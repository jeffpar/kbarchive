---
layout: page
title: "Q248639: Remote Access Service Does Not Start, Errors 7023 and 7001"
permalink: kb/248/Q248639/
---

## Q248639: Remote Access Service Does Not Start, Errors 7023 and 7001

	Article: Q248639
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Remote Access Service (RAS) on a computer running Microsoft
	Windows NT Server 4.0 Service Pack 3, RAS may not start and you may receive the
	following event log error messages in Event Viewer:
	
	  Event 7023: Remote Access Connection Manager service terminated with the
	  following error, could not find the file specified.
	
	  Event 7001: Remote Access Server Service depends on the RAS Connection Manager
	  to start.
	
	RESOLUTION
	==========
	
	Remove and then reinstall RAS. Reapply the latest service pack, and then restart
	the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
