---
layout: page
title: "Q94357: Difference Between DEFRAG and DBLSPACE /DEFRAGMENT"
permalink: /kb/094/Q94357/
---

## Q94357: Difference Between DEFRAG and DBLSPACE /DEFRAGMENT

	Article: Q94357
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	There are two ways to defragment a DoubleSpace drive: you can run DBLSPACE
	/DEFRAGMENT, or you can run Microsoft Defragmenter (DEFRAG.EXE).
	
	MORE INFORMATION
	================
	
	Files stored on DoubleSpace drives become fragmented just as they do on physical
	drives.
	
	Running DEFRAG.EXE
	------------------
	
	Microsoft Defragmenter (DEFRAG.EXE) makes files contiguous by making virtual
	clusters contiguous. For example, a DoubleSpace drive would change from
	
	  H:\DBLSPACE.000: [1213--542---132-2--113---4 ]
	  C: [1123156-1-13-5-1-2-3-1521--123------- ]
	
	to:
	
	  " H:\DBLSPACE.000: [1213--542---132-2--113---4 ]
	  C: [111112222333344455556---------------- ] " (without the quotation marks)
	
	NOTE: In this example, each number represents a piece of a file. For example,
	each "1" indicates a piece of file 1.
	
	Running DBLSPACE /DEFRAGMENT
	----------------------------
	
	DBLSPACE /DEFRAGMENT moves data within the compressed volume file (CVF) so that
	all the free space is at the end. Files aren't made contiguous; they are simply
	placed in one group at the front of the drive. Using the same example, the file
	would change from
	
	  H:\DBLSPACE.000: [1213--542---132-2--113---4 ]
	  C: [1123156-1-13-5-1-2-3-1521--123------- ]
	
	to:
	
	  " H:\DBLSPACE.000: [121354213221134----------- ]
	  C: [1123156-1-13-5-1-2-3-1521--123------- ] " (without the quotation marks)
	
	Running DBLSPACE /DEFRAGMENT /F
	-------------------------------
	
	DBLSPACE/DEFRAG/F moves all the used sectors to the end of the CVF. Using the
	same example, the file would change from
	
	  H:\DBLSPACE.000: [1213--542---132-2--113---4 ] C:
	  [1123156-1-13-5-1-2-3-1521--123------- ]
	
	to:
	
	  " H:\DBLSPACE.000: [-----------121354213221134 ]
	  C: [1123156-1-13-5-1-2-3-1521--123------- ] " (without the quotation marks)
	
	NOTE: When you run DBLSPACE with the /DEFRAGMENT parameter, it may not make all
	of the unused sectors contiguous; this is why the /F switch exists. If you
	cannot resize a DoubleSpace drive because it is too fragmented, you must
	defragment the drive with DBLSPACE /DEFRAGMENT and then with Defragmeter.
	
	To do this:
	
	1. Run DBLSPACE to defragment the CVF.
	
	2. Move all the sectors to the end of the disk by typing the following at the
	  MS-DOS command prompt:
	
	  " dblspace /defragment /f " (without the quotation marks)
	
	3. Run Defragmenter with the /F parameter by typing the following at the MS-DOS
	  command prompt:
	
	  " defrag /f " (without the quotation marks)
	
	  This should move all of the data to the end of the CVF and then back to the
	  front. All of the unused sectors should then be contiguous.
	
	Fully Optimizing Your DoubleSpace Drive
	---------------------------------------
	
	If you type DEFRAG to defragment a DoubleSpace drive, Defragmenter runs DBLSPACE
	/DEFRAGMENT when it has completed. Once both types of defragmentation have been
	done, the sample file appears similar to the following:
	
	  H:\DBLSPACE.000: [121354213221134----------- ]
	  C: [111112222333344455556---------------- ]
	
	Note that files are contiguous on the virtual drive (drive C) but not within the
	CVF. Free space is contiguous in both places.
	
	Additional query words: 6.00 6.20 dblspace double space defrag
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
