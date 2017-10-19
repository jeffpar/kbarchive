---
layout: page
title: "Q139525: How to Verify If an Object Has a Particular Property or Method"
permalink: /kb/139/Q139525/
---

## Q139525: How to Verify If an Object Has a Particular Property or Method

	Article: Q139525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no built-in function in Visual FoxPro to determine if an object has a
	particular property. This article shows by example how to do so
	programmatically.
	
	MORE INFORMATION
	================
	
	For this example, the Visual FoxPro screen object _SCREEN is used. However, this
	example can be applied to any valid Visual FoxPro object. First the AMEMBERS()
	function is used to create an array containing all the properties of the _SCREEN
	object. Then the ASCAN() function is used to search the array for a specific
	property. If the property is found, the ASCAN() function returns the array
	element number of the property. If the property is not found, the ASCAN()
	function returns zero. Therefore, as long as the return value of the ASCAN()
	function is greater than zero, the object has the specified property.
	
	The following code checks to see if the _SCREEN object has a Caption property or
	a RowSource property.
	
	Code Sample
	-----------
	
	  ** Create an array of all the properties of the _SCREEN object
	
	  =AMEMBERS(aproplist,_SCREEN)
	
	  ** Scan the array to determine if the object has a Caption property
	
	  IF ASCAN(aproplist,"CAPTION")>0
	     WAIT WINDOW "The property exists"
	  ELSE
	     WAIT WINDOW "The property does not exist"
	  ENDIF
	
	  ** Scan the array to determine if the object has a RowSource property
	
	  IF ASCAN(aproplist,"ROWSOURCE")>0
	     WAIT WINDOW "The property exists"
	  ELSE
	     WAIT WINDOW "The property does not exist"
	  ENDIF
	
	Running this program will show that the _SCREEN object has a Caption property but
	does not have a RowSource property. Note the array created by the AMEMBERS()
	function will be in all uppercase. Therefore, when using the ASCAN() function,
	be make to specify the property in uppercase.
	
	You can also use the AMEMBERS() function to determine if an object has a
	particular method by using a third optional argument. If you include a 1 as the
	third argument, the array will contain the properties of the object as well as
	the methods and member objects. You can use this in a toolbar to determine if a
	form set has a particular method.
	
	Code Sample
	-----------
	
	  ** Before you run this example, you need to call a form so
	  ** that a form is active.
	
	  =AMEMBERS(amyarray, _screen.activeform, 1)
	
	  ** Creates a 2 dimensional array with the properties,
	  ** methods, and member objects of the active form.
	
	  ** Scan the array to determine if a method called MYMETHOD
	  ** exists
	
	  IF ASCAN(amyarray, "ACTIVATE") > 0
	     WAIT WINDOW "The method exists"
	  ELSE
	     WAIT WINDOW "The method does not exist"
	  ENDIF
	
	  DISPLAY MEMO like amyarray
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
