---
layout: page
title: "Q98724: Password Case Sensitivity and System Error 1219"
permalink: /kb/098/Q98724/
---

## Q98724: Password Case Sensitivity and System Error 1219

	Article: Q98724
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Password validation in a Windows NT network is case-sensitive as long
	as the machine you are logged onto and the machine whose resource you
	are trying to access are both Windows NT machines; the case of the
	password entered and the password stored in the Windows NT user
	database must match. However, if a logon procedure takes place on a
	non-Windows NT machine (a Windows for Workgroups machine, for example)
	or the share being accessed is on a non-Windows NT server (even if the
	server is in a Windows NT domain), password validation becomes case-
	insensitive. There is one exception to these rules and one error that
	results from mismatched case in passwords.
	
	The exception is that if you change your password from a non-Windows
	NT machine (using the Windows NT NET PASSWORD command), Windows NT
	stores your new password as a case-insensitive password and permits
	all subsequent log ons to be password case-insensitive. Even if
	another user logs on from a Windows NT machine, no password case
	checking is performed.
	
	An error can be generated if you mismatch the case of your password
	after you've already logged onto a Windows NT domain. For example, if
	you establish a network session with a Windows NT machine by typing
	the following two lines
	
	  net use x: \\ntmachine\data /u:domain\user PASSWORD net use y:
	  \\ntmachine\apps /u:domain\user password
	
	the following error message is displayed:
	
	  System error 1219 has occurred. The credentials supplied conflict with an
	  existing set of credentials.
	
	To avoid this error message, make sure you always use the same case
	when attempting to connect to shared resources.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS310 kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.51 4.0
	
	=============================================================================
	
