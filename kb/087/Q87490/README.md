---
layout: page
title: "Q87490: X400: Use of &quot;_&quot; Character in the X.400 Version 2.1b3 Setup"
permalink: /kb/087/Q87490/
---

## Q87490: X400: Use of &quot;_&quot; Character in the X.400 Version 2.1b3 Setup

	Article: Q87490
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In X.400 version 2.1b3, the underscore character "_" can be used to represent a
	single space ONLY in the Admin program's Gateway/Setup/MTA Country code, ADMD,
	and PRMD fields (from the Admin program's Gateway menu, choose Setup, then
	select one of the above fields) and in the ROUTE.CFG file. To enter a single
	space in an address, use the typed entry, then simply enter a single space. For
	example:
	
	  /c=ca/admd= /prmd=cdn/etc.
	
	Single spaces are allowed in the address mapping strings. Enter them just as you
	enter "typed entry" addresses.
	
	
	Additional query words: 2.10 pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
