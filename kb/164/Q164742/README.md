---
layout: page
title: "Q164742: PRB: Error Message Cannot Load 32-bit DLL"
permalink: /kb/164/Q164742/
---

## Q164742: PRB: Error Message Cannot Load 32-bit DLL

	Article: Q164742
	Product(s): Microsoft FoxPro
	Version(s): 3.0 3.0b 5.0 6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbtool kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when you attempt to call a function in a 16-bit DLL
	that has been registered with the DECLARE-DLL command:
	
	  Cannot load 32-bit DLL <path to DLL>
	
	It may also seem to happen in calling the RegFn() function in FoxTools, if the
	incorrect syntax is used, after having registered the function with the
	DECLARE-DLL command.
	
	STATUS
	======
	
	This behavior is by design. The DECLARE-DLL command should only be used to
	register 32-bit DLL functions in FoxPro. To register a function of a 16- bit
	DLL, use the RegFn function of the FoxTools.FLL library.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps are for illustration purposes only -- the DLL in the example
	does not exist.
	
	Type the following commands in the command window:
	
	     DECLARE INTEGER TestFn IN Test16.dll INTEGER,INTEGER
	     *** The error will occur on executing the next line of code
	     ? TestFn(1,1)
	     *** Removing the asterisk on the next line would resolve the error
	     *** that occurs on the first RegFn() call below.
	     * CLEAR DLLS
	
	     SET LIBRARY TO HOME()+"FoxTools.FLL"
	     *** The error will occur on executing the next line of code
	     *** because it is attempting to call the TestFn() function registered
	     *** above with the DECLARE-DLL command
	     handle = RegFn(TestFn(),"II","I","Test16.DLL")
	     * The correct way to register the function is...
	     handle = RegFn("TestFn","II","I","Test16.DLL")
	     ReturnValue = CallFn(handle, 1, 1)  && Note this works now
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbtool kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : 3.0 3.0b 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	
