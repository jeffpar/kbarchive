---
layout: page
title: "Q89009: Music Box version 1.0 Does Not Retain Track Titles"
permalink: kb/089/Q89009/
---

## Q89009: Music Box version 1.0 Does Not Retain Track Titles

	Article: Q89009
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Music Box Player version 1.0 that comes with the multimedia extensions does
	not retain track titles with Microsoft Windows version 3.1.
	
	CAUSE
	=====
	
	All compact disks have a disk ID that can be read by MUSICBOX.EXE. This ID
	number is stored with the track titles entered in a file called MUSICBOX.INI.
	This file does not get updated properly.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Insert a Music Compact Disk in your computer.
	
	2. Run the Music Box application.
	
	3. From the Help menu choose About and make note of the disk ID number.
	
	4. From the File menu, choose Exit.
	
	5. Open up the file MUSICBOX.INI with an ASCII text editor.
	
	6. Use the following format to manually insert the titles. The number in
	  brackets is the disk ID number.
	
	        [3577507]
	        Track1=Name of song number 1
	        Track2=Name of song number 2
	
	        [1234456]
	        Track1=Name of song number 1
	        Track2=Name of song number 2
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
