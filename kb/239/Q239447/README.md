---
layout: page
title: "Q239447: Unable to Connect to Down-Level SMB Server"
permalink: kb/239/Q239447/
---

## Q239447: Unable to Connect to Down-Level SMB Server

	Article: Q239447
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Window NT-based computer may not be able to connect to a down-level Server
	Message Block (SMB) server, such as an OS/2 Warp server, if the file system name
	on a share's down-level server is eight characters or longer. For example:
	
	  E:\>net use * \\<Server>\<Sharename>
	  System error 234 has occurred.
	  More data is available.
	
	The problem occurs the first time you try to connect to the server or you
	reconnect to the share after it was automatically disconnected. Typically, you
	can connect or reconnect to the share after two or three attempts.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this behavior, contact the manufacturer to have the file system
	name changed to less than eight characters.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0. This problem
	was first corrected in Windows NT 4.0 Service Pack 6a.
	
	Additional query words: 4.00 filesystem downlevel
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
