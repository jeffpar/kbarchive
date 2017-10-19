---
layout: page
title: "Q171215: HOWTO: Use Data Form Wizard to Connect to Remote Data via DAO"
permalink: /kb/171/Q171215/
---

## Q171215: HOWTO: Use Data Form Wizard to Connect to Remote Data via DAO

	Article: Q171215
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbGrpDSVBDB kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Data Form Wizard allows the user to create a quick form that can access many
	types of data, including remote data. This article explains how to connect to a
	Remote Data Source through DAO. This is possible if a link is established from
	the Access MDB file to the remote data source.
	
	MORE INFORMATION
	================
	
	1. Create a new project and select the Add-Ins menu, Add-In Manager, and then
	  select Visual Basic Data Form Wizard.
	
	2. The Add-Ins menu contains the option "Data Form Wizard." Select this and, in
	  the second screen, select Access as the Database Format.
	
	3. The next screen will ask for the Database Name. This database needs to be
	  created in Access where the user will simply "Link" the remote database to
	  the Access MDB file. Select External Database and then Link from the file
	  menu in Access. (See Access online Help if you need to know how to link a
	  file.)
	
	  NOTE: This assumes that a Remote Data Source (DSN) has been created in the
	  ODBC Data Source Administrator.
	
	4. Select the Form Type, choose Next, and then select the Record Source,
	  choosing whatever fields you would like to have appear on the form.
	
	5. Choose Finish, name the form, and run it. The user is now accessing a Remote
	  database from the Wizard-generated form via DAO.
	
	REFERENCES
	==========
	
	For more information about linking databases, search for "Linking Files to an
	Access Database" in the Microsoft Access Help menu.
	
	For more information about using the Data Form Wizard, search for "Data Form
	Wizard" in Microsoft Visual Basic 5 Help.
	
	Additional query words: kbVBp500 kbVBp600 kbADO kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
