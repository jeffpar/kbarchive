---
layout: page
title: "Q34208: LINK /OV[ERLAYINTERRUPT] Option, Valid Interrupt Numbers"
permalink: kb/034/Q34208/
---

## Q34208: LINK /OV[ERLAYINTERRUPT] Option, Valid Interrupt Numbers

	Article: Q34208
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft LINK /OV[ERLAYINTERRUPT] option specifies the interrupt number
	used to pass control to an overlay in an application. By default, an application
	uses Interrupt 3Fh (63 decimal) for this purpose. Normally, an application uses
	the default interrupt unless one overlaid program spawns another overlaid
	program.
	
	The /OV option supports interrupts 0h through FFh (0 through 255 decimal).
	However, take care to avoid using any interrupts that conflict with MS-DOS. Such
	a conflict can be very difficult to debug. Interrupts 3Ch through 43h (60
	through 67 decimal) are available as user-defined overlay interrupts without
	conflicting with MS-DOS. Consult an MS-DOS programmer's reference for additional
	information on the available interrupts.
	
	In Microsoft LINK versions 5.3 and later, the minimum unique abbreviation for
	/OVERLAYINTERRUPT changed from /O to /OV.
	
	Additional query words: kbinf
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK5xDOSSearch
	Version           : MS-DOS:3.x,4.x,5.x
	
	=============================================================================
	
