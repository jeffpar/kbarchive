---
layout: page
title: "Q101361: PRB: VSafe Manager Does Not Appear in Windows Task List"
permalink: /kb/101/Q101361/
---

## Q101361: PRB: VSafe Manager Does Not Appear in Windows Task List

	Article: Q101361
	Product(s): Microsoft Disk Operating System
	Version(s): 3.0,3.0a,3.1,3.11,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the VSafe Manager program (MWAVTSR.EXE) in Windows and the option
	for Show Icon is not selected, VSafe Manager does not appear in the Task List.
	(It does appear if Show Icon is selected.)
	
	CAUSE
	=====
	
	VSafe Manager is a memory-resident program that allows VSafe messages to be
	displayed in Windows. If you deselect Show Icon from the Options menu in VSafe
	Manager, the minimized icon for VSafe Manager is hidden and the program does not
	appear in the Task List. The Show Icon option is selected by default.
	
	WORKAROUND
	==========
	
	Though VSafe Manager does not appear in the Task List, it is still resident in
	memory. To regain access to VSafe Manager, choose Run from the File menu in
	Program Manager and then type "mwavtsr.exe" (without the quotation marks).
	
	NOTE: The Task List is a window that displays a list of all currently running
	applications. To access the Task List, double-click with the mouse anywhere on
	the desktop or press CTRL+ESC.
	
	Additional query words: 6.22 6.00 6.20 3.10 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : :3.0,3.0a,3.1,3.11,6.0,6.2,6.21,6.22
	
	=============================================================================
	
