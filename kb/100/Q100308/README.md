---
layout: page
title: "Q100308: Disk Errors with EMM386.EXE on Laptop Computers"
permalink: /kb/100/Q100308/
---

## Q100308: Disk Errors with EMM386.EXE on Laptop Computers

{% raw %}

	Article: Q100308
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your laptop has a "suspend/resume" feature to save power, you may receive
	error messages similar to the following with MS-DOS EMM386.EXE version 4.45:
	
	- 
	
	  Serious disk error has occurred
	
	-or-
	
	- 
	
	  Segment Load Failure (in Windows-based applications)
	
	CAUSE
	=====
	
	This error is usually caused by an interaction between the laptop power manager
	feature and EMM386.EXE.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Try to determine if there is a region that needs to be excluded from upper
	  memory blocks (UMBs) to allow the laptop power management to work with
	  EMM386.EXE version 4.45.
	
	  This information may be available in your laptop manual. As an alternative,
	  you can exclude the A000-EFFF memory range to test for a UMB conflict. For
	  example:
	
	  device=c:\dos\emm386.exe noems x=a000-efff
	
	2. If the problem occurs only with MS-DOS 6 EMM386.EXE version 4.45 and cannot
	  be corrected with the above step, use the version of EMM386.EXE that came
	  with the laptop.
	
	  NOTE: If you do this, you cannot use MemMaker.
	
	3. Remove EMM386.EXE to see if the problem is related to using EMM386.EXE.
	
	Safari 386 Notebook
	-------------------
	
	The following changes may be needed on a Safari 386 Notebook after installing
	MS-DOS 6.0 or 6.2 and running MemMaker:
	
	1. Revert to the Windows version 3.1 EMM386.EXE file.
	
	2. Exclude the A000-C7FF range by adding the following to the CONFIG.SYS file:
	
	  device=c:\windows\emm386.exe x=a000-c7ff
	
	Do not use EMM386.EXE version 4.45, and do not add HIGHSCAN or NOEMS statements
	to the DEVICE line for EMM386.EXE (in your CONFIG.SYS file).
	
	
	The Safari product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 6.20 6.00 advanced power management safari apm standby
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
