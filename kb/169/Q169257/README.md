---
layout: page
title: "Q169257: INFO: Actions That Perform an Implicit GET"
permalink: /kb/169/Q169257/
---

## Q169257: INFO: Actions That Perform an Implicit GET

	Article: Q169257
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Certain SourceSafe operations by default implicitly GET a local copy of a file.
	This is partially documented in the Online Help for the -G command line option
	
	MORE INFORMATION
	================
	
	The following commands perform a GET when they are executed from the command
	line or the Visual SourceSafe Explorer:
	
	  Pin
	  Recover
	  Rollback
	  Share
	  Undocheckout
	  Unpin
	
	This is by design. SourceSafe assumes that changes made to files in a project
	should be echoed to the project's working folder (directory). The GET does not
	happen under two conditions:
	
	1. If there is no working folder set for the project in the Visual SourceSafe
	  Explorer.
	
	2. When you use the -G- switch on the command line.
	
	For some of these operations, the Visual SourceSafe Explorer provides a way to
	override the default behavior. For more information, please refer to the User's
	guide and Online Help for the individual commands.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
