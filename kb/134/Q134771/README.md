---
layout: page
title: "Q134771: File Contents Changed After Running Compression Agent"
permalink: /kb/134/Q134771/
---

## Q134771: File Contents Changed After Running Compression Agent

	Article: Q134771
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running Compression Agent, you may notice that the contents of some files
	on the compressed drive have changed.
	
	CAUSE
	=====
	
	The changed files were created by a program that pre-allocates storage space by
	creating one large file on the hard disk. When the program needs to write a data
	file to the hard disk, it overwrites part of the original file with the data
	from the new file. This method of pre-allocating storage space leads to large
	areas of undefined disk space that are allocated to the original file. When
	Compression Agent runs, the contents of these areas may change.
	
	MORE INFORMATION
	================
	
	The contents that have changed are undefined areas that do not contain actual
	data. This change should not affect the performance of Windows 95 or your
	programs.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
