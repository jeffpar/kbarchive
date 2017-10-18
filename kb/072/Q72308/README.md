---
layout: page
title: "Q72308: User's Guide Incorrectly Describes SPART.PAR &amp; 386SPART.PAR"
permalink: kb/072/Q72308/
---

## Q72308: User's Guide Incorrectly Describes SPART.PAR &amp; 386SPART.PAR

	Article: Q72308
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	3.00 3.00a
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	Page 521 of the "Microsoft Windows User's Guide" for version 3.0
	incorrectly states:
	
	  A permanent Windows swap file consists of two hidden, write- protected files.
	  The files are named SPART.PAR and 386SPART.PAR. Do not delete, move, or
	  rename these files."
	
	The 386SPART.PAR file is hidden but not write-protected, while
	SPART.PAR is write-protected (read-only attribute) but not hidden.
	
	Performing a directory listing from the MS-DOS prompt of the Windows
	directory using "DIR *.PAR" will show the SPART.PAR. Through File
	Manager, performing a Search for *.PAR with or without showing
	HIDDEN/SYSTEMS FILES, will show both files.
	
	Additional query words: 3.00 3.00a documentation error win30 docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
