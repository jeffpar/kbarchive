---
layout: page
title: "Q89001: Blank Lines Not Printed on Labels in FoxBASE+"
permalink: /kb/089/Q89001/
---

## Q89001: Blank Lines Not Printed on Labels in FoxBASE+

{% raw %}

	Article: Q89001
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:1.21,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, versions 1.21, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FoxBASE+, blank lines do not print on labels.
	
	CAUSE
	=====
	
	All blank lines are removed from a label. This is correct behavior.
	
	RESOLUTION
	==========
	
	Place a CHR(255) on the blank line. FoxBASE+ will then act as if a printable
	character exists on that line, and the line is not deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASESearch
	Version           : MS-DOS:1.21,2.1
	
	=============================================================================
	

{% endraw %}
