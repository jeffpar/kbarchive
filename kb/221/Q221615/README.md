---
layout: page
title: "Q221615: FIX: Form Wizard Error # 11 in AddDetail with Long Table Name"
permalink: kb/221/Q221615/
---

## Q221615: FIX: Form Wizard Error # 11 in AddDetail with Long Table Name

	Article: Q221615
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDS
	Last Modified: 02-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Previewing or saving a form created by the Form Wizard generates the following
	error message if the table name contains spaces and the "Override with DBC field
	display classes" check box is selected:
	
	  Error #11 in adddetail (0): Function argument value, type or count is
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
	
	1. Create a database, named MyDatabase.
	
	2. Create a table, named My Table (note the space in the name), add a few
	  records to the table, and then add the table to the database.
	
	3. Launch the Form Wizard.
	
	4. Choose the table from the database and add at least one field.
	
	5. Continue through the steps until you get to Step 4-Finish.
	
	6. Select the "Override with DBC field display classes" check box.
	
	7. Click Preview or save the form.
	
	RESULT: The error message occurs immediately.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
