---
layout: page
title: "Q141805: FIX: 'Unknown member' Error Loading Form"
permalink: kb/141/Q141805/
---

## Q141805: FIX: 'Unknown member' Error Loading Form

	Article: Q141805
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run your form, you get the following error message:
	
	  Error loading file - ControlSource - record number 4. Unknown member
	  <member_name>.
	
	CAUSE
	=====
	
	You have an object on the form that has a ControlSource property that references
	an object that used to be on the form but was subsequently been deleted and
	replaced with a object of the same name as the deleted object.
	
	WORKAROUND
	==========
	
	1. Select the object that has the incorrect reference, and delete it from the
	  form.
	
	2. Save the form.
	
	3. Paste the object back onto the form.
	
	These steps will change the object hierarchy reference, and your form should run
	as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Form objects are added to the end of an .scx file. Because of this, property
	references are positionally dependent. In the following example, the text box
	object (object B) placed on the form references the Name property of the check
	box object (object A). When the form is run, the example works correctly.
	
	Removing the text box object from the form and replacing it with an identical
	object that is still referenced by the text box object moves the position of the
	check box object from the beginning of the .scx file to a position after the
	text box.
	
	Because of the way objects and property references are processed, when the form
	is run, you will get the noted error message. The new check box object that is
	placed on the form is written to the end of the file and is not available when
	required by the reference in the text box object.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type this command:
	
	     CREATE FORM testform
	
	2. Place a check box on the form, and then place a text box on the form.
	
	3. For the text box, set the ControlSource property to:
	
	     Thisform.Check1.Name
	
	4. Save and run the form. You will see the name of the check box object on the
	  form ("Check box1").
	
	5. Modify the form, and select and delete the check box object.
	
	6. Place a new check box on the form, and run the form a second time. You will
	  get the error message.
	
	Additional query words: uknown member load
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
