---
layout: page
title: "Q272622: PRB: Refresh Method of Intrinsic Data Control Shows ErrMsg 3343"
permalink: /kb/272/Q272622/
---

## Q272622: PRB: Refresh Method of Intrinsic Data Control Shows ErrMsg 3343

	Article: Q272622
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.5,3.51,3.6,5.0
	Operating System(s): 
	Keyword(s): kbAccess kbDAOsearch kbVBp500 kbGrpDSVBDB
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Access 2000 Service Release 1 (SR-1) 
	- The DAO SDK, versions 3.5, 3.51, 3.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The intrinsic DAO data control in Visual Basic 5.0 cannot be bound directly to a
	Microsoft Access 2000 table. The known workaround to address this limitation is
	to assign a DAO 3.6 recordset object to its Recordset property at run time with
	Visual Basic code. The Refresh method of the intrinsic DAO data control is
	commonly used to refresh the bound recordset to reflect the current data in the
	database. In Visual Basic 5.0, if you attempt to run the Refresh method of the
	DAO Data control when it is bound to a DAO 3.6 Recordset, the following error
	message is generated:
	
	  Run-time error '3343': Unrecognized Database format.
	
	CAUSE
	=====
	
	The intrinsic DAO data control in Visual Basic 5.0 was written to use Microsoft
	Jet 3.51. The use of a Refresh causes the control to close the bound recordset
	and reopen it to reflect the current data. Even though it is bound to a DAO 3.6
	recordset at run time, the intrinsic data control attempts to reopen the
	recordset with the version of Jet for which it was designed (Jet 3.51) by virtue
	of its design, which results in the specified error being generated.
	
	RESOLUTION
	==========
	
	Requery the bound DAO 3.6 Recordset and rebind it to the intrinsic DAO data
	control.
	
	STATUS
	======
	
	This behavior is by design and is only applicable to Visual Basic 5.0 and all of
	its service packs up to SP3. SP3 was the last service pack released for Visual
	Basic 5.0. This behavior does not occur in Microsoft Visual Basic 6.0
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic 5.0.
	
	2. On the Project menu, select References, and then set a reference to the
	  Microsoft DAO 3.6 Object Library.
	
	3. Drag and drop an intrinsic DAO data control, a text box, and a command button
	  onto Form1.
	
	4. Set the caption of the command button to Refresh DataControl and change its
	  name to cmdRefresh.
	
	5. Specify Data1 (the intrinsic data control) as the DataSource of the text box.
	
	6. Copy and paste the following Visual Basic code into the form module. This
	  sample uses data in the Nwind.mdb sample Access 2000 database. Change the
	  database name, SQL query, and bound column name to point to one of your
	  Access 2000 databases if you do not have a copy of Nwind.mdb:
	
	  Dim db As DAO.Database
	  Dim rs As DAO.Recordset
	
	  Private Sub cmdRefresh_Click()
	  Data1.Refresh
	  End Sub
	
	  Private Sub Form_Load()
	  Set db = OpenDatabase("d:\nwind.mdb")
	  Set rs = db.OpenRecordset("Select * from Customers", dbOpenDynaset)
	
	  Set Data1.Recordset = rs
	  Text1.DataField = "CompanyName"
	  End Sub
	
	7. Save the project and run it. Note that the intrinsic DAO data control is
	  bound to the DAO 3.6 recordset, and that the text box displays the value in
	  the specified bound column from the first record.
	
	8. Click Refresh DataControl to execute the Refresh method of the intrinsic data
	  control, and note that the specified error message is generated:
	
	  Run-time error '3343': Unrecognized Database format.
	
	9. Replace the code in the cmdRefresh_Click() event procedure with the following
	  three statements:
	
	  rs.Requery
	  Set Data1.Recordset = rs
	  Data1.UpdateControls
	
	10. Run the project, click Refresh DataControl, and note that the error message
	  is not generated.
	
	You can test the effect of the requery and rebind of the source DAO 3.6 recordset
	by the Visual Basic form if you make a change to the data in the table with
	Microsoft Access, and then click Refresh DataControl on the form to refresh the
	bound recordset.
	
	Additional query words: 3343
	
	======================================================================
	Keywords          : kbAccess kbDAOsearch kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbDAOsearch kbAccessSearch kbZNotKeyword6 kbAccess2000 kbSDKDAOSearch kbZNotKeyword2 kbVB500Search kbAccess2000Search kbVB500 kbSDKSearch kbAccess2000SR1 kbSDKDAO350 kbSDKDAO360 kbSDKDAO351
	Version           : :3.5,3.51,3.6,5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
