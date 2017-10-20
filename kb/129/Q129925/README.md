---
layout: page
title: "Q129925: Requery Method Not Available on PassThrough Queries"
permalink: /kb/129/Q129925/
---

## Q129925: Requery Method Not Available on PassThrough Queries

{% raw %}

	Article: Q129925
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic version 4.0 adds the Requery method for the RecordSet object. This
	method updates the data in a Recordset object by re-executing the query on which
	the object is based. When you use Requery, all changes made to the data in the
	underlying table by other users are displayed in the Recordset, and the first
	record in the Recordset becomes the current record. This method is not available
	for RecordSets created using the OpenRecordset method with the dbSQLPassthrough
	option.
	
	CAUSE
	=====
	
	The Requery method requires that column IDs are maintained and that column
	datatypes and names are the same. For passthrough queries Visual Basic passes
	the query through to the ODBC database without parsing it and has no way of
	knowing that these values will be maintained, so it disallows requery. The same
	is true for Crosstab queries without fixed column lists.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can test whether or not your RecordSet can be Requeried by checking the
	Restartable property of your RecordSet. The Restartable property returns a value
	that indicates whether a Recordset object supports the Requery method.
	
	Steps to Reproduce Behavior in Visual Basic Version 4.0
	-------------------------------------------------------
	
	You will need an ODBC datasource to query against. This example assumes a DSN
	called "Pubs" exists with table named "Authors".
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form1_Click procedure.
	
	     Sub Form_Click()
	        Dim MyDB As Database, MyData As Recordset
	        Set MyDB = DBEngine.Workspaces(0).OpenDatabase("", False, False, _
	           "ODBC;DSN=pubs;uid=sa;pwd=")
	        Set MyData = MyDB.OpenRecordset("Select * From authors",_
	           dbOpenDynaset, dbSQLPassThrough)
	        'other code here
	        If MyData.Restartable = True Then '<== This will always be false.
	           MsgBox "This RecordSet will be Requeried."
	           MyData.Requery
	        Else
	           MsgBox "This RecordSet will not be Requeried."
	           MyData.Close
	        End If
	        MyDB.Close
	     End Sub
	
	3. Start the program by choosing Run Start (or press the F5 key).
	
	The MyData.Restartable property will always be False, since the sample uses
	ExecuteSQL.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbDatabase kbODBC 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
