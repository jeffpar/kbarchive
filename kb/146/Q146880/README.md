---
layout: page
title: "Q146880: Logon/Logoff Events Logged Out of Order in Security Log"
permalink: /kb/146/Q146880/
---

## Q146880: Logon/Logoff Events Logged Out of Order in Security Log

	Article: Q146880
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Logon/Logoff auditing is enabled and Net DDE is set to run on system
	startup, Logoff event 538 is incorrectly logged. Event 538 should be logged by
	the system in the Security event log upon the successful logoff from the desktop
	by a user. In this scenario, event 538 is logged within 5 to 10 seconds after
	the next user logs on and the audit for the new logon (event 528) appears.
	
	CAUSE
	=====
	
	During logoff, Windows NT should change the owner on all user-mode processes to
	the System's logon ID. This is incorrectly handled for Net DDE (NDDEAGNT.EXE).
	The resulting problem is that since at least one process is still running in the
	last logged-on user's context, the logoff event is not audited.
	
	The logon/logoff events can be paired by looking at the Logon ID field in the
	Event detail for Security events 528 and 538.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: netdde security audit
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
