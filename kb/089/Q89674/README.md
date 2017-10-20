---
layout: page
title: "Q89674: Running Multi-user FoxBASE+ Code on a Stand-alone Machine"
permalink: /kb/089/Q89674/
---

## Q89674: Running Multi-user FoxBASE+ Code on a Stand-alone Machine

{% raw %}

	Article: Q89674
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To successfully run code developed for the multi-user FoxBASE+ environment on a
	machine running single-user FoxBASE+, one of the following is required:
	
	- Issue the SET EXCLUSIVE ON command (recommended)
	
	-or-
	
	- Load the MS-DOS SHARE utility if the machine runs a version of MS-DOS prior
	  to version 4.00
	
	If you take neither of these steps, FoxBASE+ hangs when the application issues a
	USE <filename> INDEX <indexname> command.
	
	MORE INFORMATION
	================
	
	Using the SET EXCLUSIVE ON command eliminates the need to call the SHARE utility
	to check file status and to write each database change to disk as it is made.
	Consequently, SET EXCLUSIVE ON improves database performance.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

{% endraw %}
