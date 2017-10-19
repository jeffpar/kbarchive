---
layout: page
title: "Q269522: BUG: Data Doesn't Revert to Original Value After CancelUpdate"
permalink: /kb/269/Q269522/
---

## Q269522: BUG: Data Doesn't Revert to Original Value After CancelUpdate

	Article: Q269522
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC210 kbMDAC210SP2 kbMDAC250 kbMDAC260
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - Microsoft Data Access Components versions 2.1, 2.1 (GA), 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - Microsoft Data Access Components versions 2.1, 2.1 (GA), 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update a bound text box by setting its text property in code, and then
	you call a CancelUpdate method, the value in the field does not revert to its
	original value.
	
	RESOLUTION
	==========
	
	Instead of setting the text property of the bound text box, set the value of the
	underlying recordset field directly, as follows:
	
	  Adodc1.Recordset!LastName = "Smith"
	
	The bound text box should update itself after you run the code. Subsequent calls
	to the CancelUpdate method then work as expected, and change the text box
	contents back to its original value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Data Project in Microsoft Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click Components, and then click Microsoft ADO Data
	  Control from the list to load the ADO Data Control into the toolbox.
	
	3. Insert a Microsoft ActiveX Data Objects (ADO) data control, two text boxes,
	  and two command buttons on to Form1.
	
	4. Set the ConnectionString property of the ADO Data Control to:
	
	  Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\Program Files\Microsoft Visual Studio\VB98\NWIND.MDB
	
	5. Set the Caption property of the first command button to "Copy" and set the
	  Caption property of the second command button to "Cancel Update".
	
	6. In the Click event of the command button labeled "Cancel Update", enter the
	  following code:
	
	  Adodc1.Recordset.CancelUpdate
	  Adodc1.Recordset.MoveNext
	  Adodc1.Recordset.MovePrevious
	
	7. In the Click event of the command button labeled "Copy", enter the following
	  code:
	
	  Text1.Text = Text2.Text
	
	8. Set the Recordsource property of the ADO data control to:
	
	  SELECT * FROM Employees
	
	9. Set the DataSource property of the Text1 text box to "adodc1", and set the
	  DataField property to "LastName".
	
	10. Run the project. You should see "Davolio" display in the bound text box, and
	  the text "text2" display in the unbound text box.
	
	11. Make a change to the name in Text1, and then click the Cancel command
	  button. The name "Davolio" reappears in the bound text box.
	
	12. Click the Copy command button. The value in the bound text box changes to
	  "text2".
	
	13. Click the Cancel command button. Nothing happens. The value in the
	  underlying recordset is permanently changed by the MoveNext method call and
	  the update is not cancelled.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC210 kbMDAC210SP2 kbMDAC250 kbMDAC260 kbMDAC250SP1 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
