---
layout: page
title: "Q116342: How To Disable Long Filename Support on FAT Partitions"
permalink: kb/116/Q116342/
---

## Q116342: How To Disable Long Filename Support on FAT Partitions

	Article: Q116342
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some situations, it may be desirable to remove the ability to create long
	filenames on FAT partitions in Windows NT 3.5, such as if MS-DOS based disk
	utilities are used regularly on the machine. Some MS-DOS based disk utilities,
	such as DiskFix (part of PC Tools), may either eliminate the long filenames
	created from Windows NT or actually delete the files with long names.
	
	MORE INFORMATION
	================
	
	To remove the ability to create long filenames on FAT, use the Registry Editor
	(REGEDT32.EXE). Under the HKEY_LOCAL_MACHINE Key, use the following path:
	
	  \SYSTEM\CurrentControlSet\Control\FileSystem\Win31FileSystem
	
	Change the entry to 1 and long filename support on FAT will be disabled when you
	reboot your machine. To re-enable it, change the entry back to 0.
	
	PC Tools is manufactured by Central Point Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt pc tools lfn 8.3
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
