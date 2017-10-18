---
layout: page
title: "Q248690: PRB: OLE Automation: CheckOut Recursive Fails"
permalink: kb/248/Q248690/
---

## Q248690: PRB: OLE Automation: CheckOut Recursive Fails

	Article: Q248690
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Visual SourceSafe OLE Automation to check out a project
	object with the recursive flag set, all files are checked out recursively.
	However, the local files for any subprojects will not be on the local computer.
	
	CAUSE
	=====
	
	The files in the subprojects are copied only to the working directory if the
	VSSFLAG_FORCEDIRYES flag is set.
	
	This flag is a parameter of the VSSITEM.Checkout command.
	
	RESOLUTION
	==========
	
	When you check out the project recursively by using OLE Automation, use the
	VSSFLAG_FORCEDIRYES flag.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
