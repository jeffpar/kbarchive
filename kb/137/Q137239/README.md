---
layout: page
title: "Q137239: More Disk Space Required to Copy or Move Compressed Files"
permalink: kb/137/Q137239/
---

## Q137239: More Disk Space Required to Copy or Move Compressed Files

	Article: Q137239
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	Windows NT does not copy or move compressed files between two compressed
	NTFS partitions in a compressed state. When you open a compressed file,
	the NTFS file system driver (NTFS.SYS) uncompresses the file as it is
	read. When you attempt to copy or move a file to another compressed NTFS
	partition, an attempt is made to allocate enough disk space on the
	destination partition to hold the file in an uncompressed state.
	
	If the destination partition does not have enough disk space to accommodate
	the file in an uncompressed state, the copy or move operation fails.
	
	If there is enough disk space to move or copy the file uncompressed,
	Windows NT compresses the file as it is written to the compressed NTFS
	partition. The unused portion of the pre-allocated, uncompressed disk space
	for the file is then released as available disk space.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
