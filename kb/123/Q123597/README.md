---
layout: page
title: "Q123597: WinNT Err Msg: Error 614 Out of Buffers When Using RAS Script"
permalink: kb/123/Q123597/
---

## Q123597: WinNT Err Msg: Error 614 Out of Buffers When Using RAS Script

	Article: Q123597
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a script to automatically log on to your dial-up service, if the
	server fails to respond to the script prompts, the script may stop responding
	(hang). After you quit the script that has stopped responding and attempt to
	redial the connection, you may receive one of the following error messages:
	
	  Error 614 - Out of buffers.
	
	  -OR-
	
	  Error 203 - The system could not find the environment option that was
	  entered.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: modem
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
