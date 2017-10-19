---
layout: page
title: "Q100410: Defrag: Error Writing Cluster nnn,nnn in CVF (But CVF Is OK)"
permalink: /kb/100/Q100410/
---

## Q100410: Defrag: Error Writing Cluster nnn,nnn in CVF (But CVF Is OK)

	Article: Q100410
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you run Microsoft Defragmenter (Defrag) and your DoubleSpace compressed
	volume file (CVF) is full or nearly full, Defrag reports the following:
	
	  Error writing cluster nnn,nnn
	
	  Use a disk repair program to fix, and then run DEFRAG again.
	
	CAUSE
	=====
	
	If CHKDSK shows no problems and a surface scan utility, such as Symantec's
	Norton Utilities Norton Disk Doctor (NDD.EXE), shows no problems, the error
	message is occurring because Defrag is unable to write the information that it
	has read. Defrag is trying to copy a cluster before moving it, but since the
	DoubleSpace-compressed drive is too fragmented or full, there is no space large
	enough to write the cluster.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Increase the size of your DoubleSpace-compressed drive and then run Defrag.
	
	-or-
	
	- Delete enough files to allow Defrag to run.
	
	
	
	Additional query words: 6.00 6.20 dblspace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
