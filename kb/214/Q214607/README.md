---
layout: page
title: "Q214607: BUG: Cannot Add a Secured VBA Module to SourceSafe."
permalink: /kb/214/Q214607/
---

## Q214607: BUG: Cannot Add a Secured VBA Module to SourceSafe.

	Article: Q214607
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0; :
	Operating System(s): 
	Keyword(s): kbinterop kbAccess kbSSafe600 kbSSafe600bug kbOffice2000 kbDSupport kbBug kbGrpDSSSafe
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft Office 2000 Developer 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When adding a password protected Visual Basic for Applications (VBA) project to
	SourceSafe, you will see one of the following errors. The error you see depends
	on whether the VBA project is part of an Access 2000 database or one of the
	other Office 2000 applications.
	
	- When adding an Access 2000 module to SourceSafe the following error message
	  appears:
	
	  Failed to export <object name> to a file.
	
	- When adding an Office 2000 VBA project (non-Access) to SourceSafe the
	  following error message appears.:
	
	  The addin was unable to retrieve information about the current project and
	  cannot continue.
	
	  If you attempt to add to SourceSafe again, the following error message
	  appears:
	
	  50289: Can't perform operation since the project is protected.
	
	CAUSE
	=====
	
	SourceSafe cannot display the Password dialog box for the project. Therefore,
	the project can not be opened for insertion into the VSS database.
	
	RESOLUTION
	==========
	
	Manually open the project in the Visual Basic Editor (VBE) and supply the
	password when prompted. Once the project has been opened, you will be able to
	add the project to the VSS database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: The following steps reproduce this behavior in Microsoft Access 2000.
	
	1. Create a .mdb database in Microsoft Access 2000.
	
	2. Add a module to the database and type some code in the module.
	
	3. Save the module.
	
	4. Add a password to the project by choosing Tools - <database name>
	  Properties and then selecting the Protection tab. Select "Lock project for
	  viewing" and type a password.
	
	5. Save the module.
	
	6. Quit VBE and return to Microsoft Access 2000.
	
	7. Exit Microsoft Access 2000.
	
	8. Open Microsoft Access 2000 and choose that database.
	
	9. Add a database to SourceSafe (Tools - SourceSafe - Add Database to
	  SourceSafe) making sure the module is selected. The error message listed in
	  the SYMPTOMS section will appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAccess kbSSafe600 kbSSafe600bug kbOffice2000 kbDSupport kbBug kbGrpDSSSafe kbISS 
	Technology        : kbSSafeSearch kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbSSafe600 kbOffice2000DevSearch
	Version           : WINDOWS:6.0; :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
