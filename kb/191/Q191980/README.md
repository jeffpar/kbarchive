---
layout: page
title: "Q191980: PRB: Application Builder Not Removing Form/Report from Project"
permalink: /kb/191/Q191980/
---

## Q191980: PRB: Application Builder Not Removing Form/Report from Project

{% raw %}

	Article: Q191980
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Application builder to Add a form or a report to a project,
	removing the form or report from within the Application builder will not remove
	the form or report from the project.
	
	CAUSE
	=====
	
	This is done intentionally since removing the form from the project may break
	the application.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Launch the Application Wizard by selecting the Wizards menu option from the
	  Tools menu.
	
	2. Type the name for the project in the Application Wizard and click OK.
	
	  NOTE: You see a wait window that displays the following message:
	
	  Please be patient while application is being generated...
	
	3. After the Project Manager opens and the Microsoft Developer Network help
	  activates, the "Developing Application using the Application Framework and
	  Application Builder" topic appears. Close the help file and select the
	  Application Builder window.
	
	4. Click the Data tab in the Application Builder and select the Table Wizard
	  button to create a table, such as the Accounts table.
	
	5. After creating the table, place the table in the datasource grid of the data
	  tab. Make sure the Form and Report check boxes are selected.
	
	6. Select the Generate button to create a form and a report based on the table
	  in the datasource.
	
	7. Once the process is completed, the form and report are added to the project
	  manager.
	
	8. Select the Forms or the Reports tab in the Application Builder.
	
	9. Select the form or report that just created and click the Remove button to
	  remove the form or report out from Application Builder.
	
	The form or report in the Application builder gets deleted; however, the form or
	report still stays in the Project Manager.
	
	Additional query words: kbBuilder kbProjManager kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
