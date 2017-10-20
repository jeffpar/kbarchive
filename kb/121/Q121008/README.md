---
layout: page
title: "Q121008: Microsoft Diagnostic Utility: Definition of SXMS"
permalink: /kb/121/Q121008/
---

## Q121008: Microsoft Diagnostic Utility: Definition of SXMS

{% raw %}

	Article: Q121008
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Diagnostic Utility (MSD) to examine memory when
	Windows is not active, you may notice a reference to "Available SXMS" or
	"Largest Free SXMS." SXMS is also known as Super XMS or Super Extended Memory.
	
	MORE INFORMATION
	================
	
	MS-DOS-based programs running under Microsoft Windows or Microsoft Windows for
	Workgroups can access XMS version 2.0 memory only, even if an extended memory
	manager (XMM) is providing XMS version 3.0 memory at the MS-DOS level. This is
	because WIN386.EXE is responsible for allocating extended memory to programs
	running in Windows, and it is designed to implement XMS version 2.0 only.
	
	However, when Windows is not running, these same MS-DOS-based programs can access
	XMS version 3.0 memory as provided by an XMM. This version of the Extended
	Memory Specification implements changes that are intended to provide support for
	extended memory pools of up to 4 gigabytes in size. (The current application
	programming interface [API] uses 16-bit values to specify block sizes and
	therefore is limited to a maximum block size of 64 megabytes.) This extended
	memory provided under XMS version 3.0 is known as SXMS, regardless of whether it
	is above or below the previous limit of 64 megabytes.
	
	Support for XMS 3.0 is implemented through extensions to those same functions
	that were available under version 2.0. One such extension is to the function
	Query Any Free Extended Memory (Function 88h).
	
	This function now uses 32-bit values to return the size of available memory, thus
	allowing returns of up to 4 gigabytes. As with XMS 2.0, this function also
	returns the highest known physical memory address, or the physical address of
	the last byte of memory. Two important points must be made while considering the
	values returned by Function 88h:
	
	- If less than 64 MB of RAM is present on the system, Function 88h returns the
	  same value for available memory when run under XMS version 2.0 or version
	  3.0. As a result, MSD reports the same values for XMS memory in Windows and
	  SXMS memory at the MS-DOS level on such a system.
	
	- There may be discontinuities in the memory map below the highest known
	  physical memory address returned by Function 88h.
	
	Additional query words:
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
