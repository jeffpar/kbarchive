---
layout: page
title: "Q175149: Bookshelf 98: Invalid Page Fault Viewing 360-Degree Views"
permalink: /kb/175/Q175149/
---

## Q175149: Bookshelf 98: Invalid Page Fault Viewing 360-Degree Views

	Article: Q175149
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbmmkbfaq
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view a 360-degree-view in Microsoft Bookshelf 98, you may
	receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	If you click Details, you receive one of the following error messages:
	
	  Bshelf98 caused an invalid page fault in module Bshelf98.exe.
	
	  Bshelf98 caused an invalid page fault in module Qtvrw32.qtc.
	
	CAUSE
	=====
	
	Virtual Memory may be disabled, or your Windows swapfile may be too small.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Virtual Memory.
	
	4. Click "Let me specify my own virtual memory settings."
	
	5. If the Disable Virtual Memory (Not Recommended) check box is selected, click
	  the check box to clear it.
	
	6. Note the current value that appears in the Hard Disk box.
	
	  This number represents the amount of free space on your hard drive that can be
	  used for a swapfile. If this number is too small (under 20 MB), you need to
	  choose a different hard drive that has more free space or you need to free up
	  additional disk space on this drive.
	
	7. Once you have made necessary changes such as freeing drive space or changing
	  drives, click OK. When you are asked to confirm your changes, click Yes.
	
	8. Click OK or Close. If you are prompted to restart the computer, click Yes.
	
	MORE INFORMATION
	================
	
	Windows 95 32-bit programs require virtual memory for 32-bit paging. We
	recommend that you maintain at least 20 MB of free space on the hard drive that
	contains your Windows swapfile.
	
	Additional query words: multi-media mmtitles kbmm virtual memory swap file
	
	======================================================================
	Keywords          : kbmm kbfaq
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1998
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
