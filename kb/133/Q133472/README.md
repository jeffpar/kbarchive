---
layout: page
title: "Q133472: Screen Saver Locks Out Account After You Enter Invalid Password"
permalink: kb/133/Q133472/
---

## Q133472: Screen Saver Locks Out Account After You Enter Invalid Password

	Article: Q133472
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT locks your user account before you reach the highest number of
	allowable logon attempts with an invalid password.
	
	This problem occurs if you turn on the account lockout option and configure the
	screen saver to use password protection.
	
	CAUSE
	=====
	
	The counter for the number of logon attempts with invalid passwords does not get
	reset after you log on successfully.
	
	For example, you configure Windows NT to lock a test account after two logon
	attempts with invalid passwords, and configure the desktop to use a screen saver
	with password protection. If you enter an invalid password during the first
	logon attempt after the screen saver locks the desktop, but you enter the
	correct password during the second attempt, Windows NT logs you on. If you enter
	an invalid password the next time you need to clear the screen saver, Windows NT
	does not accept your valid password.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT 3.51.
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
