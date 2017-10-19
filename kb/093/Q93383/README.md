---
layout: page
title: "Q93383: Windows Err Msg: File Manager Cannot Label the Disk"
permalink: /kb/093/Q93383/
---

## Q93383: Windows Err Msg: File Manager Cannot Label the Disk

	Article: Q93383
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using File Manager to create a disk label containing a space character generates
	the following error message:
	
	  
	
	  File Manager cannot label the disk.
	
	  Make sure the disk is not write-protected, is not a network
	  drive, and that the label is valid.
	
	  Labels cannot contain the following characters:
	  [space] * ? / \ | . , ; : + = [ ] ( ) & ^ < > "
	
	The error message is correct, but confusing because all versions of MS-DOS allow
	space characters in a disk label.
	
	MORE INFORMATION
	================
	
	Page 517 of the "Microsoft MS-DOS User's Guide and Reference" manual for MS-DOS
	version 5.0 includes the following misleading statement:
	
	  A volume label can contain as many as 11 characters and can include spaces
	  but no tabs. Consecutive spaces may be interpreted as a single space.
	
	Using the MS-DOS label command to create a label of "A B C D E F" will return a
	label of "A B C D.E F". Because the first eight characters of an MS-DOS filename
	cannot end in a space, one or more spaces will be removed and a period inserted.
	For reasons such as this, it was decided to simplify the label parsing
	validation in File Manager to disallow space characters.
	
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, page 517
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
