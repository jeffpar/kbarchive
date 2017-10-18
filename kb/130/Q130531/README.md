---
layout: page
title: "Q130531: HOWTO: Prevent Two Instances of a Form from Running"
permalink: kb/130/Q130531/
---

## Q130531: HOWTO: Prevent Two Instances of a Form from Running

	Article: Q130531
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A form created in Visual FoxPro defaults to a multiple-instance form; that is,
	multiple instances of the form are allowed to run concurrently. This article
	shows by example how to create a form that does not allow another instance of
	itself to be created, which is how FoxPro version 2.x forms behave.
	
	MORE INFORMATION
	================
	
	To prevent the creation of a second instance of a form, add a procedure to the
	Init event of the form to check all open forms for an instance of itself. Have
	the procedure return false (.F.) if an instance already exists. This will
	prevent Visual FoxPro from launching the second instance.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form by typing the following in the Command window:
	
	     CREATE FORM test
	
	2. From the View menu, choose Data Environment. Add the Customer table from the
	  \VFP\SAMPLES\DATA directory.
	
	3. Drag some fields from the Data Environment to the form.
	
	4. Right-click anywhere on the form to open the property sheet. In the property
	  sheet, select the Methods Tab and open the Init event.
	
	5. Type the following code in the Init Event:
	
	     LOCAL i, lcWindName, llRetVal
	
	     * Initialize the variables. llRetval returns a .F. from the INIT() if
	     * the form is already visible. Returning a .F. from any INIT() causes
	     * the object to not be created.
	     * i contains the number of instances of the form.
	     * lcWindName contains the name of the form you're looking at.
	
	     llRetVal = .T.
	     i = 0
	     lcWindName = WCHILD("",0) && The "" must be a NULL or empty string
	
	     * Loop through all open forms, and see if we have any that have the same
	     * name as the one you want to open. (It exists in INIT() but is not yet
	     * available.)
	
	     DO WHILE !EMPTY(lcWindName)
	        IF lcWindName = UPPER(this.name)
	           i = i + 1
	           IF i > 1
	              llRetVal = .F.
	              EXIT
	           ENDIF
	        ENDIF
	        lcWindName = WCHILD("",1) && The "" must be a NULL or empty string
	     ENDDO
	
	     RETURN llRetVal
	
	6. Save and run the form.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
