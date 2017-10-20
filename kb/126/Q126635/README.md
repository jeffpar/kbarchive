---
layout: page
title: "Q126635: MS PRESS COMPUTER DICTIONARY: Corrections and Comments"
permalink: /kb/126/Q126635/
---

## Q126635: MS PRESS COMPUTER DICTIONARY: Corrections and Comments

{% raw %}

	Article: Q126635
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Press Computer Dictionary, second edition ISBN 1-55615-597-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft Press Computer Dictionary,"
	second edition.
	
	The following topics are covered:
	
	- Pages 20 and 21: Animation Defines Film Display Rate Incorrectly
	
	- Page 55: B-tree Is Missing Arrow
	
	- Page 153: Exabyte Number Correction; Exclusive OR Correction
	
	- Page 174: FORTRAN Definition: Reference to "Jim" Backus Incorrect
	
	- Page 378: Swapping Definition Incorrectly Refers to "Paging"
	
	- Pages 384 and 396: TCP/IP Definition Incorrect
	
	- Page 472: IBM Extended Character Set Incorrect
	
	- New Term: Unicode
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Pages 20 and 21: Animation Defines Film Display Rate Incorrectly
	----------------------------------------------------------------
	
	On page 21, lines 7, 9, and 10 refer to film animation frame rates as 28 fps and
	14 fps. However, the motion picture standard frame rate is 24 fps.
	
	Correction:
	
	Change line 7 from "Film animation displays at 28 fps" to "Film animation
	displays at 24 fps."
	
	Change line 9 from "14 fps, but each frame is printed twice" to "12 fps, but each
	frame is printed twice."
	
	Change line 10 from "Disney cartoons are animated at the full 28" to "Disney
	cartoons are animated at the full 24."
	
	Page 55: B-tree Is Missing Arrow
	--------------------------------
	
	The B-tree diagram at the bottom of page 55 is missing an arrow from box 71 on
	tier 2 to box 42 on tier 3.
	
	Correction:
	
	Draw an arrow from box 71 on tier 2 to box 42 on tier 3.
	
	Page 153: Exabyte Number Correction; Exclusive OR Correction
	------------------------------------------------------------
	
	There are two errors on page 153:
	
	- Error 1: The number defined in exebyte should not have a dash before the
	  final three digits.
	
	- Error 2: The first entry under the "a XOR b" column of the exclusive OR
	  definition should be 0, not 20.
	
	Corrections:
	
	- Error 1 correction: The number in exebyte should be
	  1,152,921,504,606,846,976.
	
	- Error 2 correction: The first entry in the exclusive OR table under "a XOR b"
	  should be 0.
	
	Page 174: FORTRAN Definition: Reference to "Jim" Backus Incorrect
	-----------------------------------------------------------------
	
	Correction:
	
	On page 174, column 2, line 2, change "Jim Backus" to "John Backus."
	
	Page 378: Swapping Definition Incorrectly Refers to "Paging"
	------------------------------------------------------------
	
	The definition for "swapping" refers to virtual memory paging. However, swapping
	and paging are two different concepts.
	
	Correction:
	
	Add an entry for "paging" and use as its definition the current definition of
	"swapping," starting with the second sentence.
	
	Change the "swapping" definition to the following:
	
	  Swapping: The process of exchanging one item for another, as in swapping
	  floppy disks as needed, in and out of a single disk drive. Within a computer,
	  swapping refers to swapping a process from memory to a hard disk or vice
	  versa. Windows 286 and Windows 3.0 Standard mode provided memory swapping for
	  MS-DOS applications. Windows would store the current RAM contents, including
	  most of Windows itself, before loading the MS- DOS program into memory to
	  run. When the user switched to another task or the MS-DOS application was
	  terminated, Windows swapped back the prior memory contents from the hard disk
	  to its prior location in RAM. Windows 3.0 introduced Enhanced mode, which
	  uses paging instead of swapping. See also virtual memory, paging.
	
	This definition is subject to further improvement before inclusion in the next
	printing.
	
	Comments:
	
	Typically, you use "swapping" to describe the swapping of an entire process from
	memory to hard drive when you are running Windows 286 or Windows 3.0 Standard
	mode. The current definition (starting from the second sentence) more accurately
	describes "paging."
	
	Pages 384 and 396: TCP/IP Definition Incorrect
	----------------------------------------------
	
	TCP/IP is incorrectly defined on page 384 in the second edition of the Microsoft
	Press Computer Dictionary.
	
	The correct TCP/IP definition is "Transmission Control Protocol/Internet
	Protocol."
	
	Correction:
	
	On page 384, the TCP/IP definition should read:
	
	  TCP/IP: Acronym for Transmission Control Protocol/Internet Protocol, a
	  software protocol developed by the Department of Defense for communications
	  between computers.
	
	On page 396, "Transport Control Protocol/Interface Program" definition should be
	changed to read: "Transmission Control Protocol/Internet Protocol. See TCP/IP."
	Also, this entry must be moved to the top of the second column, between the
	"transmission channel" and "Transmit Data" definitions.
	
	Standard Computer Dictionary font styles and bolding conventions apply.
	
	Page 472: IBM Extended Character Set Incorrect
	----------------------------------------------
	
	The IBM extended character set shown on page 472 is incorrect for decimal entries
	176 through 223. The "MS-DOS 6 Companion" contains a correct table of this
	character set.
	
	Comments:
	
	Due to the nature of extended characters, it is not possible to store them in
	this ASCII database. Please refer to page 643 of the "MS-DOS 6 Companion" or
	some other MS-DOS reference book for the correct table.
	
	New Term: Unicode
	-----------------
	
	The Unicode Standard is a world-wide 16-bit character encoding system. It is a
	fixed-width, uniform text and character encoding scheme that includes characters
	from the world's scripts, as well as technical symbols in common use. It is
	maintained by the Unicode Consortium and corresponds to international standard
	ISO/IEC 10646-1:1993.
	
	Correction:
	
	This term will be added to the next edition of this book.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
