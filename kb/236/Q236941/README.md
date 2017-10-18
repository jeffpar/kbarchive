---
layout: page
title: "Q236941: BUG: VB 6.0 Fails if ADO DataControl References fMoreData"
permalink: kb/236/Q236941/
---

## Q236941: BUG: VB 6.0 Fails if ADO DataControl References fMoreData

	Article: Q236941
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataBinding kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO250 kbMDAC
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the fMoreData argument is referenced in the DataControls EndofRecordset
	method, if you are sitting on the first record in the RecordSet, Visual Basic
	stops responding. If you are using Visual Basic 6.0 Service Pack 4, an
	application error occurs.
	
	RESOLUTION
	==========
	
	- Do not reference fMoreData in code.
	
	-or-
	
	- Do not use the DataControl. Instead use ActiveX Data Objects (ADO) code,
	  declaring your recordset using WITHEVENTS.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project.
	
	2. From the Project menu, choose Components and select the ADO Data Control.
	
	3. Place the ADO Data Control on the form.
	
	4. Set the ADO Data Control ADODC Connectionstring property to a valid
	  Datasource. Also, set the Recordsource property.
	
	5. Place a text box on the form.
	
	6. Set the DataSource property of the text box to the ADO Data Control.
	
	7. Place the following code in the ADODC1's EndofRecordset event:
	
	  Debug.Print fMoreData
	
	8. Save the Project.
	
	9. Close and exit Visual Basic.
	
	10. Start Visual Basic and reopen the Project.
	
	11. Press F5 to run the form.
	
	12. Click the Previous button on the ADO Data Control.
	
	RESULT: Visual Basic stops responding and no error appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataBinding kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO250 kbMDAC260 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO200 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.0,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
