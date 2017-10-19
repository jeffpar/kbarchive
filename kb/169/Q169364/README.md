---
layout: page
title: "Q169364: FIX: CLEAR CLASS of Objects in Containers Causes GPF"
permalink: /kb/169/Q169364/
---

## Q169364: FIX: CLEAR CLASS of Objects in Containers Causes GPF

	Article: Q169364
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aFIX kbvfp500bug
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue a CLEAR CLASS command to clear a control class in a container,
	Visual FoxPro has a GPF (General Protection Fault) and close.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual
	FoxPro version 5.0a for Windows.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro 5.0, create a form class that has a container such as
	PageFrame. In that PageFrame container, place a control that's created from a
	VCX-based class. Once the form is instantiated, released, and you execute a
	CLEAR CLASS command for that control class in the container, it causes the GPF.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a button class in Class Designer. Name the button class as mybutton
	  and the class library as TestIPF.
	
	2. Create a form class in Class Designer.
	
	3. Add a PageFrame control to the form class, then subclass the above button
	  class in Page1 of the PageFrame control.
	
	4. Save the form class into the class library, TestIPF as testform.
	
	5. Create a .PRG, and put the following code into the .PRG:
	
	        LOCAL oForm
	
	        SET CLASSLIB TO TestIPF
	        oForm=CREATEOBJECT("testform")
	        oForm.Release
	        CLEAR CLASS testform
	        CLEAR CLASS testbutton  && IPF here
	
	6. Save and run the .PRG.
	
	Immediately after you run the form, the GPF occurs when the execution hits the
	CLEAR CLASS command.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500aFIX kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
