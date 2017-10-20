---
layout: page
title: "Q96935: EMM386.EXE Dynamic Memory Allocation"
permalink: /kb/096/Q96935/
---

## Q96935: EMM386.EXE Dynamic Memory Allocation

{% raw %}

	Article: Q96935
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EMM386.EXE version 4.45, which ships with MS-DOS 6.0, dynamically allocates and
	releases memory that conforms to the Extended Memory Specification (XMS), the
	Expanded Memory Specification (EMS), or the Virtual Control Program Interface
	(VCPI) specification. For example, if a program releases a certain amount of EMS
	memory, other programs that need XMS memory can request and receive additional
	XMS memory from the released EMS memory. In other words, EMM386.EXE can provide
	extended or expanded memory as needed by adjusting the EMS memory pool.
	
	MORE INFORMATION
	================
	
	You can limit this feature by using the maximum and minimum memory parameters of
	EMM386.EXE. For example, if you want to give EMM386.EXE 2 megabytes of memory
	and keep it from dynamically allocating that memory, use the following
	EMM386.EXE DEVICE line:
	
	  device=c:\dos\emm386.exe 2048 min=2048 ram
	
	NOTE: This feature is application dependent. If an application does not release
	allocated XMS or EMS memory, EMM386.EXE cannot give that memory to other
	applications.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
