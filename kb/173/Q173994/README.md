---
layout: page
title: "Q173994: GetTextExtentPoint32W May Fail with Unicode Characters &gt; 0x"
permalink: kb/173/Q173994/
---

## Q173994: GetTextExtentPoint32W May Fail with Unicode Characters &gt; 0x

	Article: Q173994
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In certain instances under Windows NT 4.0, application code that uses the
	GetExtentPoint32W API and the lpszText parameter to point to text containing
	certain Unicode characters may fail. Using GetLastError() to find the problem in
	the code will have no return code. The same application running under Windows NT
	3.51 does not have this problem.
	
	MORE INFORMATION
	================
	
	Using a debugging tool to single-step through a failing application may reveal
	that the function fails if the data at the lpszText pointer contains extended
	characters. These characters include umlauts, grave accents, and so on, or any
	Unicode characters greater than hex value 0x100. This problem is difficult to
	reproduce because the application code may work fine if cStrTest is on the
	stack.
	
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
	
	
	Additional query words: CreateCompatibleBitmap win32k prodnt
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
