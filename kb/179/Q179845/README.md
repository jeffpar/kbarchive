---
layout: page
title: "Q179845: PRB: 32-bit BASIC Does Not Convert UNICODE/ANSI in Binary Field"
permalink: /kb/179/Q179845/
---

## Q179845: PRB: 32-bit BASIC Does Not Convert UNICODE/ANSI in Binary Field

{% raw %}

	Article: Q179845
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbCodeSnippet
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications versions 5.0, 6.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a binary field to store text in a Microsoft Jet 2.5 or earlier
	database, 32-bit applications cannot read text written by 16-bit applications
	and vice versa.
	
	CAUSE
	=====
	
	Unlike Memo fields, the 32-bit programs do no automatic ANSI/UNICODE conversion
	on binary fields.
	
	RESOLUTION
	==========
	
	1. Use the StrConv() function to perform explicit ANSI/UNICODE conversion.
	
	-or-
	
	2. Use MEMO fields instead of OLE/Binary fields for storing text. This is the
	  preferred method.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Because the nature of data in a binary field is not predetermined, BASIC does no
	conversion when reading or writing data to these fields. This behavior creates a
	problem when 16-bit and 32-bit programs inter-operate, because 16-bit programs
	represent text as ANSI characters (1 byte per character) and 32-bit programs
	normally represent text as UNICODE characters (2 bytes per character).
	
	32-bit programs can represent text as ANSI, but require explicit use of the
	StrConv() function to translate between UNICODE and ANSI, for example:
	
	     strANSI = StrConv(strUNICODE, vbFromUnicode)
	
	     strUNICODE = StrConv(strANSI, vbUnicode)
	
	This function can be applied to reading and writing BLOB data as well.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Jet 2.x database (DB1.MDB) using Access 2.0 or the VisData utility
	  in Visual Basic 4.0 16-bit.
	
	2. Create a table (Table1) with a numeric field (ID) and an OLE/Long Binary
	  field (BLOB).
	
	3. In Visual Basic 4.0 16-bit or Access 2.0, create a form with a CommandButton
	  (Command1) and the following code:
	
	        Private Sub Command1_Click()
	        Dim db As Database, rs As Recordset
	        Set db = DBEngine(0).OpenDatabase("DB1.MDB")  ' VB4
	        Set db = CurrentDB()                          ' Access 2.0
	        Set rs = db.OpenRecordset("Table1")
	        rs.AddNew
	        rs!id = 1
	        rs!blob = "Test Message"
	        rs.Update
	        rs.Close
	        db.Close
	        End Sub
	
	4. Run the form and click the CommandButton to add a row to the database.
	
	5. In Visual Basic 4.0 32-bit, Visual Basic 5.0, or Access 95 or later, create a
	  form with two CommandButtons (Command1 and Command2) and the following code:
	
	        Private Sub Command1_Click()
	        Dim db As Database, rs As Recordset
	        Set db = DBEngine(0).OpenDatabase("d:\win16app\vb4\db1.mdb")
	        Set rs = db.OpenRecordset("Table1")
	        Debug.Print rs!id, rs!blob
	        Debug.Print rs!id, StrConv(rs!blob, vbUnicode)
	        rs.Close
	        db.Close
	        End Sub
	
	        Private Sub Command2_Click()
	        Dim db As Database, rs As Recordset
	        Set db = DBEngine(0).OpenDatabase("d:\win16app\vb4\db1.mdb")
	        Set rs = db.OpenRecordset("Table1")
	        rs.Edit
	        rs!blob = StrConv("32-bit test message", vbFromUnicode)
	        rs.Update
	        rs.Close
	        db.Close
	        End Sub
	
	  NOTE: You must add a reference to Microsoft Data Access Objects 3.0 or 3.5 if
	  running this code in Visual Basic 4.0 or 5.0 respectively.
	
	6. Run the form and click Command1. The first line of output will contain the ID
	  and a series of question marks illustrating that the ANSI to UNICODE
	  conversion has not taken place. The second line of output, using the
	  StrConv() function, correctly outputs the text.
	
	7. Click Command2 to write converted data. You can click Command1 again to see
	  that the data has been correctly converted from UNICODE to ANSI and back
	  again.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Help Topic: StrConv()
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Malcolm Stewart, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBp400 kbNoKeyWord
	
	======================================================================
	Keywords          : KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess97 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbAccess97Search kbAccess95Search kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3 kbAccess700
	Version           : :4.0,5.0,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
