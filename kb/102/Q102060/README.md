---
layout: page
title: "Q102060: Increasing the Performance of MS-DOS-Based Applications"
permalink: /kb/102/Q102060/
---

## Q102060: Increasing the Performance of MS-DOS-Based Applications

	Article: Q102060
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	If you are not satisfied with the performance of your MS-DOS-based
	applications on Windows NT, try the following:
	
	Windows NT 4.0 keeps the same setting in the property (right click) of
	the MS-DOS-based applications.
	
	- If the application is in a window and the video display performance is slow,
	  try full-screen mode. Windows NT 4.0 screen folder provides this setting.
	
	- Disable the Compatible Timer Hardware feature in the _DEFAULT.PIF or the
	  application's program information file (PIF) under the NT-specific section of
	  PIF Editor. Since this feature causes a decrease in performance, it should be
	  used only if it is required to make an application to run with Windows NT.
	  Windows NT program folder under Windows NT section provides this setting.
	
	- If the application is in a window and seems to pause periodically, try
	  disabling Idle Detection in the Advance section of that application's PIF.
	  Windows NT misc folder provides this setting in a form of a slider bar called
	  idle sensitivity.
	
	- If the MS-DOS-based application can be configured for printing, choose LPT1,
	  LPT2 over parallel port. Most of the applications use Int17 to print when
	  configured for LPT<x>. If you select parallel port mode, these
	  applications print directly to printer ports. Parallel mode is significantly
	  slower in Windows NT compared to Windows 3.1.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:4.0
	
	=============================================================================
	
