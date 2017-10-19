---
layout: page
title: "Q119704: MS-DOS SYS Copies DRVSPACE.BIN Even If You Are Using DBLSPACE"
permalink: /kb/119/Q119704/
---

## Q119704: MS-DOS SYS Copies DRVSPACE.BIN Even If You Are Using DBLSPACE

	Article: Q119704
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS 6.22, the SYS, FORMAT /S, and SETUP /F commands do not copy
	DBLSPACE.BIN to the target disk because MS-DOS 6.22 does not include
	DBLSPACE.BIN.
	
	MORE INFORMATION
	================
	
	If you are running DoubleSpace with MS-DOS 6.22, you should manually copy the
	DBLSPACE.BIN file to any boot disk created using SYS, FORMAT /S, or SETUP /F. To
	do this:
	
	1. Create the boot disk.
	
	2. Copy DBLSPACE.BIN from the directory that contains your MS-DOS files
	  (typically C:\DOS) to the boot disk. For example, type "copy
	  c:\dos\dblspace.bin a:" (without the quotation marks) at the MS-DOS command
	  prompt and then press ENTER.
	
	Additional query words: 6.22 dblspace sys format /s drvspace init system corrupt floppy disk
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
