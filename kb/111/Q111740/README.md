---
layout: page
title: "Q111740: No Mouse Functionality in DoubleSpace Compress Screens"
permalink: /kb/111/Q111740/
---

## Q111740: No Mouse Functionality in DoubleSpace Compress Screens

	Article: Q111740
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	In the DoubleSpace maintenance program for MS-DOS 6.2, mouse functionality is not
	available with the following commands:
	
	  Compress Existing Drive
	
	-and-
	
	  Create New Drive
	
	When you choose either of these commands, the mouse cursor disappears and input
	is limited to the keyboard. In any further screens within either command, mouse
	capability remains disabled unless another utility, such as ScanDisk or the
	Defragmenter, is initiated. In such cases, the mouse promptly reappears. By
	exiting the Compress Existing Drive or Create New Drive menu, mouse
	functionality returns.
	
	NOTE: In the MS-DOS 6.0 version of DBLSPACE.EXE, mouse functionality is available
	with the Compress Existing Drive and Create New Drive commands, but keyboard
	functionality is disabled.
	
	MORE INFORMATION
	================
	
	The keys available in the Compress Existing Drive and Create New Drive menus are
	as follows:
	
	  Key                             Function
	  ----------------------------------------
	  Up and Down Arrow keys:         Select an option
	  ENTER key                       Accept a selection
	  ESC key                         Exit the current screen
	  F1 key                          Help
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
