---
layout: page
title: "Q124378: Setup Err Msg: Setup Error 4: Could Not Load &lt;Filename&gt;"
permalink: /kb/124/Q124378/
---

## Q124378: Setup Err Msg: Setup Error 4: Could Not Load &lt;Filename&gt;

	Article: Q124378
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears during the character-based portion of
	Windows NT Setup:
	
	  Setup Error 4: Could not load <filename>
	
	CAUSE
	=====
	
	This error message appears when:
	
	- One or more files on the source media (compact disc or floppy disk) are
	  corrupt.
	
	  -or-
	
	- One or more files in the temporary directory created by Setup are corrupt
	  (usually due to a copy error).
	
	RESOLUTION
	==========
	
	FAT Partition
	-------------
	
	If the temporary Setup directory is on a file allocation table (FAT) formatted
	partition, exit Setup and re-copy the file specified in the error message from
	the source media to the temporary Setup directory.
	
	NOTE: Even if the file on the source media is compressed, copy it to the Setup
	directory in compressed form; do not expand it.
	
	NTFS Partition
	--------------
	
	If the temporary Setup directory is on an Windows NT file system (NTFS)
	partition, you may have to run Setup process again. If you have a previous
	version of Windows NT on your system that is bootable, start it and re-copy the
	file from the source media to the Setup directory, or run WINNT32 again to
	re-copy all the files.
	
	If your previous version of Windows NT does not start, run Setup from the Windows
	NT 3.5 CD or from the Setup floppy disks.
	
	If the error persists after you replace the corrupt files in the temporary
	directory, the source media is probably corrupt, and needs to be replaced.
	
	Additional query words: prodnt krnlmp.exe winnt winnt32
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
