---
layout: page
title: "Q193326: BUG: Data Form Wizard Through Application Wizard Omits ADO Refer"
permalink: /kb/193/Q193326/
---

## Q193326: BUG: Data Form Wizard Through Application Wizard Omits ADO Refer

	Article: Q193326
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.1 SP2,2.5,2.6,2.7,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbATM kbADO200 kbCtrl kbDatabase kbVBp kbVBp600bug kbAppWizard kbGrpD
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application that is created using the Visual Basic Application
	Wizard, you receive the following error message:
	
	  Compile error: User-defined type not defined
	
	CAUSE
	=====
	
	The Application Wizard allows for the creation of forms via the Data Form
	Wizard. When a form is created in this manner, a reference to ADO is not added
	to the project.
	
	RESOLUTION
	==========
	
	Add a reference to ADO by selecting References from the Project menu and
	checking the box next to "Microsoft ActiveX Data Objects Library."
	
	This problem can also be avoided by running through the Application Wizard
	without adding any data forms, then adding data forms by invoking the Data Form
	Wizard directly from the Add-Ins menu.
	
	In versions of Visual Basic 6 prior to Service Pack 4, the ADO Data Control's
	events were designed to work only with ADO version 2.0. After you set a
	Reference to ADO later than 2.0 to workaround the Application Wizard problem,
	you receive the following error message
	
	  Compile Error: Procedure declaration does not match description of event or
	  procedure having the same name.
	
	To work around this new compile error, you must change the declaration of the ADO
	Data Control's events to include ADODB.Recordset20 instead of ADODB.Recordset.
	
	Specifically, change the following event procedure:
	
	Private Sub datPrimaryRS_MoveComplete(ByVal adReason As ADODB.EventReasonEnum, ByVal pError As ADODB.Error, adStatus As ADODB.EventStatusEnum, ByVal pRecordset As ADODB.Recordset)
	
	-to-
	
	Private Sub datPrimaryRS_MoveComplete(ByVal adReason As ADODB.EventReasonEnum, ByVal pError As ADODB.Error, adStatus As ADODB.EventStatusEnum, ByVal pRecordset As ADODB.Recordset20)
	
	And change:
	
	Private Sub datPrimaryRS_WillChangeRecord(ByVal adReason As ADODB.EventReasonEnum, ByVal cRecords As Long, adStatus As ADODB.EventStatusEnum, ByVal pRecordset As ADODB.Recordset)
	
	-to-
	
	Private Sub datPrimaryRS_WillChangeRecord(ByVal adReason As ADODB.EventReasonEnum, ByVal cRecords As Long, adStatus As ADODB.EventStatusEnum, ByVal pRecordset As ADODB.Recordset20)
	
	When you use Visual Basic 6 Service Pack 4, the ADO Data Control's events work
	with ADO versions 2.1 and later. It is not necessary to change the pRecordset
	arguments to ADODB.Recordset20.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Select New Project from the File menu.
	
	2. In the New Project dialog box, select Visual Basic Application Wizard and
	  click OK.
	
	3. Click Next on each page of the Wizard until you reach the page titled "Data
	  Access Forms."
	
	4. Click Create New Form.
	
	The following instructions refer to the Data Form Wizard, which is invoked at
	step 4.
	
	1. Click Next.
	
	2. Select a database type and click Next.
	
	3. Enter the requested connection information and click Next.
	
	4. Select "Grid (Datasheet)" as the Form Layout, select ADO Data Control as the
	  Binding Type, and then click Next.
	
	5. Select a Record Source and at least one field, and then click Next.
	
	6. Click Finish, and click No when prompted to create another form.
	
	7. Click Finish.
	
	8. Attempt to run the created project. The result is:
	
	  Compile error: User-defined type not defined.
	
	The workaround is as specified in the "Resolution" section earlier.
	
	REFERENCES
	==========
	
	  For additional information Compile error: Procedure declaration does not
	  match description of event or procedure having the same name, click the
	  article number below to view the article in the Microsoft Knowledge Base:
	
	  Q222145 PRB: ADO Data Control Events May Generate a Compilation Error
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbATM kbADO200 kbCtrl kbDatabase kbVBp kbVBp600bug kbAppWizard kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbADO250 kbMDAC260 kbADO260 kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO200 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.0,2.1,2.1 SP2,2.5,2.6,2.7,6.0
	Issue type        : kbbug
	
	=============================================================================
	
