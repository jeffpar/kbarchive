---
layout: page
title: "Q143001: PRB: Child Property Doesn't Reflect Parent Container Property"
permalink: kb/143/Q143001/
---

## Q143001: PRB: Child Property Doesn't Reflect Parent Container Property

	Article: Q143001
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set a child object's property value equal to a parent container's value
	and then change the value for the parent container's property, the new value is
	not reflected by the child object.
	
	CAUSE
	=====
	
	Expressions placed in the child object's property sheet are evaluated once.
	
	RESOLUTION
	==========
	
	If you change the parent container's property, you can force a reevaluation of
	the child object's property by clicking into the property of the child on the
	property sheet and pressing ENTER or by clicking the checkmark in the child
	object's property sheet.
	
	When you run the form, Visual FoxPro will evaluate all expressions once to
	initialize the altered properties of every object. The exceptions to this are
	the DynamicXX properties of the Grid column object. These are evaluated
	dynamically when the grid is refreshed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	1. Create a new form.
	
	2. Place an object such as a command button on the form.
	
	3. In the Property sheet, set the property of the object's FontSize to
	  Thisform.FontSize. After you press ENTER, the child object should pick up the
	  value from the parent container.
	
	4. Change the parent container's FontSize value. Note that the child does not
	  pick up the new value until you force the form to reevaluate the parent
	  container's value.
	
	Additional query words: VFoxWin dynamic evaluate
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
