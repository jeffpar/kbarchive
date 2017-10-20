---
layout: page
title: "Q80437: Description of the Map File Microsoft LINK Creates"
permalink: /kb/080/Q80437/
---

## Q80437: Description of the Map File Microsoft LINK Creates

{% raw %}

	Article: Q80437
	Product(s): Microsoft Programming Utilities
	Version(s): 3.x,4.x,5.0x,5.1,5.11,5.13,5.15,5.1x,5.2,5.3x,5.5
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.2, 5.3x, 5.5 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft LINK command line includes the /MAP option, the
	<mapfile> field specifies the name for the map file. The default map file
	name is the base name of the executable file with the extension .MAP. To
	suppress creating a map file, set the map filename to NUL.
	
	The map file contains the following contents:
	
	- For each logical segment, the Start address, Stop address, Length, Name, and
	  Class
	
	- Groups
	
	- Program Entry point
	
	When the LINK command line includes the /MAP:ADDRESS option, the map file also
	contains the following:
	
	- Public symbols by Value
	
	When the LINK command line includes the /MAP:FULL option, the map file contains
	all the fields provided by the /MAP:ADDRESS option with the addition of the
	following:
	
	- Contributions of each object file to a segment (this information follows the
	  description of each logical segment)
	
	- Public symbols by Name
	
	- Undecorated names of C++ symbols
	
	The /LI[NENUMBERS] option adds to the map file source-file link numbers and the
	address associated with each line.
	
	MORE INFORMATION
	================
	
	In applications developed for MS-DOS or OS/2 in real mode, the Start and Stop
	addresses are 20-bit hexadecimal addresses relative to the application's load
	image. In applications developed for Microsoft Windows or OS/2 in protected
	mode, the Start and Stop addresses are 32-bit addresses in segment:offset
	notation. In OS/2, the segment value represents a selector in the descriptor
	table that contains information about the segments.
	
	A group is a collection of logical segments that total not more than 64K in size.
	To create a group, use the GROUP assembler directive. Microsoft language
	products create the group DGROUP that contains the _NULL, _DATA, CONST,
	C_COMMON, _BSS, and STACK segments, among others. For additional information,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q48241 Relationship Between Map File and Physical Memory
	
	If an MS-DOS program contains overlays, the map file divides the logical segment
	information into sections. The first section is labeled the "Resident" portion
	of the program, and each subsequent overlay has its own section labeled "Overlay
	1h," "Overlay 2h," and so on. In addition, each public symbol is assigned one of
	the following attributes:
	
	  RES -- The symbol resides in the resident portion
	  OVL -- The symbol resides in an overlay
	  ABS -- The symbol represents a constant value
	
	In applications developed for Windows or OS/2 protected mode, public symbols
	might have one of the following attributes:
	
	  EXP -- If the symbol was exported
	  IMP -- If the symbol was imported
	
	The program entry point is the location where the operating system begins
	executing the program. The reported address is an offset from the lowest memory
	address at which program code is loaded. The application loader places this
	address into CS:IP when the application begins execution. Applications developed
	with Microsoft language products require specific initialization code; the entry
	point for each program is the symbol __astart.
	
	In an application developed for MS-DOS, the start segment is the base address of
	the program segment prefix (PSP) plus the size of the PSP (100h bytes). The
	loader places this value into the DS and ES registers when the application
	begins execution. To retrieve this segment address in C, declare the following
	variable:
	
	     extern unsigned _psp;
	
	The absolute starting address is the program entry point, plus the base address
	of the PSP, plus the size of the PSP. In addition, to determine the absolute
	address of any symbol, add its relative address given in the map file to the
	base address of the PSP plus the size of the PSP.
	
	In a protected-mode environment, there is no reliable method to determine the
	address of a symbol because segments may move in memory or be discarded.
	
	Additional query words: kbinf 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : :3.x,4.x,5.0x,5.1,5.11,5.13,5.15,5.1x,5.2,5.3x,5.5
	
	=============================================================================
	

{% endraw %}
