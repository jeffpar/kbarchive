---
layout: page
title: "Q141594: WinNT Err Msg: STOP 0x0000021a When You Log On To Domain"
permalink: /kb/141/Q141594/
---

## Q141594: WinNT Err Msg: STOP 0x0000021a When You Log On To Domain

	Article: Q141594
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5 3.51
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a Windows NT domain, the following STOP error message may
	appear:
	
	  STOP 0x0000021a
	
	CAUSE
	=====
	
	This problem occurs due to a corrupt user profile. Logging on locally works
	correctly.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Rename or remove the current user profile and recreate it.
	
	  -or-
	
	- Restore the user profile from a good backup.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5 3.51
	
	=============================================================================
	
