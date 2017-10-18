---
layout: page
title: "Q130989: How to Make an Array Protected"
permalink: kb/130/Q130989/
---

## Q130989: How to Make an Array Protected

	Article: Q130989
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PROTECTED keyword of the DEFINE CLASS command can be used to protect the
	Properties, methods, and objects in a class definition. You may want to use the
	PROTECTED keyword to protect an array.
	
	MORE INFORMATION
	================
	
	To protect an array property, use the keywords PROTECTED and DIMENSION on
	separate lines. For example, the following code would prevent the array from
	being changed outside of the CLASS:
	
	     PROTECTED myarray[2]
	     DIMENSION myarray[2]
	
	The following code appears to work, but the array isn't protected:
	
	     PROTECTED DIMENSION myarray[2]
	
	REFERENCES
	==========
	
	For more information about the PROTECTED clause, search the Visual FoxPro Help
	menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
