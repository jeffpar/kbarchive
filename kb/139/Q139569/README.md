---
layout: page
title: "Q139569: BUG: MDI Window Reverses Parent/Child Window Name in Title Bar"
permalink: /kb/139/Q139569/
---

## Q139569: BUG: MDI Window Reverses Parent/Child Window Name in Title Bar

	Article: Q139569
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The multiple document interface (MDI) window is a Microsoft Windows standard
	that controls the relationship between parent and child windows. For example, if
	an MDI-compliant window is maximized, the title bar displays both parent and
	child window names. The format for displaying the window names on the title bar
	is "parent window name - child window name."
	
	In Visual FoxPro, the title appears above the Visual FoxPro system menu bar but
	the window name is displayed in reverse order (child window name - parent window
	name). This is contrary to the Windows standard and does not occur in FoxPro
	version 2.6 for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form in Visual FoxPro.
	
	2. Change the Caption property of the form to Customer.
	
	3. Change the MDIForm property of the form to true (.T.).
	
	4. Run the form and maximize the window. Notice that the title of the Visual
	  FoxPro window reads "Customer - Microsoft Visual FoxPro" instead of
	  "Microsoft Visual FoxPro - Customer."
	
	Additional query words: name kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
