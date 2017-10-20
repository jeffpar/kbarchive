---
layout: page
title: "Q92463: Err Msg with Infinite Disk: One of the Library Files Needed..."
permalink: /kb/092/Q92463/
---

## Q92463: Err Msg with Infinite Disk: One of the Library Files Needed...

{% raw %}

	Article: Q92463
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Infinite Disk for MS-DOS from Chili Pepper Software, the following
	error message appears when you try to run any program from Windows:
	
	  One of the library files needed to run this application is damaged. Please
	  reinstall this application.
	
	RESOLUTION
	==========
	
	To resolve this problem, please contact Chili Pepper Software.
	
	
	MORE INFORMATION
	================
	
	Infinite Disk is a utility program designed to optimize disk space by performing
	three types of activities on your hard disk:
	
	- File aging
	
	- Automatic migration of qualified files
	
	- Automatic recall of any migrated file when opened
	
	File Aging
	----------
	
	File aging is performed by IDRES.EXE, an Infinite Disk terminate-and-stay-
	resident (TSR) program that changes the creation date of all files to the date
	the program was installed.
	
	Automatic Migration
	-------------------
	
	Migration is the process of moving a file from one storage level to the next.
	
	  Level 0 = Standard file with no compression
	  Level 1 = A file that has been compressed by Infinite Disk
	  Level 2 = A file that has been removed from the local hard disk
	
	Infinite Disk automatically migrates files from one level to the next based on
	age criteria that you define during installation.
	
	Automatic Recall
	----------------
	
	Recall is the process of decompression and/or restoring a file from a Level 1 or
	Level 2 migration.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 optimize disk 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
