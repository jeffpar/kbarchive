---
layout: page
title: "Q162445: DOC: DECLARE DLL Example Has Incorrect Information"
permalink: /kb/162/Q162445/
---

## Q162445: DOC: DECLARE DLL Example Has Incorrect Information

{% raw %}

	Article: Q162445
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DECLARE - DLL example in Visual FoxPro Help gives the following information
	about the GetActiveWindow API call:
	
	  This example for Windows displays the window handle for the currently active
	  Windows application. When the WAIT window is displayed, you have 5 seconds to
	  press ALT+TAB to switch to a different Windows application, or you can leave
	  Visual FoxPro as the active application.
	
	This gives the impression that the GetActiveWindow API will return a handle for
	the currently active window. This is wrong. The GetActiveWindow returns only a
	handle to the Active Window of the calling thread.
	
	MORE INFORMATION
	================
	
	The Win32 API Reference and the Win32API Help file for the GetActiveWindow has
	the following:
	
	  The GetActiveWindow function retrieves the window handle of the active window
	  associated with the thread that calls the function.
	
	  HWND GetActiveWindow(VOID)
	
	  Parameters
	
	  This function has no parameters.
	
	  Return Values
	
	  If the function succeeds, the return value is the handle of the active window
	  associated with the thread that calls the function. If the calling thread
	  does not have an active window, the return value is NULL.
	
	REFERENCES
	==========
	
	Win32 API Help, Win32api.hlp; search on "GetActiveWindow"
	Visual FoxPro Help, Foxhelp.hlp; search on "GetActiveWindow"
	
	Additional query words: vfoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : 3.00 3.00b 5.00
	
	=============================================================================
	

{% endraw %}
