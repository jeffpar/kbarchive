---
layout: page
title: "Q96824: Using a Common UNDELETE.INI File with Undelete"
permalink: kb/096/Q96824/
---

## Q96824: Using a Common UNDELETE.INI File with Undelete

	Article: Q96824
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Undelete for MS-DOS (UNDELETE.EXE) and Microsoft Undelete for Windows
	(MWUNDEL.EXE) are designed to share a common UNDELETE.INI file. The UNDELETE.INI
	file specifies how Undelete should configure memory-resident delete protection.
	This protection is enabled each time you run Undelete with one of the
	following:
	
	  undelete /load
	  undelete /s[drive]
	  undelete /t[drive]
	
	MORE INFORMATION
	================
	
	The UNDELETE.INI file is a text file that can be edited using an ASCII text
	editor, such as MS-DOS Editor. If the MSDOSDATA environment variable is set, the
	UNDELETE.INI file is created in the directory specified by MSDOSDATA. Otherwise,
	the UNDELETE.INI file is created in the directory that contains UNDELETE.EXE.
	
	You can change the UNDELETE.INI file settings using any of the following three
	methods:
	
	Using Undelete for Windows
	--------------------------
	
	From the Options menu, choose Configure Delete Protection. The changes you make
	take affect the next time you load Undelete. (This is the simplest method.)
	
	Using the MS-DOS Command Line
	-----------------------------
	
	When you load Undelete using the /S[drive] or /T[drive] parameter, the mode of
	delete protection and which drive[s] you specify to protect are saved in the
	UNDELETE.INI file. These changes take affect immediately.
	
	Note: This method does not allow you to specify a drive to be left unprotected.
	For example, if you had been previously loading Delete Sentry on drive C,
	UNDELETE /SD would enable Delete Sentry on both drives C and D.
	
	Editing the UNDELETE.INI File
	-----------------------------
	
	Use an ASCII text editor, such an MS-DOS Editor, to change the UNDELETE.INI file
	settings.
	
	For more information on the UNDELETE.INI file, type "help undelete" (without the
	quotation marks) at the MS-DOS command prompt, press ENTER and refer to the
	Notes section.
	
	Additional query words: 6.22 6.00 6.20 MS-DOS-based
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
