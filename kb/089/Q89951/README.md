---
layout: page
title: "Q89951: Error Starting Norton Utilities Directory Sort"
permalink: /kb/089/Q89951/
---

## Q89951: Error Starting Norton Utilities Directory Sort

{% raw %}

	Article: Q89951
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to start Norton's Utility version 6.01 Directory Sort from within
	Windows, you may receive the following error message:
	
	  Caution: Fastopen is installed. Because Fastopen keeps information about
	  directories including the location of directory entries, Directory Sort will
	  not work when Fastopen is in use.
	
	If you run Directory Sort from MS-DOS, outside of Windows, the program runs
	normally.
	
	CAUSE
	=====
	
	Norton's Directory Sort is giving an incorrect error message. The error message
	should say that you cannot run this program from within a multitasking
	environment because the low-level disk access that Directory Sort performs may
	cause data corruption if another application attempts to access the disk at the
	same time.
	
	WORKAROUND
	==========
	
	Run Norton's Directory Sort from outside the Windows environment.
	
	
	In addition to Directory Sort, Norton technical support recommends that the
	following programs should not be run from within Microsoft Windows 3.1:
	
	- Speed Disk
	
	- Calibrate
	
	- Erase Protect
	
	- Directory Sort
	
	- Unerase
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
