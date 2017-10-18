---
layout: page
title: "Q126780: PRB: Operator/Operand Type Mismatch When Comparing Two Objects"
permalink: kb/126/Q126780/
---

## Q126780: PRB: Operator/Operand Type Mismatch When Comparing Two Objects

	Article: Q126780
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 'Operator/Operand Type Mismatch' error is returned when comparing two
	objects with the equal sign (=) operator.
	
	CAUSE
	=====
	
	The equal sign operator is used to compare character, logical, date, or numeric
	data. When the variable is an object reference, the equal sign is the assignment
	operator. The equal sign is used to create a reference to an object. It should
	not be used to compare objects.
	
	WORKAROUND
	==========
	
	Use the COMPOBJ() function to compare two objects. The COMPOBJ() function
	compares the properties of an object. It returns .T. if the properties and
	property values of two objects are identical.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following example illustrates the use of the COMPOBJ() function. It compares
	two objects created with the SCATTER NAME command. To run this example, copy the
	following code into a new program file (*.PRG) and run it.
	
	     USE SYS(2004)+'\samples\data\customer'
	     SCATTER NAME ocust1   && Creates a custom object ocust1
	     SCATTER NAME ocust2   && Creates a custom object ocust2
	     Ccompare=IIF(COMPOBJ(ocust1,ocust2),'True','False')
	     * Test if objects are identical
	     WAIT WINDOW "Compobject returned " + Ccompare
	
	NOTE: Classes have default properties that can be set when an object is
	instantiated. For example, when a form is instantiated, the values of CAPTION
	and NAME properties, among other properties, are set to a unique value. The
	following example illustrates the fact that COMPOBJ() will return .F. if the
	values of these properties are not modified. Use the AMEMBERS() function to
	verify the names and infer the values of properties, procedures, and member
	objects of an object.
	
	     frmtest1= CREATEOBJECT('form')  && Creates an instance of a form
	     frmtest2 = CREATEOBJECT('form') && Creates an instance of a form
	     Compare= IIF(COMPOBJ(frmtest1,frmtest2),'True','False')
	     WAIT WINDOW "Compobj returned " + Compare
	     * In this case, COMPOBJ returned .F. Some property values are not
	     * identical
	
	     ? frmtest1.name   && Returns Form<n>, where n is a number
	     ? frmtest2.name   && Returns Form<n+1>, where n is a number
	     frmtest1.name="mytest"
	     frmtest2.name="mytest"
	     ? frmtest1.caption && Returns Form<n>, where n is a number
	     ? frmtest2.caption && Returns Form<n+1>, where n is a number
	
	     frmtest1.caption= "This is a test"
	     frmtest2.caption= "This is a test"
	     ?COMPOBJ(frmtest1,frmtest2)  && Returns .T.
	
	Additional query words: VFoxWin errmsg err msg
	
	======================================================================
	Keywords          : kbcode kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
