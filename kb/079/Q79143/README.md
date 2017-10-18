---
layout: page
title: "Q79143: Using the /HIGH and /DS LINK Options"
permalink: kb/079/Q79143/
---

## Q79143: Using the /HIGH and /DS LINK Options

	Article: Q79143
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.x,3.x,4.x,5.0x,5.2,5.3x,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 2.x, 3.x, 4.x, 5.0x, 5.2, 5.3x, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft LINK /HIGH option instructs the loader to place to program into
	RAM at the highest possible address. However, the Program Segment Prefix (PSP)
	is loaded into low memory. When the LINK command line does not include the /HIGH
	option, the entire program is loaded into the lowest possible address in the
	first available block of RAM.
	
	The LINK /DS[ALLOCATE] option relocates each address in DGROUP such that the last
	byte in the segment has offset FFFFh.
	
	The /DS and /HIGH options are not recommended for use with applications developed
	in a high-level language. These switches are provided for use with a real-mode
	assembly-language application.
	
	MORE INFORMATION
	================
	
	When the LINK command line specifies the /HIGH option, the application owns all
	memory between its segments (which are loaded at the highest possible address)
	and its PSP (which is loaded into low memory). Therefore, the application cannot
	dynamically allocate and free memory nor can any other program be loaded into
	memory.
	
	The /HIGH switch provides room for the application stack or heap to grow downward
	without colliding with any other program data, if the stack or heap is the first
	segment in the memory map.
	
	The start-up code for the Microsoft high-level language libraries is not
	compatible with the /HIGH option. The libraries automatically specify the
	/DOSSEG option which loads program segments into low memory. The libraries also
	require dynamic memory allocation. Even though it is possible to use the /HIGH
	option with custom start-up code, many of the run-time library functions that
	require dynamic memory allocation would not be available.
	
	Early versions of Microsoft FORTRAN and Microsoft Pascal generate code that must
	be linked with the /DS option specified. Because the /HIGH option is often used
	in conjunction with /DS, Microsoft LINK continues to support these options.
	
	Additional query words: kbinf 2.00 2.01 2.10 2.40 2.41 2.44 2.50 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK2xDOSSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK530xDOSSearch kbLINK520DOS kbLINK550DOS kbLINK560DOS
	Version           : MS-DOS:2.x,3.x,4.x,5.0x,5.2,5.3x,5.5,5.6
	
	=============================================================================
	
