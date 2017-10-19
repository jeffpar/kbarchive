---
layout: page
title: "Q100741: MS-DOS Setup Err Msg: Setup Cannot Install MS-DOS 6..."
permalink: /kb/100/Q100741/
---

## Q100741: MS-DOS Setup Err Msg: Setup Cannot Install MS-DOS 6...

	Article: Q100741
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an original equipment manufacturer (OEM) version of MS-DOS that uses
	logical sectoring, you receive the following message if you start your computer
	with the MS-DOS 6 or 6.2 Upgrade Setup Disk 1 in drive A:
	
	  Setup cannot install MS-DOS 6 because there is no operation system on this
	  computer.
	
	CAUSE
	=====
	
	This error message is displayed because MS-DOS Upgrade does not recognize your
	partitioning scheme.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Restart (boot) your computer from the hard disk, your original OEM MS-DOS
	  disk, or another floppy disk that boots your current version of MS-DOS.
	
	2. Run Setup from MS-DOS Upgrade Setup Disk 1.
	
	Setup automatically converts your nonstandard (logical sector) large partition to
	MS-DOS 5.0, 6.0, or 6.2 compatible large partitions.
	
	Additional query words: 6.22 6.00 6.20 wyse dos 3.3
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
