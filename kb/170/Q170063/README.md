---
layout: page
title: "Q170063: RASMAN Fails with 0xC0000005 - Access Violation"
permalink: /kb/170/Q170063/
---

## Q170063: RASMAN Fails with 0xC0000005 - Access Violation

	Article: Q170063
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Remote Access Service (RAS) server in Windows NT 3.51, a
	Rasman.exe Access Violation error message appears.
	
	CAUSE
	=====
	
	This problem occurs when Rascbcp.dll attempts to write to a NULL buffer passed
	by the server.
	
	
	RESOLUTION
	==========
	
	This problem was fixed in Windows NT 4.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
