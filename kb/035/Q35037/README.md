---
layout: page
title: "Q35037: INFO: How C Interprets Integer Constants with Leading Zeroes"
permalink: /kb/035/Q35037/
---

## Q35037: INFO: How C Interprets Integer Constants with Leading Zeroes

	Article: Q35037
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Two similar assignment statements produce very different results when the
	application prints values assigned. For example:
	
	  a = 20;
	  printf("%d", a);   /* this prints "20" */ 
	  a = 020;
	  printf("%d", a);   /* but this prints "16" */ 
	
	Any number with a leading "0" (zero) is interpreted to be an octal number (base
	8). Remove the leading zero from the decimal number.
	
	MORE INFORMATION
	================
	
	All character constants of the form "\<o>", "\<o><o>",
	"\<o><o><o>", (where <o> is a digit) and their string
	equivalents are specified in octal as well. For example, \33 and \033 each
	specify the ESC character (decimal 27, hexadecimal 1B). To specify a character
	constant in hexadecimal, use "\x<h><h>", where <h> is a
	hexadecimal digit. C does not provide a method to specify a decimal number in a
	character constant; you can use a decimal integer constant instead (for example,
	ch = 27).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
