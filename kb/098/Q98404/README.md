---
layout: page
title: "Q98404: Using MS Undelete to Restore Files with Existing Filenames"
permalink: kb/098/Q98404/
---

## Q98404: Using MS Undelete to Restore Files with Existing Filenames

	Article: Q98404
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restore a file with Microsoft Undelete for Windows and a file with that
	name already exists, you receive a message stating "This file already exists."
	If you type a new filename in lowercase letters, Microsoft Undelete for Windows
	saves the file to disk with a lowercase filename.
	
	Because lowercase names are invalid in the MS-DOS file allocation table (FAT)
	system, many programs cannot access the lowercase-named file.
	
	WORKAROUND
	==========
	
	You may be able to correct this problem using the DEL command and the wildcard
	character (?). For example, if you want to delete "wina20.386", type "del
	????20.386" (without the quotation marks) at the MS-DOS command prompt and then
	press ENTER. Once you delete the file, run Undelete and restore the file again.
	
	If this does not work, use a third-party program such as Norton Utilities by
	Symantec or PC Tools by Central Point Software to change the filename to
	uppercase letters.
	
	Additional query words: 6.00 lower case upper lower-case upper-case
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
