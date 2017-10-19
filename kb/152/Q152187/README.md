---
layout: page
title: "Q152187: Add Printer Wizard Does Not Run"
permalink: /kb/152/Q152187/
---

## Q152187: Add Printer Wizard Does Not Run

	Article: Q152187
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbprint kbtool win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Add Printer icon in the Printers folder, nothing may
	happen.
	
	CAUSE
	=====
	
	This behavior can occur if either or both of the following files are missing or
	damaged:
	
	- Msprint.dll
	
	- Msprint2.dll
	
	RESOLUTION
	==========
	
	If these files exist on the hard disk, rename them. Then, extract new copies of
	these files from your original Windows 95 disks or CD-ROM to the Windows\System
	folder. The Msprint.dll file and the Msprint2.dll file are located in the
	Precopy1.cab cabinet file.
	
	For additional information about using the Extract tool, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	This behavior can also occur if the Windows\Inf folder is missing or damaged. To
	resolve this issue, extract all the .inf files from the Precopy2.cab file to the
	Windows\Inf folder. For information about using the Extract tool, see the
	following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Other files that are accessed when you activate the Add Printer Wizard include:
	
	- Setupx.dll
	
	- Setup4.dll
	
	- Mmci.dll
	
	- Iosclass.dll
	
	- Rundll32.exe
	
	- Sysclass.dll
	
	
	Additional query words: hangs
	
	======================================================================
	Keywords          : kbprint kbtool win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
