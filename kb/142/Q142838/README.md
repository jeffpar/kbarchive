---
layout: page
title: "Q142838: PRB: DBList BoundText Property Ignored with Table Type"
permalink: /kb/142/Q142838/
---

## Q142838: PRB: DBList BoundText Property Ignored with Table Type

{% raw %}

	Article: Q142838
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When setting a reference to the BoundText property of a bound DBList control,
	the value is ignored if the RecordsetType property is set to '0 - Table'.
	
	RESOLUTION
	==========
	
	The DBList control utilizes the FindFirst method of a data control. The
	FindFirst method does not work against a table type recordset. The dynaset type
	does not exhibit these traits, and therefore, can be used as a work around for
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic, or select New Project from the File menu if it is already
	  running. Form1 is created by default.
	
	2. Add a single data control to Form1.
	
	3. Change these properties of Data1:
	
	     DatabaseName:      BIBLIO.MDB
	     RecordSource:      Authors
	     RecordsetType:      0 - Table
	
	4. Add a single DBList control to the form.
	
	5. Change these properties of DBList1:
	
	     RowSource:      Data1
	     ListField:      Au_ID
	
	6. In the reposition event of the Data control add this code:
	
	        Private Sub Data1_Reposition()
	            DBList1.BoundText = Data1.Recordset.Fields(0)
	        End Sub
	
	7. Run the project and change to different records in the database via the data
	  control VCR controls. You will note that there is no change in the list while
	  moving through the records. If the recordset type is changed to Dynaset the
	  DBList will behave as expected.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 KBDSE kbDSupport kbVBp kbControl
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
