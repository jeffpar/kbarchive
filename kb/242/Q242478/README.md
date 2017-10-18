---
layout: page
title: "Q242478: PRB: DAO Recordset RecordCount Incorrect When Based on Text File"
permalink: kb/242/Q242478/
---

## Q242478: PRB: DAO Recordset RecordCount Incorrect When Based on Text File

	Article: Q242478
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDAO350 kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbDAO360
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Jet Text ISAM Driver to open a Recordset based on a delimited or
	fixed width text file, the count returned from the RecordCount property is
	incorrect.
	
	DAO 3.51 and DAO 3.6 may yield different results, however both are incorrect.
	
	Testing text files with a varying number of rows and types of delimiters yielded
	the following results:
	
	+---------------------------------------------------------+
	| Type of File          | Actual Rows | 3.51 RecordCount* | 
	+---------------------------------------------------------+
	| Tab-delimited         | 17          | 22                | 
	+---------------------------------------------------------+
	| CSV                   | 20          | 27                | 
	+---------------------------------------------------------+
	| Semicolon delimited   | 29          | 42                | 
	+---------------------------------------------------------+
	| Fixed Width           | 30          | 32                | 
	+---------------------------------------------------------+
	| Fixed Width           | 60          | 65                | 
	+---------------------------------------------------------+
	| Semicolon delimited** | 3           | 3                 | 
	+---------------------------------------------------------+
	
	*The RecordCount returned when using DAO 3.6 are different from the values
	earlier.
	**A file with a very small number of rows may return the correct record count.
	
	RESOLUTION
	==========
	
	If you require an accurate record count of the Recordset, add a user defined
	counter within a loop, incrementing it by one as you loop through the entire
	Recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a standard exe project in Visual Basic.
	
	2. Choose References from the Project menu and select the Microsoft DAO Library.
	
	3. Paste the following code into the form code window in the form load event.
	
	  Dim dbstext As DAO.Database
	  Dim rst1 As DAO.Recordset
	  Dim lngRecCount As Long
	
	  'C:\MyDir\TextFileDir is a directory where a tab delimited file named Orders.txt resides.
	  'Orders.txt is a comma delimited file created from exporting the Orders table from Northwind.mdb.
	  Set dbstext = OpenDatabase("C:\MyDir\TextRecCount", False, True, "Text;")
	
	  Set rst1 = dbstext.OpenRecordset("Orders")
	
	  rst1.MoveLast
	  MsgBox rst1.RecordCount
	
	  rst1.MoveFirst
	
	  lngRecCount = 0
	
	  rst1.MoveFirst
	
	  Do Until rst1.EOF
	     lngRecCount = lngRecCount + 1
	     rst1.MoveNext
	  Loop
	  MsgBox lngRecCount
	
	4. Run the code and note the different count in the two message boxes.
	
	If you are currently relying on the value of the RecordCount property to control
	the number of times a loop executes, use the Recordset's BOF and EOF Properties
	to determine when the Recordset has reached the first or last record. See the
	loop in the earlier example.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbDAO350 kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbDAO360 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
