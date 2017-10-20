---
layout: page
title: "Q172467: WIN95 Error Message: You are Not Allowed To Log On at This Time"
permalink: /kb/172/Q172467/
---

## Q172467: WIN95 Error Message: You are Not Allowed To Log On at This Time

{% raw %}

	Article: Q172467
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows 95 clients attempt to log on to a Windows NT domain, they receive
	the following message:
	
	  You are not allowed to log on at this time.
	
	CAUSE
	=====
	
	This is a message received from the Windows NT version 3.51 or 4.0 domain
	controller. It is generated when time restrictions have been imposed on a user
	account, and the user is trying to log on outside his allowed time.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove or change the time restrictions on this user by
	performing the following steps:
	
	1. Click the Start button, point to Programs, point to Administrative Tools, and
	  click User Manager.
	
	2. Select the user from the Username view pane.
	
	3. From the User menu, click Properties.
	
	4. Click Hours.
	
	5. Change the logon hours to times that are appropriate. Cleared check boxes
	  indicate users cannot log on during those times. Check boxes that are shaded
	  indicate users can log on during those times.
	
	Verify that the validating server's time settings are as correct. This can be
	confirmed in the Control Panel Date/Time tool.
	
	MORE INFORMATION
	================
	
	Windows NT 3.51 and 4.0 clients receive a more informative message:
	
	  Your account has time restrictions that prevent you from logging on at this
	  time. Please try again later.
	
	Additional query words: usrmgr prodnt win95
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
