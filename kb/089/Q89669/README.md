---
layout: page
title: "Q89669: FoxBASE+ Configuration and Capacity"
permalink: /kb/089/Q89669/
---

## Q89669: FoxBASE+ Configuration and Capacity

{% raw %}

	Article: Q89669
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
	
	The text below lists the system requirements and capacaties for FoxBASE+.
	
	MORE INFORMATION
	================
	
	Recommended FILES Settings
	--------------------------
	
	  CONFIG.FX files=20
	  CONFIG.SYS files=30
	
	The FILES value in CONFIG.SYS must be ten greater than the FILES value in
	CONFIG.FX. For more information on these settings, refer to the FoxBASE+ "User's
	Guide."
	
	Calculating how many files are open
	-----------------------------------
	
	- One for each temporary file.
	
	- One for each program, no matter how many levels of code are involved.
	
	- One for each index. (Up to seven indexes per work area, 21 total.)
	
	- One for each database that has a memo field.
	
	- One for each database file (Up to ten database files.)
	
	- One for each format file.
	
	FoxBASE+ Default and Maximum Files
	----------------------------------
	
	  Total number of files 48
	  Procedures per procedure file 128
	  Levels of program nesting 24
	  Default file setting 16
	  Maximum number of indexes open 21
	  Maximum number of indexes per file 7
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

{% endraw %}
