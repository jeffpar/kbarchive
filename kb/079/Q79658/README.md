---
layout: page
title: "Q79658: Using MS-DOS 5.0 COPY Switches /A /B to Remove ^Z"
permalink: kb/079/Q79658/
---

## Q79658: Using MS-DOS 5.0 COPY Switches /A /B to Remove ^Z

	Article: Q79658
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command should read file1 until a ^Z (end-of-file) character, and
	then write this to file2 without the ^Z character (in effect, stripping the
	^Z):
	
	  copy file1 /a file2 /b
	
	The above command works correctly on files where the size including the ^Z
	character is 65024 or fewer bytes. However, it does not work (does not strip ^Z)
	on files that are 65025 bytes or larger.
	
	Microsoft has confirmed this to be a problem with Microsoft MS-DOS version 5.0.
	We are researching this problem and will post new information here when it
	becomes available.
	
	MORE INFORMATION
	================
	
	An alternative method of removing ^Z from a text file is to load the file into
	MS-DOS 5.0 Editor and then save the file. For example, the command
	
	  edit file1
	
	starts Editor and loads the file. Within Editor, choose the Save command from the
	File menu. To exit Editor, choose Exit from the File menu.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
