---
layout: page
title: "Q172101: PRB: &quot;Data Type Conversion Error&quot; When Using a Data Control"
permalink: /kb/172/Q172101/
---

## Q172101: PRB: &quot;Data Type Conversion Error&quot; When Using a Data Control

{% raw %}

	Article: Q172101
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Deleting the data from a text box bound to certain data types, such as an
	integer or date, causes Error 3421:
	
	  "Data Type Conversion Error."
	
	NOTE: If you are using a dbGrid, it's Error Method will produce Error 16389.
	
	CAUSE
	=====
	
	This is designed behavior of DAO. The data control is sending a NULL string to
	DAO and DAO attempts to coerce it to a number and fails. This is not a problem
	with the Data Control: The same behavior can be observed without the use of a
	Data Control, using only code. For example:
	
	     Set db = OpenDatabase("nwind.mdb", False, False)
	     Set rs = db.OpenRecordset("select shipvia from orders", dbOpenDynaset)
	     rs.Edit
	     rs(0) = ""
	
	RESOLUTION
	==========
	
	Use the following code in the Data Controls Validate method to allow the edit to
	occur as expected by user:
	
	     Private Sub Data1_Validate(Action As Integer, Save As Integer)
	        If Text1.DataChanged Then
	           Text1.DataChanged = False 'So this data is not saved
	           Data1.UpdateRecord  ' This saves the data that
	                               ' may have changed in the other controls
	
	           ' Now clear the numeric field
	           Data1.Recordset.Edit
	           Data1.Recordset![Year Born] = Null
	           Data1.Recordset.Update
	       End If
	     End Sub
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place a data control and a textbox on a form.
	
	2. Bind the textbox to an integer column of a table.
	
	3. Delete the data from the text box.
	
	4. Move off the record. Note that you get the "data type conversion error in the
	  error event of the data control. This happens with Jet 3.5, 3.0, or 2.5, but
	  does not happen in 16-bit Visual Basic.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdse kbDSupport kbVBp400 kbVS97
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
