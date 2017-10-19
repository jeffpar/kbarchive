---
layout: page
title: "Q174551: TCP/IP Advanced Security Option Clears Automatically"
permalink: /kb/174/Q174551/
---

## Q174551: TCP/IP Advanced Security Option Clears Automatically

	Article: Q174551
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a Remote Access Service (RAS) client dials into your Windows NT RAS Server
	that is using TCP/IP Advanced Security, you may notice the Enable Security check
	box in TCP/IP properties on your RAS Server is cleared so that your security
	settings are not enabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- As a temporary workaround, select the Enable Security check box to re-enable
	  your TCP/IP security settings. However, when a new RAS client dials into your
	  RAS Server, the check box will again become cleared.
	
	  -or-
	
	- Obtain the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: checkbox uncheck
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
