---
layout: page
title: "Q231330: IBM Client Access Causes STOP 0x0000001e"
permalink: /kb/231/Q231330/
---

## Q231330: IBM Client Access Causes STOP 0x0000001e

	Article: Q231330
	Product(s): Microsoft Windows NT
	Version(s): 4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Base Terminal Server, version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run IBM AS/400 Client Access on your computer, you may receive the
	following blue screen error message:
	
	  STOP 0000001e : c0000005 eb063e87 00000000 00000010
	  KMODE_EXCEPTION_NOT_HANDLED
	
	NOTE: The parameters may vary depending on the configuration of the computer.
	
	CAUSE
	=====
	
	This problem can occur if you have installed the following AS/400 Client Access
	kernel mode driver:
	
	  CwbRdr.sys Wed Feb 26 20:16:40 1997
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest build of the AS/400
	Client Access service packs (July 1997 and later.)
	
	The service pack for this product can be downloaded from the following Ftp site:
	
	  ftp://ftp.software.ibm.com/as400/products/clientaccess/win32/v3r1m2/servicepack/sf52313/sf52313.exe
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 0x1e
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbWBTSearch kbWBTServ400
	Version           : :4.0; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
