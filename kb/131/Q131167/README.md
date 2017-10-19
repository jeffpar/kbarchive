---
layout: page
title: "Q131167: PRB: Modal Form in Form Set Behaves as a Modeless Form"
permalink: /kb/131/Q131167/
---

## Q131167: PRB: Modal Form in Form Set Behaves as a Modeless Form

	Article: Q131167
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
	
	A modal form contained in a form set does not behave as a modal form. In other
	words, it is possible to activate other windows when this form has the focus.
	
	CAUSE
	=====
	
	The form is contained in a non-modal form set. The modality of the form set
	takes precedence over the modality of a form it contains.
	
	WORKAROUND
	==========
	
	Forms that are to be modal cannot be in a form set that is modeless. Place modal
	forms in separate form sets, or do not add modal forms to form sets. Note that
	you can cycle through forms that are included in a modal form set, but cannot
	interact with any window that is not contained in the form set.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Use the Parent property of the form object to verify that it is contained in a
	form set. For example:
	
	     IF TYPE('Thisform.parent')="O"
	        ? "The form is contained in a Form set"
	     ELSE
	        ? "The form is not contained in a form set"
	     ENDIF
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. From the Format menu, choose Create Formset.
	
	3. From the Format menu, choose Add Form.
	
	4. In the property sheet for Form1, change the WindowType property of Form1 to
	  Modal.
	
	5. Note that the WindowType property of FormSet1 and Form2 is Modeless.
	
	6. Save and run the form.
	
	REFERENCES
	==========
	
	It is also possible to affect the modality of a form with the SHOW method. For
	more information about the SHOW method and modal forms, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q130308 PRB: Using SHOW(1) Does Not Make a Form in a Formset Modal
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
