---
layout: page
title: "Q195840: FIX: RowColChange Event of DataGrid Does Not Fire with ADODC"
permalink: /kb/195/Q195840/
---

## Q195840: FIX: RowColChange Event of DataGrid Does Not Fire with ADODC

{% raw %}

	Article: Q195840
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbDatabase kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3f
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As the user uses the ADODC MoveNext button to scroll down the visible records in
	the DataGrid, the RowColChange event of the DataBound Grid fires without any
	problem. But as soon as the record pointer needs to move to a row that is not
	fully visible, the RowColChange event does not fire. In summary, the
	RowColChange event for the DataBound Grid do not fire unless the row is
	completely visible in the DataBound Grid at the instant before the ADODC
	MoveNext button is clicked.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Go to Project/Components and choose the Microsoft ADO DataControl 6.0
	  (OLEDB), and the Microsoft DataGrid Control 6.0 OLEDB.
	
	3. Add a DataGrid and an ADODC to the form.
	
	4. Go to the ADODC properties and click on the ConnectString property and then
	  on the ellipse.
	
	5. Choose DSN that points to pubs in the ODBC DSN Name category and then click
	  Apply.
	
	6. Click on the Authentication tab and then put in any password needed.
	
	7. Click on the Authentication tab and chose adcmdtable. Choose authors and
	  click apply.
	
	8. Click on the DataGrid and choose the ADODC1 on the DataSource Property.
	
	9. Go to the RowColChange Event of the DataGrid and paste this code:
	
	        Debug.Print "RowColChange Event Fired"
	
	10. Run the application.
	
	11. Start clicking on the ADODC1 MoveNext button and watch the RowColChange
	  Event fire by looking at the Immediate Window. Note that the event won't
	  fire once you get to a row that wasn't visible right before you clicked the
	  MoveNext button.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbDatabase kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
