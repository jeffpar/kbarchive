---
layout: page
title: "Q179347: &quot;Fatal Exception 0E&quot; Error Message When You Start Windows 95"
permalink: /kb/179/Q179347/
---

## Q179347: &quot;Fatal Exception 0E&quot; Error Message When You Start Windows 95

	Article: Q179347
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may receive the following error message:
	
	  A Fatal Exception 0E has occurred at 0137:<address>. The current
	  application will be terminated.
	
	If you press a key to continue, one of the following symptoms may occur:
	
	- You receive the following error message:
	
	  A Fatal Exception 0C has occurred at 0137:<address>. The current
	  application will be terminated.
	
	- Your computer is restarted.
	
	NOTE: This error message also occurs in Safe mode.
	
	CAUSE
	=====
	
	This behavior can occur if the Advapi32.dll file located in the Windows\System
	folder is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Rename the Advapi32.dll file (if it exists). To do so, follow these steps:
	
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. In the Named box, type "advapi32.dll" (without the quotation marks), and
	     then click Find Now.
	
	  c. If the Advapi32.dll file is found, right-click it, and then click Rename.
	     If the Advapi32.dll file is not found, skip to step E.
	
	  d. Type a new name for the Advapi32.dll file (such as Advapi32.xxx), and then
	     press ENTER.
	
	  e. Close the Find window.
	
	2. Extract a new copy of the Advapi32.dll file from your original Windows 95
	  disks or CD-ROM. The Advapi32.dll file is located in the following
	  locations:
	
	   - The Win95_11.cab cabinet file on the Windows 95 CD-ROM.
	
	   - The Win95_17.cab cabinet file on the Windows 95 OEM Service Release 2
	     (OSR2) CD-ROM.
	
	   - The Win95_11.cab cabinet file on disk 11 of the original Windows 95 DMF
	     floppy disks.
	
	   - The Win95_18.cab cabinet file on disk 18 of the original Windows 95
	     non-DMF floppy disks.
	
	  For information about using the Extract tool, type "extract" (without the
	  quotation marks) at a command prompt, or see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	3. Restart your computer.
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
