---
layout: page
title: "Q132800: Rebel Assault 1.4 Reports Protected Mode Already in Use"
permalink: /kb/132/Q132800/
---

## Q132800: Rebel Assault 1.4 Reports Protected Mode Already in Use

	Article: Q132800
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Rebel Assault 1.4 (or other programs), you may receive the
	following error message:
	
	  DOS/16M error: [31] protected mode already in use in this DPMI virtual
	  machine
	
	CAUSE
	=====
	
	The MS-DOS extender used by this program is not compatible with Windows 95.
	
	RESOLUTION
	==========
	
	For Rebel Assault 1.4, you can work around this problem by using the Rebel2.bat
	file, instead of the Rebel.exe file, to start the program. Do not use the
	Rebel.exe file or the Reb.bat file.
	
	For other programs with the same problem, use the following steps to configure
	the program to run in MS-DOS mode:
	
	1. Use the right mouse button to click the program icon, and then click
	  Properties on the menu that appears.
	
	2. On the Program tab, click the Advanced button.
	
	3. Click the MS-DOS Mode check box to select it.
	
	4. Click the Use Current MS-DOS Configuration option button.
	
	5. Click OK to close all the opened dialog boxes.
	
	Additional modifications may be necessary if the program requires expanded memory
	(EMM386) or a CD-ROM drive; follow standard procedures for MS-DOS- mode programs
	to make such services available.
	
	To start the program, double-click its icon, or type its name in the Run dialog
	box. Do not type the program's name at an MS-DOS prompt to start it; doing so
	does not use the new configuration.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
