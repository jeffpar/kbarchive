---
layout: page
title: "Q74209: Why MEM /C Does Not Show UMB Information"
permalink: /kb/074/Q74209/
---

## Q74209: Why MEM /C Does Not Show UMB Information

{% raw %}

	Article: Q74209
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you type the command "MEM /C" (without the quotation marks) and receive
	information only about the conventional portion of memory, one of two things is
	occurring:
	
	- The command is being given in a virtual machine, such as the MS-DOS prompt
	  under Windows 3.0.
	
	-or-
	
	- There are no upper memory blocks (UMBs) available or in use.
	
	MORE INFORMATION
	================
	
	In order for upper memory block information to be displayed, the following must
	be in your CONFIG.SYS file:
	
	- UMB must be specified on the DOS=HIGH or DOS=LOW line to tell MS-DOS to make
	  UMBs available. For example:
	
	  dos=high,umb
	
	- EMM386 must be loaded in the CONFIG.SYS file, which will map some of the
	  available extended memory into the upper memory area (UMA) as usable UMBs.
	  For UMB support, either the RAM or NOEMS switch must be used. For example:
	
	  device=c:\dos\emm386.exe noems
	
	  Note: EMM386.EXE requires that HIMEM.SYS be loaded.
	
	For more information on the use of upper memory blocks, see pages 313-330 and
	605-609 of the version 5.0 "Microsoft MS-DOS User's Guide and Reference," or
	query on the following words:
	
	  "requirements" (without the quotation marks) and "UMB" (without the quotation
	  marks) and "support" (without the quotation marks) and "MS-DOS 5.0" (without
	  the quotation marks)
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
