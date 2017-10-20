---
layout: page
title: "Q221656: FIX: Difficult to Add Records to Form in Application Wizard App"
permalink: /kb/221/Q221656/
---

## Q221656: FIX: Difficult to Add Records to Form in Application Wizard App

{% raw %}

	Article: Q221656
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDS
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to add records to the form in an Application Wizard application
	if the table used by the form is empty.
	
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
	
	1. Create an application using the Application Wizard.
	
	2. In the Application Builder, click the Data tab and click the Database Wizard
	  button.
	
	3. Select the Donation database in the Database Wizard, then click the Finish
	  button. Click the Finish button again.
	
	4. In the Application Builder, check all checkboxes for the Form column, then
	  click the Generate button to generate all forms.
	
	5. Click the OK button to close the Application Builder.
	
	6. Click the Build button in the Project dialog box to rebuild the application.
	  Make sure the recompile all checkbox is selected
	
	7. Run the application. When the application runs, click the Cancel button in
	  the Quick Start dialog box.
	
	8. From the File menu, choose New, select the Campaign form in the list box, and
	  click the OK button.
	
	  Note that there is no way to add new record.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
