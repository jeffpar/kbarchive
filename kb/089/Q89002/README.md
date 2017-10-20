---
layout: page
title: "Q89002: Using Arrays in FoxBASE+"
permalink: /kb/089/Q89002/
---

## Q89002: Using Arrays in FoxBASE+

{% raw %}

	Article: Q89002
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A syntax error on a dimension statement indicates that the specified variable
	has already been defined. To address this situation, use statements such as the
	following:
	
	  RELEASE x?
	  DIMENSION x(10)
	
	To make an array public, use a statement such as the following:
	
	  PUBLIC x(10)
	
	Only one element of an array can be passed to a procedure called from FoxBASE+.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

{% endraw %}
