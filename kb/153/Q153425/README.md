---
layout: page
title: "Q153425: FIX: IDE Crashes Undoing Sizing in Dialog Editor"
permalink: kb/153/Q153425/
---

## Q153425: FIX: IDE Crashes Undoing Sizing in Dialog Editor

	Article: Q153425
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbtool kbResourceEd kbVC kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Dialog Editor, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The IDE crashes without warning or error when you try to undo the sizing of the
	controls inside the Dialog Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start MSDEV, and create a new default AppWizard MDI application.
	
	2. Open up the About dialog resource.
	
	3. Select all controls.
	
	4. Select Layout: Size_To_Content (F7).
	
	5. Press CTRL+Z to undo the sizing.
	
	6. The IDE will quit.
	
	Additional query words: dialog editor size
	
	======================================================================
	Keywords          : kbtool kbResourceEd kbVC kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword6 kbDialogEd
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
