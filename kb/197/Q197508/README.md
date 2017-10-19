---
layout: page
title: "Q197508: WD97: Error Message: Wizard Cannot Use the Active Document"
permalink: /kb/197/Q197508/
---

## Q197508: WD97: Error Message: Wizard Cannot Use the Active Document

	Article: Q197508
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbtemplate winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you create a new document based on a template created with one of the
	following wizards
	
	  Agenda Wizard
	  Fax Wizard
	  Table Wizard
	
	the following error message appears:
	
	  The wizard cannot use the active document. To run the wizard, choose New from
	  the File menu and select the <wizard name> wizard.
	
	Some of the error messages listed below may also appear:
	
	Agenda Wizard
	-------------
	
	- If the template is based on the Agenda Wizard, after you click OK, the
	  following error message appears in Word for Windows:
	
	  The wizard cannot continue because an error has occurred (500).
	
	Fax Wizard
	----------
	
	- If the template is based on the Fax Wizard, the following error message
	  appears in Word for Windows and Word for Windows NT:
	
	  The wizard cannot continue because an error has occurred (509).
	
	Table Wizard
	------------
	
	- If the template is based on the Table Wizard, the following error message
	  appears in Word for Windows:
	
	  The wizard cannot use the active document. To insert a table with this
	  wizard, choose Insert Table from the Table menu and push the Wizard button.
	  To create a new document, choose New from the File menu and select Table
	  Wizard.
	
	CAUSE
	=====
	
	These errors occur when the AutoNew and StartWizard macros are retained in the
	new template.
	
	RESOLUTION
	==========
	
	Method 1:
	
	Delete the AutoNew and StartWizard macros from your new template. To do this,
	choose Macro from the Tools menu. Select the macro and choose the Delete
	button.
	
	Method 2:
	
	Create a document based on the selected Wizard. Save this document as a template.
	The AutoNew and StartWizard macros are not retained in the new template.
	
	Additional query words: 7.0 wizard error wordbasic err 500 509 msg 8.0 8.00
	
	======================================================================
	Keywords          : kbtemplate winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
