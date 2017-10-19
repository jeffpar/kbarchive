---
layout: page
title: "Q93328: FoxPro Commands That Create Backup (.BAK &amp; .TBK) Files"
permalink: /kb/093/Q93328/
---

## Q93328: FoxPro Commands That Create Backup (.BAK &amp; .TBK) Files

	Article: Q93328
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro creates backup files prior to performing certain operations that can
	corrupt the database if the operation fails. The backup file is created in the
	same directory as the original file and has the .BAK extension.
	
	FoxPro creates a backup file before performing any of the following operations:
	
	  APPEND FROM
	  MODIFY STRUCTURE
	  PACK
	  UPDATE ON
	
	If the database has an associated memo file, the backup copy of the memo file has
	the .TBK extension.
	
	The PACK command deletes the backup file once the operation has been completed
	successfully.
	
	To restore information from a backup file, delete or rename the .DBF file with
	the same name, then rename the backup file so that is has the .DBF file
	extension. The .BAK file may also be used as a database if the user specifies
	the complete filename (including the extension) in the USE command.
	
	Additional query words: VFoxWin FoxDos FoxWin table FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
