---
layout: page
title: "Q71251: Read-Only Calendar Data File Cannot Use Save As Command"
permalink: kb/071/Q71251/
---

## Q71251: Read-Only Calendar Data File Cannot Use Save As Command

	Article: Q71251
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	If you load a read-only .CAL data file into Calendar and then select the
	File Menu Save As command, an error message similar to the following is
	displayed.
	
	  Cannot Save File;
	  Check to ensure the path and filename are correct and, if applicable, the
	  network is running.
	
	To save the file, you must remove the file's read-only attribute. You can
	do this with the MS-DOS Attrib command, as follows:
	
	  attrib -r <filename>.cal
	
	where <filename.cal> is the name of the read-only .CAL data file.
	
	Additional query words: 3.00 win30 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
