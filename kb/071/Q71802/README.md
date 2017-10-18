---
layout: page
title: "Q71802: Windows Setup Does Not Recognize paging=off Setting"
permalink: kb/071/Q71802/
---

## Q71802: Windows Setup Does Not Recognize paging=off Setting

	Article: Q71802
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run the Windows Setup program, from the Main Group under Program Manager,
	it does not display the correct swap file setting if the line
	
	  paging=off
	
	is added to the SYSTEM.INI file's [386Enh] section.
	
	MORE INFORMATION
	================
	
	It is possible to have either a permanent or temporary swap file reported by
	Windows Setup, but not have Windows use it. In enhanced mode, the line "Swap
	file:" in the Windows Setup window has only two display settings:
	
	  Temporary
	
	  - or -
	
	  Permanent
	
	In real and standard modes, if a temporary swap file is being used, Windows Setup
	shows "Swap file: None."
	
	In 386 enhanced mode, the line "paging=off" is added to the SYSTEM.INI file's
	[386Enh] section to stop Windows from paging applications to the virtualized
	memory on the hard disk. When this line is invoked, the Windows Setup program is
	unaware of its existence.
	
	For more information on the "paging=off" setting, please refer to the SYSINI3.TXT
	file in your Windows directory.
	
	Additional query words: 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
