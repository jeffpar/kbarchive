---
layout: page
title: "Q131816: JULIA CHILD: README.WRI Contents (Part 1 of 2)"
permalink: /kb/131/Q131816/
---

## Q131816: JULIA CHILD: README.WRI Contents (Part 1 of 2)

{% raw %}

	Article: Q131816
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Excel for Windows 95, version 7.0 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual Basic for Applications, the CopyFromRecordset method is used to return
	data from a Data Access Object. It will return only data and will not return the
	database's field headings.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact the Microsoft fee-based
	consulting line at (800) 936-5200. For more information about the support
	options available from Microsoft, please see the following page on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The CopyFromRecordset method is used to return data from an open database to an
	active worksheet. The method does not have an argument that will return the
	field headings of the database. Additional code is needed to place the field
	headings on the worksheet. The following example demonstrates the code needed to
	return the field headings as well as the data.
	
	Example
	-------
	
	Before you type the following code on a module sheet, you must create a reference
	to the Microsoft DAO Object Library. To do this, activate the Module sheet,
	click References on the Tools menu, and select the Microsoft DAO 3.5 Object
	Library check box (the 3.0 Object Library check box in version 7.0).
	
	  Sub Returning_Field_Headers_Example()
	     Dim db As database
	     Dim rs As Recordset
	     Dim vaTmp() As String
	     Dim vaNew As Variant
	     Dim dbLocation As String
	
	     ' Opens the database and creates a record set
	     ' dbLocation could be any directory where the Access files are
	     ' stored.
	
	     dbLocation = "c:\access\sampapps\nwind.mdb"
	     ' In version 97 use the sample file northwind.mdb usually located
	     ' in c:\program files\microsoft office\office\samples\northwind.mdb
	     Set db = DBEngine.Workspaces(0).OpenDatabase(dbLocation)
	     Set rs = db.OpenRecordset("Orders")
	
	     ' This section fills in the field names from the Orders table.
	     ReDim vaTmp(rs.Fields.Count)
	     For x = 0 To rs.Fields.Count - 1
	         vaTmp(x + 1) = rs.Fields(x).Name
	     Next
	     Sheets("Sheet1").Cells(1, 1).Resize(1, rs.Fields.Count) = vaTmp
	
	     ' Retrieves the data to the sheet. The sheet should be called
	     ' "Sheet1"
	     numberOfRows = Sheets("Sheet1").Cells(2, 1).CopyFromRecordset(rs)
	     Sheets("Sheet1").Activate
	
	  End Sub
	
	REFERENCES
	==========
	
	For more information about the Visual Basic CopyFromRecordset method, click the
	Index tab in Microsoft Excel Help, type the following text
	
	  " copyfr " (without the quotation marks)
	
	double-click the selected text, and then double-click CopyFromRecordset Method in
	the Topics Found dialog box to go to the CopyFromRecordset Method topic.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbExcel95 kbExcel95Search kbExcel97Search kbZNotKeyword3 kbExcelWinSearch
	Version           : 1995
	
	=============================================================================
	

{% endraw %}
