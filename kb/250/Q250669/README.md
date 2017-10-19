---
layout: page
title: "Q250669: PRB: Wizard Causes &quot;Variable Not Found&quot;  When Adding Record"
permalink: /kb/250/Q250669/
---

## Q250669: PRB: Wizard Causes &quot;Variable Not Found&quot;  When Adding Record

	Article: Q250669
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 01-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you generate a One to Many form with the Microsoft Visual FoxPro 6.0 Form
	Wizard and attempt to add a record into the parent table with a key value that
	already exists, you might receive the error message listed below:
	
	  Uniqueness of index CUST_ID is violated.
	
	Click the OK button three times and another error message appears:
	
	  SELECT (lnSaveAlias3)
	  Error: 12
	  Variable 'LNSAVEALIAS3' is not found.
	  Method: addrec
	  Line: 246
	
	Click the OK button and another error message appears:
	
	  GO lnSaveRec3
	  Error: 12
	  Variable 'LNSAVEREC3' is not found.
	  Method: addrec
	  Line: 247
	
	RESOLUTION
	==========
	
	As a workaround, you can add the following code to the AddRec method of the
	txtBtns class. The txtBtns class can be found in VFP98\Wizards\wizbtns.vcx.
	
	1. On the Tools menu, open the Class Browser.
	
	2. Click the Open button, locate wizbtns.vcx, and click OK.
	
	3. Click on txtbtns in the left pane of the Class Browser.
	
	4. Expand the Methods in the right pane and double-click on the AddRec method.
	
	5. Go to line 29. This should be a blank line. The line above it should be:
	
	  * Start of Code
	  THIS.OldRec = RECNO()	&&save record in case reverting 
	  * End of Code
	
	6. Add the following code:
	
	  * Start of Code
	  * Changes to prevent lnSaveAlias3 and lnSaveRec3 errors if added record already exists
	  lnSaveAlias3 = ALIAS()
	  lnSaveRec3 = RECNO()
	  * End of Code
	
	7. Save wizbtns.vcx.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Component Gallery.
	
	2. Open the folder named Visual FoxPro Catalog/Foundation Classes/Buttons.
	
	3. Select Data Edit Buttons and right click on it.
	
	4. Select View Sample, and then Run from the context menu. (If View Sample is
	  disabled, set your Tools/Options/File Locations/samples directory correctly.)
	
	5. Click the Add/Save Record button.
	
	6. Click the Add record to both option.
	
	7. Type in "ALFKI" (without the quotation marks), and then click the Add button.
	  Note that the errors listed in the "Symptoms" section occur.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
