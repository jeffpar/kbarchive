---
layout: page
title: "Q183296: FIX: SETALL() Corrupts Properties of Custom Objects"
permalink: /kb/183/Q183296/
---

## Q183296: FIX: SETALL() Corrupts Properties of Custom Objects

	Article: Q183296
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp500bug
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SETALL() method is used to set a text property of custom objects,
	subsequent use of the SETALL() method corrupts the property for all but the
	first object.
	
	RESOLUTION
	==========
	
	Create a procedure to set the properties of the objects in the container as
	shown in the SetAllProp procedure below. Use this procedure in place of the
	SETALL() method for setting the properties of custom objects.
	
	Sample Code
	-----------
	
	     *-- Code begins here.
	     CLEAR
	     oX = CREATEOBJECT("Container")
	     FOR counter = 1 TO 30
	         oX.ADDOBJECT("x"+LTRIM(STR(counter)), "Example")
	     ENDFOR
	
	     =SetAllProp("MyProperty", "", "oX")
	     =SetAllProp("MyProperty", "Example One - Test", "oX")
	     ? oX.CONTROLS[1].MyProperty
	     ? oX.CONTROLS[2].MyProperty
	     ? oX.CONTROLS[3].MyProperty
	     ? oX.CONTROLS[30].MyProperty
	     ?  && Separator
	     ?  && Separator
	
	     *-- PROCEDURE SetAllProp
	     *-- Step through the objects in a container and set the passed property
	     *-- for each object.
	     *-- Parameters: lcProperty  - The property to change.
	     *--             lcValue     - The property's value.
	     *--             lcContainer - The container containing the objects whose
	     *--                           properties are to be changed.
	
	     PROCEDURE SetAllProp()
	        PARAMETERS lcProperty, lcValue, lcContainer
	
	        *-- Load the object names into an array.
	        =AMEMBERS(laObjects, EVALUATE(lcContainer), 2)
	
	        *-- Step through the array and change the passed property for each
	        *-- object.
	        FOR liCounter = 1 TO ALEN(laObjects)
	           lcCommand = lcContainer + "." + laObjects(liCounter) + "." + ;
	             lcProperty + "=" + "'" + lcValue + "'"
	           &lcCommand
	        ENDFOR
	     ENDPROC
	
	     DEFINE CLASS Example AS CUSTOM
	         MyProperty   = "Initial MyProperty"
	     ENDDEFINE
	     *-- Code ends here.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code:
	
	        *-- Code begins here.
	        CLEAR
	        oX = CREATEOBJECT("Container")
	        FOR counter = 1 TO 30
	            oX.ADDOBJECT("x"+LTRIM(STR(counter)), "Example")
	        ENDFOR
	
	        *-- Round 1
	        *-- Comment the following line and the properties are not corrupted.
	        oX.SETALL("MyProperty", "")
	        oX.SETALL("MyProperty", "Example One - Test")
	        ? oX.CONTROLS[1].MyProperty
	        ? oX.CONTROLS[2].MyProperty
	        ? oX.CONTROLS[3].MyProperty
	        ? oX.CONTROLS[30].MyProperty
	        ?  && Separator
	        ?  && Separator
	
	        *-- Round 2
	        *-- Uncommenting the following line just gives different corruption:
	        *oX.SETALL("MyProperty", "")
	        oX.SETALL("MyProperty", "Sample")
	        oX.SETALL("MyProperty", "Sample2")
	        oX.SETALL("MyProperty", "Sample3")
	        oX.SETALL("MyProperty", "Example Two")
	        ? oX.CONTROLS[1].MyProperty
	        ? oX.CONTROLS[2].MyProperty
	        ? oX.CONTROLS[3].MyProperty
	        ? oX.CONTROLS[30].MyProperty
	
	        DEFINE CLASS Example AS CUSTOM
	            *-- Doesn't matter what the property is initially set to.
	            MyProperty = "Initial MyProperty"
	        ENDDEFINE
	        *-- Code ends here
	
	2. Read the comments in the code, make the appropriate changes, and run the code
	  again.
	
	3. When corruption occurs, the text properties of the custom class appear as
	  random ASCII characters on the desktop.
	
	NOTE: If your example displays more than three text properties, then a memory
	error message, such as an illegal operation error, may appear.
	
	Additional query words: GPF crash hang kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
