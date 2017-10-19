---
layout: page
title: "Q69292: PRB: Video Driver GP-Faults When Handling Large Bitmaps"
permalink: /kb/069/Q69292/
---

## Q69292: PRB: Video Driver GP-Faults When Handling Large Bitmaps

	Article: Q69292
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some display drivers experience a GP-fault or unrecoverable application error
	(UAE) when a large bitmap is loaded onto the desktop as "wallpaper." This fault
	occurs when the bitmap is aligned on a page boundary and the driver attempts to
	read the next page. In standard mode, the next page is often valid and the bug
	escapes detection. In enhanced mode, the next page is frequently invalid and the
	GP-fault occurs.
	
	CAUSE
	=====
	
	This GP-fault can be attributed to the way the main loop is constructed in the
	video driver DIB-handling routines. The main loop is written so that a byte is
	fetched from the DIB and the data pointer is advanced immediately, before
	processing the byte. This is fine until the very last byte in the DIB is
	processed.
	
	MORE INFORMATION
	================
	
	This problem has manifested itself in a few different ways. For example, in one
	instance, the driver code fetched the final DIB byte (which was at an offset of
	FFFFh in a given segment). The driver incremented the offset, determined that it
	wrapped to zero, and incremented the value in the DIB segment register. Because
	this was the final byte of the DIB, the new value in the DIB segment register
	was an invalid selector. Using an invalid selector causes a GP-fault.
	
	In a second example, the driver code loaded each DIB byte at the bottom of the
	main loop (loop termination logic is at the top of the loop). This caused a
	final, invalid byte to be loaded at the bottom of the loop (before the loop
	termination test). This worked for many bitmaps because there are often a few
	extra bytes of space after the final DIB byte. One bitmap, however, fit exactly
	within the segment limit. When the program tried to fetch one extra byte in this
	case, a GP-fault occurred because the fetch violated the segment limit defined
	in the local descriptor table.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
