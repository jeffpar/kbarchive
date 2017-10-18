---
layout: page
title: "Q104782: MS-DOS 6.2 MEM Displays Invalid Numbers with Qemm 7.01"
permalink: kb/104/Q104782/
---

## Q104782: MS-DOS 6.2 MEM Displays Invalid Numbers with Qemm 7.01

	Article: Q104782
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Quarterdeck Qemm version 7.01, the "Upper" and "Total under 1
	MB" values may be displayed incorrectly. For example, your display may appear as
	follows:
	
	  Memory Type        Total  =   Used  +   Free
	  ----------------  -------   -------   -------
	  Conventional         640K       19K      621K
	  Upper             4,193,6   4,193,6       12K    <== Incorrect Display
	  Reserved             384K      384K        0K
	  Extended (XMS)    15,998K    3,102K   12,896K
	  ----------------  -------   -------   -------
	  Total memory      16,386K    2,854K   13,530K
	
	  Total under 1 MB       2K   4,193,6      634K    <== Incorrect Display
	
	CAUSE
	=====
	
	The Upper value should read 4,193,6nn,nnn (where n is an unknown number) but MEM
	does not correctly handle the large values for upper memory returned by Qemm.
	
	The addition of the comma formatting for numerical output in MS-DOS 6.2 magnifies
	the corrupted output problem.
	
	MORE INFORMATION
	================
	
	Qemm is manufactured by Quarterdeck Office Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
