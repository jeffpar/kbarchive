---
layout: page
title: "Q216477: Environment Path Too Long Causes Access Violation in Winlogon"
permalink: /kb/216/Q216477/
---

## Q216477: Environment Path Too Long Causes Access Violation in Winlogon

	Article: Q216477
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user attempts to log on remotely to a Terminal Server, the user will
	appear to start a logon session and get a background displayed, but will then be
	returned to the Locate Terminal Server dialog box. On the server, an instance of
	Dr. Watson will be shown in Task Manager, and the Drwtsn32.log file will be
	generated, as well as a user dump of the memory at the time of the failure. If
	the same user is logging on to the console of the Terminal Server, rather than
	remotely, the same thing occurs; however, because Winlogon is a vital system
	component, the server will display a blue screen STOP 0xC000021a error message.
	
	CAUSE
	=====
	
	When a user profile contains a combined environment path that is very long, the
	Winlogon.exe process that is spawned for the user will have a Dr. Watson error,
	and the user will be sent back to the Locate Terminal Server dialog box. If the
	same user logs on to the console of the Terminal Server, it will also cause
	Winlogon to have a Dr. Watson error, but it will be accompanied by a STOP
	0xC000021a blue screen error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, shorten your paths so that they total 1 KB or less
	of characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition, Service Pack 5.
	
	Additional query words: terminalsrv dr watson termsrv trap
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA MIPS x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
