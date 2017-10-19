---
layout: page
title: "Q108732: X400: Address Syntax"
permalink: /kb/108/Q108732/
---

## Q108732: X400: Address Syntax

	Article: Q108732
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vversions 2.1, 3.0, and 3.2 of Microsoft Mail Gateway to X.400 provide two
	options for separating address attributes:
	
	- All address attributes may be separated by semicolons (;). For example:
	
	  c=US;a=TELENET;p=ABC;o=P/Q;g=JOHN;s=STEEL
	
	- All address attributes may be separated by a forward slash (/). A leading
	  forward slash is also required at the beginning of the O/R name. If a forward
	  slash is part of an address attribute, the forward slash must be preceded by
	  the escape character ($) and is entered as $/. For example:
	
	  /c=US/a=TELENET/p=ABC/o=P$/Q/g=JOHN/s=STEEL
	
	MORE INFORMATION
	================
	
	Characters
	----------
	
	The characters allowed in an X.400 address is the printable string of characters
	defined in the X.409 specification. The X.409 Specification is contained in the
	CCITT (The International Telegraph & Telephone Consultative Committee) "Red
	Book" volume VIII-fascicle VIII.7--the Data Communication Networks Message
	Handling System Recommendations for X.400- X.430.
	
	- No distinction is made between uppercase and lowercase letters.
	
	- Leading and trailing spaces are ignored. If there are multiple spaces within
	  an attribute, they are converted to a single space.
	
	The following characters are allowed:
	
	Name                      Character
	---------------------------------------------------------------------
	
	Capital letters           A, B, C, and so on
	Lowercase letters         a, b, c, and so on
	Digits                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
	Space                     (space)
	Apostrophe                '
	Left parenthesis          (
	Right parenthesis         )
	Plus sign                 +
	Comma                     ,
	Hyphen                    -
	Period                    .
	Forward slash             / 
	Colon                     :
	Equal sign                =
	Question mark             ?
	
	Additional query words: 2.10 3.00 3.20 "%" address
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	
