---
layout: page
title: "Q71736: PARTY.BMP and RIBBONS.BMP Omitted from Windows Version 3.00a"
permalink: kb/071/Q71736/
---

## Q71736: PARTY.BMP and RIBBONS.BMP Omitted from Windows Version 3.00a

	Article: Q71736
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The background bitmap files PARTY.BMP and RIBBONS.BMP are not included on the
	Microsoft Windows version 3.0a disks. This is due to space constraints, and the
	nonessential nature of the files.
	
	MORE INFORMATION
	================
	
	Some third-party drivers require the replacement of the SETUP.INF file to
	install correctly. Third-party SETUP.INF files, developed for Windows version
	3.0, may not reflect this change, and may therefore ask for these two bitmap
	files.
	
	Workaround
	----------
	
	Create a new disk and copy two of the existing files to the blank disk with the
	names PARTY.BMP and RIBBONS.BMP. For example, you would copy WEAVE.BMP from disk
	3 (5.25 inch) or disk 5 (3.5 inch) to PARTY.BMP on the blank disk. You also
	would copy the file to the name RIBBONS.BMP on the blank disk.
	
	This procedure will fool Setup, and allow you to continue installation.
	
	Additional query words: 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300a
	Version           : WINDOWS:3.0a
	
	=============================================================================
	
