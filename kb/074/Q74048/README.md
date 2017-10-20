---
layout: page
title: "Q74048: Running Excel 2.1 with Run-time Windows and MS-DOS 5.0"
permalink: /kb/074/Q74048/
---

## Q74048: Running Excel 2.1 with Run-time Windows and MS-DOS 5.0

{% raw %}

	Article: Q74048
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be displayed when you attempt to run Microsoft
	Excel version 2.1 with run-time Windows under MS-DOS 5.0.
	
	  Incorrect DOS Version
	
	The problem isn't with Excel, but with the run-time version of Windows, which is
	not compatible with MS-DOS 5.0 HIMEM.SYS.
	
	WORKAROUND
	==========
	
	To get Excel 2.1 and run-time Windows to work properly, reinstall the run- time
	version of Windows with the "No Extended Memory" option during Setup. At this
	point, Setup determines which of the following user files to load:
	
	- USERS.EXE, which is called the "skinny user," because it allows no high
	  memory functionality
	
	-or-
	
	- USERF.EXE, which is called the "fat user," because it uses high memory
	  functionality
	
	In this case, you will use USERS.EXE.
	
	Note that using USERS.EXE will decrease the available memory for Excel by
	approximately 40K because it can no longer use the high memory area (HMA).
	However, by loading DOS into the HMA, more space will be available in
	conventional memory, so this will not be a problem. If an 80386 coprocessor is
	present, you can free more conventional memory by loading device drivers and
	terminate-and-stay-resident (TSR) programs into the upper memory area.
	
	Another workaround is to NOT use HIMEM.SYS. However, this will not allow for the
	use of any extended memory. Therefore, the first workaround is more functional
	for most users.
	
	Additional query words: 2.10 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
