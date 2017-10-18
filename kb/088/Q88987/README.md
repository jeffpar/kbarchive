---
layout: page
title: "Q88987: How to Calculate the Approximate Size of a .DBF File"
permalink: kb/088/Q88987/
---

## Q88987: How to Calculate the Approximate Size of a .DBF File

	Article: Q88987
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.0,1.01,1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 1.0, 1.01, 1.02, 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	The following formula calculates the size of a .DBF database file
	
	  (RECSIZE() * RECCOUNT())+HEADER()+1
	
	where:
	
	
	- RECSIZE returns the number of bytes for each record.
	
	- RECCOUNT returns the number of records in the .DBF file.
	
	- HEADER returns the size of the DBF header. The header includes all the
	  information about the .DBF file, including field names and sizes.
	
	This information can be very useful when you are trying to write
	backup routines for an application. You can use this formula in
	conjunction with the DISKSPACE function to determine if the backup
	copy of the database will fit on a disk.
	
	Additional query words: VFoxWin FoxDos FoxWin 1.00 data
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:1.0,1.01,1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
