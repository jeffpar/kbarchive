---
layout: page
title: "Q294166: FIX: DataGrid Control Row Property Fails to Update for Last Row"
permalink: kb/294/Q294166/
---

## Q294166: FIX: DataGrid Control Row Property Fails to Update for Last Row

	Article: Q294166
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4
	Operating System(s): 
	Keyword(s): kbCtrl kbDataBinding kbGrpDSVBDB kbDSupport kbATM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Row property of the DataGrid control may not consistently reflect the
	correct row number of the last blank row. If the last row is blank (that is, if
	there is a blank row at the bottom of the DataGrid with an asterisk in the box
	to the left of the blank row to indicate that you may add a new record in the
	DataGrid), and if you use Row Selectors (the boxes next to rows in the DataGrid,
	which allow you to select entire rows) to select the non-blank rows, the
	incorrect row is displayed when you repeatedly select between the last row and
	another row of the DataGrid.
	
	However, the value of the Row property is the previous non-blank row that you
	selected; that is, the Row property is not updated when you click the last,
	blank row. If you check the Row property in the RowColChange event of the
	DataGrid, for example, the RowColChange event fires correctly, but the Row
	property fails to update; thus, the row number of the last blank row is not
	consistently updated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 5. For additional
	information about Visual Studio service packs, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a test project as follows:
	
	  a. In Visual Basic, create a new Data project. frmDataEnv is created by
	     default.
	
	  b. Add an ActiveX Data Objects (ADO) Data Control (ADOC1), a DataGrid
	     (DataGrid1), and a TextBox (Text1) to frmDataEnv.
	
	  c. Set the properties of ADODC1 as follows:
	
	  
	
	  ConnectionString     Provider=Microsoft.Jet.OLEDB.3.51;Data Source=C:\Program Files
	                    \Microsoft Visual Studio\vb98\Biblio.mdb;
	  RecordSource         Select * From Titles
	
	     NOTE: The ConnectionString property is a single string that should not be
	     broken up into multiple lines.
	
	     If necessary, modify the ConnectionString property to connect to your local
	     copy of the Biblio.mdb file that comes with Visual Basic. Also, you may
	     use Microsoft.Jet.OLEDB.4.0 instead of Microsoft.Jet.OLEDB.3.51
	
	  d. Set the properties of DataGrid1 as follows:
	
	  
	
	  DataSource     ADODC1
	  AllowAddNew    True
	
	  e. In the Code window for frmDataEnv, paste the following code into the
	     RowColChange event procedure for DataGrid1:
	
	  Text1.Text = DataGrid1.Row
	
	2. Follow these steps to test the project:
	
	  a. Press the F5 key to run the project.
	
	  b. Scroll down to the last set of rows in the DataGrid. Click Row Selector
	     for the fourth row from the bottom of the DataGrid. Notice that the text
	     box displays the correct DataGrid row.
	
	  c. Click in one of the cells of the last row. Notice that the text box
	     displays the correct DataGrid row.
	
	  d. Click Row Selector for the fifth row from the bottom. Notice that the text
	     box displays the correct DataGrid row.
	
	  e. Click in one of the cells of the last row. Notice that the text box does
	     not update with the correct DataGrid row but displays the value of the
	     fifth row's Row property.
	
	  f. Press F8 repeatedly to step through the code. Notice that the RowColChange
	     event is fired correctly but the Row property of the DataGrid is not
	     updated correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbDataBinding kbGrpDSVBDB kbDSupport kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4
	Version           : :6.0,6.0 SP3,6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
