---
layout: page
title: "Q162934: ODE97: Setup Wizard Fails to Register New File Name Value"
permalink: kb/162/Q162934/
---

## Q162934: ODE97: Setup Wizard Fails to Register New File Name Value

	Article: Q162934
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you change the application's main file name or extension, the dialog page
	that you use to set up the Registry Values List for your main application file
	does not reflect the change to the base value, if the value data is set to
	"$(FilePath)\<Name of the File>." For example, if you change the name of
	the "Northwind.mdb" file to "Northwind.mde," the Value Data entry does not
	change to "$(FilePath)\Northwind.mde" (without the quotation marks). This will
	be a problem, if you change your installation routines to use the new .mde
	extension.
	
	RESOLUTION
	==========
	
	To change the value of the original file name to the correct new file name, you
	must manually change the Value Data entry in the main file selection in the
	Registry Values list.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Setup Wizard. Select "Create a new set of setup options for my
	  application's custom Setup program." Click Next.
	
	2. Add the sample Northwind database to the List of Files dialog box.
	
	3. Click to select the "Set as Application's Main File" check box. Click Next.
	
	4. Click Next to skip the List Of Shortcuts dialog box.
	
	5. Click Add in the List of Registry Values dialog box.
	
	6. In the "Top level for the Key" box, type "HKEY_LOCAL_MACHINE" (without the
	  quotation marks).
	
	7. In the "Path to the Key" box, type "Software\Microsoft\Office\8.0\Access\Menu
	  Add-Ins" (without the quotation marks).
	
	8. In the Value Name box type "Library" (without the quotation marks).
	
	9. In the "Base Value Data on File" box, type the path and name of the
	  application file (<path>\Northwinds.mdb).
	
	10. Make sure that the Value Data box contains "$(FilePath)\Northwind.mdb" (this
	  is the default).
	
	11. Accept the rest of the defaults on each of the following screens, but on the
	  last screen, click Save and save the template.
	
	12. Click Finish to close the Setup Wizard.
	
	13. Create another copy of the Northwind.mdb file named Northwind.mde.
	
	14. Open the Setup Wizard.
	
	15. Select the option to open an existing template, and choose "Use previously
	  saved setup options to create a custom Setup program for my application."
	
	16. Highlight the File Name and Path box, and change the path and file to the
	  location of the Northwind.mde file you just created.
	
	17. Click Next, Next to get to the Registry Values dialogs.
	
	Note that the value displayed for Value Data reflects the old file name
	$(<path>\Northwind.mdb). If you run the setup, this will cause the
	registry entry to be incorrect for the name of the database. This issue
	manifests itself as a real problem when you are installing a wizard. The
	registry entry will be incorrect, making it difficult to troubleshoot and
	determine why the add-in will not start.
	
	Additional query words: MDE
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
