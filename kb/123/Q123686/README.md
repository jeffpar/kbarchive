---
layout: page
title: "Q123686: Controlling Segment Ordering"
permalink: kb/123/Q123686/
---

## Q123686: Controlling Segment Ordering

	Article: Q123686
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,6.0,6.11,6.16.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 6.0, 6.1 
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the segment ordering directives and explains how to get
	segments into a desired order.
	
	The GROUP directive does not control segment ordering. When you create a group by
	using the GROUP directive, you are telling the linker to treat multiple logical
	segments as one physical segment, known as a group. Placing two logical segments
	into a group forms one physical segment in the resulting executable that is
	composed of the two logical segments. However, the logical segments are not
	placed in any specific order.
	
	The segment ordering in an executable is determined by the segment ordering
	directive you use. The three segment ordering directives are: .ALPHA, .SEQ, and
	.DOSSEG. However, the linker can use only one segment ordering in a given
	executable.
	
	MORE INFORMATION
	================
	
	If you use the .ALPHA directive, the linker places segments into the executable
	in alphabetical order. In this case, segment ABC would be placed before segment
	DEF.
	
	If you use the .SEQ directive or if you don't specify any of the directives, the
	linker places segments into the executable in the order they are encountered.
	Therefore, the linker makes the first segment it sees in the first .OBJ file
	into the first segment in the executable. It makes the next segment it sees in
	the first .OBJ into the second segment, and so on. When there are no more
	segments in the first .OBJ file, the linker processes the segment's second .OBJ
	file, and so on, until all .OBJ files have been processed.
	
	If you use the .DOSSEG directive, specify .MODEL, or link with any high level
	language, such as C or FORTRAN, the linker places segments into the executable
	according to the segment class and sequential order. The linker looks at the
	segments class and if the class ends in CODE, the segment is placed towards the
	beginning of the executable. If the segment has class STACK or class BSS, the
	linker places it towards the end of the executable. Segments with other classes
	are placed in the middle. If there are multiple segments in any grouping of
	classes, the segments are placed in sequential order within that grouping.
	
	One frequently used method to get segments into a specific order is to use the
	.SEQ or .DOSSEG ordering and specify all the segments at the top of each source
	file or in a file that you include into each source file. For example:
	
	     header SEGMENT para public 'NOT_REALLY_CODE'
	     header ENDS
	     driver_code SEGMENT para public 'CODE'
	     driver_code ENDS
	     install_code SEGMENT para public 'DATA'
	     install_code ENDS
	
	If you use the .SEQ segment ordering directive, the linker will see these empty
	segment declarations first and place the segments in this order. If you use the
	.DOSSEG segment ordering directive, the linker will put segments header and
	driver_code towards the beginning of the executable because they both have class
	names that end in CODE. The linker then places header before driver_code because
	it saw header first, so again you end up with same segment ordering.
	
	NOTE: For this technique to work, you must use a combine type of PUBLIC so that
	segment declarations with the same name are treated as the same segment.
	
	Additional query words: 5.10 6.00 6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM610 kbMASM611
	Version           : :5.1,6.0,6.11,6.16.11
	
	=============================================================================
	
