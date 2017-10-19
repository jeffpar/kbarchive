---
layout: page
title: "Q109846: ScanDisk Recommends Running DEFRAG on a Compressed Drive"
permalink: /kb/109/Q109846/
---

## Q109846: ScanDisk Recommends Running DEFRAG on a Compressed Drive

	Article: Q109846
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	You may receive the following message while ScanDisk is examining your
	compressed drive
	
	  DoubleSpace drive <X> needs to be defragmented. To defragment drive
	  <X>, run the Microsoft Defragmenter on it by typing "DEFRAG <X>:"
	  (without the quotation marks) at the command prompt.
	
	where X is the compressed drive. Choosing the More Information button displays
	the following:
	
	  DoubleSpace drive <X> is becoming highly fragmented internally. When a
	  compressed drive becomes fragmented in this way, some free space becomes
	  unusable until the drive is defragmented. To defragment drive <X>, run
	  the Microsoft Defragmenter on it by typing DEFRAG <X>: at the command
	  prompt.
	
	Running DEFRAG <X>: (where X is the compressed drive) may not correct the
	internal fragmentation in all cases.
	
	CAUSE
	=====
	
	This message is displayed when 50 percent or more of the free space on the
	compressed drive is fragmented. If all of the free space becomes fragmented,
	DoubleSpace cannot write data to the compressed drive, even though free space
	remains in the sector heap.
	
	
	To determine the percentage of internal fragmentation on a compressed drive, type
	"dblspace /info <X>:" (without the quotation marks) (where X is the
	compressed drive) at the MS-DOS command prompt.
	
	RESOLUTION
	==========
	
	In most instances, running Microsoft Defragmenter (Defrag) on the compressed
	drive corrects this problem. Defrag runs DBLSPACE /DEFRAG to consolidate free
	space at the end of the compressed volume file (CVF). If this does not resolve
	the ScanDisk warning, thoroughly defragment your compressed drive using the
	following procedure (where <X> is the compressed drive):
	
	1. Run DBLSPACE /DEFRAGMENT <X>:
	
	  This moves all free space to the end of the CVF.
	
	2. Run DBLSPACE /DEFRAGMENT /F <X>:
	
	  This moves all free space to the front of the CVF.
	
	3. Run DBLSPACE /DEFRAGMENT <X>:
	
	  This moves all free space back to the end of the CVF.
	
	NOTE: This procedure may take several hours to complete, depending on the size of
	the drive and level of fragmentation. You may want to place the above commands
	in a batch file and let it run overnight.
	
	All the unused sectors should then be contiguous in the sector heap. For more
	information on this procedure, query on the following words in the Microsoft
	Knowledge Base:
	
	  " dblspace and defragment and sectors and free " (without the quotation
	  marks)
	
	MORE INFORMATION
	================
	
	DoubleSpace compresses data one FAT cluster (8 kilobytes[K]) at a time and must
	write the data to the sector heap in contiguous sectors. If the data is not
	compressible at all, DoubleSpace requires 8K (16 sectors) of contiguous sectors
	in the sector heap to write the data. If there are not 16 available contiguous
	sectors in the sector heap, DoubleSpace cannot write the data to the compressed
	drive until the drive is defragmented.
	
	When 50 percent or more of the free space in the CVF cannot be mapped to 8K of
	contiguous sectors in the sector heap, ScanDisk displays the above message.
	ScanDisk and DBLSPACE /INFO use the same algorithm for reporting internal CVF
	fragmentation. If 100 percent of the free space in the sector heap is
	fragmented, DoubleSpace may be unable to write any more data to the drive.
	
	Every CVF contains a standard 12-bit or 16-bit MS-DOS file allocation table (FAT)
	with a cluster size of 8192 bytes (8K). The cluster size cannot be changed.
	DoubleSpace maps each 8K FAT cluster to a Microsoft DoubleSpace FAT (MDFAT)
	entry. Each MDFAT entry maps to individual sectors in the sector heap, and the
	sectors used for an individual MDFAT entry must be contiguous.
	
	Additional query words: 6.20 frag notes online help
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
