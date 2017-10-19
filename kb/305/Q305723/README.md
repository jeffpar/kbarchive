---
layout: page
title: "Q305723: PRB: COM Application Hangs When CoCreateInstance Is Called from"
permalink: /kb/305/Q305723/
---

## Q305723: PRB: COM Application Hangs When CoCreateInstance Is Called from

	Article: Q305723
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the CoCreateInstance function from the DllMain function, the
	Component Object Model (COM) application hangs.
	
	CAUSE
	=====
	
	CoCreateInstance may start a thread that tries to call the DllMain function of
	all dynamic-link libraries (DLLs) that exist in the process by passing a
	DLL_THREAD_ATTACH value. Because the call originates from DllMain, and because
	DllMain is not a reentrant function, the call to CoCreateInstance never returns.
	
	RESOLUTION
	==========
	
	To resolve this problem, do not call CoCreateInstance from DllMain. You can move
	the call to an initialization function or to any other function that is called
	later.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch kbComSearch
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
