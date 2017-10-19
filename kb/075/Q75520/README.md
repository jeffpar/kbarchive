---
layout: page
title: "Q75520: Changes to Code in QBasic Disappear After Pressing CTRL+BREAK"
permalink: /kb/075/Q75520/
---

## Q75520: Changes to Code in QBasic Disappear After Pressing CTRL+BREAK

	Article: Q75520
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In QBasic, if you interrupt a program with the CTRL+BREAK key combination and
	you make a change to nonexecutable code, the following message is displayed:
	
	  You will have to restart your program after the edit. Proceed anyway?
	
	If you did not press ENTER on the line where you changed the code, a problem
	occurs. After you acknowledge the "Proceed anyway?" message (by pressing ENTER
	or clicking OK), your editing changes seem to disappear, and the code reverts
	back to its earlier appearance. Despite the appearance, the code actually has
	changed, and you can successfully use the Start, Restart, or Continue command
	from the Run menu.
	
	Refreshing the code window (as described below) updates the code's appearance.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in Microsoft QBasic version 1.0 and
	1.1 provided with Microsoft MS-DOS version 5.x, 6.0, 6.2, and 6.21. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Note: This problem only applies to changes made to nonexecutable code; it does
	not apply to comment lines. Most changes made in executable code do not prompt
	the warning, and the changes are correctly displayed (without reverting to the
	pre-edited appearance). Changes made to a DIM statement that appear after a
	$DYNAMIC metacommand (which is an executable instruction) will prompt the
	warning and behave as described above.
	
	To work around this appearance problem and correctly update the screen to show
	the code changes, you can use any of the following methods:
	
	- Move the cursor back to the changed line and press the ENTER, DELETE,
	  BACKSPACE, TAB, or SPACEBAR key.
	
	- Scroll the screen so the changed line is no longer visible, then scroll back.
	
	- Press F4 to switch to the output screen, then switch back by pressing any
	  key.
	
	Additional query words: 6.22 1.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
