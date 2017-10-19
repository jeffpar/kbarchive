---
layout: page
title: "Q174534: BitBlt May Not Work When Raster Operation Mode Is NOTSRCCOPY"
permalink: /kb/174/Q174534/
---

## Q174534: BitBlt May Not Work When Raster Operation Mode Is NOTSRCCOPY

	Article: Q174534
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbcode kbdisplay kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some instances under Windows NT 4.0, certain video calls to Win32k.sys may
	fail when making the following call to the API:
	
	  BitBlt(hdc, 100, 100, 200, 200, hdc, 0, 0, NOTSRCCOPY)
	
	This can be reproduced in a true color environment.
	
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
	
	
	MORE INFORMATION
	================
	
	This problem occurs under the following conditions:
	
	  hdcDest - hdcSrc and nXSrc < nXDest and nYsrc != nYdest and dwRop
	     = NOTSRCCOPY
	
	Additional query words: BitBlt win32k
	======================================================================
	Keywords          : kbcode kbdisplay kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
