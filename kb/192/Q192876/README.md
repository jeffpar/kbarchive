---
layout: page
title: "Q192876: BUG: DataFormat Doesn't Behave as Expected Using Datacombo/List"
permalink: kb/192/Q192876/
---

## Q192876: BUG: DataFormat Doesn't Behave as Expected Using Datacombo/List

	Article: Q192876
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After setting the DataFormat property of the DataCombo control, only the top
	item in the list is formatted. Setting the DataFormat property of the DataList
	Control does not format any of the other data in the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Taking into consideration the above mentioned symptoms, it is not advisable to
	use the DataFormat property for the DataCombo or DataList controls at this
	time.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created default.
	
	2. On the components menu, select "Microsoft ADO Data Control 6.0" and
	  "Microsoft DataList Controls 6.0."
	
	3. Add a DataCombo and ADODC to the form.
	
	4. Set the ADODC Properties as follows:
	
	        ConnectionString = DSN set to "Nwind.mdb"
	        RecordSource = Orders
	
	5. Set the DataCombo Properties as follows:
	
	        RowSource = adodc1
	        ListField = OrderDate
	        BoundColumn = OrderDate
	        DataSource = adodc1
	        DataField = OrderDate
	        DataFormat = Date (10-Oct-98)
	
	6. Run the form and note that only the first item in the DataCombo is formatted.
	
	Additional query words: kbDSupport kbdse kbCtrl kbVBp600bug kbVBp kbComboBox
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
