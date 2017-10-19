---
layout: page
title: "Q31991: How LINK Orders and Combines Segments"
permalink: /kb/031/Q31991/
---

## Q31991: How LINK Orders and Combines Segments

	Article: Q31991
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.3,5.31.009,5.5,5.6; OS/2:5.0x,5.1x,5.3,5.31.009
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.3, 5.31.009, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1x, 5.3, 5.31.009 
	-------------------------------------------------------------------------------
	
	Every application segment belongs to a named class such as "CODE,"
	"DATA," or "BSS." LINK orders segments in the output file to place
	segments that have the same class into the file contiguously. LINK
	does not change the order of segment classes and, within each class,
	LINK does not change the order of segments.
	
	In an assembly language application, if a segment does not have a
	class name, the linker assigns it to the null class, which is
	processed as any other segment class.
	
	If the linker command line includes the /DOSSEG option switch or
	specifies a run-time library from a Microsoft language product, LINK
	imposes the following order on the segments in the output file:
	
	  code     - class names that end in "CODE"
	
	
	  far data - all segment classes except for "DGROUP" and code
	
	
	  DGROUP   - (this segment is the default
	
	              data segment for the application)
	              - class "BEGDATA" (a special run-time segment)
	              - near initialized data (all data except
	                                       for "BSS" and "STACK")
	              - near BSS uninitialized data (class "BSS")
	              - stack (class "STACK")
	
	Additional query words: kbinf 3.00 3.60 4.10 5.10 5.30 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK50xOS2Search kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK530OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.3,5.31.009,5.5,5.6; OS/2:5.0x,5.1x,5.3,5.31.009
	
	=============================================================================
	
