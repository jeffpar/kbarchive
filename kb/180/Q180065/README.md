---
layout: page
title: "Q180065: Err Msg: Error 709: Try Changing Your Password Again. If You..."
permalink: kb/180/Q180065/
---

## Q180065: Err Msg: Error 709: Try Changing Your Password Again. If You...

	Article: Q180065
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change your domain password from your Windows 95 Dial- Up
	Networking (DUN) client, the following error message may be displayed:
	
	  Error 709: Try changing your password again. If you still get this message,
	  report it to your system administrator
	
	CAUSE
	=====
	
	This behavior can occur when you are connected to a Windows NT 4.0 Remote Access
	Service (RAS) server.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Windows NT service pack.
	
	This fix should have the following time stamp:
	
	  01/22/98  03:25PM                27,408 Raschap.dll (Intel)
	  01/22/98  03:22PM                45,328 Raschap.dll (Alpha)
	
	NOTE: Service Pack 3 must be applied to Windows NT 4.0 prior to applying this
	fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: log on logon
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
