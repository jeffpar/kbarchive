---
layout: page
title: "Q89670: Configuring FoxBASE+ Memory Use in CONFIG.FX"
permalink: /kb/089/Q89670/
---

## Q89670: Configuring FoxBASE+ Memory Use in CONFIG.FX

	Article: Q89670
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
	
	The CONFIG.FX configuration file provides a number of settings to customize
	memory use. The text below documents these variables and provides recommended
	setting values.
	
	MORE INFORMATION
	================
	
	The MVARSIZ value specifies the amount of memory (in kilobytes) allocated to
	hold variables. The default setting is 6. The recommended setting (to improve
	performance) is 3.
	
	The BUCKET value specifies the amount of memory (in kilobytes) allocated to hold
	picture clauses. The default setting is 4. The recommended setting (to improve
	performance) is 1.
	
	The HMEMORY value specifies the amount of memory (in kilobytes) allocated to hold
	the history. The default setting is 4. (In the runtime version of FoxBASE+, the
	default setting is 0.) The recommended setting (to improve performance) is 1.
	
	FoxBASE+ also uses a temporary file for memory management. The name of this
	temporary file and its location cannot be changed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	
