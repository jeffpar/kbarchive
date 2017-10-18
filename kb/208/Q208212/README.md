---
layout: page
title: "Q208212: PRB: Error When Using Assign Method to Assign Object References"
permalink: kb/208/Q208212/
---

## Q208212: PRB: Error When Using Assign Method to Assign Object References

	Article: Q208212
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when using an assign method to store object
	references in a property and then trying to access properties of that object
	through the property:
	
	  Unknown member <property name>
	
	CAUSE
	=====
	
	The assign method fires twice when assigning an object reference to a property.
	The first time it fires, it sets the value of the property containing the object
	reference to NULL and then it runs again and assigns the property the object
	reference.
	
	RESOLUTION
	==========
	
	In the assign method, check to see if the new value is not NULL before assigning
	it to the property.
	
	In the program code in the "Steps to Reproduce Behavior" section below, look in
	the class definition of the Test class and uncomment the IF...ENDIF block code
	as shown to check the new value. It is in the Procedure obj_assign:
	
	  *   IF !ISNULL(m.vNewVal)        && uncomment this to make things work.
	         THIS.obj     = m.vNewVal
	  *   ENDIF
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The code in the steps below defines a class named Test that has two properties,
	obj and prevobj. The obj property has an assign method on it. The assign method
	takes the value in the obj property and assigns it to prevobj before the new
	value of obj is assigned.
	
	The code in the program creates an object reference to the Test class and then
	instantiates an instance of a class based on the custom base class and assigns
	this object reference to the obj property. It does this three times. When the
	reference to the custom class is assigned to the obj property, the assign method
	fires.
	
	The code outputs with ? commands to the Visual FoxPro desktop the values in the
	obj and prevobj properties at various times. Note that the ? command in the
	assign method fires twice the second and third times the new object reference to
	the custom class is assigned to the obj property.
	
	The error message
	
	  Unknown member PREVOBJ.
	
	appears the third time when oTest.prevobj is not checked to see if it is NULL
	before accessing the oTest.prevobj.name property.
	
	1. Copy the following code into a new program:
	
	  CLEAR
	
	  LOCAL oTest, oCustom
	  oTest = CREATEOBJECT("test")
	
	  WITH oTest
	      oCustom   = NEWOBJECT("custom")
	      .obj = oCustom
	      .obj.NAME = "one"
	      ? "obj     = ", .obj.NAME
	      * oTest.prevobj is null the first time through.
	      ? "prevobj = ", IIF(ISNULL(.prevobj),"Null", .prevobj.NAME)    
	      ?
	
	      RELEASE oCustom
	      ? "Second Code Block"
	      oCustom = NEWOBJECT("custom")
	      .obj = oCustom
	      .obj.NAME = "two"
	      ? "obj = ", .obj.NAME
	      ? "prevobj = ", IIF(ISNULL(.prevobj),"Null", .prevobj.NAME)
	      ?
	
	      RELEASE oCustom
	      ? "Third Code Block"
	      oCustom = NEWOBJECT("custom")
	      .obj = oCustom
	      .obj.NAME = "three"
	      ? "obj = ", .obj.NAME
	      ? "prevobj = ", IIF(ISNULL(.prevobj),"Null", .prevobj.NAME)
	      ? "prevobj = ", .prevobj.NAME   && this causes error
	      ?
	  ENDWITH
	
	  oTest = NULL
	  oCustom  = NULL
	
	  RETURN
	
	  DEFINE CLASS test AS CUSTOM
	      obj     = NULL
	      prevobj = NULL
	
	      PROCEDURE obj_assign
	      LPARAMETERS vNewVal
	      THIS.prevobj = THIS.obj
	      ? "Assign Method: The value of this.prevobj is " + IIF(ISNULL(THIS.prevobj), 'Null', 'Not Null')
	
	  *   IF !ISNULL(m.vNewVal)        && uncomment this to make things work.
	         THIS.obj     = m.vNewVal
	  *   ENDIF
	  ENDPROC
	  ENDDEFINE
	
	2. Save and run the code. Note the output on the Visual FoxPro desktop.
	
	3. Uncomment the commented IF...ENDIF block in the obj_assign procedure in the
	  Test class definition and re-run the code.
	
	4. Note that this time the output in the second and third code blocks for the
	  prevobj property is "one" and "two" instead of NULL. The error message does
	  not appear either.
	
	The assign method only fires once when assigning other data types to a property.
	Code to demonstrate this is not included in this article.
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbOOP kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
