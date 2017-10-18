---
layout: page
title: "Q184101: Small Single and Double-Precision Values Are Rounded to Zero"
permalink: kb/184/Q184101/
---

## Q184101: Small Single and Double-Precision Values Are Rounded to Zero

	Article: Q184101
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Very small single-precision values (values less than 1.175e-38) and very small
	double-precision values (values less than 2.225e-308) are always rounded towards
	zero (chopped,) even when the rounding mode is set to round to nearest or round
	towards plus or minus infinity.
	
	You can test for the presence of this problem by checking to see if the
	double-precision value 1.4e-44 is converted to the single-precision value of
	1.4e-44, but the double-precision value 1.4e-45 is converted to single-
	precision value of zero.
	
	CAUSE
	=====
	
	This problem is caused by inaccurate rounding in the software emulation of these
	very small values. This problem should not be confused with normal Alpha
	hardware performance, which rounds ALL very small values to zero. For
	information about these very small values, please search the RISC Programmer's
	Guide (available in the online documentation in Microsoft Visual C++ for Alpha)
	for topics on denormals.
	
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
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
