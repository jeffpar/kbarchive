---
layout: page
title: "Q221718: FIX:C0000005 Fatal Error Saving FormSet After Add Cancel in DE"
permalink: /kb/221/Q221718/
---

## Q221718: FIX:C0000005 Fatal Error Saving FormSet After Add Cancel in DE

	Article: Q221718
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDesigner kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrp
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to save a formset after canceling the addition of a table to the
	data environment of the form, the following error message appears:
	
	  Fatal error: Exception code=C0000005
	
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
	
	NOTE: On some machines, you must use the mouse and not the keyboard to perform
	these steps in order to see the error.
	
	1. In the Command window, type "create form" without the quotes.
	
	2. From the Form menu, select Create Formset.
	
	3. Right-click on the form and select Data Environment.
	
	4. Click the Cancel button in the Open dialog.
	
	5. Click the Close button on the form.
	
	6. Click the Yes button when prompted to save the form.
	
	7. Accept the default form name and press the ENTER key.
	
	  NOTE: The error reference in the Symptoms section appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDesigner kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
