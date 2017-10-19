---
layout: page
title: "Q232951: Err Msg: The Snap-in That Has Been Selected Failed to Initialize"
permalink: /kb/232/Q232951/
---

## Q232951: Err Msg: The Snap-in That Has Been Selected Failed to Initialize

	Article: Q232951
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Microsoft Management Console (MMC), the following error
	message appears:
	
	  The snap-in that has been selected failed to initialize properly
	
	After you click OK in the dialog box, all snap-ins fail to appear in the MMC.
	
	CAUSE
	=====
	
	Mfc42u.dll is missing from the \Winnt\System32 directory.
	
	RESOLUTION
	==========
	
	To replace this file, uninstall and reinstall the Windows NT Option Pack, and
	reapply the latest service pack.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
