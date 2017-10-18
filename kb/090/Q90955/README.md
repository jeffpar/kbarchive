---
layout: page
title: "Q90955: Using the CREATE VIEW &lt;Name&gt; FROM ENVIRONMENT ALL Command"
permalink: kb/090/Q90955/
---

## Q90955: Using the CREATE VIEW &lt;Name&gt; FROM ENVIRONMENT ALL Command

	Article: Q90955
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
	
	In FoxBASE+, the CREATE VIEW <name> FROM ENVIRONMENT ALL command creates a
	view that includes the active databases, indexes, and the values specified in
	SET commands.
	
	MORE INFORMATION
	================
	
	A view file is a useful tool during debugging and testing. During the debugging
	process, the current environment can be saved in a view. If the testing process
	changes the environment, the application can restore the environment from the
	view before continuing execution.
	
	Specifically, CREATE VIEW <name> FROM ENVIRONMENT ALL creates a view file
	that contains the following information:
	
	- All established relations between open database files.
	
	- All fields contained in the SET FIELDS list.
	
	- All database, index, alternate, and format files currently open in all ten
	  work areas.
	
	- All filters in effect for open databases.
	
	- All ON/OFF switch settings.
	
	- The ON ESCAPE and ON KEY settings.
	
	- The DEFAULT AND PATH SETTINGS.
	
	- The procedure file settings.
	
	Additional query words: fox base
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	
