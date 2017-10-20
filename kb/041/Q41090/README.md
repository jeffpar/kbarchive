---
layout: page
title: "Q41090: INFO: Writing ROMable Code with Microsoft Languages"
permalink: /kb/041/Q41090/
---

## Q41090: INFO: Writing ROMable Code with Microsoft Languages

{% raw %}

	Article: Q41090
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.x,2.x,3.x,4.x,5.01.20,5.01.21,5.1,5.13,5.15,5.3,5.31.009,5.5,5.60.339
	Operating System(s): 
	Keyword(s): kbtool kb16bitonly _IK
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 1.x, 2.x, 3.x, 4.x, 5.01.20, 5.01.21, 5.1, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.60.339 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft LINK utility provided with Microsoft language compilers, is not
	designed to create absolutely addressed or "ROMable" code.
	
	To write ROMable code, code which can be loaded at an absolute address at run
	time, using Microsoft language products, you'll need to acquire a special
	linker. Third party linkers are available for this purpose which can be obtained
	by calling any of the following companies:
	
	Imbedded System Products (512) 338-9211 9430 Research Blvd. Building 4 Suite 310
	Austin, TX 78759
	
	Paradigm Systems (607) 748-5966 3301 Country Club Road Suite 2214 Endwell, NY
	13760
	
	Datalight (360) 435-8086 307 North Olympic Ave Suite 201 Arlington, WA 98223
	
	The following magazine articles are a good source of information for the
	implementation details of a LOCATE utility. A LOCATE utility is used to create a
	binary or ROM image from an EXE produced by a DOS linker. These articles each
	contain source code for an implementation of a LOCATE utility in addition to the
	description of the function of a LOCATE utility.
	
	The C Users Journal - March 1994 R&D Publications (913) 841-1631
	
	Embedded Systems Programming - March 1994 Miller Freeman (415) 905-2200
	
	These vendors are independent of Microsoft; we make no warranty, implied or
	otherwise, reagarding these vendor's performance or reliability nor do we
	recommend the products of these vendors over that if any other company that
	produces a similar product.
	
	Additional query words: LinkIss relocate relocatable 6.00 7.00 8.00 8.00c link msvc embedded
	
	======================================================================
	Keywords          : kbtool kb16bitonly _IK 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK1xDOSSearch kbLINK2xDOSSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50120DOS kbLINK50121DOS kbLINK510DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560339
	Version           : MS-DOS:1.x,2.x,3.x,4.x,5.01.20,5.01.21,5.1,5.13,5.15,5.3,5.31.009,5.5,5.60.339
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
