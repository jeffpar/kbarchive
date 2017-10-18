---
layout: page
title: "Q100554: INFO: Using ADIR() Function to Obtain MS-DOS File Information"
permalink: kb/100/Q100554/
---

## Q100554: INFO: Using ADIR() Function to Obtain MS-DOS File Information

	Article: Q100554
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ADIR() function can be used to return MS-DOS file information, such as a
	file's date, time, size, and attributes.
	
	MORE INFORMATION
	================
	
	ADIR() places information about all files in the current directory, or all files
	that match a file skeleton (such as "*.DBF") into an array, then returns the
	number of matching files. For each file found, ADIR() places the name, size,
	date, time, and MS-DOS attributes in the specified array.
	
	If the directory is empty or there are no matches for the file skeleton, ADIR()
	does not create the array.
	
	The following sample code demonstrates the use of the ADIR() function to obtain
	file information for C:\COMMAND.COM:
	
	  =ADIR(FileInfo, "C:\COMMAND.COM")
	  DISPLAY MEMORY LIKE FileInfo
	
	The DISPLAY MEMORY LIKE FileInfo command shows information similar to the
	following:
	
	  FILEINFO         Pub      A
	
	  ( 1, 1) C "COMMAND.COM" ( 1, 2) N 52925 (52925.00000000) ( 1, 3) D 03/10/93 (
	  1, 4) C " 6:00:00" ( 1, 5) C "R...."
	
	According to these results, COMMAND.COM is 52,925 bytes in size, its date is
	3/10/93, its time is 6 A.M., and the Read-Only attribute is set.
	
	NOTE: ADIR() can also be used to return a drive's volume name.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	"Language Reference," version 2.5, page L3-176
	
	Online Help, FoxPro 2.5 and 2.5a for Windows
	
	Online Help, FoxPro 2.0, 2.5, and 2.5a for MS-DOS
	
	Additional query words: VFoxWin FoxDos FoxWin 2.x command system hidden archive ADIR file akz
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500 kbVFP600
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
