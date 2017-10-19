---
layout: page
title: "Q171051: How to Bypass the Recycle Bin When Deleting Files"
permalink: /kb/171/Q171051/
---

## Q171051: How to Bypass the Recycle Bin When Deleting Files

	Article: Q171051
	Product(s): Microsoft Windows NT
	Version(s): 4.0 95
	Operating System(s): 
	Keyword(s): kbui kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you delete files in the Windows NT 4.0 or Windows 95 operating systems
	graphical user interface, your files first go to the Recycle Bin so that they
	may be recovered. When deleting a large amount of files, this process may not be
	desirable because of the amount of time it takes to move them to the Recycle Bin
	and then empty the Recycle Bin, essentially deleting them twice. There is an
	easy way to bypass the Recycle Bin altogether.
	
	NOTE: If you delete a file or folder from a resource that is not local (such as a
	network computer), the file or folder does not go to the Recycle Bin, the item
	is instantly deleted.
	
	MORE INFORMATION
	================
	
	When deleting a folder or group of files:
	
	1. Select the folder or group of files to be deleted.
	
	2. Hold down the SHIFT key while pressing the DELETE key.
	
	-or-
	
	1. Open a command prompt window.
	
	2. Use the MS-DOS command DEL to delete the folder or files.
	
	NOTE: Be aware that after files are deleted in this manner, they cannot be
	undeleted or recovered.
	
	Additional query words: win95 deleting permanent
	
	======================================================================
	Keywords          : kbui kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 4.0 95
	Issue type        : kbhowto
	
	=============================================================================
	
