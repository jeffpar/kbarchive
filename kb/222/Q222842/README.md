---
layout: page
title: "Q222842: STOP 0x000000050 in Win32k.sys on Terminal Server"
permalink: kb/222/Q222842/
---

## Q222842: STOP 0x000000050 in Win32k.sys on Terminal Server

	Article: Q222842
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
	
	You may experience a STOP 0x000000050 blue screen STOP error message in Windows
	NT, Terminal Server Edition.
	
	CAUSE
	=====
	
	The problem appears to be related to a specific font which causes a trap in
	Win32k.sys.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition, Service Pack 5.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
