---
layout: page
title: "Q46774: Calculating an Application's Load Size, Minimum Load Size"
permalink: /kb/046/Q46774/
---

## Q46774: Calculating an Application's Load Size, Minimum Load Size

{% raw %}

	Article: Q46774
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS 
	-------------------------------------------------------------------------------
	
	The MS-DOS program loader uses the following information to calculate
	the number of 16-byte paragraphs to use when loading a program:
	
	
	  Name in EXEHDR Output      Offset in .EXE Header
	  ------------------------------------------------
	  Bytes on Last Page                 2h-3h
	  Pages in File                      4h-5h
	  Paragraphs in Header               8h-9h
	  Extra Paragraphs Needed            Ah-Bh
	  Extra Paragraphs Wanted            Ch-Dh
	
	Given the information in the table above, compute the load size as
	follows:
	
	  Load Size = Bytes on Last Page * (1 paragraph / 10h bytes)
	
	  + Pages in File * (20h paragraphs / page)
	  + 10h - Paragraphs in Header
	  + Extra Paragraphs Wanted
	
	The Load Size is the number of 16-byte paragraphs requested. If not
	enough memory is available, the application receives all available
	memory. However, if the memory available is not greater than or equal
	to the Minimum Load Size, MS-DOS cannot load the program. Compute the
	Minimum Load Size as follows:
	
	  Minimum Load Size = Bytes on Last Page * (1 paragraph / 10h bytes)
	
	  + Pages in File * (20h paragraphs / page)
	  + 10h - Paragraphs in Header
	  + Extra Paragraphs Needed
	
	
	The value 20h is the size, in paragraphs, of one page, (512 / 16). The
	value 10h is the size, in paragraphs, of the 256-byte Program Segment
	Prefix (PSP) that precedes each program in memory.
	
	For more information, please refer to an MS-DOS reference like the
	"MS-DOS Encyclopedia" (Microsoft Press), page 124.
	
	Additional query words: kbinf 3.00 3.60 4.10 5.10 5.30 5.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
