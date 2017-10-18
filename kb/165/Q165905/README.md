---
layout: page
title: "Q165905: FIX: Activate Event of Page Not Triggered with Keyboard in VFP"
permalink: kb/165/Q165905/
---

## Q165905: FIX: Activate Event of Page Not Triggered with Keyboard in VFP

	Article: Q165905
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp kbvfp500 kbvfp500a kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.x, the Page Activate event within a PageFrame is not
	triggered when the Page is activated with the arrow key. However, the Page
	Activate event triggers when the Page is activated with the mouse click.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a PageFrame to the form and set the PageCount property to 1.
	
	3. Put the following code in the Activate event of page1:
	
	  WAIT WINDOW "Activate Page 1"
	
	4. Add two textbox controls to the Page.
	
	5. Save and run the form.
	
	  When the form is run, the Wait window appears in the right-hand corner. Click
	  the mouse once, and the focus should return to the page. Now, using the down
	  arrow key to move the focus to the text box, try to cycle though the text
	  boxes until the focus returns back to the page again. The Activate event does
	  not trigger.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp kbvfp500 kbvfp500a kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
