---
layout: page
title: "Q149109: FIX: Required File Missing ODBCCP32CP_ When Run Setup Wizard"
permalink: /kb/149/Q149109/
---

## Q149109: FIX: Required File Missing ODBCCP32CP_ When Run Setup Wizard

{% raw %}

	Article: Q149109
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fix kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup wizard and the only selection in step 2 (ODBC drivers) is
	SQL Server or the Oracle driver, the following error occurs:
	
	  Required File Missing ODBCCP32CP_
	
	When you click the OK button in the error box, the Setup Wizard quits.
	
	RESOLUTION
	==========
	
	Select more than one ODBC driver in step 2 of the Setup Wizard. The Other ODBC
	driver to be selected should be one other than the SQL Server or Oracle drivers.
	As a suggestion, select the Text driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a project containing a .prg file that contains a wait window command.
	
	2. Build the project into an .exe file, and place the .exe file into a directory
	  by itself.
	
	3. Start the Setup Wizard.
	
	4. In Step 1, select the directory that contains the .exe file as the
	  Distribution Tree Directory.
	
	5. In Step 2, select ODBC drivers, and make sure only the SQL Server Driver box
	  is checked. Then click OK. Any other selections may or may not be made from
	  the Step 2 dialog.
	
	6. In Step 3. specify a directory for the disk images or netsetup to go into.
	  Also select either of the disk sizes or the netsetup from this dialog.
	
	7. Fill in a Caption and Copyright in Step 4.
	
	8. Click the Next button to pass thru Steps 5 and 6, and then click Finish.
	
	The Progress dialog will be displayed. A thermometer will appear with the caption
	"Creating setup information file." An error dialog is displayed with the title
	"Microsoft Visual FoxPro Wizards" and the message "! Required file missing:
	ODBCCP32.CP_" will occur. At this time, clicking the OK button in the error box
	will terminate the Setup wizard.
	
	NOTE: This error also occurs if either of the Oracle drivers are selected instead
	of the SQL server driver.
	
	Additional query words: ODBCCP32CP_ SETUP
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
