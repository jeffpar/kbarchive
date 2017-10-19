---
layout: page
title: "Q191327: FIX: Double Value Returned from DLL Gets Decimal Portion of 0"
permalink: /kb/191/Q191327/
---

## Q191327: FIX: Double Value Returned from DLL Gets Decimal Portion of 0

	Article: Q191327
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a .dll file that contains an exported function, which returns a
	value of type Double, when you declare and call this function from Visual
	FoxPro, any decimal portion of the return value is set to 0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Visual C++, create test2.cpp which will contain the following
	  code:
	
	        //test2.cpp
	        #include <windows.h>
	
	        BOOL APIENTRY DllMain(HANDLE hInst, DWORD ul_reason_to_call, LPVOID
	     lpReserved)
	        {
	            return TRUE;
	                UNREFERENCED_PARAMETER(hInst);
	                UNREFERENCED_PARAMETER(ul_reason_to_call);
	                UNREFERENCED_PARAMETER(lpReserved);
	        };
	
	        double APIENTRY test(double p1, double p2)
	        {
	         return p1 * p2;
	        };
	
	2. Create a file called Test2.DEF with the following contents:
	
	        ; test2.def : Declares the module parameters for the DLL.
	
	        LIBRARY      "Test2"
	        DESCRIPTION  'Test2 Dynamic Link Library'
	
	        EXPORTS
	           test @4
	
	3. Build Test2.dll as a Multithreaded .dll file.
	
	4. In Visual FoxPro, set the directory containing the .dll built in Step 4 as
	  the default directory.
	
	5. Run the following from the Command window:
	
	        DECLARE DOUBLE test IN test2.dll DOUBLE, DOUBLE
	        ? test(1.5, 1.5)
	        ? test(2.5, 2.5)
	
	  You will get return values of:
	
	  2.00
	  6.00
	
	Any decimal portion of the double value returned from the .dll function will be
	0.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbVFp300bbug kbVFp600fix kbInterOp kbfvp600fix
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
