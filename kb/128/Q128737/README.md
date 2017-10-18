---
layout: page
title: "Q128737: How to Declare Arrays on Forms Without Making Them Public"
permalink: kb/128/Q128737/
---

## Q128737: How to Declare Arrays on Forms Without Making Them Public

	Article: Q128737
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, you can declare an array on a form as a form property that can
	than be used to populate an object on the form rather than declaring the array
	as public. The example in this article illustrates this.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. In the Form Designer, choose the Form Menu pad, and select New Property.
	
	2. In the Name editbox, type the array name. Include the declared size of the
	  array in square brackets, as in this example:
	
	     aMyarray[5]
	
	3. In the Load Event snippet, populate the array:
	
	     STORE "Hello" TO ThisForm.aMyarray
	
	4. Add a combo or list box to the form. Be sure that the RowSourceType for that
	  object is Array and the RowSource is thisform.aMyarray.
	
	5. Run the form, and observe that the object is populated with "Hello."
	
	NOTE: Arrays that are form properties can be redimensioned at any time by using
	the usual techniques.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
