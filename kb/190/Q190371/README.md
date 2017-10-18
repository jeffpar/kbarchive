---
layout: page
title: "Q190371: HOWTO: Use Bound Controls with an ADO Recordset"
permalink: kb/190/Q190371/
---

## Q190371: HOWTO: Use Bound Controls with an ADO Recordset

	Article: Q190371
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbADO200 kbCtrl kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 k
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to use a bound ListBox, ComboBox, or Grid control with an ActiveX
	Data Objects (ADO) recordset, then use the DataList, DataCombo, or DataGrid
	control instead of the DBList, DBCombo, or DBGrid control. If you try to use
	DBList, DBCombo, or DBGrid, you get the following error message when trying to
	set the RowSource for either the DBList or the DBCombo, or the DataSource for
	the DBGrid:
	
	  No Compatible DataSource was found for this control. Please add an intrinsic
	  DataControl or a Remote DataControl to the form.
	
	MORE INFORMATION
	================
	
	The complex binding that ADO and the ADO Data Control use is IRowset based, but
	the complex binding behavior that the DBList, DBCombo, and DBGrid use is
	ICursor-based.
	
	The following example uses the ADO Data Control to create the ADO recordset.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a Standard EXE project in Visual Basic.
	
	2. Click Components on the Project menu and select the following: Microsoft ADO
	  Data Control 6.0 Microsoft Data Bound List Controls 6.0 Microsoft DataList
	  Controls 6.0 (OLEDB)
	
	3. Add an ADO Data Control to the form.
	
	4. Set the following properties on the ADO Data Control:
	
	  ConnectionString: dsn=<yourdsn>
	
	  -or-
	
	  Provider=SQLOLEDB.1;Persist Security Info=False;User ID=sa; Initial
	  Catalog=pubs;Data Source=<yourserver>
	
	5. To create each of the preceding samples, click the ellipsis (...) and
	  complete the dialog boxes:
	
	  RecordSource: select * from authors
	
	6. Add a DBList and a DataList control to the form.
	
	7. Set the following properties on the DataList control:
	
	  RowSource: ADODC1
	  Listfield: au_lname
	
	8. Run the form and the DataList displays a list of names.
	
	9. Set the RowSource property of the DBList and the error message appears.
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbcode kberrmsg kbADO200 kbCtrl kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC250 kbMDAC260 kbMDAC270
	Version           : :2.5,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
