---
layout: page
title: "Q154925: Copy Disk Command Missing from Floppy Disk Drive Context Menu"
permalink: /kb/154/Q154925/
---

## Q154925: Copy Disk Command Missing from Floppy Disk Drive Context Menu

	Article: Q154925
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:; Win2000:95
	Operating System(s): 
	Keyword(s): kbui win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the right mouse button to click a floppy disk drive icon in My
	Computer or Windows Explorer, the Copy Disk command may be missing from the
	context menu.
	
	CAUSE
	=====
	
	This behavior can occur if the Diskcopy.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps, substituting 98 where appropriate for
	the version you are using:
	
	1. Restart the computer in MS-DOS mode.
	
	2. In the Windows\System folder, rename the Diskcopy.dll file to Diskcopy.old.
	
	  NOTE: If the Diskcopy.dll file does not exist in the Windows\System folder,
	  continue with step 3.
	
	3. Extract a new copy of the Diskcopy.dll file from the Win95_10.cab cabinet
	  file on your Windows 95 CD-ROM or from disk 11 of the original Windows 95
	  disks to the Windows\System folder.
	
	  For information about using the Extract tool, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	4. After you extract a new copy of the Diskcopy.dll file to the Windows\ System
	  folder, type "exit" (without the quotation marks) at the command prompt.
	
	
	Additional query words: diskcopy dll
	
	======================================================================
	Keywords          : kbui win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:; Win2000:95
	
	=============================================================================
	
