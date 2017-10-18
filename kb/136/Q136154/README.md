---
layout: page
title: "Q136154: FIX: Text Box Does Not Respond to DblClick Event"
permalink: kb/136/Q136154/
---

## Q136154: FIX: Text Box Does Not Respond to DblClick Event

	Article: Q136154
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Format property of a text box residing on a form is set to M, the
	DblClick event is not executed when the form is run. Setting the Format property
	to M allows for multiple preset input masks to be used in the text box.
	
	For more information on this setting, please see the "Format Property" topic in
	the Visual FoxPro Help file.
	
	WORKAROUND
	==========
	
	Execute the code during a Click event, or use a combo box in place of the text
	box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to Visual FoxPro, and create a new form.
	
	2. Add a text box (Text1) to the form, and set its Format property to M.
	
	3. Add a WAIT WINDOW command to the Text1 DblClick event procedure.
	
	4. Run the form, and double-click the Text1 box. The Wait Window fails to
	  appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
