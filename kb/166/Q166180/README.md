---
layout: page
title: "Q166180: PRB: Certain Settings Of MaxLength Property Closes Visual FoxPro"
permalink: /kb/166/Q166180/
---

## Q166180: PRB: Certain Settings Of MaxLength Property Closes Visual FoxPro

	Article: Q166180
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following may cause Visual FoxPro to quit or cause a system error:
	
	- Opening a form containing an EditBox control or control based on the EditBox
	  control..
	
	- Placing a class based on the EditBox control on a form.
	
	The form or class that causes this behavior does not cause a problem in version
	3.x of Visual FoxPro for Windows.
	
	CAUSE
	=====
	
	This is known to happen if the MaxLength property of a class based on the
	EditBox control is set to the following:
	
	     LEN(EVAL(This.ControlSource))
	
	RESOLUTION
	==========
	
	Remove the offending functions from the MaxLength property of the class
	definition for the subclassed EditBox control. If the MaxLength property must be
	set to LEN(EVAL(This.ControlSource)), set it after placing the instance of the
	class on a form.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This is not a problem in Visual FoxPro 3.x for Windows or Visual FoxPro 3.0b for
	Macintosh.
	
	Note that when entering LEN(EVAL(This.ControlSource))in the Expression Builder,
	if the Verify button is pushed, the following error messages are returned:
	
	In Visual FoxPro 5.x:
	
	  Missing expression.
	
	In Visual FoxPro 3.x for Windows and for Macintosh:
	
	  THIS can only be used within a method.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	Warning: The following steps will crash Visual FoxPro and even possibly the
	computer's operating system. Make sure anything important is saved and closed.
	
	1. Create a new class based on the EditBox base class or issue the following
	  command in the Visual FoxPro Command window:
	
	        CREATE CLASS editcrash OF test.vcx AS editbox
	
	2. Set the MaxLength property to the following:
	
	        LEN(EVAL(This.ControlSource))
	
	3. Save and close the class.
	
	4. Create a new form.
	
	5. Add an instance of the Editcrash class to the new form. To do this, click the
	  View Classes button on the Form Controls toolbar. Choose Add in the Shortcut
	  menu that is displayed. Open the Test.vcx class library file. The buttons on
	  the Form Controls toolbar should now show the classes in the Test.vcx
	  library. There should only be one in the Test.vcx. Place the mouse pointer
	  over the buttons until the tooltip displays "editcrash." Click on this button
	  and then click on the form.
	
	6. Visual FoxPro should crash at this point.
	
	7. An alternate way to reproduce the crash is to create the class but not set
	  the MaxLength property. Then place the class on a form. Save and close the
	  form. Modify the class set the MaxLength property to the following, save it,
	  and then try opening the form:
	
	        LEN(EVAL(This.ControlSource))
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
