---
layout: page
title: "Q89264: Increasing Speed in FoxBASE+"
permalink: /kb/089/Q89264/
---

## Q89264: Increasing Speed in FoxBASE+

{% raw %}

	Article: Q89264
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
	
	The FILTER COMMAND can be slow on networks because the filter is evaluated each
	time the record pointer is moved. Using a filtered index can help to improve
	performance.
	
	Extensive use of macro substitution slows down any program. It does not matter if
	the program is running single-user or multi-user.
	
	Using a math coprocessor helps to increase speed in math-intensive programs and
	helps to increase speed in drawing screens.
	
	Changing the settings of the "bucket," "hmemory," and "mvarsiz" values in the
	CONFIG.FX file can help to maximize the use of available memory and to increase
	processing speed. See the chapter on Configurable Allocation Items in the
	FoxBASE+ "User's Guide" for more information.
	
	MORE INFORMATION
	================
	
	Because FoxBASE+ has its own internal cache, using another cache program is not
	recommended. Certain cache routines may not follow the standard, which may lead
	to database corruption.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

{% endraw %}
