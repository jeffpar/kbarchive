---
layout: page
title: "Q130406: DOCERR: SHOW(2) Does Not Set Modal Form or Formset to Modeless"
permalink: /kb/130/Q130406/
---

## Q130406: DOCERR: SHOW(2) Does Not Set Modal Form or Formset to Modeless

	Article: Q130406
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the Form.Show method contains an error. Passing a 2 as the
	parameter for the show method doesn't set a form or formset to a modeless state.
	
	MORE INFORMATION
	================
	
	Currently, there is no way to change a form or formset from a modal state to a
	modeless state. You must set the Form.WindowType property to 0 - Modeless at
	design time to create a modeless form. This property is read-only at runtime.
	
	If a 1 is passed as a parameter to the Form.Show method, a modeless form can be
	set to a modal state. Once the form or formset has been changed, however, it
	cannot be reset back to a modeless state.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
