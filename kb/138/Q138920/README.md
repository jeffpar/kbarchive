---
layout: page
title: "Q138920: How to Enable One Check Box While Disabling the Others"
permalink: /kb/138/Q138920/
---

## Q138920: How to Enable One Check Box While Disabling the Others

	Article: Q138920
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Multiple check boxes are often necessary to gather required input. Frequently,
	it is desirable to disable the unselected check boxes after the first check box
	is selected. The example in this article illustrates how to disable the
	unselected check boxes in a form.
	
	Although option (also known as radio) buttons are generally the preferred of
	allowing users to make only once choice among a group of choices, this article
	provides an alternative method of doing so using check boxes.
	
	MORE INFORMATION
	================
	
	The form created by the following example contains three check boxes. When a
	check box is selected, its Value property is set to 1. After checking the Value
	property in the Click event of each individual check box, the Enabled properties
	of the remaining check boxes are changed to false (.F.). Changing these
	properties disables the check boxes.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form, and name it Test.scx.
	
	2. Place three check boxes on the form by using the Form Builder.
	
	3. In the Refresh event of the form, place the following code:
	
	     IF ThisForm.Check1.Enabled=.t. and ThisForm.Check1.Value=1
	         ThisForm.Check2.Enabled=.f.
	         ThisForm.Check3.Enabled=.f.
	     ENDIF
	
	     IF ThisForm.Check2.Enabled=.t. and ThisForm.Check2.Value=1
	          ThisForm.Check1.Enabled=.f.
	          ThisForm.Check3.Enabled=.f.
	     ENDIF
	
	     IF ThisForm.Check3.Enabled=.t. and ThisForm.Check3.Value=1
	          ThisForm.Check1.Enabled=.f.
	          ThisForm.Check2.Enabled=.f.
	     ENDIF
	
	     IF ThisForm.Check1.Enabled=.t. and ThisForm.Check1.Value=0
	         ThisForm.Check2.Enabled=.t.
	         ThisForm.Check3.Enabled=.t.
	     ENDIF
	
	     IF ThisForm.Check2.Enabled=.t. and ThisForm.Check2.Value=0
	         ThisForm.Check1.Enabled=.t.
	         ThisForm.Check3.Enabled=.t.
	     ENDIF
	
	     IF ThisForm.Check3.Enabled=.t. and ThisForm.Check3.Value=0
	         ThisForm.Check1.Enabled=.t.
	         ThisForm.Check2.Enabled=.t.
	     ENDIF
	
	4. In the InteractiveChange event of each check box, add the following line of
	  code:
	
	     ThisForm.Refresh
	
	5. If you want the disabled check boxes to appear in a different color, set the
	  DisabledBackColor property for each box. The box will automatically change
	  color when disabled.
	
	6. Save and run the form.
	
	7. Click any check box to select it, and the remaining check boxes are disabled.
	  Click the check box a second time to clear it, and the other check boxes are
	  reenabled.
	
	Additional Notes
	----------------
	
	- Changing the BackColor property to gray emulates a disabled check box in
	  FoxPro 2.x for Windows.
	
	- Typing "Help Backcolor" (without the quotation marks) in the Command window
	  provides a list of colors and their corresponding numbers.
	
	REFERENCES
	==========
	
	For more information about Disabling check boxes in FoxPro 2.x, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q111918 How to Enable One Check Box While Disabling the Others
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
