---
layout: page
title: "Q167541: Encarta 97/Bookshelf 98: Invalid Page Fault Starting Program"
permalink: kb/167/Q167541/
---

## Q167541: Encarta 97/Bookshelf 98: Invalid Page Fault Starting Program

	Article: Q167541
	Product(s): Microsoft Home Kids Products
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbusage kbprb
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta for Windows 
	- Microsoft Bookshelf 98 for Windows 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Encarta 97 Encyclopedia or Bookshelf 98, you may receive an error
	message similar to the following error message:
	
	Encarta Error Message
	---------------------
	
	  This program has performed an Illegal Operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	If you click the Details button, you receive the following message:
	
	  ENC97 caused an invalid page fault in module ENC97.EXE
	
	Bookshelf Error Message
	-----------------------
	
	  BSHELF98 caused an invalid page fault in module BSHELF98.EXE
	
	CAUSE
	=====
	
	You have disabled Virtual Memory, or your Windows 95/98 swapfile is too small.
	
	RESOLUTION
	==========
	
	To view and change the current swapfile settings, do the following:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Performance tab, click the Virtual Memory button.
	
	4. Select Let Me Specify My Own Virtual Memory Settings.
	
	5. Note the current setting to the right of the "Hard disk" drop down box.
	
	  This number represents the amount of free space on this drive that can be used
	  for a swapfile. If this number is too small (under 10 MB, for example), you
	  need to choose a different drive that has more available space or you need to
	  free up additional disk space on this drive.
	
	6. Once you have made necessary changes such as freeing drive space or changing
	  drives, click OK. When you are asked to confirm your changes, click Yes.
	
	7. Click Close. Restart the computer when you are prompted.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm invalid page fault virtual memory swap file cdrom
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbusage kbprb 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbBookShelf1998
	Version           : :
	
	=============================================================================
	
