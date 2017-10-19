---
layout: page
title: "Q118563: X400: Originator/Recipient (O/R) Name Qualifiers"
permalink: /kb/118/Q118563/
---

## Q118563: X400: Originator/Recipient (O/R) Name Qualifiers

	Article: Q118563
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Here are the allowable characters for X.400 originator/recipient qualifiers, and
	the maximum length allowed for each value.
	
	ALLOWABLE CHARACTERS
	--------------------
	
	Name                     Graphic Representation
	----                     ----------------------
	
	Capital letters          A, B, ... Z
	
	Small letters            a, b, ... z
	
	Digits                   0, 1, ... 9
	
	Space                    (space)
	
	Apostrophe               '
	
	Left parenthesis         (
	
	Right parenthesis        )
	
	Plus sign                +
	
	Comma                    ,
	
	Hyphen                   -
	
	Full stop (period)       .
	
	Solidus (forward slash)  / 
	
	Colon                    :
	
	Equal sign               =
	
	Question mark            ?
	
	O/R NAME QUALIFIERS
	-------------------
	
	                                               Max-Length
	Symbol      Value                               in octets
	------      -----                               ----------
	
	C=          Country Code                        2 if non-numeric,
	                                               3 if numeric
	
	A or ADMD=  Administrative Management Domain    16 octets
	
	P or PRMD=  Private Management Domain           16 octets
	
	O=          Organization                        64 octets
	
	OUn=        Organizational Unit (n=1,2,3 or 4)  32 octets
	
	S=          Surname                            40 octets
	
	G=          Given Name                          16 octets
	
	I=          Initials                            5 octets
	
	Q=          Generation Qualifier                3 octets
	
	DDA.Type=   Domain Defined Attribute Type       8 octets
	
	DDA.Value=  Domain Defined Attribute Value      128 octets
	
	X121=       X.121 Address                       15 octets
	
	UA-ID=      User Agent Identifier               32 octets
	
	T-ID=       Terminal Id                         24 octets
	
	REFERENCES
	==========
	
	CCITT Recommendation X.409
	NIST Stable Implementation Agreements Part 7.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	
