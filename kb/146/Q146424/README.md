---
layout: page
title: "Q146424: PRB: &quot;Entry point GetFreeSystemResources not found&quot; Error"
permalink: /kb/146/Q146424/
---

## Q146424: PRB: &quot;Entry point GetFreeSystemResources not found&quot; Error

{% raw %}

	Article: Q146424
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp600
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A method for obtaining Windows system resources is described in the following
	Microsoft Knowledge Base article:
	
	  Q111508 How to Check Available Windows System Resources
	
	If this method is used under Windows 95 or Windows NT, the following error occurs
	when the function is registered with RegFn():
	
	  Entry point GetFreeSystemResources not found
	
	CAUSE
	=====
	
	The GetFreeSystemResources function is not contained in the API libraries
	searched by default.
	
	RESOLUTION
	==========
	
	In the RegFn function, you need to explicitly reference User.exe where this API
	function is contained.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This is a modification of the code example in article Q111508. Enter the
	following commands into a program file, and run the file:
	
	  * Beginning of Check System Resources program
	
	     LOCAL nGetSysRes, nRetVal
	
	     #DEFINE sysreso 0
	     #DEFINE gdireso 1
	     #DEFINE userreso 2
	
	     * Load the FOXTOOLS.FLL library
	     SET LIBRARY TO HOME() + "FOXTOOLS.FLL" ADDITIVE
	
	     * Call RegFN() to register the GetFreeSystemResources() function
	     nGetSysRes = RegFn("GetFreeSystemResources", "I","I")
	
	     * If RegFn() returned a value that is greater than -1, it can be
	     * assumed that the function was successfully registered.
	     IF nGetSysRes > -1
	        nRetVal = CallFn(nGetSysRes, sysreso)
	        WAIT WINDOW "Free System Resources:"+STR(nRetVal,3,0)+"%" TIMEOUT 1
	        nRetVal = CallFn(nGetSysRes, gdireso)
	        WAIT WINDOW "Free GDI Resources:"+STR(nRetVal,3,0)+"%"  TIMEOUT 1
	        nRetVal = CallFn(nGetSysRes, userreso)
	        WAIT WINDOW "Free User Resources are:"+STR(nRetVal,3,0)+"%" TIMEOUT 1
	     ENDIF
	
	     * Unload FOXTOOLS.FLL from memory
	
	     RELEASE LIBRARY HOME()+ "FOXTOOLS.FLL"
	
	  * End of Check System Resources program
	
	Resolution
	----------
	
	If the following line in the example:
	
	     nGetSysRes = RegFn("GetFreeSystemResources", "I","I")
	
	is modified to read as follows:
	
	      nGetSysRes = RegFn("GetFreeSystemResources", "I","I","USER.EXE")
	
	the example will successfully return system resources in Windows 3.1x, Windows
	95, and Windows NT.
	
	NOTE: The values returned vary in significance depending on the operating system.
	Under Windows NT, resources are dynamically allocated, and
	GetFreeSystemResources will always return 90% for GDI, USER, and SYSTEM. Under
	Windows 95, these are allocated differently. For a discussion of GDI and USER
	heaps under Windows 95, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q125699 GDI Objects and Windows 95 Heaps
	
	  Q125676 New User Heap Limits Under Windows 95
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
