---
layout: page
title: "Q236988: Err Msg: &quot;Failed Getting User Configuration...&quot; Using TSPROF"
permalink: kb/236/Q236988/
---

## Q236988: Err Msg: &quot;Failed Getting User Configuration...&quot; Using TSPROF

	Article: Q236988
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to modify a user's Terminal Server profile path using the
	TSPROF command, the following error message is displayed:
	
	  Failed getting User Configuration, Error = 2 (0x2)
	
	CAUSE
	=====
	
	This behavior occurs when you do not use Terminal Server User Manager to create
	the user account (for example, when you use Microsoft Windows NT 4.0 User
	Manager or the NET USER command).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, modify the user's profile path using Terminal
	Server User Manager. After you edit the profile path using Terminal Server User
	Manager, subsequent attempts to edit the profile path using the TSPROF command
	are successful.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT Server 4.0,
	Terminal Server Edition. This problem was first corrected in Windows NT 4.0
	Server, Terminal Server Edition, Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
