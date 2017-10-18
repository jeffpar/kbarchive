---
layout: page
title: "Q80858: Disabling Metz File F/X for Windows"
permalink: kb/080/Q80858/
---

## Q80858: Disabling Metz File F/X for Windows

	Article: Q80858
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Metz File F/X for Windows is a file utilities and task list replacement program
	for Microsoft Windows.
	
	The installation process replaces the TASKMAN.EXE file.
	
	MORE INFORMATION
	================
	
	Upon installation, Metz File F/X renames TASKMAN.EXE to TASKMAN.OLD. A new
	TASKMAN.EXE file is then copied into the Windows directory.
	
	To disable the Metz File F/X utility, do the following:
	
	1. Run MS-DOS.
	
	2. Go to your Windows directory.
	
	3. Type the following at the MS-DOS command prompt and then press ENTER:
	
	  REN TASKMAN.EXE TASKMAN.ABC
	
	4. Type the following at the MS-DOS command prompt and then press ENTER:
	
	  REN TASKMAN.OLD TASKMAN.EXE.
	
	For additional information, contact Metz Software technical support.
	
	The Metz product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 task swap switch toggle mets 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
