---
layout: page
title: "Q132178: PRB: DO FORM Does Not Display a Form"
permalink: /kb/132/Q132178/
---

## Q132178: PRB: DO FORM Does Not Display a Form

{% raw %}

	Article: Q132178
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a DO FORM command is issued, the form is not displayed. The form is never
	displayed, and no instance variable is created.
	
	CAUSE
	=====
	
	When a form created with the Form Designer is run, the instance is not created
	under the following circumstances:
	
	- The Init of the Form returns false (.F.).
	
	-or-
	
	- One of the object members of the form is not instantiated.
	
	With the Visual FoxPro object model, all objects contained in a form are created
	before the form is instantiated. The form is created if its contained members
	have been successfully created. In particular, the Init event of the form is
	triggered after the Init of all the controls it contains. If the method
	associated with the Init event of any control in the form returns false (.F.),
	the object member is not created and the form in turn is not instantiated. If
	the object member is not created, the Init of the form is not run, so the form
	is not created.
	
	WORKAROUND
	==========
	
	Ensure that all object members of a form are created before the form is
	instantiated. For example, ensure that no Init method of a control returns false
	(.F.) if you want to be able to create a form. You can use the Visible and
	Enabled properties of a control to monitor its visibility and accessibility.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Select the CommandButton control from the Form controls toolbar, and place a
	  command button on the form.
	
	3. In the property sheet, ensure that the Object is Command1, and select the
	  method for the Init event. Type the following:
	
	  " Return cReturn " (without the quotation marks)
	
	4. Save the form.
	
	5. In the Command window, type "cReturn= .t" (without the quotation marks).
	
	6. Run the form. The form is displayed.
	
	7. In the Command window, type
	
	     CLEAR ALL
	     cReturn = .f.
	
	8. Run the form. because the command button is not created, the form is not
	  created.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
