---
layout: page
title: "Q169020: 32-bit Help Fails to Start When 16-bit Help Is Running"
permalink: kb/169/Q169020/
---

## Q169020: 32-bit Help Fails to Start When 16-bit Help Is Running

	Article: Q169020
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT400sp4fix
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT cannot open a 32-bit help file if a 16-bit help file is already open.
	You get the following error message:
	
	  This file is not a Windows Help file.
	
	When you click OK, you receive the following error message:
	
	  A newer version of Help is needed to view this Help file.
	
	Windows NT supports both 16-bit and 32-bit Help files. Windows NT uses
	Winhelp.exe for 16-bit Help files and Winhlp32.exe for 32-bit Help file.
	
	CAUSE
	=====
	
	This problem occurs when a user tries to open a 32-bit Help file but already has
	a 16-bit version of Help running. Windows NT, instead of starting the 32-bit
	Help engine, will pass the 32-bit Help file to the 16-bit Help engine. As a
	result, the user will get the error message.
	
	
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
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
