---
layout: page
title: "Q139395: Compressed Audio Fails or Errors Occur After Windows Restart"
permalink: /kb/139/Q139395/
---

## Q139395: Compressed Audio Fails or Errors Occur After Windows Restart

	Article: Q139395
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Pack, version 1.0 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first time sound is used in your multimedia program the sound plays as
	expected. However, when you exit and then restart Windows you experience sound
	problems. This also occurs when you reinstall the program.
	
	In a program supporting sound, audio may not work, or you may receive one of the
	error messages when you attempt to play sound:
	
	  No wave device exists that can play files in the current format.
	
	-or-
	
	  Undetectable problem in the specified device driver.
	
	-or-
	
	  Multimedia device failed.
	
	-or-
	
	  Integer divide by zero.
	
	CAUSE
	=====
	
	Duplicate Audio Compression Manager (MSACM) files or System.ini files exist on
	the computer.
	
	RESOLUTION
	==========
	
	NOTE: The following steps involve searching for, deleting, and renaming files
	and folders. For more information about how to accomplish these tasks in
	Windows, see your Windows printed documentation or online help.
	
	To remove the duplicate files, do the following:
	
	1. Search your hard drive for the following files:
	
	  - Msacm.drv
	  - Msacm.dll
	  - Msadpcm.acm
	
	  Only one copy of these files should reside on your computer. Rename or delete
	  any copies not found in the Windows\System folder.
	
	2. Search your hard drive for the following file:
	
	  - System.ini
	
	  Only one copy of these files should reside on your computer. Rename or delete
	  any copies not found in the Windows folder.
	
	MORE INFORMATION
	================
	
	For more information on troubleshooting compressed audio problems, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q121132 MSACM 2.0: Compressed Audio Will Not Play
	
	Additional query words: errors errmmsg quiet halts multi media multimedia multi-media mmtitles kbmm m.s.a.c.m. sound sounds 1.0 2.0 1991 1992 1993 1994 1995 95 96 '96
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWin3xSearch kbHomeMMsearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMMPk100
	Version           : :1.0,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
