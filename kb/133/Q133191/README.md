---
layout: page
title: "Q133191: Reinstalling System Agent Without Losing Scheduled Tasks"
permalink: kb/133/Q133191/
---

## Q133191: Reinstalling System Agent Without Losing Scheduled Tasks

	Article: Q133191
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reinstall the Microsoft Plus! System Agent without
	losing your currently scheduled tasks.
	
	MORE INFORMATION
	================
	
	System Agent uses a file called Sage.dat to store scheduled tasks. When you
	reinstall System Agent, the System Agent registry keys are not re-created. This
	can cause a problem if the System Agent registry keys are damaged or invalid. To
	re-create the registry keys, you must remove the Sage.dat file. However, when
	you remove the Sage.dat file, your currently scheduled tasks are lost. To work
	around this behavior, use the following steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, then click System Agent.
	
	2. On the Advanced menu, click Stop Using System Agent.
	
	3. When you are prompted "Turn off System Agent now?" click Yes.
	
	4. Start Windows Explorer, then click Options on the View menu. Click the Show
	  All Files option button, then click OK.
	
	5. In the Program Files\Plus!\System folder, rename the Sage.dat file to
	  Sage.sav, and then close Windows Explorer. (To rename a file, click the file
	  with the right mouse button, then click Rename on the menu that appears.)
	
	6. Run Microsoft Plus! Setup and reinstall System Agent.
	
	7. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, then click System Agent.
	
	8. On the Advanced menu, click Stop Using System Agent.
	
	9. When you are prompted "Turn off System Agent now?" click Yes.
	
	10. Start Windows Explorer.
	
	11. In the Program Files\Plus!\System folder, use the right mouse button to
	  click the Sage.dat file, then click Delete on the menu that appears.
	
	12. Rename the Sage.sav file to Sage.dat.
	
	13. Start System Agent.
	
	14. Verify that the settings for each task are correct. To do so, click a task
	  in the Scheduled Programs column, then click Properties on the Program menu.
	  Click the Settings button (if it is available) and verify the settings for
	  the program.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
