---
layout: page
title: "Q71690: Number of Files in Shared Windows Directory"
permalink: /kb/071/Q71690/
---

## Q71690: Number of Files in Shared Windows Directory

{% raw %}

	Article: Q71690
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Microsoft Windows 3.0 with the EXPALL.BAT file on a network, as
	described in the "Microsoft Windows User's Guide," Windows 3.0 places 283 files
	into the shared Windows directory (that is, 282 Windows files and 1 EXPALL.BAT
	file).
	
	Any number less than 283 means that not all disks have been correctly expanded
	into the shared Windows directory. As a result, if you use the SETUP /N command
	with less than 283 files installed, Windows asks for disks to be inserted during
	the installation procedure.
	
	NOTE: When doing a directory (DIR) on a drive which displays the [.] and [..]
	directory entries, 285 files are displayed, but these two should not be counted
	in the total file number.
	
	With Windows 3.1, 467 files are copied into the WINSHARE subdirectory when you
	run SETUP /A, and 23 files are copied into a user's directory when you run SETUP
	/N.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.0, pages 545, 553-554.
	
	"Getting Started with Microsoft Windows," version 3.1, pages 6-9.
	
	"Microsoft Windows User's Guide," version 3.1, pages 557-574.
	
	Microsoft NETWORKS.WRI file for Windows, version 3.1.
	
	Additional query words: 3.00 3.00a 3.10 win30 win31 kbsetup 3.11 469
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
