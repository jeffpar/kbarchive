---
layout: page
title: "Q141413: FIX: MSDEV Does Not Prompt for Executable for Debug Session"
permalink: kb/141/Q141413/
---

## Q141413: FIX: MSDEV Does Not Prompt for Executable for Debug Session

	Article: Q141413
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbusage kbDebug kbide kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a debugging session in Developer Studio (MSDEV) and
	the target being debugged is a DLL or an OCX, Developer Studio will prompt you
	for an executable for the debug session if you have not specified one. If
	Developer Studio cannot find the executable you specify, it will display an
	error message but will continue to try to use the incorrect executable name each
	time you attempt to debug. So from this point on, Developer Studio will not give
	you the opportunity to correct the name, it will just display an error message
	each time you attempt to debug.
	
	RESOLUTION
	==========
	
	To correct this behavior, you need to explicitly change the "Executable for
	debug session" setting in the build settings for the project. On the Build menu,
	click Select Settings, select the debug target, click the debug tab, and select
	General in the Category box. You can now correct the name specified in the
	"Executable for debug session" box. Be sure to include the .exe extension after
	the name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbusage kbDebug kbide kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
