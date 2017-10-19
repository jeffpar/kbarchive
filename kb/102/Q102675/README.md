---
layout: page
title: "Q102675: FIX: App Studio Changes Control ID to Dialog Box ID"
permalink: /kb/102/Q102675/
---

## Q102675: FIX: App Studio Changes Control ID to Dialog Box ID

	Article: Q102675
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbResourceEd kbVC kbGrpDSToolskbbuglist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The App Studio, used with:
	   - Microsoft Visual C++, version 1.0 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use App Studio to edit a dialog box created in App Wizard, the first
	control created may have the same ID as the dialog box. In other words, if the
	dialog box ID is "IDD_DIALOG1," the identifier for the first control may also
	appear as "IDD_DIALOG1."
	
	CAUSE
	=====
	
	App Wizard creates the dialog box ID and control ID with the same numeric value
	even though the symbols are different. When App Studio loads the resource file
	and looks for a symbol that matches the control ID, it does not exclude the
	dialog box ID from its search.
	
	RESOLUTION
	==========
	
	Because the dialog box ID and control ID have the same numeric value, this
	behavior should not affect your application. However, you can eliminate this
	behavior by editing the RESOURCE.H file to change the value of
	_APS_NEXT_CONTROL_VALUE from 101 to 1001 before you start App Studio.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This was fixed in Microsoft Visual C++ version 1.5 C++ for
	Windows, and Visual C++, 32-bit Edition, version 2.0.
	
	MORE INFORMATION
	================
	
	Perform the following nine steps to demonstrate this problem:
	
	1. Create a new project with App Wizard.
	
	2. Start App Studio.
	
	3. Create a new dialog box.
	
	4. Add an EditBox control to the dialog box.
	
	5. Double-click the EditBox and note that its ID is IDC_EDIT1.
	
	6. Choose Save All from the File menu, then exit App Studio.
	
	7. Restart App Studio.
	
	8. Open the previously-created dialog box.
	
	9. Double-click the same EditBox; its ID now shows as IDD_DIALOG1.
	
	Additional query words: 1.00 1.10
	
	======================================================================
	Keywords          : kbResourceEd kbVC kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
