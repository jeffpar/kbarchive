---
layout: page
title: "Q172402: Auditing Logon Failures Does Not Log Remote Failures"
permalink: kb/172/Q172402/
---

## Q172402: Auditing Logon Failures Does Not Log Remote Failures

	Article: Q172402
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Not all failure events are recorded when User Manager for Domains is set to
	audit logon and logoff failures.
	
	CAUSE
	=====
	
	If a user fails to logon locally, the Event Viewer System Log records an event
	529 (Logon Failure). However, if a Remote User fails to log on to the domain, no
	event is recorded. The account is locked out if configured to do so, but no
	event is recorded.
	
	
	RESOLUTION
	==========
	
	If you are using Windows NT 4.0, to resolve this issue, see the following
	article in the Microsoft Knowledge Base:
	
	  Q182918 Account Lockout Event also Stored in Security Event Log on DC
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 usrmgr audit use r account lockout
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:4.0
	
	=============================================================================
	
