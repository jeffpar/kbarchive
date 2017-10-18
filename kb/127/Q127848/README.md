---
layout: page
title: "Q127848: PRB: RELEASE Command Does Not Release a Form"
permalink: kb/127/Q127848/
---

## Q127848: PRB: RELEASE Command Does Not Release a Form

	Article: Q127848
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the RELEASE command to release an instance variable does not release the
	object referenced by the variable. If the variable holds a reference to a form
	that is displayed, the form is not closed.
	
	CAUSE
	=====
	
	Another reference to the object exists. An object is released from memory when
	all of the references to this object have been released.
	
	RESOLUTION
	==========
	
	You can use the AINSTANCE() function to verify that all the references to an
	object have been released. AINSTANCE() builds an array of object references.
	
	A reference to the specified object still exists if the length of the array is
	greater than 0. Another alternative is to maintain a table or an array that
	updates the reference count to an object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Following are two examples that create a reference to a form.
	
	Example One
	-----------
	
	1. Create a form, and save it as TEST.
	
	2. From the Command window, type:
	
	      DO FORM TEST NAME ofrmTest1 LINKED &&Displays a form
	     ofrmTest2=ofrmTest1       &&Creates a reference to ofrmTest1
	     * The following command releases the variable ofrmTest1. However, the
	     * form is not released because a reference exists.
	     RELEASE ofrmtest1
	     RELEASE ofrmtest2  && Releases the Form
	
	Example Two
	-----------
	
	1. Copy and paste the following sample code into a PRG
	
	     OFORM1=CREATE('testclass')
	     OFORM2=OFORM1   &&Creates a reference to OFORM1
	     OFORM2.SHOW     && Displays the Form
	
	     nobject= AINSTANCE(atest1,'testclass')
	     DISPLAY MEMORY LIKE atest1 && Two references to the object exist
	
	     RELEASE OFORM2          && Form not released
	     WAIT WINDOW "After OFORM2 has been released"
	
	     RELEASE oForm1          && Form is released.
	     WAIT WINDOW "After OFORM1 has been released"
	
	     DEFINE CLASS TESTCLASS AS FORM
	        Caption="Hello"
	     ENDDEFINE
	
	2. Execute the PRG.
	
	Additional query words: VFoxWin close
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
