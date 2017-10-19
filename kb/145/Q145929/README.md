---
layout: page
title: "Q145929: PRB: Visual FoxPro Creates Public Variable for ControlSource"
permalink: /kb/145/Q145929/
---

## Q145929: PRB: Visual FoxPro Creates Public Variable for ControlSource

	Article: Q145929
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a form, the scope of a variable set as a control source is public. This
	variable is declared in a program. By default, a variable declared in a
	procedure is private, so you would expect this variable to be private.
	
	CAUSE
	=====
	
	The form is running in a modeless environment. When the form is modeless,
	program execution does not pause after the form is displayed. When the program
	is completed, control is returned to the Command window. If the form is still
	displayed when you return to the Command window, users can input data. This
	means that the input variables need to be accessible. To prevent errors, Visual
	FoxPro automatically scopes input variables as public when the Command window is
	active. So, if the source of the data of a control is a variable, its scope is
	changed to PUBLIC when the Command window is accessed.
	
	RESOLUTION
	==========
	
	Use a modal form or a READ EVENTS to pause program execution and prevent the
	scope of the variable from changing.
	
	You can also declare the ControlSource variable as a property of a form to scope
	it to the form object.
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a text box to the form.
	
	3. Change the ControlSource property of the text box to cCity.
	
	4. Create a program that contains the following code:
	
	     cCity="Atlanta"
	     DO FORM <form name>
	     DISPLAY MEMORY like cCity
	
	5. Run the program. The variable cCity is private.
	
	6. When control is back in the Command window, type:
	
	     DISPLAY MEMORY like cCity
	
	  The variable is public.
	
	To execute a form, you can use the syntax DO FORM <form name> LINKED. The
	LINKED keyword causes the form to be released when the variable that references
	the form object goes out of scope. By not including the LINKED keyword, you
	ensure that the form is visible when the variable that references it goes out of
	scope. In the example, the reference to the form is released, but the form is
	still visible.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
