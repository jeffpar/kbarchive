---
layout: page
title: "Q131133: How to Create and Access Protected Properties"
permalink: kb/131/Q131133/
---

## Q131133: How to Create and Access Protected Properties

	Article: Q131133
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
	
	In Visual FoxPro, programmers can make user-defined object properties visible
	only to the events and methods for the defined object by protecting them from
	access by outside objects. Protected properties can only be altered or
	referenced by using the object's methods and events.
	
	By using the PROTECTED keyword for properties in a class definition, protected
	properties cannot be changed by other objects. For example, when designing a
	form class that has a command button, the command button is unable to modify the
	PROTECTED Methods or Properties of the form class.
	
	This article shows by example how to create a new custom class with some
	protected properties and a custom method ProtProperty. The protected properties
	cannot be accessed by external commands unless they use the custom method
	(ProtProperty) of the object.
	
	MORE INFORMATION
	================
	
	The Help menu says, "Properties, methods, and objects in a class definition that
	are designated protected with the PROTECTED keyword of the DEFINE CLASS command
	can be accessed only by other methods in the class definition."
	
	Code Sample
	-----------
	
	  *--------------------------------------------------------------*
	  * PROGRAM: PROTTEST.PRG                                        *
	  *                                                              *
	  * Copy this code into a PRG and then execute the PRG.          *
	  *--------------------------------------------------------------*
	  oMyObject = CREATEOBJECT("MyClass")
	
	  ? oMyObject.One
	
	  * The command shown above fails because property ONE is not   *
	  * being accessed through a method of the custom class. When   *
	  * this fails, choose IGNORE and the program will continue.    *
	
	  ? oMyObject.ProtProperty("ONE")
	  ? oMyObject.ProtProperty("TWO")
	  ? oMyObject.ProtProperty("THREE")
	
	  DEFINE CLASS MyClass AS Custom
	    PROTECTED One, Two, Three
	    One   = "ONE"
	    Two   = 2
	    Three = "THREE"
	
	    FUNCTION ProtProperty(lcProperty)
	      RETURN EVAL("THIS."+lcProperty)
	    ENDFUNC
	  ENDDEFINE
	  *--------------------------------------------------------------*
	
	Additional query words: VFoxWin Encapsulation read_only
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
