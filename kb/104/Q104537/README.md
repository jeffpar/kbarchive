---
layout: page
title: "Q104537: Program Hangs with MS-DOS 6.0 but Not Earlier Versions or 6.2"
permalink: /kb/104/Q104537/
---

## Q104537: Program Hangs with MS-DOS 6.0 but Not Earlier Versions or 6.2

	Article: Q104537
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that divide by zero (0) or enable the trap flag without installing
	their own interrupt handlers may stop responding (or display a DIVIDE OVERFLOW
	error) under MS-DOS 6.0.
	
	These applications work correctly under previous versions of MS-DOS and also work
	under MS-DOS version 6.2 and later.
	
	CAUSE
	=====
	
	This problem occurs when the MS-DOS interrupt vectors become corrupted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.0. This problem
	was corrected in MS-DOS version 6.2.
	
	Additional query words: 6.00 divide overflow hang hangs
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
