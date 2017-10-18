---
layout: page
title: "Q190410: PRB: Error Assigning Non-Opened Recordset to ADODC"
permalink: kb/190/Q190410/
---

## Q190410: PRB: Error Assigning Non-Opened Recordset to ADODC

	Article: Q190410
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbADO150 kbADO200 kbCtrl kbDatabase kbDataBinding kbVBp600 kbGrpDSVBDB kbGrpD
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to set an ActiveX Data Objects (ADO) Data Control's Recordset
	object to a previously dimensioned ADO Recordset the following error is
	returned:
	
	  Run-time error '3704':
	
	  The operation requested by the application is not allowed if the object is
	  closed.
	
	CAUSE
	=====
	
	This error occurs when the recordset has not been opened yet.
	
	RESOLUTION
	==========
	
	The user may either open the recordset prior to assigning it to the ADO Data
	Control (ADODC), or use the ADODC to create the recordset.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a Standard EXE Project in Visual Basic.
	
	2. From the Project\Component menu, select Microsoft ADO Data Control 6.0
	  (OLEDB).
	
	3. Place an ADODC on Form1.
	
	4. Add the following code to the form:
	
	     Private Sub Form_Load()
	
	     Dim rs As New ADODB.Recordset
	     ' Uncomment the below line to avoid error.
	     ' rs.Open "Select * from authors", "DSN=Pubs", adOpenKeyset
	
	     Set Adodc1.Recordset = rs
	
	     End Sub
	
	RESULTS: The error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbADO150 kbADO200 kbCtrl kbDatabase kbDataBinding kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbADO260 kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC250 kbMDAC260 kbMDAC270
	Version           : :2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
