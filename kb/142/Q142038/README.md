---
layout: page
title: "Q142038: DOCERR: Bad Instructions for Converting FAT Partition to NTFS"
permalink: kb/142/Q142038/
---

## Q142038: DOCERR: Bad Instructions for Converting FAT Partition to NTFS

	Article: Q142038
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a documentation error in Windows NT Resource Kit version 3.51.
	
	MORE INFORMATION
	================
	
	The Windows NT 3.5 and 3.51 Resource Kit, Volume 1, Chapter 5, Page 203
	currently provides the following steps to reformat the system partition from
	NTFS to FAT:
	
	3.  When Setup asks you to select the partition where you would like
	   to install Windows NT, highlight the NTFS drive, and
	   type P to delete the partition.
	
	This step is incorrect. You need to type D to delete the partition, not P. Step 3
	should read:
	
	3.  When Setup asks you to select the partition where you would like
	   to install Windows NT, highlight the NTFS drive, and
	   type D to delete the partition.
	
	Additional query words: prodnt ntreskit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
