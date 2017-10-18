---
layout: page
title: "Q221651: FIX: FFCs - Error Log Dialog Cuts Off Vertical Scroll Bar"
permalink: kb/221/Q221651/
---

## Q221651: FIX: FFCs - Error Log Dialog Cuts Off Vertical Scroll Bar

	Article: Q221651
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The vertical scroll bar is cut off the Error Log Dialog box in an application
	created by the Application Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project using the Application Wizard.
	
	2. Use the Database Wizard in the Application Builder to build a Contact
	  database and make sure to check the Populate tables with sample data option.
	
	3. Generate all the forms based on the Contact database. When finished, close
	  the Application Builder, build the project into an application, and run the
	  application in Visual FoxPro.
	
	4. When the Quick Start dialog box shows up, click the Cancel button to quit
	  this dialog box.
	
	5. Go to the File menu and choose the New command and select the Contacts form.
	
	6. In the Contacts form, type in the number 2 in the Contact_id field. This
	  should replace the number 1 that was in the Contact_id field.
	
	7. Click on the Save button on the toolbar to save the form.
	
	8. Once you click the Save button, an error occurs with the following message:
	
	  "Uniqueness of index CONTACT_ID" is violated"
	  "Record detail in error log files?
	
	9. Click Yes to create a log file.
	
	10. Click Yes again to continue executing program.
	
	11. Select the Tools menu, Error Logs submenu, and the Display Error Log menu
	  option.
	
	NOTE: The Error Log dialog box shows up with the bottom vertical bar cut off.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
