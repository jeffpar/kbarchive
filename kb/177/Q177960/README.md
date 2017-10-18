---
layout: page
title: "Q177960: Bookshelf 98: Bookshelf Daily Displays Empty Dialog Box"
permalink: kb/177/Q177960/
---

## Q177960: Bookshelf 98: Bookshelf Daily Displays Empty Dialog Box

	Article: Q177960
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbimukbfaq
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Bookshelf 98 or Microsoft Bookshelf Basics, Bookshelf
	98 may not start or Bookshelf Daily may not display a quote or word of the day.
	You may also receive an empty dialog box, or one of the following error
	messages:
	
	  There is not enough free memory to run this program. Quit one or more
	  programs, and then try again.
	
	  There is not enough memory to start Msvcrt20.dll. Quit one or more programs,
	  and then try again.
	
	  Cannot open articles file.
	
	  Unable to open book3! Daily Word will be abandoned.
	
	  Unable to open book4! Daily Word will be abandoned.
	
	  %1 caused an invalid page fault in module %2 at %3!.04x!:%4!.08x!.
	
	  Bshelf98 caused an invalid page fault in module Bshelf98.exe.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- Insufficient free memory is available.
	- Virtual memory is disabled.
	- Insufficient hard disk space is available.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods:
	
	Free Memory and System Resources
	--------------------------------
	
	To free memory and system resources that may not have been released by other
	programs, restart the computer.
	
	If the issue continues to occur, proceed to the next method.
	
	Confirm That Virtual Memory is Enabled
	--------------------------------------
	
	To confirm that virtual memory is enabled, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Virtual Memory.
	
	4. Click "Let Windows manage my virtual memory settings (recommended)."
	
	5. Click the Disable Virtual Memory (Not Recommended) check box to clear it if
	  it is selected.
	
	6. Click OK, and then click Close.
	
	7. When you are prompted to restart the computer, click Yes.
	
	If the issue continues to occur, proceed to the next method.
	
	Confirm That Sufficient Hard Disk Space is Available
	----------------------------------------------------
	
	To confirm that sufficient hard disk space is available on your computer, use the
	following steps:
	
	1. Double-click My Computer.
	
	2. Right-click the hard disk on which Windows is installed, and then click
	  Properties.
	
	3. On the General tab, note the amount of free space.
	
	4. Click OK.
	
	5. Repeat steps 2-4 for all other hard disks installed on your computer.
	
	6. Close My Computer.
	
	If any hard disk on your computer has 20 megabytes (MB) or more of available
	space, configure virtual memory to use the hard disk with the most available
	space. To do so, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Virtual Memory.
	
	4. Click "Let me specify my own virtual memory settings."
	
	5. In the Hard Disk box, click the hard disk with the largest amount of free
	  space.
	
	6. Click OK, and then click Close.
	
	7. When you are prompted to restart the computer, click Yes.
	
	If no hard disk on your computer has 20 MB or more of available space, increase
	the amount of available space on at least one hard disk. To do so, use one or
	more of the following methods:
	
	- Empty the Recycle Bin:
	
	  To empty the Recycle Bin, right-click the Recycle Bin icon on the desktop, and
	  then click Empty Recycle Bin. If you are prompted to confirm that you want to
	  delete the files, click Yes.
	
	- Back up and delete data files:
	
	  Back up and then remove data on the hard disk. For information about how to
	  back up files, click Start, and then click Help. On the Index tab, type
	  "backing" (without the quotation marks) and then double-click the "Backing up
	  files" topic.
	
	- Delete unnecessary files:
	
	  Delete any unnecessary files from the hard disk. For information about how to
	  delete files, click Start, and then click Help. On the Index tab, type
	  "deleting" (without the quotation marks), and then double-click the "Deleting
	  files or folders" topic.
	
	
	Additional query words: 98 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbimu kbfaq
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1998
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
