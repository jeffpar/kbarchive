---
layout: page
title: "Q124917: How Disk Defragmenter Reports Fragmentation"
permalink: /kb/124/Q124917/
---

## Q124917: How Disk Defragmenter Reports Fragmentation

	Article: Q124917
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	  When you run Microsoft Disk Defragmenter a second time immediately after
	  defragmenting your hard disk, it reports that a small percentage of
	  fragmentation still exists.
	
	  -or-
	
	  Disk Defragenter reports that it is unnecessary to defragment your hard disk
	  if the fragmentation level is below 10 percent.
	
	CAUSE
	=====
	
	The following information applies to physical drives only:
	
	Disk Defragmenter examines your disk directories and creates a database of files
	and their associated clusters. For Windows 95 Disk Defragmenter to identify
	these files as unmovable, they are marked with Hidden and System attributes.
	These unmovable file clusters, along with any bad sectors, can cause contiguous
	files to be interrupted by one or more clusters. This interruption, although
	negligible to the performance of the drive, is still considered a degree of
	fragmentation and is reported as such.
	
	These symptoms may also occur if you select Consolidate Free Space Only under
	Advanced Options without ever performing a "Full defragmentation (both files and
	free space)."
	
	MORE INFORMATION
	================
	
	Disk Defragmenter is designed to work this way; therefore, this behavior
	requires no workaround.
	
	NOTE: You should NEVER remove the attributes from mounted CVFs and defragment the
	HOST under Windows 95.
	
	
	Additional query words: defrag.exe defrag
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
