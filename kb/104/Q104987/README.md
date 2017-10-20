---
layout: page
title: "Q104987: MakeSys Hangs or Creates Invalid Files, Causing System Hang"
permalink: /kb/104/Q104987/
---

## Q104987: MakeSys Hangs or Creates Invalid Files, Causing System Hang

{% raw %}

	Article: Q104987
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If Microsoft MS-DOS MakeSys (included in the downloadable version of MS-DOS 6.2
	and 6.22 Step-Up) does not find a valid signature (FXPF) at the beginning of the
	patch file, it displays the following error message
	
	  Fatal error: MakeSys could not create the new <filename> file because
	  it could not find the original MS-DOS 6 version of <filename>. For more
	  information, see the README.NOW file in the directory that contains your
	  MS-DOS 6.2 Step-Up files.
	
	where <filename> is IO.SYS, MSDOS.SYS, or DBLSPACE.BIN.
	
	CAUSE
	=====
	
	This error occurs when MakeSys is unable to create the new MS-DOS system files
	because:
	
	- One of the binary patch files (DBLSPACE.BI#, MSDOS.SY#, or IO.SY#) is
	  damaged.
	
	  NOTE: If the patch file is severely corrupted, MakeSys may stop responding
	  (hang).
	
	-or-
	
	- There are too many files in the root directory.
	
	-or-
	
	- One of the source files (DBLSPACE.BIN, MSDOS.SYS, or IO.SYS) does not match
	  the file included with the MS-DOS 6.0 or 6.2 Upgrade.
	
	RESOLUTION
	==========
	
	If the patch files are corrupted, download the MS-DOS 6.2 Step-Up from the
	bulletin board again and re-run MakeSys using the new files.
	
	If there are too many files in the root directory, move some of them to a
	subdirectory so that you do not have more than 500 files, including hidden and
	system files, in the root directory.
	
	NOTE: To obtain a directory listing of all files in the root of drive C,
	including hidden and system files, type the following at the MS-DOS command
	prompt and then press ENTER:
	
	  " dir c:\ /a" (without the quotation marks)
	
	If your source files do not match the files included with the MS-DOS 6.0 or 6.2
	Upgrade, see the README.NOW file for instructions on replacing your MS-DOS 6.0
	or 6.2 system files.
	
	
	Additional query words: 6.20 update bbs make sys
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
