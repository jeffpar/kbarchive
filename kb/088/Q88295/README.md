---
layout: page
title: "Q88295: PRB: Clicking Database Runs Run-Time, Not Development Version"
permalink: kb/088/Q88295/
---

## Q88295: PRB: Clicking Database Runs Run-Time, Not Development Version

	Article: Q88295
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking a program or database created in FoxBASE+ for the Macintosh
	(FoxBASE+/Mac) activates FoxBASE+/Mac. However, when the FoxBASE+/Mac run-time
	version is installed on the system, clicking a program or database activates the
	run-time version.
	
	CAUSE
	=====
	
	When you click a secondary file, the Macintosh Finder uses the file's creator
	type to determine which file to execute. Because the FoxBASE+/Mac development
	environment and the FoxBASE+/Mac run-time environment have the same creator
	type, the Finder activates the first of these packages that it finds.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
