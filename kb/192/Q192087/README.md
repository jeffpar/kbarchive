---
layout: page
title: "Q192087: Error Code 0xc9ef18 or 0x120ef18 When Installing SBS"
permalink: /kb/192/Q192087/
---

## Q192087: Error Code 0xc9ef18 or 0x120ef18 When Installing SBS

{% raw %}

	Article: Q192087
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft BackOffice Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Small Business Server, after you insert compact disc
	2, you get one of the following error messages:
	
	  Small Business Server Setup Failed. The Specific Error Code 0xc9ef18.
	  Setup will continue but the component may not function correctly.
	
	-or-
	
	  Small Business Server Setup Failed. The Specific Error Code 0x120ef18.
	  Setup will continue but the component may not function correctly.
	
	CAUSE
	=====
	
	This error is caused by an invalid character in the "organization" name.
	
	MORE INFORMATION
	================
	
	The characters allowed in an X.400 address is the printable string of characters
	defined in the X.409 specification. The X.409 Specification is contained in the
	CCITT (The International Telegraph & Telephone Consultative Committee) "Red
	Book" volume VIII-fascicle VIII.7--the Data Communication Networks Message
	Handling System Recommendations for X.400- X.430.
	
	- No distinction is made between uppercase and lowercase letters.
	
	- Leading and trailing spaces are ignored. If there are multiple spaces within
	  an attribute, they are converted to a single space.
	
	- The following characters are allowed:
	
	      Name                      Character
	  -----------------------------------------------------
	  Capital letters          A, B, C, and so on
	  Lowercase letters        a, b, c, and so on
	  Digits                   0, 1, 2, 3, 4, 5, 6, 7, 8, 9
	  Space                    (space)
	  Apostrophe               '
	  Left parenthesis         (
	  Right parenthesis         )
	  Plus sign                +
	  Comma                    ,
	  Hyphen                   -
	  Period                   .
	  Forward slash            / 
	  Colon                    :
	  Equal sign               =
	  Question mark            ?
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q108732 X400: Address Syntax
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
