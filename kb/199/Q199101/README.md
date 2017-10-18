---
layout: page
title: "Q199101: Rasman.exe Causes Access Violation with Connection Manager"
permalink: kb/199/Q199101/
---

## Q199101: Rasman.exe Causes Access Violation with Connection Manager

	Article: Q199101
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to make an automatic connection through Connection Manager,
	Rasman.exe causes an access violation.
	
	CAUSE
	=====
	
	The command line parameters passed to rasautou internally, are too long for the
	created buffer.
	
	WORKAROUND
	==========
	
	To work around this problem, make the complete path to Connection Manager
	installation directory shorter, by installing the Connection Manager software to
	the Connection Manager directory instead of using the default path, Program
	Files\Internet Explorer\Connection Manager.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Windows NT
	version 4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	This problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
