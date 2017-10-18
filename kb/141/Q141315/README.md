---
layout: page
title: "Q141315: FIX: Changing Subclassed Form's Desktop Property Has No Effect"
permalink: kb/141/Q141315/
---

## Q141315: FIX: Changing Subclassed Form's Desktop Property Has No Effect

	Article: Q141315
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
	
	A problem occurs when a class based on form is used as a template to design a
	new form. Although within the class the Desktop property of the form is set to
	'False - .F.' (default), during design time, the new form based on this class is
	assigned a Desktop Property of 'True - .T.' so the form doesn't run as a Desktop
	form.
	
	WORKAROUND
	==========
	
	Set the form's template class to the value that will be used in the finished
	form. It is not necessary for this to be done at the bottom level of the class
	hierarchy (that is, the ParentClass Property of the template class is 'Form'),
	but simply within the template class itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Changing the Desktop Property of a form to a setting different from the
	ParentClass will take effect in one of the following scenarios:
	
	- The ParentClass of the form is 'Form.'
	
	-or-
	
	- The form is saved as a class and used as a template for yet another form that
	  is intended to have the Desktop Property of the class from which it was
	  created.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, set its Desktop Property to 'True - .T.', and save the
	  form as a class.
	
	2. On the Tools menu, click Options, and then click the Forms tab. Set the
	  Template Class to the class created in Step 1.
	
	3. Create a new form, and set its Desktop Property to 'False - .F.'.
	
	4. Save and close the form, and then use the DO FORM command to run the form.
	
	5. Resize the main Visual FoxPro Window such that the Windows Desktop can be
	  seen behind it. If its Desktop Property is false (as it was set in Step 3),
	  you should not be able to drag the form out of the main Visual FoxPro window.
	  However, you should be able to drag the form onto the Windows Desktop.
	
	6. Close the form, and re-open it in the Form Designer. Choose Save as Class,
	  and save it as a different class.
	
	7. Repeat Steps 2 through 5 implementing the following changes:
	
	  a. In Step 2, set the Template Class to the class created in Step 6.
	
	  b. In Step 3, note that its Desktop Property is already 'False - .F.'.
	
	  c. In Step 5, note that the form may not be dragged outside the main Visual
	     FoxPro Window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
