---
layout: page
title: "Q82364: Long Pause During File Open with CD-ROM Drive"
permalink: /kb/082/Q82364/
---

## Q82364: Long Pause During File Open with CD-ROM Drive

	Article: Q82364
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Microsoft Windows, there may be a long pause while bringing up the dialog
	box or double-clicking the drive icon of CD-ROM drives, due to the way the
	common dialogs (for example, OpenFile, SaveFile) test for drive types.
	
	MORE INFORMATION
	================
	
	Depending on the CD-ROM driver, there may be a long pause when the dialog box
	first appears. This is due to the driver reading the disk for drive type
	information (which it shouldn't need to do, but some do). If you experience
	this, another driver that works with your CD drive may correct the problem.
	
	If the drive is audio only (no data) and you select it in the Drives list box,
	there will be a long pause as the driver looks through the entire CD for data
	information.
	
	Note that these problems seem to only happen when you have an audio-only disk in
	the drive. If there is a data disk (or one that has both data and audio), these
	problems should not occur.
	
	Additional query words: 3.10 COMMDLG CD ROM Pause Slow 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
