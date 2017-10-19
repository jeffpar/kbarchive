---
layout: page
title: "Q76674: MS-DOS Shell Has Trouble Maintaining Dual File Lists"
permalink: /kb/076/Q76674/
---

## Q76674: MS-DOS Shell Has Trouble Maintaining Dual File Lists

	Article: Q76674
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When viewing a dual file list, MS-DOS 5.0 and later Shell may not properly
	maintain the first directory list while accessing a directory on a different
	drive in the second directory list.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Enter Shell with the Program/File Lists view selected.
	
	2. Press the TAB key to move to the Directory Tree and select any subdirectory.
	
	3. Press TAB to move to the Main Window and select Editor. Press ENTER.
	
	4. Once in MS-DOS Editor, from the File menu, choose Exit.
	
	5. In Shell, from the View menu, choose choose Dual File Lists.
	
	6. Press TAB to access the drive icons for the File List on the lower half of
	  the screen.
	
	7. Select a drive icon different than the drive selected in the File List on the
	  top half of the screen and press ENTER.
	
	8. The new drive is read and displayed as normal.
	
	9. Press TAB to access Directory Tree in the file list on the lower half of the
	  screen.
	
	The Directory Tree in the top half of the screen does not have a directory
	selected and the corresponding file list displays the files contained in the
	root of the selected drive. The title bar above the file list still displays the
	previously selected directory while the file list displays the contents of the
	root directory.
	
	Refreshing the screen (ALT+F5) updates the incorrect title bar with
	[drive]:\*.*.
	
	Pressing the TAB key to return to the Directory Tree on the top of the screen
	(without refreshing), again selects the first chosen directory. The title bar
	for the file list displays the corresponding directory while the file list
	displays the contents of the root directory.
	
	Microsoft has confirmed this to be a problem in MS-DOS 5 Upgrade. This problem
	does not occur in later versions of MS-DOS.
	
	Additional query words: 5.00 5.00a 6.00 6.20 6.21 6.22 noupd dosshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
