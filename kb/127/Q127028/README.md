---
layout: page
title: "Q127028: How to Bind Data Controls Across Multiple Forms in VB 4.0"
permalink: /kb/127/Q127028/
---

## Q127028: How to Bind Data Controls Across Multiple Forms in VB 4.0

{% raw %}

	Article: Q127028
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article shows you how to bind two Data Controls on
	separate forms and have the bound controls updated to scroll through the same
	recordset.
	
	MORE INFORMATION
	================
	
	With Microsoft Visual Basic version 4.0, you can now assign or set the RecordSet
	property of a Data Control to any other recordset -- including an existing
	Dynaset, Snapshot, or Table object. In addition, you can update the bound fields
	of the Data Control to reflect changes in the recordset. This allows all bound
	fields on all open forms to scroll through the same recordset.
	
	Step by Step Example
	--------------------
	
	1. In Visual Basic, start a new project (Alt, F, N). Form1 is created by
	  default. Add a data control (Data1) and two text boxes (text1 and text2) to
	  Form1.
	
	2. Using the following table as a guide, set the following properties of the
	  controls on Form1:
	
	  Control     Property        Value
	  --------------------------------------
	  Data1       DatabaseName    BIBLIO.MDB
	  Data1       RecordSource    Titles
	  Text1       DataSource      Data1
	  Text1       DataField       Title
	  Text2       DataSource      Data1
	  Text2       DataField       Year Published
	
	3. Add the following code to the Load() event of Form1.
	
	     Sub Form1_Load()
	        Data1.Refresh  ' Data control must be refreshed before showing form2.
	        Form2.Show     ' Load second form that refers to data control on
	                       ' this form.
	     End Sub
	
	4. Add a second form to the project (ALT, I, F). Form2 is created by default.
	  Add a data control (Data1) and two text boxes (Text1 and Text2) to Form2.
	
	5. Using the following table as a guide, set the following properties of the
	  controls on Form2:
	
	  Control     Property        Value
	  ----------------------------------
	  Text1       DataSource      Data1
	  Text2       DataSource      Data1
	
	6. Add the following code to the Form_Load event of Form2.
	
	     Sub Form_Load ()
	        Text1.DataField = "Subject"   ' Assign the bound field values.
	        Text2.DataField = "Comments"
	        Set Data1.Recordset = Form1.Data1.Recordset  ' This is the key.
	     End Sub
	
	7. Press the F5 key to run the program. The two forms should display on the
	  screen. When you click either Data Control to scroll through the recordset,
	  the bound fields on both forms will scroll at the same time.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	

{% endraw %}
