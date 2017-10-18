---
layout: page
title: "Q262422: PRB: Visual FoxPro Form Repeatedly Prompts to Be Saved"
permalink: kb/262/Q262422/
---

## Q262422: PRB: Visual FoxPro Form Repeatedly Prompts to Be Saved

	Article: Q262422
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbContainer kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 23-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Visual FoxPro form and you include the Microsoft Rich TextBox
	control, the form always prompts you to save the form even if you make no change
	to the form or to the Rich TextBox control.
	
	The behavior does not occur in Visual FoxPro 5.0.
	
	RESOLUTION
	==========
	
	The workaround for this behavior is to use the CTRL+W keypress combination to
	close the form.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro.
	
	2. From the Visual FoxPro Main menu, select Tools, and then select Options.
	
	3. Select the Controls tab and Active X, and add the Rich TextBox control. Click
	  OK to save these settings.
	
	4. Create a new Visual FoxPro form.
	
	5. From the Form Control toolbar, select View Classes, and then select Active X
	  controls.
	
	6. Copy and paste the Rich TextBox control on to the form.
	
	7. Save and close the form.
	
	8. Open the form again, make no changes, and try to close the form.
	
	When you try to close the form, you see a dialog box with the following prompt:
	
	Microsoft Visual FoxPro 
	Do you want to save changes to Form Designer - YourFormName.scx?
	Yes No Cancel
	
	If you press the ESCAPE key (ESC) instead of closing the form, you get the
	following dialog box:
	
	Microsoft Visual FoxPro 
	Discard changes? 
	Yes No
	
	NOTE: The same behavior occurs with the following steps:
	
	1. Create a form.
	
	2. Add a page frame to the form.
	
	3. Edit the page frame.
	
	4. Add a combobox object to page1 and save.
	
	5. Modify the form.
	
	6. Click on the Close box.
	
	REFERENCES
	==========
	
	For additional information on working with Rich TextBox controls, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q253684 Using the Rich TextBox ActiveX Control in VFP
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbContainer kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
