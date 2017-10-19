---
layout: page
title: "Q130442: PRB: RELEASE LIBRARY Results in &quot;API library not found&quot; Error"
permalink: /kb/130/Q130442/
---

## Q130442: PRB: RELEASE LIBRARY Results in &quot;API library not found&quot; Error

	Article: Q130442
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You get a "API library not found" error message when using the RELEASE LIBRARY
	command to release an API library that is not in the current working directory.
	
	WORKAROUND
	==========
	
	If you are using only a single API library file, use one of the following
	commands to release the API library:
	
	- SET LIBRARY TO
	
	-or-
	
	- RELEASE LIBRARY SET('LIBRARY')
	
	If you are using more than one API library file, use one of the following command
	sets to release a specific library:
	
	- SET PATH TO <path name to the library file> RELEASE LIBRARY <library
	  filename>
	
	-or-
	
	- RELEASE LIBRARY <path>\<library filename>
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create and run the following code:
	
	     SET DEFAULT TO C:\VFP
	     SET LIBRARY TO FOXTOOLS
	     SET DEFAULT TO C:\ 
	     RELEASE LIBRARY FOXTOOLS
	
	This results in the "API library not found" error.
	
	Additional query words: VFoxWin kbfest
	
	======================================================================
	Keywords          : kbcode kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
