---
layout: page
title: "Q221616: FIX: Report Wizard Error # 11 in Getpicture With Long Table Name"
permalink: kb/221/Q221616/
---

## Q221616: FIX: Report Wizard Error # 11 in Getpicture With Long Table Name

	Article: Q221616
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbReportWriter kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Report Wizard to create a report based on a long table name that is in
	a database container causes the following error message to occur:
	
	  Error #11 in getpicture (0): Function argument value, type, or count is
	  invalid.
	
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
	
	1. Run the following code in the Command window:
	
	     CREATE DATABASE TEST
	     CREATE TABLE "This is a Test" (name C(5), num n(5))
	
	2. From the Tools menu, choose Wizards, and then select Report.
	
	3. In the Wizard Selection dialog box, select Report Wizard.
	
	4. In Step 1 of the Report Wizard, select the table created in step 1.
	
	5. Once all the fields have been transferred into the Selected fields list box,
	  click the Finish button.
	
	6. In Step 6 of Report Wizard, make sure to select the "Use display setting
	  stored in the database" check box.
	
	7. Select the Preview button.
	
	RESULTS: The Report Wizard produces the following message:
	
	  Error #11 in getpicture (0): Function argument value, type, or count is
	  invalid.
	
	If the "Use display setting stored in the database" check box is not selected,
	the error does not occur.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbReportWriter kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
