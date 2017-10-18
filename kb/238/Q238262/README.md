---
layout: page
title: "Q238262: Err Msg: &quot;STOP 0x00000050&quot; in Terminal Server Edition"
permalink: kb/238/Q238262/
---

## Q238262: Err Msg: &quot;STOP 0x00000050&quot; in Terminal Server Edition

	Article: Q238262
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Terminal Server Edition may display the following STOP error
	message on a blue screen:
	
	  STOP 0x00000050 (a51be2ac, 00000000, 00000000, 801581a0)
	  PAGE_FAULT_IN_NONPAGED_AREA
	
	NOTE: The first and fourth parameters may vary, depending on your system
	configuration.
	
	CAUSE
	=====
	
	This behavior occurs because Win32k.sys passes a null pointer as the clipboard
	object owner during a clean up process.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT 4.0 Server,
	Terminal Server Edition, Service Pack 5.
	
	
	Additional query words: wts tse
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
