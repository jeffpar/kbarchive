---
layout: page
title: "Q105044: ERR: &quot;File Does Not Exist&quot; After Source Code Is Removed"
permalink: kb/105/Q105044/
---

## Q105044: ERR: &quot;File Does Not Exist&quot; After Source Code Is Removed

	Article: Q105044
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
	
	You receive the
	
	  File does not exist
	
	error message when using FoxRun or MFoxRun to run (DO) a program that has had its
	source code removed using FoxPackage. Looking at the program file after it has
	been modified by FoxPackage reveals that the program file has a file size of 0K
	(zero kilobytes).
	
	CAUSE
	=====
	
	This behavior is caused by a problem with FoxPackage version 2.05.
	
	RESOLUTION
	==========
	
	Upgrade to FoxPackage version 2.07 to correctly remove the source code from
	programs and run them with FoxRun.
	
	FoxPackage 2.07 is available through Application Note FM0796. For more
	information on obtaining this Application Note, query on the word "FMO796"
	(without the quotation marks) here in the Microsoft Knowledge Base.
	
	MORE INFORMATION
	================
	
	FoxPackage can prepare programs for distribution in two ways. One way is to
	create a single stand-alone application. The other way is to remove the source
	code from the program files. This article addresses the latter method--removing
	source code from program files.
	
	As explained in Chapter 7 of the FoxBASE+/Mac "User's Guide," FoxBASE+ program
	files can have the source code removed from them so that the only part of the
	file remaining is the compiled resource portion. This resource portion of the
	file can be distributed with FoxRun along with supporting databases and indexes.
	
	REFERENCES
	==========
	
	"User's Guide," version 2.01, pages 7-8, 7-13 through 7-16
	
	Additional query words: 2.01 errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
