---
layout: page
title: "Q106522: DoubleSpace Drive: Make Directory Results in Zero Bytes Free"
permalink: /kb/106/Q106522/
---

## Q106522: DoubleSpace Drive: Make Directory Results in Zero Bytes Free

{% raw %}

	Article: Q106522
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	After MS-DOS reports you have several kilobytes (K) free on a
	DoubleSpace-compressed drive (for example, 128K with a 2:1 estimated compression
	ratio [ECR]), creating a directory results in zero bytes free disk space.
	
	CAUSE
	=====
	
	DoubleSpace reserves some space when a compressed drive is nearly full.
	Specifically, when the free space in the compressed volume file drops below the
	64K uncompressed boundary, DoubleSpace reserves the remaining space for its own
	use.
	
	For example, if your ECR is 2.0:1 and you have 130K "free" on your drive, you
	really have 65K left in uncompressed sectors. After you create a directory
	taking 16 sectors (8K), you have less than 64K free and uncompressed space. As a
	result, DoubleSpace reserves the remaining space for itself and reports zero
	bytes free disk space.
	
	Additional query words: 6.00 6.20 dir md mkdir small full cvf insufficient space available dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
