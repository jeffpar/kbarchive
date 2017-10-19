---
layout: page
title: "Q162731: FIX: Class Wizard Displays Incorrect Control IDs"
permalink: /kb/162/Q162731/
---

## Q162731: FIX: Class Wizard Displays Incorrect Control IDs

	Article: Q162731
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbtool kbwizard kbVC400 kbVC410 kbVC420 kbfix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a dialog template in the Resource Editor, start ClassWizard, and
	switch to a different dialog or form view based class using the "Class name"
	combo box in the "Message Maps" page, the "Object IDs" list box displays IDs for
	controls present on the dialog template along with the controls on the template
	associated with the selected class. This is incorrect.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual C++, version 5.0.
	
	MORE INFORMATION
	================
	
	If you open ClassWizard while the Resource Editor is not active, incorrect ID
	values are not displayed. Note that the incorrect values appear only in the
	"Message Maps" page, and not in the "Member Variables" page.
	
	If message map entries are added for these incorrect Ids, they will never be
	called and will not cause the program to fail in any other way.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbwizard kbVC400 kbVC410 kbVC420 kbfix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
