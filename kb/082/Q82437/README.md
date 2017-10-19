---
layout: page
title: "Q82437: Using Norton Desktop as Windows Shell"
permalink: /kb/082/Q82437/
---

## Q82437: Using Norton Desktop as Windows Shell

	Article: Q82437
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use Norton Desktop for Windows version 1.0 (NDW.EXE) as the shell for
	Microsoft Windows (in other words, having the
	
	  shell=ndw.exe
	
	line in the SYSTEM.INI file), the root directory for Norton Desktop must be in
	the PATH environment variable in the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	If Norton Desktop is not in the PATH, then starting Windows results in an error
	message and Program Manager is loaded as the shell. After this behavior occurs,
	the following problems can occur when Program Manager is closed:
	
	- The computer stops with only the desktop displayed.
	
	- Windows exits without its final dialog box being displayed.
	
	- Exiting Program Manager with other applications running can cause the other
	  programs to remain active until they are individually closed.
	
	Norton Desktop for Windows usually installs itself in the PATH whether or not you
	tell it to modify the AUTOEXEC.BAT. The above problems could result if you
	decide to remove the directory or decide to make the necessary installation
	changes later. Putting the Norton Desktop directory back in the PATH corrects
	all the problems listed above.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.1 3.00a 3.0a 3.00 3.0 3.11 ndw
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
