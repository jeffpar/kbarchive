---
layout: page
title: "Q71693: File Managing Functions in Shell Not Found at Command Line"
permalink: /kb/071/Q71693/
---

## Q71693: File Managing Functions in Shell Not Found at Command Line

{% raw %}

	Article: Q71693
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,4.01,4.01a,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 4.01a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are a number of file management functions available in MS-DOS Shell that
	are not available at the DOS prompt. These functions include viewing, moving,
	and toggling attributes on hidden files, and the renaming of directories.
	
	In MS-DOS version 5.0, the Shell interface has been greatly altered. To view
	hidden files, you must enable that option by choosing File Display Options from
	the Options menu in Shell. The other functions maintain the same command
	sequences as in MS-DOS 4.01 Shell. It should also be noted that MS-DOS version
	5.0 allows the manipulation of hidden and system files using the ATTRIB command.
	Renaming directories is still not directly possible from the command prompt
	within DOS 5.0.
	
	MORE INFORMATION
	================
	
	To find hidden files at the DOS prompt, you must first know the name of the file
	being searched for. The same is true for copying, deleting, or moving hidden
	files. You cannot toggle the hidden file attribute at the command prompt alone.
	
	These functions are simple within Shell. Hidden files are included in the file
	listing in the File System portion of Shell. Hidden files can be manipulated in
	the same manner as all other files. Toggling file attributes (including the
	hidden attributes) requires selecting the file, and from the File menu, choosing
	Change Attributes.
	
	You cannot rename directories from the DOS prompt without a third-party utility.
	Instead, you must create a new directory with the desired name, copy the files
	to that directory, delete those files in the old directory, and remove the old
	directory.
	
	Within Shell, all that is required is to select the directory within the File
	System portion of the shell, and choose Rename from the File menu.
	
	Additional query words: 4.00 4.01 4.01a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.0,4.01,4.01a,5.0
	
	=============================================================================
	

{% endraw %}
