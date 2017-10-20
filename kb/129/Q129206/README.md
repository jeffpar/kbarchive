---
layout: page
title: "Q129206: PRB: Running .EXE Gives &quot;Can't Find FOXUT16.DLL&quot; Error"
permalink: /kb/129/Q129206/
---

## Q129206: PRB: Running .EXE Gives &quot;Can't Find FOXUT16.DLL&quot; Error

{% raw %}

	Article: Q129206
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running an executable created in Visual FoxPro results in the error "Cannot Find
	FOXUT16.DLL" followed by "FOXUT16.DLL is missing or invalid." This error occurs
	only under Windows or Windows for Workgroups versions 3.x.
	
	CAUSE
	=====
	
	FOXUT16.DLL is the universal thunking DLL required by Visual FoxPro and
	executables created in Visual FoxPro when using the Win32s subsystem. This error
	will not occur when the executable is run under Windows NT.
	
	
	RESOLUTION
	==========
	
	For an executable created in Visual FoxPro to run under Win32s, you must include
	the FOXUT16.DLL file in the same directory as the executable or in a directory
	included in the MS-DOS path.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
