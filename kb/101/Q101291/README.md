---
layout: page
title: "Q101291: &quot;Invalid Function&quot; with CallFn() from FoxTools"
permalink: /kb/101/Q101291/
---

## Q101291: &quot;Invalid Function&quot; with CallFn() from FoxTools

{% raw %}

	Article: Q101291
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FOXTOOLS.FLL library is used to call Windows API functions from within
	FoxPro. However, FOXTOOLS.FLL cannot call a .DLL that requires more than nine
	parameters. If an attempt is made to call a .DLL with more than nine parameters,
	FoxPro will return the "Invalid Function, Argument, Type or Count" error
	message.
	
	The following example demonstrates this problem. It calls a function named "Beep"
	in a .DLL named "Mydll.dll" with ten parameters. When the CallFn() function that
	is part of FOXTOOLS.FLL is issued, FoxPro returns the error message described
	above:
	
	
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL"t!
	     test='TEST'
	     handle=REGFN("beep", "CCCCCCCCCC", "", "c:\msvc\example\dlls\mydll.dll")
	     test=CALLFN(handle,test,test,test,test,test,test,test,test,test,test)
	     SET LIBRARY TO
	
	
	MORE INFORMATION
	================
	
	The functionality of Microsoft FoxPro for Windows can be enhanced by calling a
	Windows .DLL within FoxPro. FoxPro for Windows comes with a FoxPro application
	programming interface (API) library that allows FoxPro programs to call Windows
	DLL functions that meet the criteria as described in the FOXTOOLS.WRI file in
	the FOXPROW\GOODIES\FOXTOOLS directory. A large number of Windows API functions
	meet these criteria.
	
	Additional query words: VFoxWin FoxWin 2.50 FOXTOOLS Callfn error
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	
	=============================================================================
	

{% endraw %}
