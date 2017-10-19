---
layout: page
title: "Q138504: PRB: &quot;Data type mismatch&quot; Error When Running a Form"
permalink: /kb/138/Q138504/
---

## Q138504: PRB: &quot;Data type mismatch&quot; Error When Running a Form

	Article: Q138504
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following error messages appears when running a form:
	
	- Data type mismatch.
	
	-or-
	
	- Error loading file - ControlSource - record number #. Data type is invalid
	  for this property.
	
	CAUSE
	=====
	
	The memory variable created by the ControlSource property of one or more objects
	on the form is the same as the memory variable that refers to the form.
	
	RESOLUTION
	==========
	
	Either rename the form, or change the ControlSource value to something other
	than the name of the form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	All memory variables must be unique. When a form is run, a memory variable is
	created that has the same name as the form. When the ControlSource of an object
	evaluates to a memory variable, Visual FoxPro attempts to create a memory
	variable. Because a memory variable of the same name already exists, Visual
	FoxPro produces the error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called myform.
	
	2. Add a combo box.
	
	3. Set the ControlSource property of the combo box to myform.
	
	4. Run the form.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
