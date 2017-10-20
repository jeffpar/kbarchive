---
layout: page
title: "Q103527: Setup Reports Less Free Space than MS-DOS (DoubleSpace Drive)"
permalink: /kb/103/Q103527/
---

## Q103527: Setup Reports Less Free Space than MS-DOS (DoubleSpace Drive)

{% raw %}

	Article: Q103527
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	You are running Microsoft MS-DOS 6.2 DoubleSpace, drive C is compressed, and you
	receive the following message when attempting to install MS-DOS 6.2 Upgrade or
	Step-Up:
	
	  There is not enough free space on drive C to install MS-DOS. You cannot
	  install MS-DOS unless your computer has at least 4,200,000 bytes of free disk
	  space on drive C. Exit Setup, and move or delete unneeded files from the
	  drive. For more information about freeing disk space, see 'Diagnosing and
	  Solving Problems.'
	
	  Press ENTER to exit Setup.
	
	CAUSE
	=====
	
	MS-DOS 6.2 Setup may display this error message if the DoubleSpace compressed
	volume file (CVF) does not contain a minimum of 4,200,000 bytes of free
	contiguous hard disk space (even though sufficient hard disk space is reported
	by CHKDSK or DIR).
	
	RESOLUTION
	==========
	
	To work around this problem, defragment the DoubleSpace-compressed drive using
	the DoubleSpace Defrag utility. For example, type "dblspace /defrag" (without
	the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	DoubleSpace Defrag optimizes the DoubleSpace CVF and creates a contiguous block
	of free space in the CVF. You should then be able to successfully run the MS-DOS
	6.2 Setup program.
	
	If Setup still reports there is insufficient space, free some space by moving or
	deleting files from the drive.
	
	IMPORTANT: If you are installing MS-DOS 6.2 Step-Up, do not delete MS-DOS files
	from your hard disk to free space. Step-Up requires these files to update your
	system.
	
	MORE INFORMATION
	================
	
	MS-DOS 6.2 Setup uses a new DoubleSpace application program interface (API)
	function when you install over MS-DOS 6.2. The new API call provides Setup with
	the amount of contiguous free space in the compressed volume file's "sector
	heap" (data area).
	
	Additional query words: 6.20 BBS MS-BBS dummies stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
