---
layout: page
title: "Q189772: FIX: GETPEM() Function Does Not Return the Correct ParentClass"
permalink: kb/189/Q189772/
---

## Q189772: FIX: GETPEM() Function Does Not Return the Correct ParentClass

	Article: Q189772
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the GETPEM() function to return the value of the ParentClass property
	of an instantiated class, you might get incorrect results. The return value
	might be the ParentClass from another class in the class hierarchy, or might be
	empty when it should have a value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	You use the GETPEM() function to return values of properties, or code from
	events/methods of any classes or objects in memory. The GETPEM() function
	requires two parameters. First, you pass it an object reference or the name of a
	class. Second, you pass it a property, event, or method name.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        CLEAR
	        CLEAR ALL
	        oMe = CREATEOBJECT( "Son" )
	        cClass = oMe.CLASS
	
	        DO WHILE NOT(EMPTY(cClass))
	           ?cClass + ' was begotten by ' + GETPEM(cClass, "ParentClass")
	           cClass = GETPEM(cClass, "ParentClass")
	        ENDDO
	
	        DEFINE CLASS granddad AS CUSTOM
	        ENDDEFINE
	
	        DEFINE CLASS Dad AS granddad
	        ENDDEFINE
	
	        DEFINE CLASS Son AS Dad
	        ENDDEFINE
	
	RESULT: If you run the code under Visual FoxPro 5.0x, the program returns the
	following to the desktop:
	
	  Son was begotten by Granddad
	  Granddad was begotten by
	
	This is incorrect. The correct return values are:
	
	  Son was begotten by Dad
	  Dad was begotten by Granddad
	  Granddad was begotten by Custom
	  Custom was begotten by
	
	Additional query words: kbVFp500abug kbVFp600fix kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
