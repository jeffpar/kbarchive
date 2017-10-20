---
layout: page
title: "Q130308: PRB: Using SHOW(1) Does Not Make a Form in a Formset Modal"
permalink: /kb/130/Q130308/
---

## Q130308: PRB: Using SHOW(1) Does Not Make a Form in a Formset Modal

{% raw %}

	Article: Q130308
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the SHOW method to make one form of a formset modal, the form remains
	a modeless form.
	
	If you make a form modal, the user should not be able to move to any other window
	in the application. A modeless form allows the user to click any other form in
	the application.
	
	Modal forms are used to display custom dialogs, warnings, or error messages.
	
	CAUSE
	=====
	
	This is by design. The SHOW method affects the modality of the entire formset.
	You cannot use the SHOW method to make one form within a formset modal. You must
	make the entire formset modal.
	
	RESOLUTION
	==========
	
	The easiest way to handle modal forms is to make them separate form files,
	instead of part of a formset. The following steps create two forms. When a
	command button on the first form is clicked, the second form appears. The user
	cannot activate the other window until the command button on the second form is
	clicked.
	
	1. Create a form called frmModls. Add a label to the form that has the caption
	  "User input screen - modeless." Add a command button to the form, and add the
	  following code to the click event of the command button:
	
	     DO FORM frmModal
	     frmModal.show(1)
	
	2. Save the first form. Create a second form called frmModal. Add a label to
	  this form that has the caption "Modal dialog screen." Add a command button to
	  the form, and place the following code in the click event:
	
	     THISFORM.RELEASE
	     frmModls.show(2)
	
	  Alternately, set the WindowType property of the frmModal form to 1 for Modal.
	  This change must be made at design time; it cannot be made at run time. Use
	  the WindowType property if the form will always be displayed in a modal
	  state. Use the Show method to change a form to modal if the form should
	  sometimes be displayed in a modal state and sometimes in a modeless state.
	
	3. Save and close the form. Then type the following command in the Command
	  window:
	
	     DO FORM frmModls
	
	When the form appears, you should be able to access menu options such as Cut,
	Copy, and Paste from the Edit menu, and click into other windows such as the
	Command Window or View Window.
	
	If you click the command button, the form named frmModal should appear. You
	should not be able to click into the Command or View windows, and most menu
	options should be grayed out.
	
	If you click the command button on the second form, the form should disappear.
	The form named frmModLs should reappear, and you should once again be able to
	activate other windows.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you want to use the SHOW method to display a modal formset, you must set the
	modality of the entire formset as follows:
	
	     THISFORMSET.SHOW(1)   && to make the formset modal
	
	This code may be placed in the Init method of the Formset or within the click
	event of a command button depending on where or when a modal screen set is
	needed.
	
	The formset's WindowType property may also be used.
	
	
	REFERENCES
	==========
	
	For more information on using the SHOW method, please search the topics in the
	Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
