---
layout: page
title: "Q132759: XCOPY from LFN-Only Drive to SFN-Only Drive Generates Errors"
permalink: /kb/132/Q132759/
---

## Q132759: XCOPY from LFN-Only Drive to SFN-Only Drive Generates Errors

{% raw %}

	Article: Q132759
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the XCOPY command to copy files from a drive that supports only long
	filenames (such as an OS/2 HPFS drive) to a drive that supports only short
	filenames (such as a Microsoft Windows for Workgroups peer server), you may
	receive one or more error messages similar to the following:
	
	  - The system cannot find the file specified.
	  - The system cannot find the path specified.
	  - Access is denied.
	  - The filename, directory name, or volume label syntax is incorrect.
	  - The specified path is invalid.
	
	CAUSE
	=====
	
	One or more of the files you are trying to copy has a filename that does not
	conform to the MS-DOS 8.3 naming convention. If a short filename is not
	provided, Xcopy may be unable to create the file on the destination drive.
	
	RESOLUTION
	==========
	
	Make sure that all the files (and folders) you want to copy have filenames that
	conform to the 8.3 naming convention. Also, make sure that the filenames that
	will be created on the destination drive will not exceed the path name limit of
	64 characters.
	
	Note that the /c switch for the XCOPY command instructs Xcopy to copy as many of
	the source files as it can, skipping those files that cannot be copied.
	
	Additional query words: lfn
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
