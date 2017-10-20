---
layout: page
title: "Q115348: X400: MTA Not Found Error Message"
permalink: /kb/115/Q115348/
---

## Q115348: X400: MTA Not Found Error Message

{% raw %}

	Article: Q115348
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The routing table requires that all literal blanks in an attribute value be
	escaped by a '\' but the Config utility does not do that for MTA names. For
	example: if MTA name is "MTA_Name" you must enter it as "MTA\_Name" in the
	routing table, or the routing fails with "MTA not found."
	
	The requirements are:
	
	- MTA names are escaped in ROUTE.CFG, but written verbatim everywhere else.
	  Output directories are escaped with underscores, and only the first 8
	  characters are used.
	
	- Advanced address mapping has spaces escaped to underscores.
	
	- Everything else is stored verbatim.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
