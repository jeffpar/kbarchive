---
layout: page
title: "Q170984: ACC97: Results Dialog Box Remains After First Check Out"
permalink: /kb/170/Q170984/
---

## Q170984: ACC97: Results Dialog Box Remains After First Check Out

	Article: Q170984
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,97
	Operating System(s): 
	Keyword(s): kbui kbAccess kbSSafe
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When using Microsoft Access 97 to check out an object, the Source Code Control
	Results dialog box remains open after the check out.
	
	This behavior does not occur in other applications.
	
	CAUSE
	=====
	
	This behavior occurs the first time you check out an object in Microsoft Access
	97. Each time the object is checked out thereafter, the Source Code Control
	(SCC) result dialog box will close automatically.
	
	RESOLUTION
	==========
	
	You will need to manually close the SCC result window after checking out an
	object for the first time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Access 97.
	
	2. Open a database that is already under Source Code Control.
	
	3. Check out an object. Note that the Result window remains open.
	
	REFERENCES
	==========
	
	For more information about using Source Code Control, search the Help Index for
	"Source Code Control," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words: 4.00 4.0a 5.0
	
	======================================================================
	Keywords          : kbui kbAccess kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
