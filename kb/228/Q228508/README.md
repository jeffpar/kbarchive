---
layout: page
title: "Q228508: Err Msg: Error 1907 User Account Set with Change Password"
permalink: /kb/228/Q228508/
---

## Q228508: Err Msg: Error 1907 User Account Set with Change Password

	Article: Q228508
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a computer using Dial-Up Networking, you may receive
	one of the following error messages:
	
	Window2 95/98
	-------------
	
	  Error 1907 "User account set with change password"
	
	Windows NT
	----------
	
	  Error "The user must change password before he logs on the first time"
	
	CAUSE
	=====
	
	This issue can occur if you configure the user account to use the User Must
	Change Password option is set in User Manager.
	
	RESOLUTION
	==========
	
	To work around this issue, click to clear the "User Must Change Password at Next
	Logon" check box for the Dial-Up Networking user in User Manager for Domains.
	
	Additional query words: Logon Failure Remote Access internet authentication service ras
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
