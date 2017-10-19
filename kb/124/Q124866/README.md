---
layout: page
title: "Q124866: Ultimate Frank Lloyd Wright: Manual Installation Instructions"
permalink: /kb/124/Q124866/
---

## Q124866: Ultimate Frank Lloyd Wright: Manual Installation Instructions

	Article: Q124866
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft The Ultimate Frank Lloyd Wright, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following describes how to manually set up The Ultimate Frank Lloyd Wright.
	These directions assume the following:
	
	- Your hard disk drive is drive C
	
	- Windows is installed in the C:\WINDOWS directory
	
	- The CD-ROM drive is drive X
	
	MORE INFORMATION
	================
	
	To manually set up The Ultimate Frank Lloyd Wright
	--------------------------------------------------
	
	1. Create a directory called \WRIGHT on your hard drive.
	
	2. Copy the following files from the CD-ROM to the C:\WRIGHT directory on your
	  hard drive:
	
	  X:\XFILES\MSSTP\PIDHOLDR.DLL
	  X:\PRE\FLW.ICO
	  X:\README.WRI
	
	3. Create a file named FLW.INI with the following entries:
	
	        [Paths]
	        InstPath=C:\WRIGHT\ 
	
	  Save the file FLW.INI to the C:\WINDOWS directory.
	
	4. If you are using Program Manager, create a new Program Group called
	  "Microsoft Multimedia."
	
	  NOTE: If you are using a third-party shell program, or Windows 95 instead of
	  Program Manager, refer to the manufacturer's User's Guide for assistance.
	
	5. Add the following new program items to this group.
	
	     Item 1:
	     Description:      Frank Lloyd Wright
	     Command Line:     X:\PRE\FLW.EXE
	     Icon File Name:   C:\WRIGHT\FLW.ICO
	
	     Item 2:
	     Description:      Frank Lloyd Wright Read Me
	     Command Line:     WRITE C:\WRIGHT\README.WRI
	
	     Item 3:
	     Description:      Frank Lloyd Wright Bibliography
	     Command Line:     WRITE X:\FLWINFO.WRI
	
	For more information on how to make any of the above changes, please consult your
	"Microsoft Windows User's Guide," or online Help.
	
	Additional query words: kbhowto 1.00 setup multi media multimedia multi- mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbGamesSearch kbUltimateFLW
	Version           : :1.0
	
	=============================================================================
	
