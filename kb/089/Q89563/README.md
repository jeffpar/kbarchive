---
layout: page
title: "Q89563: INFO: Using SetParent() to Change a Window Parent"
permalink: kb/089/Q89563/
---

## Q89563: INFO: Using SetParent() to Change a Window Parent

	Article: Q89563
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.11,95; winnt:3.51
	Operating System(s): 
	Keyword(s): kbSDKPlatform kbGrpDSUser kbWndw kbWndwProp kbUser kb16bitonly
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SetParent() can be used to change the parent window of a pop-up, overlapped, or
	child window. However, pop-up and overlapped windows were not designed to have a
	parent and they may function incorrectly if they are given a parent using
	SetParent. For example, messages like "WM_ACTIVATEAPP" that are sent only to
	top-level windows, will not be sent to a pop-up or overlapped window that has
	been given a parent. Child windows can be safely re-parented.
	
	The process that created the parent window can be the same as, or different than
	the process that created the window that is being re-parented.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSDKPlatform kbGrpDSUser kbWndw kbWndwProp kbUser kb16bitonly 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin311
	Version           : WINDOWS:3.11,95; winnt:3.51
	Issue type        : kbinfo
	
	=============================================================================
	
