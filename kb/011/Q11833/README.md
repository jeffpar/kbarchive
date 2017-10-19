---
layout: page
title: "Q11833: Finding Size of Program"
permalink: /kb/011/Q11833/
---

## Q11833: Finding Size of Program

	Article: Q11833
	Product(s): Microsoft Macro Assembler
	Version(s): 1.25,1.27,3.0x,4.0,5.0,5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 1.25, 1.27, 3.0x, 4.0, 5.0, 5.1, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The are programming situations in which it is necessary to determine the length
	of a program at run-time. For example, services (such as MS-DOS function 31H)
	need this information. Ordinarily, one could define a symbol at the end of a
	segment known to be loaded last; however, this does not work when linking with
	libraries because the libraries load after the .OBJ's.
	
	The following is a method that be used to perform the equivolent operation when
	linking with library files that may rearange the segment order:
	
	Begin your program with a list of declarations for all segments in your program.
	This will solve the load-order problem. However, if your segments are all named
	to classes and the order of the classes is all that is important, you only need
	one segment declaration per class.
	
	Define a new and empty segment to be the last segment in your load image. Place
	your empty segment at the end of the list. The following is an example:
	
	     ; Declarations to fix the load order. First, MYCODE
	     ; and all segments of class CODE.
	
	     MYCODE SEGMENT 'CODE'
	     MYCODE ENDS
	
	     ; Next MYDATA and all segments of class DATA
	
	     MYDATA SEGMENT PUBLIC 'DATA'
	     MYDATA ENDS
	
	     ; Finally, LASTSEG.
	
	     LASTSEG SEGMENT
	     LASTSEG ENDS
	
	In the above, LASTSEG is the last segment in the load order (assuming all other
	segments in the program belong to either class CODE or DATA) and thus marks the
	beginning of free memory above the load image.
	
	If your segment declarations occur randomly throughout your source files and
	libraries, the solution is not as simple. The method to use is to make a new
	library, to be linked in last, that defines this last empty segment and a label
	in this segment. (You must have a reference to this label in some part of the
	program so the linker will pull in this library.)
	
	Additional query words: 1.25 1.27 3.0x 4.00 5.00 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM125 kbMASM127 kbMASM30xSearch kbMASM400 kbMASM500
	Version           : :1.25,1.27,3.0x,4.0,5.0,5.1,6.0
	
	=============================================================================
	
