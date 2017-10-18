---
layout: page
title: "Q96595: EMM386.EXE EMS/XMS Memory Pool Sharing"
permalink: kb/096/Q96595/
---

## Q96595: EMM386.EXE EMS/XMS Memory Pool Sharing

	Article: Q96595
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EMM386.EXE versions 4.45 and 4.48 support a common extended memory specification
	(XMS) and expanded memory specification (EMS) memory pool.
	
	Prior versions of EMM386.EXE preallocate the extended memory needed to emulate
	expanded memory. This makes the extended memory unavailable to other XMS-based
	applications, even when the reserved expanded memory is not in use.
	
	MORE INFORMATION
	================
	
	Starting with version 4.45, EMM386.EXE can wait until an application requests
	expanded memory before allocating extended memory and converting it to expanded
	memory. When the application frees the expanded memory it was using, EMM386.EXE
	returns it to the XMS memory pool.
	
	Two EMM386.EXE parameters control XMS/EMS pool sharing. The [MEMORY] parameter
	specifies the maximum amount of expanded memory that EMM386.EXE can emulate. The
	MIN= parameter specifies the minimum amount of expanded memory that EMM386.EXE
	can provide.
	
	There is a one-to-one ratio between expanded and extended memory usage: it
	requires 1 megabyte (MB) of extended memory to emulate 1 MB of expanded memory.
	
	Guaranteeing You Reserve Enough Expanded Memory
	-----------------------------------------------
	
	Unless you use the MIN= parameter, there is no guarantee that there will be
	enough memory for your application.
	
	For example, if you have the following EMM386.EXE configuration, EMM386.EXE is
	configured to emulate up to 1 MB of expanded memory.
	
	  device=c:\dos\emm386.exe 1024      ([memory] = 1024)
	
	EMM386.EXE allocate 1 MB of extended memory as expanded memory when expanded
	memory is requested. It may be unable to actually provide a full megabyte of
	expanded memory if other applications or device drivers have reduced the amount
	of free extended memory below 1 MB.
	
	To preallocate extended memory as expanded memory and thereby ensure your
	application has the expanded memory it requires, use the MIN= parameter. For
	example, to configure EMM386.EXE to emulate up to 1 MB of expanded memory and a
	minimum of 512 kilobytes (K) of expanded memory, use the following command in
	your CONFIG.SYS file:
	
	  device=c:\msdos\emm386.exe 1024 min=512
	
	The MIN= parameter ensures that EMM386.EXE is able to provide a certain amount of
	expanded memory by preallocating extended memory as expanded memory. MIN=
	defaults to 256K (or zero if the NOEMS switch is used). You can also specify
	MIN=0 to ensure EMM386.EXE does not preallocate any extended memory.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
