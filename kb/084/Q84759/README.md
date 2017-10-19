---
layout: page
title: "Q84759: Windows 3.1: File Manager Does Not Update Floppy Disk Window"
permalink: /kb/084/Q84759/
---

## Q84759: Windows 3.1: File Manager Does Not Update Floppy Disk Window

	Article: Q84759
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows, File Manager does not update the drive information (files
	and directories) for a drive that has more than one window open if the disk is
	changed.
	
	To show the correct contents of the disk, choose Refresh from the Window menu or
	press F5.
	
	MORE INFORMATION
	================
	
	When there is more than one drive window open for a given drive, the window
	instance is displayed in the title bar of the drive. The following is an example
	of the title bar for a second window opened on drive A:
	
	  A:\*.*:2 [LABEL]
	
	The :2 is the second drive window that has been opened for drive A.
	
	If at anytime the disk, is changed when there are multiple window instances for
	the drive, the Refresh (F5) option will have to be used to obtain the correct
	disk contents. Selecting, clicking, or double-clicking the drive icon or the
	drive folder, or choosing Select Drive from the Disk menu will NOT update the
	window.
	
	This behavior is by design.
	
	Additional query words: 3.10 3.11 refresh directory
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
