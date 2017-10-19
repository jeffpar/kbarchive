---
layout: page
title: "Q178384: PRB: Report Preview in Top-Level Form Disables VFP Menu"
permalink: /kb/178/Q178384/
---

## Q178384: PRB: Report Preview in Top-Level Form Disables VFP Menu

	Article: Q178384
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Top-Level form containing a report preview disables the Visual FoxPro system
	menu and the Command window.
	
	CAUSE
	=====
	
	Even though a Top-Level form should be independent of the desktop, the report
	preview is in its own loop and prevents other windows from functioning.
	
	RESOLUTION
	==========
	
	To work around the behavior, add a NOWAIT parameter to the menu choice that
	calls the report preview.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a quick report named Ztest using the Employee table located in the
	  Samples\Data folder.
	
	2. Create a form named Ztest that has the ShowWindow property set to 2-As
	  Top-Level Form.
	
	3. Add a command button to the form that contains the following code in the
	  Click event:
	
	        REPORT FORM Ztest PREVIEW WINDOW Form1
	
	4. Run the Ztest form. The Visual FoxPro Command window and System menu are now
	  available.
	
	5. Cycle to the Top-Level form and press the command button. The Report Preview
	  window appears in Form1. All the menu bars of the System menu are now
	  disabled and the Command window is inaccessible.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
