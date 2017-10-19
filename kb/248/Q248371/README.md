---
layout: page
title: "Q248371: Network Connection Is Not Closed When You Log Off"
permalink: /kb/248/Q248371/
---

## Q248371: Network Connection Is Not Closed When You Log Off

	Article: Q248371
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you log off from a Terminal Server session, not all network connections
	and files are closed correctly. This is most noticeable for users that connect
	to network share points (with a restricted number of user connections) and then
	log off and back on in quick succession. Subsequent attempts to connect to the
	share are rejected because of the maximum connection limit being reached,
	despite there appearing to be less users than the limit connected.
	
	CAUSE
	=====
	
	This problem can occur when you have dormant files on a connection at log off,
	causing a connection to not be terminated correctly. Note that this problem only
	affects Windows NT Terminal Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Support for Dormant files is a redirector optimization where files which the
	client has closed are not actually closed on the server until a short period of
	time later (usually about 30 seconds). This is in case the client re-opens the
	file. This optimization enables the file to be re-opened very quickly and
	reduces network overhead.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
