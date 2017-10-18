---
layout: page
title: "Q168486: 16-bit Applications May Fail after HP ScanJet Installation"
permalink: kb/168/Q168486/
---

## Q168486: 16-bit Applications May Fail after HP ScanJet Installation

	Article: Q168486
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the HP ScanJet Software version 2.5, 16-bit Windows-based
	applications may not start. When you double-click the application icon or
	executable file, the hourglass pointer appears for about ten seconds, but the
	application does not start.
	
	If you open an MS-DOS command prompt from within Windows NT and attempt to start
	an MS-DOS application such as the MS-DOS Edit utility, the application fails to
	start. The cursor temporarily freezes, and then eventually begins blinking again
	at the command prompt.
	
	CAUSE
	=====
	
	The setup program of HPScanJet version 2.5 may add extra characters in the
	FILES= line of the CONFIG.NT file located in the <WinRoot>\System32
	folder. This affects the WOW (16-bit application) subsystem in Windows NT.
	
	RESOLUTION
	==========
	
	Remove the extra characters in the FILES= line of CONFIG.NT so that the entry
	looks like the following:
	
	  FILES = 20
	
	You do not have to restart the computer for this change to take effect.
	
	MORE INFORMATION
	================
	
	HP ScanJet is manufactured by Hewlett-Packard, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: hpscanjet hpscan hpscan16 16bit
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
