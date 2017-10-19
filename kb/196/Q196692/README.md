---
layout: page
title: "Q196692: FIX: Selecting Internet Tab Causes Access Violation"
permalink: /kb/196/Q196692/
---

## Q196692: FIX: Selecting Internet Tab Causes Access Violation

	Article: Q196692
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following access violation may occur when a user who belongs to the USERS
	groups selects the Internet or Web Sharing tab in drive properties on a computer
	running Windows NT Workstation with Peer Web Services installed.
	
	  An application error has occurred.
	  and an application error log is being generated.
	  EXPLORER.EXE
	  Exception: access violation (0xC0000005), Address 0x58a07ab2
	
	NOTE: The 0x58a07ab2address may vary.
	
	RESOLUTION
	==========
	
	To work around this problem, log on as administrator.
	
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
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
