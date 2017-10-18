---
layout: page
title: "Q138561: FIX: Combo Box Does Not Appear to Drop Down When Clicked"
permalink: kb/138/Q138561/
---

## Q138561: FIX: Combo Box Does Not Appear to Drop Down When Clicked

	Article: Q138561
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the drop down arrow of a combo box on a form is clicked, the combo box does
	not appear to drop down. If the form is moved after this is done, then the list
	can be seen as though it were behind the form. However, clicking the form's
	title bar will cause the Combo Box list to appear in its expected location. This
	behavior occurs regardless of the RowSourceType or RowSource property settings.
	
	CAUSE
	=====
	
	The form properties AlwaysOnTop and Desktop are both set to true.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form, and set its AlwaysOnTop and Desktop properties to true.
	
	2. Place a combo box on the form and set its RowSourceType property to 7 -
	  Files.
	
	3. Save and run the form.
	
	4. Click the down arrow on the combo box to see that the combo box does not
	  appear to drop down. Drag the form away such that the area under the combo
	  box is exposed and the list can be seen under it.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
