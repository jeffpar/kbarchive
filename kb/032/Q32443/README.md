---
layout: page
title: "Q32443: MS-DOS CHKDSK Program Not Designed to Work with Windows"
permalink: kb/032/Q32443/
---

## Q32443: MS-DOS CHKDSK Program Not Designed to Work with Windows

	Article: Q32443
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:3.x,4.x,5.x,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft recommends that you do not use the MS-DOS CHKDSK utility from
	Microsoft Windows.
	
	If you choose to run CHKDSK from Microsoft Windows, do not use the /F parameter.
	CHKDSK was not designed to run with Windows, and the /F parameter closes any
	files your Windows applications are using (such as temporary files).
	
	MORE INFORMATION
	================
	
	In MS-DOS version 5.0 and later, attempting to use CHKDSK with the /F parameter
	results in the message:
	
	  CHKDSK /F cannot be done in a Windows/DosShell command prompt
	
	To check the amount of memory or disk space available when you are in Windows,
	choose the About MS-DOS Executive command from the File menu in the MS-DOS
	Executive window.
	
	Additional query words: 2.03 2.10 2.11 3.00 3.10 3.11 win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
