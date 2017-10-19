---
layout: page
title: "Q106077: BUG: System-Wide WH_DEBUG Hook Causes a GP Fault"
permalink: /kb/106/Q106077/
---

## Q106077: BUG: System-Wide WH_DEBUG Hook Causes a GP Fault

	Article: Q106077
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb16bitonly kbHook kbGrpDSUser kbOSWin310bug
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installing a system-wide hook of WH_DEBUG type causes a general protection (GP)
	fault in the Windows SDK version 3.1.
	
	
	CAUSE
	=====
	
	WH_DEBUG hooks are called before calling any other hooks in the system. The bug
	occurs if at least one system-wide hook is present in the system. (Shell
	installs one such system-wide hook.) In the process of reporting the system-wide
	hook to the debug hook, the GP-fault occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows version 3.1. This
	problem is scheduled to be corrected in the next version.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbHook kbGrpDSUser kbOSWin310bug 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
