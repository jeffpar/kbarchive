---
layout: page
title: "Q95497: Less Disk Space After Converting a Stacker Drive"
permalink: kb/095/Q95497/
---

## Q95497: Less Disk Space After Converting a Stacker Drive

	Article: Q95497
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you convert a drive from Stacker to DoubleSpace, DoubleSpace might show that
	you have less compressed disk space than you had with Stacker.
	
	CAUSE
	=====
	
	This apparent disparity occurs because DoubleSpace is thoroughly integrated with
	the MS-DOS operating system and can more accurately estimate compressed disk
	space. In fact, you may actually have more compressed disk space than you had
	before the conversion, regardless of what was reported.
	
	In addition, DoubleSpace continually updates its compressed disk space estimates.
	As a result, as you work with a compressed drive, DoubleSpace updates its
	estimates to reflect the actual current state of file compression on your drive.
	
	Additional query words: 6.0 6.2 dblspace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
