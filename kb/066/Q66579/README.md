---
layout: page
title: "Q66579: Purpose of the M-bit and FRAME DATUM Fields"
permalink: /kb/066/Q66579/
---

## Q66579: Purpose of the M-bit and FRAME DATUM Fields

{% raw %}

	Article: Q66579
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.x; OS/2:1.x
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.x 
	- Microsoft LINK for OS/2, version 1.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the jobs of the linker is to resolve (fix up) addresses which the
	compiler or assembler could not resolve. This article clarifies a couple of
	points discussed in "Article 19: Object Modules" in the "MS-DOS Encyclopedia".
	
	MORE INFORMATION
	================
	
	The M-bit field in the fixup field of the FIXUPP record is described in the
	"MS-DOS Encyclopedia." Its value determines if the linker should calculate the
	address from the start of the segment in question (segment-relative), or from
	the current location in the code/data (self-relative). The following is an
	example:
	
	MYSEG Segment
	
	      -->      +-----------------+     <-- Start of segment
	     |         |                 |
	     |         |                 |
	     |         |                 |
	     |         |                 |
	     |    -->  +-----------------+     <-- Reference to symbol
	     |   |     |                 |
	         |     |                 |
	    (A)  |     |                 |
	               /                 \ 
	     |  (B)    \                 / 
	     |         /                 \ 
	     |   |     \                 / 
	     |   |     |                 |
	     |   |     |                 |
	      --> -->  +-----------------+     <-- Symbol
	               /                 \ 
	               \                 / 
	               /                 \ 
	               \                 / 
	               +-----------------+     <-- End of segment
	
	In this example, (A) is the segment-relative address and (B) is the self-
	relative address. The self-relative calculation is used when you want to jump
	forward a certain number of bytes in the code (for example, a short jump). The
	calculation is fairly straightforward. Calculate the segment- relative address
	for the symbol. Subtract the segment-relative address of the reference, and you
	have the self-relative address for the symbol from the reference.
	
	The FRAME DATUM field is used in almost exactly the same manner. It might seem
	that the fields TARGET DATUM and TARGET DISPLACEMENT are sufficient to fix up
	references in an LEDATA or LIDATA record. To understand why it is required, see
	the following example:
	
	Microsoft C/C++ compilers (16-bit) generate a group called DGROUP that holds data
	segments _NULL, _DATA, _CONST, and so forth. The fixups that it generates are
	similar to the following:
	
	  frame DGROUP target _CONST
	  frame DGROUP target _DATA
	  ...
	
	For the average MS-DOS program, this is fine. We could, eliminate the FRAME DATUM
	field and change target to DGROUP, right? Wrong. Examine ROMable code; they use
	the same OBJ. In that case, the linker must know if a reference to _CONST is a
	far reference (based on DGROUP) or a near reference (based on CONST). If we only
	told it to use DGROUP, it would have no idea how to resolve the references to
	_CONST after it moved _CONST to another segment (for example, ROM based). If we
	left in the target _CONST and removed the frame DGROUP, we would have the wrong
	address for MS-DOS, right? Hence, FRAME DATUM *is* important.
	
	The way the FRAME DATUM field affects the fixup makes sense, given the example
	above for the M-bit. Just calculate the offset based on the TARGET segment and
	add in the offset from the FRAME.
	
	Additional query words: kbinf
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK5xDOSSearch
	Version           : MS-DOS:3.x,4.x,5.x; OS/2:1.x
	
	=============================================================================
	

{% endraw %}
