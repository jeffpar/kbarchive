---
layout: page
title: "Q193403: FIX: Few Tables Listed when Using the Remote View Wizard"
permalink: kb/193/Q193403/
---

## Q193403: FIX: Few Tables Listed when Using the Remote View Wizard

	Article: Q193403
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a remote view with the Remote View wizard, only a small number
	of tables in the database are available in the Tables list box of the "Step 2 -
	Select fields" window.
	
	RESOLUTION
	==========
	
	Use the Remote View Designer to create the view instead of the Remote View
	Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	If a regular remote view is created, all of the tables are listed in the Open
	dialog box that appears after making the connection to the database. All of the
	tables may or may not appear depending on the backend database system to which
	you are connecting. When using Oracle as the backend, all of the tables
	consistently do not appear when using the Remote View Wizard. This same behavior
	could effect other database systems as well.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure a database container is open in Visual FoxPro and from the File
	  menu, select New.
	
	2. In the New dialog box, select the Remote View option button and then click
	  the Wizard button.
	
	3. In the Remote View Wizard dialog box, Step 1 - Choose Data Source is
	  displayed in the drop-down list box. Select the "ODBC data sources" option
	  button and in the "Available Data Sources" list box, choose a data source
	  that will connect to an Oracle server.
	
	4. In the Remote View Wizard dialog box, "Step 2 - Select Fields" is now
	  displayed in the drop-down list box. Count the number of tables listed in the
	  Tables list box.
	
	5. Select the Cancel button in the Remote View Wizard. From the File menu,
	  choose New. In the New dialog box, select the Remote View option button and
	  then select the "New File" button.
	
	6. Select an Oracle data source in the "Select Connection or Data Source" dialog
	  box and log in using the correct user name and password.
	
	7. When the Open dialog box appears, count the number of tables listed in the
	  Tables list box.
	
	NOTE: You will see fewer tables available when you use the wizard to create the
	remote view. This has been fixed in Visual FoxPro 6.0.
	
	
	Additional query words: kbVFp600fix kbVFp500abug kbwizard KbDBFDBC kbDatabase kbDesigner
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
