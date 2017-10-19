---
layout: page
title: "Q129016: How to Register Your Third-Party Wizards"
permalink: /kb/129/Q129016/
---

## Q129016: How to Register Your Third-Party Wizards

	Article: Q129016
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can register a third-party Wizard in Visual
	FoxPro.
	
	MORE INFORMATION
	================
	
	The _WIZARD System Memory Variable determines which application will act as the
	main controller for all the wizards. By default, WIZARD.APP is assigned to this
	variable, and each time you choose to run a wizard, this application is
	activated. Although you can create and use your own application instead of
	WIZARD.APP, Microsoft does not recommend it.
	
	WIZARD.APP uses the WIZARD.DBF table to register the various wizards. This table
	determines which wizard is associated with which type of file or tool. This is
	where you can enter information about a third-party wizard.
	
	Each record in WIZARD.DBF represents a wizard. Once the information is entered,
	WIZARD.APP will be able to find the wizard and run it for a specified type of
	file or tool. The PROGRAM field contains the name and path of the Wizard program
	and the TYPE field contains the information about the type of file or tool
	associated with the wizard.
	
	For example, if you enter a third-party Wizard named MYWIZ.APP with a FORM entry
	in the TYPE field, the MYWIZ.APP will be run any time you try to create a new
	form.
	
	For more information about the Registeration Table (WIZARD.DBF) please see the
	following article in the Microsoft Knowledge Base:
	
	  Q128728 How Visual FoxPro Organizes and Accesses Wizards
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
