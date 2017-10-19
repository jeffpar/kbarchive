---
layout: page
title: "Q171892: Err Msg: The File System Does Not Support Compression"
permalink: /kb/171/Q171892/
---

## Q171892: Err Msg: The File System Does Not Support Compression

	Article: Q171892
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to compress an NTFS partition using Windows NT Explorer, the option
	is unavailable while looking at properties or, while using the Command Line
	utility Compact.exe, you receive the error message:
	
	  The file system does not support compression
	
	For example:
	
	  H:\compact /c *.* /s
	
	  Compressing files in H:\
	
	  Apps [ERR]
	  Apps: The file system does not support compression.
	
	  0 files within 1 directories were compressed.
	  0 total bytes of data are stored in 0 bytes.
	  The compression ratio is 1.0 to 1.
	
	CAUSE
	=====
	
	The partition is a very large partition, and when the partition was formatted,
	it was formatted with a cluster size greater than the default size of 4,096
	bytes. NTFS compression is not supported for allocation unit sizes above 4k
	bytes
	
	You can verify what the allocation unit size is by doing a CHKDSK at the command
	prompt and look at the bytes in each allocation unit.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must backup your data, then reformat the NTFS
	partition using a cluster size of 4,096 bytes or less.
	
	You can use one of three methods to reformat:
	
	- Start Windows NT Explorer, right-click on the drive icon, select format, and
	  then set the allocation unit size to 4,096 or less.
	
	- Start Disk Administrator, right-click on the partition, select format, and
	  then set the allocation unit size to 4,096 or less.
	
	- Use the FORMAT command with the /A:size option and format it for an
	  allocation unit size 4,096.
	
	  For example,
	
	  format c: /A:4096
	
	MORE INFORMATION
	================
	
	NTFS needs to process an entire compression unit at a time when writing
	compressed files, where a compression unit consists of 16 clusters.
	
	Windows NT memory management's largest paging write size is 64 KB and Windows NT
	limits operations to the maximum memory management transfer size.
	
	This results in a maximum cluster size that can be manipulated within the
	compression code to 4 KB. [64 KB/16 clusters = 4 KB per cluster]
	
	Some defrag software also uses the same compression code and may have the same
	limitation of 4 KB clusters.
	
	Additional query words: compress ntfs
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
