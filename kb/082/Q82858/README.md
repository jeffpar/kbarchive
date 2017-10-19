---
layout: page
title: "Q82858: How to Restore a System After Installing Desktop for Windows"
permalink: /kb/082/Q82858/
---

## Q82858: How to Restore a System After Installing Desktop for Windows

	Article: Q82858
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Norton Desktop for Windows (NDW) versions 1.x and 2.0 create two sets of backup
	files to store the configuration of both the MS-DOS environment and the
	Microsoft Windows environment.
	
	The first set of files have the .ND0 file extension. These files are the original
	configuration files that were used by both MS-DOS and Windows prior to the
	original installation of Norton Desktop for Windows.
	
	For Norton Desktop for Windows 1.0, you have the following files:
	
	  AUTOEXEC.ND0
	  CONFIG.ND0
	  WIN.ND0
	  SYSTEM.ND0
	
	For Norton Desktop for Windows 2.0, you have the following files:
	
	  CONFIG.NDW
	  AUTOEXEC.NDW
	  WIN.NDW
	  SYSTEM.NDW
	
	The second set of files have the .NDW file extension. The .NDW files are the
	configuration files prior to the most recent installation of Norton Desktop for
	Windows. These files are replaced with subsequent installation of Norton Desktop
	for Windows.
	
	MORE INFORMATION
	================
	
	To return Windows and MS-DOS to the state they were in before Norton Desktop for
	Windows was installed, copy the *.ND0 files to the original system files with
	the appropriate extension. For example, to restore the AUTOEXEC.BAT file, type
	the following at the MS-DOS command prompt:
	
	  copy autoexec.nd0 autoexec.bat
	
	You will be left with a number of extraneous files in the various directories;
	however, Windows will run as it originally did.
	
	For more information of removing all Norton Desktop for Windows files, query on
	the following words in the Microsoft Knowledge Base:
	
	  norton and desktop and windows and 3.1
	
	Norton Desktop for Windows is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.1 1.00 1.10 1.0 1.1 2.0 winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
