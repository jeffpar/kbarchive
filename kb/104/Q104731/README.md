---
layout: page
title: "Q104731: SORT Adds Extra Character to Sorted Output"
permalink: /kb/104/Q104731/
---

## Q104731: SORT Adds Extra Character to Sorted Output

	Article: Q104731
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SORT adds an extra character to the end of the file being sorted if an
	end-of-file (EOF) or carriage return (<CR>) character is missing from the
	end of the file.
	
	MORE INFORMATION
	================
	
	Some text editors don't automatically add a <CR> or EOF character to the
	end of the file (unlike MS-DOS Edit).
	
	If you use this type of editor and your file doesn't have a trailing <CR>
	or EOF character, your sorted file contains an extra character. For example, if
	you sort the following file (which does not have an EOF or <CR> character
	at the end of the file)
	
	  AA<CR>
	  BB<CR>
	  CC<CR>
	  AA
	
	with the command SORT < TEXT.TXT > TESTOUT.TXT, your sorted output is
	
	  AA<CR>
	  AAx<CR>
	  BB<CR>
	  CC<CR>
	
	where x is a random character from memory.
	
	RESOLUTION
	==========
	
	To work around this problem, edit the file you want to sort and add a <CR>
	to the end.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.x, 6.0, 6.2,
	and 6.21. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 garbage extended ASCII corrupt corrupted symbol
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
