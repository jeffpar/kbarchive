---
layout: page
title: "Q136826: FIX: Resuming from a Suspended Form Causes a GP Fault"
permalink: /kb/136/Q136826/
---

## Q136826: FIX: Resuming from a Suspended Form Causes a GP Fault

	Article: Q136826
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the RESUME command to resume from a suspended form in a Valid from a list
	box results in a general protection (GP) fault or an application error that
	causes Visual FoxPro to quit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create and run this program:
	
	     *Begin Program
	     PUBLIC frm1
	     frm1 = CREATEOBJ('MyForm')
	     frm1.Show
	
	     DEFINE CLASS MyForm AS Form
	         ADD OBJECT combo1 AS combobox WITH ;
	         ControlSource = "x", RowSourceType = 1, RowSource = "aa,bb,cc"
	         PROCEDURE combo1.valid
	             WAIT WINDOW 'TRY TO CLOSE THE FORM'
	             SUSPEND  && SUSPEND ADDED HERE
	         ENDPROC
	     ENDDEFINE
	     *End program
	
	2. Drop down the list by clicking the down arrow. Then release the mouse button,
	  and select an item from the list. This will cause the combo box Valid code to
	  fire and suspend the action.
	
	  NOTE: The problem doesn't occur if the item is selected from the list by
	  clicking the drop down list arrow and dragging down to the item by holding
	  the mouse down.
	
	3. When the Wait window shows up, try to close the form by double-clicking the
	  control box in the upper left corner. On the Program menu, click Resume from
	  the menu, or type resume in the Command window.
	
	NOTE: It appears that this does not happen with other objects, or other events in
	this object.
	
	Additional query words: crash quit end
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
