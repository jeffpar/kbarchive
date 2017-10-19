---
layout: page
title: "Q60332: INFO: sizeof() Function Returns unsigned Instead of int"
permalink: /kb/060/Q60332/
---

## Q60332: INFO: sizeof() Function Returns unsigned Instead of int

	Article: Q60332
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To comply with new ANSI specifications, the sizeof() operator in Microsoft C
	versions 6.0 and later and QuickC versions 2.5 and later returns an unsigned
	integer. In C version 5.1 and QuickC version 2.0, this function returns a signed
	int.
	
	MORE INFORMATION
	================
	
	The change to an unsigned return value can cause problems in code that uses the
	idiom "-sizeof(type)." The following code example attempts to position the file
	pointer one record from the end of a file. The method the code demonstrates
	works with C version 5.1, but fails with C version 6.0 and later.
	
	     fseek(file, (long)(-sizeof(record)), SEEK_END);
	
	This fseek call positions the file pointer far beyond the end of the file because
	the compiler does not sign extend the generated value. Because the unary minus
	(-) operator does not change the "signedness" of a variable and the sizeof()
	operator returns an unsigned int, the compiler performs a zero extension to
	convert the unsigned int to a long.
	
	In other words, if the record variable was of type char, the following code
	returns the long value -1 when compiled with C 5.1 and 32,767 when compiled with
	C 6.0:
	
	     (long)(-sizeof(record))
	
	One method to work around this problem involves casting the result of the sizeof
	operator to a signed int before negating the value and casting it to a long. For
	example:
	
	     (long)-(int)sizeof(record)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
