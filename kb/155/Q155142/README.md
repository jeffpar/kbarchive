---
layout: page
title: "Q155142: FIX: ClassWizard &#124; Member Variables Loses Member Variables"
permalink: kb/155/Q155142/
---

## Q155142: FIX: ClassWizard &#124; Member Variables Loses Member Variables

	Article: Q155142
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbwizard kbide kbMFC kbVC420bug kbVC500fix kbClassWizard kbGrpDSTools kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use ClassWizard, Member Variables, Add Variable to add member variables
	associated with the controls on a dialog box template to a dialog box class or a
	property page class, the Member Variables page loses variables when you switch
	tabs in the ClassWizard. Consequently, the member variables are not added to the
	class definitions.
	
	RESOLUTION
	==========
	
	Before you switch tabs in the ClassWizard and after you add the member
	variables, save the member variables by clicking the OK button in the
	ClassWizard to exit. This adds the member variables to your class definitions
	and enables the ClassWizard to display member variables in the subsequent use of
	the ClassWizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC AppWizard-generated application.
	
	2. Add a push button in the About dialog box template.
	
	3. Start the ClassWizard.
	
	4. Add a member variable for the button.
	
	5. Select one of the other tabs in the ClassWizard.
	
	6. Select the Member Variables tab.
	
	7. The variable is lost.
	
	NOTE: This is not a problem in Visual C++ 4.0 and 4.1.
	
	Additional query words: kbVC420bug kbDSupport Add Variables
	
	======================================================================
	Keywords          : kbwizard kbide kbMFC kbVC420bug kbVC500fix kbClassWizard kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
