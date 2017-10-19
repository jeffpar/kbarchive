---
layout: page
title: "Q189911: PRB: REDIMENSION an Array Passed by Reference in DLL Fails"
permalink: /kb/189/Q189911/
---

## Q189911: PRB: REDIMENSION an Array Passed by Reference in DLL Fails

	Article: Q189911
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to REDIMENSION an array that has been passed by reference from within
	a Visual FoxPro COM object will result in the following error message:
	
	  OLE IDispatch exception code 302 from Visual FoxPro for Windows: Data type
	  mismatch...
	
	CAUSE
	=====
	
	An array that has been passed by reference to a Visual FoxPro COM object cannot
	be redimensioned from within the COM object.
	
	RESOLUTION
	==========
	
	The array must be redimensioned in the client before passing the reference to
	the Visual FoxPro COM object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project named MyDLL.
	
	2. Add a new program to the project containing the following code:
	
	        DEFINE Class VFPArray As Custom OlePublic
	           PROCEDURE GetArray(aRetVal)
	              LOCAL x
	              FOR x = 1 To 50
	                 DIMENSION aRetVal[x]
	                 aRetVal[x] = x
	              NEXT x
	           ENDPROC
	        ENDDEFINE
	
	3. Build the project into a COM DLL.
	
	4. Run the following code from Visual FoxPro:
	
	        ox = CreateObject("MyDLL.VFPArray")
	        DIMENSION myarray[1]
	        ComArray(ox,11)
	        ox.GetArray(@myarray)
	
	NOTE: The above mentioned error message will occur when calling the GetArray
	method in the COM object.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
