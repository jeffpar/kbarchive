---
layout: page
title: "Q114362: Err Msg After Running BUSETUP.EXE: Wrong DBLSPACE.BIN Version"
permalink: /kb/114/Q114362/
---

## Q114362: Err Msg After Running BUSETUP.EXE: Wrong DBLSPACE.BIN Version

{% raw %}

	Article: Q114362
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you have an MS-DOS 6 DoubleSpace-compressed C drive and you install MS-DOS
	6.21 Upgrade, Setup installs the MS-DOS files on the host drive for C. As a
	result, you receive the following error message when you restart your computer
	after MS-DOS 6.21 is installed:
	
	  wrong dblspace.bin version
	
	When this occurs, your compressed drive is left unmounted.
	
	CAUSE
	=====
	
	This problem occurs when you boot your computer from the MS-DOS 6.21 Upgrade
	Disk 1, exit Setup (BUSETUP.EXE), and then try to run Setup (SETUP.EXE) from the
	A prompt.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Uninstall MS-DOS 6.21 Upgrade.
	
	2. Boot your computer from drive C.
	
	3. Run MS-DOS 6.21 Upgrade Setup from Setup Disk 1.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622
	Version           : MS-DOS:6.21,6.22
	
	=============================================================================
	

{% endraw %}
