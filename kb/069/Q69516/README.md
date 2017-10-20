---
layout: page
title: "Q69516: MS-DOS 5.0 UMBs, Enhanced Mode Windows, and LIM 4.0 Support"
permalink: /kb/069/Q69516/
---

## Q69516: MS-DOS 5.0 UMBs, Enhanced Mode Windows, and LIM 4.0 Support

{% raw %}

	Article: Q69516
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the upper memory block UMB support included with MS-DOS version 5.0
	and you try to run an LIM 4.0-aware application under enhanced mode Windows
	version 3.0, Windows may not detect any expanded memory, even if you set up a
	PIF file telling Windows to allocate expanded memory for it.
	
	This problem occurs if you are running EMM386.EXE with the NOEMS option. When
	this switch is used, EMM386 fills all available addresses between 640K and 1 MB
	with UMBs. Because all expanded memory managers operate by swapping pages of
	memory into unused addresses in this range, when all the available space is
	filled, there is no room for the pages and no expanded memory is available.
	
	WORKAROUND
	==========
	
	There are two ways to work around this:
	
	- You can use the RAM option instead of the NOEMS option. You can allocate as
	  little as 16K (one page) of expanded memory. Windows is then able to give
	  expanded memory to applications that can access LIM 4.0 memory.
	
	- You can use the X=xxxx-yyyy parameter on EMM386 to exclude enough space for a
	  page frame. Reserving a 16K page of memory is enough for Windows to allocate
	  expanded memory.
	
	With the NOEMS option on, EMM386 Windows creates a page frame below 640K through
	handle 0000h. This is a special handle that is normally available only to the
	operating system. This handle has a set of pages allocated to it when EMM386
	installs. The pages that are automatically allocated to handle 0000h are those
	that backfill conventional memory. Typically, this backfill occurs between
	addresses 40000h (256K) and 9FFFFh (640K).
	
	An application that is aware of handle 0000h is able to make use of expanded
	memory through the handle. However, most applications are not written to take
	advantage of handle 0000h because the LIM 4.0 specifications specify that this
	handle is reserved for the operating system. Any applications that use handle
	0000h are incompatible with future versions of Microsoft operating systems and
	environments.
	
	Additional query words: 4.00 5.00 UMA noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0; WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
