---
layout: page
title: "Q192095: FIX: Problems Running Wizard From Report or Label Query"
permalink: kb/192/Q192095/
---

## Q192095: FIX: Problems Running Wizard From Report or Label Query

	Article: Q192095
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a query and running the Report or Label Wizard from the Output
	Settings dialog box, as a result of right-clicking the query, the FoxPro menu is
	nonfunctional after the wizard finishes.
	
	RESOLUTION
	==========
	
	Do not select the "Save report and modify it in the Report Designer" option
	button in the "Step 5 - Finish" page of the Report or Label Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	After following the steps in the Steps to Reproduce Behavior section, you
	receive an error as the wizard finishes. The Designer Warning dialog box appears
	with the following message:
	
	  You cannot run or modify a report from within the Output Settings dialog.
	
	This error is by design to warn you that the report or label can not be modified
	at this time. Select OK and then close the Designer Destination dialog box.
	Trying to select most of the items from the menu will be useless until one of
	the wizards is opened and canceled.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a query and add any table to it.
	
	2. Right-click the query and select Output Settings.
	
	3. Click the report or label button and then select the wizard button located
	  just below the label button.
	
	4. Follow the steps in the wizard to create a report or label, and in the Finish
	  step of the wizard, select the "Save report and modify it in the Report
	  Designer" option button.
	
	5. Select the Finish button. After giving the report or label a name, select the
	  Save button.
	
	  The following error appears:
	
	  You cannot run or modify a report from within the Output Settings dialog.
	
	6. Click the OK button in the Designer Warning dialog box.
	
	7. Select the OK button in the Query Destinations dialog box and from the File
	  menu, try to choose Open. The menu option appears enabled, but not
	  functioning when selected. This happen to most of the other menu options as
	  well.
	
	   - To reactivate the menu open any wizard. From the Tools menu, choose
	     Wizards, select any of the wizards, and then click the Cancel button.
	
	     -or-
	
	   - Issue the SET SYSMENU TO DEFAULT in the Command window.
	
	Additional query words: kbVFp600fix kbVFp500abug kbDesigner kbWizard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
