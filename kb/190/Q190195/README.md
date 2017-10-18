---
layout: page
title: "Q190195: HOWTO: Extract Information from Excel Sheet with DAO"
permalink: kb/190/Q190195/
---

## Q190195: HOWTO: Extract Information from Excel Sheet with DAO

	Article: Q190195
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDAO350 kbDatabase kbIISAM kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- The DAO SDK 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Excel ISAM driver does not dynamically convert datatypes.
	
	MORE INFORMATION
	================
	
	If there is a column in your Excel spreadsheet that contains both text and
	numbers, the ISAM will not be able to correctly interpret which datatype it
	should be. Make sure that all the cells in a column are formatted to be the same
	datatype. For example, you might have following data in four columns in an Excel
	sheet:
	
	  male   female children teens
	  11     cc     78       ee
	  22     xx     33       ff
	  45     uu     56       oo
	
	If you try to read the data through ISAM driver against the whole sheet, you will
	get the null values for first row. If you want to avoid this, create named
	ranges: one containing only the header information and another containing the
	data information. For example:
	
	  named range 'myRange1' :
	  male     female    children     teens
	
	  named range 'myRange2' :
	  11   cc   78   ee
	  22   xx   33   ff
	  45   uu   56   oo
	
	Now you can connect to Excel and request information only from the particular
	named range. However, in one range, a particular column can contain only one
	type of data.
	
	How to Create a Range
	---------------------
	
	Follow these steps in order to create a range:
	
	1. Highlight the data.
	
	2. From the menu bar, click Insert, and then click Name.
	
	3. Click Define, and then click Range name.
	
	Note: The Refers to box will refer to your highlighted range. This should grow
	and shrink as data is inserted and deleted.
	
	To retrieve your data, use the range name you just created for the table name in
	your select statement.
	
	Excel Steps
	-----------
	
	1. Create the Excel file, test.XLS, with following data in sheet1:
	
	  excel File : test.xls with the following entries:
	
	       male  female    children   teens
	        11    cc       78           ee
	        22    xx       33           ff
	        45    uu       56           oo
	
	2. Create the named range, myRange1 and myRange2, in the sheet containing the
	  appropriate data.
	
	     named range : myRange1
	
	     male female children teens
	
	     named range  : myRange2
	
	     11     cc   78   ee
	     22     xx   33   ff
	     45     uu   56   oo
	
	Visual Basic Steps
	------------------
	
	1. Create a new standard EXE project called "DAO_EXCEL."
	
	2. From the Project menu, click References, and then select the Microsoft DAO
	  3.5 Library check box.
	
	3. Place a CommandButton on the form.
	
	4. Paste the following code in the form code window:
	
	        private Sub Command_click1
	
	        im dbtmp As DAO.Database
	        im tblObj As DAO.TableDef
	        im rs As DAO.Recordset
	
	        et dbtmp = OpenDatabase_
	             ("<complete path>\test.xls", False, True, "Excel 8.0;")
	
	        DoEvents
	
	        Set rs = dbtmp.OpenRecordset("select * from `myRange2`")
	        While Not rs.EOF
	            For x = 0 To rs.Fields.Count - 1
	                Debug.Print rs.Fields(x).Value
	            Next
	            rs.MoveNext
	        Wend
	        End Sub
	
	        Note the reverse apostrophe "`" while specifying the range
	        name(myrange2).
	
	The following results are as expected:
	
	 11
	 cc
	 78
	 ee
	 22
	 xx
	 33
	 ff
	 45
	 uu
	 56
	 oo
	
	REFERENCES
	==========
	
	Please refer to the documentation for how to connect to Excel through DAO.
	Another good reference will be the upcoming ADO->Excel reference.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbDAO350 kbDatabase kbIISAM kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbDAOsearch kbZNotKeyword6 kbSDKDAOSearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbSDKSearch
	Version           : WINDOWS:5.0,6.0; winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
