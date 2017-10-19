---
layout: page
title: "Q137027: BUG: ScrollBars Don't Display on DBList Control"
permalink: /kb/137/Q137027/
---

## Q137027: BUG: ScrollBars Don't Display on DBList Control

	Article: Q137027
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Symptom 1
	---------
	
	When binding a DBList control to a Data control whose RecordSource property is
	set to a Select statement with a Where clause, the ScrollBars do not display on
	the DBList control. This is true even if the number of rows returned by the
	Select statement exceeds the list size of the control (the number of items
	DBList can display without scrolling).
	
	Symptom 2
	---------
	
	Also, if the height of the DBList control is set to display only one item at a
	time, the ScrollBars do not display on the DBList control.
	
	CAUSE
	=====
	
	The DBList ScrollBar relies on the RecordCount property of the RecordSet. When
	using Select with a Where clause in the RecordSource property,
	RecordSet.RecordCount returns a value of 1. Usually this count is less than the
	maximum number of items DBList can display without scrolling, so ScrollBars are
	not displayed.
	
	WORKAROUND
	==========
	
	Listed below are different ways to work around this problem depending on the
	symptoms occurring:
	
	Symptom 1
	---------
	
	- Issue a Recordset.MoveLast before showing the DBList control. For example, if
	  Data1 is the Data control to which DBList is bound, place the following code
	  in the Form_Load event procedure to solve the problem:
	
	     Data1.Refresh
	     Data1.RecordSet.MoveLast
	
	-or-
	
	- Issue a MoveNext enough times so that the RecordCount will return something
	  greater than the number of items that can be visible in the DBList without
	  scrolling. For example, if DBList can display 10 items at one time, place the
	  following code in the Form_Load event procedure, assuming Data1 is the name
	  of the Data Control:
	
	     Data1.Refresh
	     For x% = 0 To 10
	        Data1.RecordSet.MoveNext
	     Next x%
	
	Symptom 2
	---------
	
	- Add the following code in the Activate event of the form that contains the
	  DBList control:
	
	     DBList1.SetFocus
	     SendKeys "{Down}{Up}"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the DBList control included with
	the products listed above. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Symptom 1
	---------
	
	1. Start a new project in Visual Basic 4.0. Form1 is created by default.
	
	2. Add two DBList controls (DBList1 and DBList2) to Form1.
	
	3. Add two Data Controls (Data1 and Data2) to Form1.
	
	4. From the Properties window, set the properties for each control as follows:
	
	  Data1:
	
	        DatabaseName = Biblio.mdb
	        RecordSource = Authors
	        RecordsetType = 1 - Dynaset
	
	  Data2:
	
	        DatabaseName = Biblio.mdb
	        RecordSource = Select Author From Authors where Au_Id > 0
	        RecordsetType = 1 - Dynaset
	
	  DBList1:
	
	        RowSource = Data1
	        ListField = Author
	
	  DBList2:
	
	        RowSource = Data2
	        ListField = Author
	
	5. Press the F5 key to run the application. DBList1 will have a ScrollBar, and
	  DBList2 will not.
	
	Symptom 2
	---------
	
	1. Start a new project in Visual Basic 4.0. Form1 is created by default.
	
	2. Add a Data control and a DBListbox on the form.
	
	3. Set the Data controls Databasename property to "Biblio.mdb"
	
	4. Set the Data controls Recordsource property to "Publishers"
	
	5. Set the DBList controls RowSource property to Data1.
	
	6. Set the DBList controls BoundColumn property to PubID.
	
	7. Set the DBList controls ListField property to Name.
	
	8. Set the height of the DBList control to show only one item at a time.
	
	9. Press the F5 key to run the application.
	
	Additional query words: 4.00 buglist4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
