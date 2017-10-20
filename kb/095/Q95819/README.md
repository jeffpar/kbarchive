---
layout: page
title: "Q95819: MS-DOS DEFRAG Err Msg: &quot;Insufficient Memory...&quot;"
permalink: /kb/095/Q95819/
---

## Q95819: MS-DOS DEFRAG Err Msg: &quot;Insufficient Memory...&quot;

{% raw %}

	Article: Q95819
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	If there are too many files and directories on your hard drive, MS-DOS
	Defragmenter (Defrag) can run out of memory. If Defrag runs out of memory before
	beginning optimization, the following error messages are displayed:
	
	  Insufficient memory - Error Reading the FAT
	
	  -and-
	
	  Insufficient Memory: Error Reading Directory
	
	CAUSE
	=====
	
	Defragmenter is limited by the number of files/directories and NOT the disk
	size. It is unlikely that this problem will occur unless you have more than
	10,000 files/directories on your drive; however, it has occurred with as few as
	8,000 files/directories.
	
	
	WORKAROUND
	==========
	
	You may be able to alleviate the problem by increasing the amount of free
	conventional memory and available upper memory blocks (UMBs). Refer to the
	"Microsoft MS-DOS User's Guide" for version 6.0 for additional information about
	freeing conventional memory.
	
	If you get out-of-memory errors with MS-DOS 6.2 Defrag, increase conventional
	memory and/or XMS memory (up to 384K). MS-DOS 6.2 Defrag uses up to 384
	kilobytes (K) of extended (XMS) memory, when available, to hold the FAT data for
	the drive.
	
	If you have freed as much conventional memory as possible and you are using a 386
	or 486 machine, try the following temporary workaround:
	
	1. Make sure EMM386.EXE is being loaded in the CONFIG.SYS file.
	
	2. Using an ASCII text editor such as MS-DOS Editor, add the I=A000-B7FF and
	  NOEMS parameters to the device=C:\DOS\EMM386.EXE line in the CONFIG.SYS
	  file.
	
	  Note: The A000-B7FF range is commonly used by video cards. Unless you have a
	  monochrome video card, do not run any graphics applications when you are
	  using the I=A000-B7FF parameter.
	
	3. Save the CONFIG.SYS file and quit the text editor.
	
	4. Restart your computer.
	
	5. Run Defragmenter with the /G0 switch to prevent it from running in graphics
	  mode. For example, you would type:
	
	  " defrag /g0 " (without the quotation marks)
	
	  NOTE: The switch is G and the number zero, not G and the letter O.
	
	6. Edit your CONFIG.SYS file and remove the parameters you added in step 2.
	
	7. Save the text file, exit the editor and restart your computer.
	
	If, after following the above procedure, you continue to run out of memory when
	you attempt to defragment your drive, you probably have more files than
	Defragmenter can handle. To optimize your disk, you need to remove some files
	from your disk. If this problem occurs frequently, you may want to consider
	creating smaller partitions or multiple DoubleSpace drives on the same
	partition.
	
	NOTE: If you are running Delete Sentry, you may want to run UNDELETE /PURGE to
	remove deleted files from the SENTRY directory.
	
	Additional query words: 6.00 6.20 dos msdos defrag max maximum dblspace raise the ceiling
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
