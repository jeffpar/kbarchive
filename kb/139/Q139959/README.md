---
layout: page
title: "Q139959: BUG: Valid Event Runs Twice When SetFocus Issued in LostFocus"
permalink: /kb/139/Q139959/
---

## Q139959: BUG: Valid Event Runs Twice When SetFocus Issued in LostFocus

	Article: Q139959
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the SetFocus method in the LostFocus event of a text box results in the
	Valid Event being fired twice.
	
	WORKAROUND
	==========
	
	Run all the code that needs to be run when leaving the control in the LostFocus
	Event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form and place two text boxes on the form.
	
	2. In the Valid Event of text1, enter this code:
	
	     = MESSAGEBOX("Valid Event")
	
	3. In the LostFocus Event of text1, enter this code:
	
	     =MESSAGEBOX("LostFocus Event")
	     thisform.text1.setfocus
	
	4. Run the form, and type "Hello" in the first text box. Press ENTER or the TAB
	  key and note that the Valid Event message box appears twice.
	
	Additional query words: kbvfp600 kbvfp500
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
