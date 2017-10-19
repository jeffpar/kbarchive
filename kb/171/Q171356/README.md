---
layout: page
title: "Q171356: Octopus 3.0 Beta May Cause WinNT to Boot In a Continuous Loop"
permalink: /kb/171/Q171356/
---

## Q171356: Octopus 3.0 Beta May Cause WinNT to Boot In a Continuous Loop

	Article: Q171356
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Octopus Beta 3.0 software, the system restarts in a continuous
	loop.
	
	CAUSE
	=====
	
	The system loads ntdetect and ntldr and proceeds to the blue screen and displays
	the build info. The screen goes black and the system restarts.
	
	RESOLUTION
	==========
	
	To resolve the problem, perform one of the following steps:
	
	If the System is FAT
	--------------------
	
	1. Rename c:\SystemRoot\System32\Drivers\Octopus.sys to Octopus.sav.
	
	2. Using a text editor, create a 0 byte file called Octopus.sys. Copy this file
	  to c:\SystemRoot\System32\Drivers\.
	
	3. Restart Windows NT.
	
	4. Run the uninstall program that came with Octopus and restart the system.
	
	If the System is NTFS
	---------------------
	
	1. Install Windows NT into a separate directory.
	
	2. Follow steps 1 through 4 above.
	
	3. Delete the parallel installation of Windows NT and change the boot.ini file
	  back to the original settings.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	product's performance or reliability.
	
	Additional query words: Octopus Beta3.0
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
