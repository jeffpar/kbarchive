---
layout: page
title: "Q165678: Add Printer Wizard Cannot Find Needed Files on CD-ROM"
permalink: /kb/165/Q165678/
---

## Q165678: Add Printer Wizard Cannot Find Needed Files on CD-ROM

	Article: Q165678
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a printer using the Add Printer Wizard, at the end of the
	installation process you are prompted for the location of the printer files.
	Even though you specify the path to the Windows NT CD-ROM, you may still be
	prompted for the location of the printer driver files.
	
	CAUSE
	=====
	
	The Msprint.inf and Msprint2.inf files are located in the <Windows>\Inf
	folder, where <Windows> is the folder in which Windows NT was installed.
	
	RESOLUTION
	==========
	
	Rename the Msprint.inf and Msprint2.inf files in the <Windows>\Inf folder
	to Msprint.old and Msprint2.old. After doing so, run the Add Printer Wizard
	again.
	
	MORE INFORMATION
	================
	
	The Msprint.inf and Msprint2.inf files are Windows 95 printer .inf files. When
	the Add Printer Wizard is run, it uses these files instead of the Ntprint.inf
	file and prompts for the wrong files.
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
