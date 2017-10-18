---
layout: page
title: "Q315134: FIX: Exception Error After Saving and Closing Report"
permalink: kb/315/Q315134/
---

## Q315134: FIX: Exception Error After Saving and Closing Report

	Article: Q315134
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You open the Document View window. In the Report Designer, you save and then
	close a report after making a selection in the Properties window. Visual FoxPro
	7.0 reports the following error message and closes:
	
	  Fatal Exception: Exception Code: C0000005
	
	This error can also occur with the Document View window closed if you choose a
	nondefault property in the Properties window.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program named "Test" and add the following code to it:
	
	  ACTIVATE WINDOW "document view"
	  CLOSE DATABASES ALL 
	  OPEN DATABASE HOME()+'samples\data\testdata'
	  SET RESOURCE OFF
	  DELETE FILE testxx.fr?
	  MODIFY REPORT testxx NOWAIT 
	  ACTIVATE WINDOW "report designer - testxx.frx"
	  * Open DE, bring up context menu,
	  * add first table in DBC, and then close the Add dialog.
	  KEYBOARD '{alt+v}e{shift+f10}a{alt+a}{alt+c}c'
	  DOEVENTS 
	  ACTIVATE WINDOW properties
	  * Select DE in Property window object dropdown.
	  KEYBOARD '{ctrl+pgup}'
	  ACTIVATE WINDOW "report designer - testxx.frx"
	  * Save and close the Report Designer.
	  KEYBOARD '{ctrl+w}'
	  DOEVENTS 
	  ACTIVATE WINDOW properties
	  RETURN 
	
	2. Save the file and then run the program from the Command window.
	
	  The error mentioned in the "Symptoms" section appears and Visual FoxPro
	  closes.
	
	To see the error with the Document View window closed, place the following code
	in a program file and then run it. Note that you may need to run the code
	multiple times to cause the error.
	
	  RELEASE WINDOW "document view"
	  CLOSE DATABASES ALL 
	  OPEN DATABASE HOME()+'samples\data\testdata'
	  SET RESOURCE OFF
	  DELETE FILE testxx.fr?
	  MODIFY REPORT testxx NOWAIT 
	  ACTIVATE WINDOW "report designer - testxx.frx"
	  * Open DE, bring up context menu,
	  * add first table to DBC, and then close Add dialog.
	  KEYBOARD '{alt+v}e{shift+f10}a{alt+a}{alt+c}c'
	  DOEVENTS 
	  ACTIVATE WINDOW properties
	  * Select DE in Properties window object dropdown.
	  KEYBOARD '{ctrl+pgup}'
	  ACTIVATE WINDOW "report designer - testxx.frx"
	  * Save and close the Report Designer.
	  KEYBOARD '{ctrl+w}'
	  DOEVENTS 
	  ACTIVATE WINDOW properties
	  * Properties window context menu, nondefault properties only.
	  KEYBOARD '{shift+f10}n'
	  RETURN 
	
	Additional query words: C0000005 error crash kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbDesigner kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
