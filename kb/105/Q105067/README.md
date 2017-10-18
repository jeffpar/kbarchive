---
layout: page
title: "Q105067: Undelete Forces Exclusive (Full-Screen) Mode Under Windows"
permalink: kb/105/Q105067/
---

## Q105067: Undelete Forces Exclusive (Full-Screen) Mode Under Windows

	Article: Q105067
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Undelete (UNDELETE.EXE) in an MS-DOS session under
	Microsoft Windows or Microsoft Windows for Workgroups, the MS-DOS Prompt display
	changes from "windowed" to full screen.
	
	Also, when Undelete is running, you cannot press ALT+TAB, CTRL+ESC, or ALT+ENTER
	to switch tasks.
	
	CAUSE
	=====
	
	Undelete goes into exclusive mode to prevent other applications from changing
	the directory while Undelete has control. Without this precaution, it is
	possible that another program could create or delete a file in the current
	directory. Undelete could then be reading an invalid directory structure.
	
	
	Additional query words: wfw wfwg 6.22 6.20 dos box
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
