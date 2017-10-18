---
layout: page
title: "Q304693: Event ID 644 May Be Logged When Auditing Is Not Enabled"
permalink: kb/304/Q304693/
---

## Q304693: Event ID 644 May Be Logged When Auditing Is Not Enabled

	Article: Q304693
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that is running Windows NT 4.0, event ID 644 may be logged in the
	Security event log. Event ID 644 indicates that a user account is locked. This
	event may be logged even if you do not have auditing enabled.
	
	CAUSE
	=====
	
	This behavior occurs because the computer does not verify if auditing is enabled
	before it logs the event.
	
	STATUS
	======
	
	This behavior is resolved in versions of Windows that are later than Windows NT
	4.0, including Microsoft Windows 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
