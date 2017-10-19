---
layout: page
title: "Q83544: Unable to Set Up Printer in Control Panel"
permalink: /kb/083/Q83544/
---

## Q83544: Unable to Set Up Printer in Control Panel

	Article: Q83544
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add additional printers to Windows, you receive the following
	message:
	
	  The information file is damaged or not in the system directory. Copy the
	  control.inf file from disk #1 ...
	
	RESOLUTION
	==========
	
	- Delete all *.INF (information) files from the Windows directory. NOTE: Do not
	  delete any *.INF files from the Windows SYSTEM subdirectory.
	
	  This error occurs if the *.INF files were placed in the Windows directory
	  erroneously. This could occur due to user error, or third- party installation
	  programs.
	
	- Re-creating the WIN.INI file may also help correct this error. For more
	  information about rebuilding the WIN.INI file, query on the following words
	  in the Microsoft Knowledge Base:
	
	  create and win.ini and without and third-party
	
	- Open the SYSTEM.INI file in a text editor (such as Windows Notepad) and add a
	  semicolon preceding the Device=SYMEVNT.386 line to disable it:
	
	  ;Device=SYMEVNT.386   ;Added By NU8
	
	  Restart Windows to make this change take effect. Disabling this statement does
	  not allow Norton Utilities to run properly while in Windows.
	
	  NOTE: SYMEVNT.386 is a device driver provided with Norton Utilities and Norton
	  AntiVirus. Symantec has released a new version of this file that may correct
	  this error. Download file NU8DRV.EXE from the Symantec bulletin board service
	  (BBS).
	
	Additional query words: 3.10 inf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
