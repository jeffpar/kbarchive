---
layout: page
title: "Q84734: Why Code Segment Contents May Begin at Offset 16"
permalink: /kb/084/Q84734/
---

## Q84734: Why Code Segment Contents May Begin at Offset 16

	Article: Q84734
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.0x,4.1,5.0x,5.1x,5.2,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.0x, 4.1, 5.0x, 5.1x, 5.2, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft LINK inserts 16 null bytes at the beginning of the _TEXT segment if
	the following conditions are true:
	
	- DOSSEG ordering is specified
	
	- the LINK command line does not specify /NON[ULLSDOSSEG]
	
	- the _TEXT segment exists
	
	MORE INFORMATION
	================
	
	LINK inserts 16 null bytes at the beginning of the _TEXT segment to provide
	support for the signal() function; 16 bytes provide space for its flags.
	
	In DOSSEG ordering, segments appear in the file in the following order:
	
	1. All segments that have a class name that ends in "CODE"
	
	2. Data segments other than those in DGROUP
	
	3. DGROUP data segments, in the following order:
	
	  a. Any data segments of class 'BEGDATA'
	
	  b. Any data segments not of class 'BEGDATA,' 'BSS,' or 'STACK'
	
	  c. Data segments of class 'BSS'
	
	  d. Data segments of class 'STACK'
	
	The run-time libraries distributed with Microsoft language products contain a
	special object module record that enables DOSSEG segment ordering. To specify
	DOSSEG ordering from the LINK command line, specify the /DOSSEG option.
	
	In an application developed with the Microsoft Macro Assembler (MASM), the .MODEL
	directive requests DOSSEG statement ordering. However, LINK places 16 null bytes
	at the beginning of the _TEXT segment only if either the source code contains
	the .DOSSEG directive or if the LINK command line includes the /DOSSEG option.
	
	The /NONULLSDOSSEG option instructs LINK to place segments into the DOSSEG
	ordering and to suppress generating the 16 null bytes at the beginning of the
	_TEXT segment.
	
	Additional query words: kbinf 3.65 3.69 4.06 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.0x,4.1,5.0x,5.1x,5.2,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
