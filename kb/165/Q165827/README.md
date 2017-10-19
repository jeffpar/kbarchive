---
layout: page
title: "Q165827: UT97: &quot;Overflow&quot; or &quot;Division by Zero&quot; Error Upsizing Table"
permalink: /kb/165/Q165827/
---

## Q165827: UT97: &quot;Overflow&quot; or &quot;Division by Zero&quot; Error Upsizing Table

	Article: Q165827
	Product(s): Microsoft Access Distribution Kit
	Version(s): 97
	Operating System(s): 
	Keyword(s): kberrmsg kbother
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Upsizing Tools 97 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you use the Microsoft Access 97 Upsizing Tools to export a table to
	Microsoft SQL Server, you receive one of the following errors when you try to
	export a large table with few or no records:
	
	  Overflow
	
	  -or-
	
	  Division by zero
	
	This article assumes that you are familiar with Visual Basic for Applications and
	with creating Microsoft Access applications using the programming tools provided
	with Microsoft Access. For more information about Visual Basic for Applications,
	please refer to your version of the "Building Applications with Microsoft
	Access" manual.
	
	RESOLUTION
	==========
	
	You must add error handling to the UT_ComputeLocksNeeded procedure in the
	Upsizing Wizard database. The extra code sets the number of locks needed to 0
	when the number of records in the table is small and the number of fields in the
	table is large:
	
	1. Start Microsoft Access 97 and open the Upsizing Wizard database, Wzcs97.mda.
	  This database is installed by default in the \Program Files\Microsoft
	  Office\Office folder.
	
	  NOTE: If you have already used the Upsizing Wizard in the current session of
	  Microsoft Access, you must quit and restart Microsoft Access before you can
	  open the Wizard database.
	
	2. Open the UT_modUpsizerMain module in Design view.
	
	3. Add code to the UT_ComputeLocksNeeded procedure so it looks like the
	  following. Note that the four lines you need to add are commented to make
	  them easier to see:
	
	        '-------------------------------------------------------------------
	        ' UT_ComputeLocksNeeded
	        '
	        ' Computes the number of SQL Server locks needed to upsize a given
	        ' table. The formula used is:
	        '
	        '       r / (p \ s)
	        '
	        ' where:
	        '       s = max record size (we don't average text fields)
	        '       p = SQL Server page size less overhead
	        '       r = number of records in the table
	        '-------------------------------------------------------------------
	        Function UT_ComputeLocksNeeded(tdf As TableDef) As Long
	        On Error GoTo Error_out                ' Add this line.
	        Dim fld As Field
	        Dim lngRecSize As Long
	        Dim intBytesPerPage As Integer
	
	        ' Get record size.
	        For Each fld In tdf.Fields
	           lngRecSize = lngRecSize + fld.Size
	        Next
	
	        ' Get bytes available per page.
	        intBytesPerPage = UT_SQL_PAGE_SIZE - UT_SQL_PAGE_OVERHEAD
	
	        ' Compute number of pages, and thus locks, needed.
	        UT_ComputeLocksNeeded = tdf.RecordCount / (intBytesPerPage \ _
	           lngRecSize)
	        Exit Function                          ' Add this line.
	        Error_out:                             ' Add this line.
	        UT_ComputeLocksNeeded = 0              ' Add this line.
	        End Function
	
	4. Save the UT_modUpsizerMain module.
	
	5. On the Debug menu, click "Compile and Save All Modules."
	
	6. Close the UT_modUpsizerMain module and the Wzcs97 database.
	
	7. Open your database and upsize your table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access Upsizing Tools
	97.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Microsoft Access 97 and open the sample database Northwind.mdb.
	
	2. Create a module and type the following procedure. This procedure creates an
	  empty table with 100 text fields of 50 characters each:
	
	        Function MakeUpsizeTable()
	        Dim db As Database
	        Dim td As TableDef
	        Dim fd As Field
	        Dim i As Integer
	        Set db = CurrentDb
	        Set td = db.CreateTableDef("tblUpsizeTable")
	        For i = 1 to 100
	           Set fd = td.CreateField("Field" & i, dbText, 50)
	           td.Fields.Append fd
	        Next i
	        db.TableDefs.Append td
	        RefreshDatabaseWindow
	        Msgbox "Table Created."
	        End Function
	
	3. To create the table, type the following line in the Debug window, and then
	  press ENTER:
	
	  ?MakeUpsizeTable
	
	4. Close the module. You do not need to save it.
	
	5. On the Tools menu, point to Add-Ins, and then click Upsize to SQL-Server.
	
	6. Follow the instructions on your screen to log on to your SQL Server database
	  and upsize the table tblUpsizeTable. Note that you receive the error message
	  "Overflow."
	
	REFERENCES
	==========
	
	You can download the Microsoft Access Upsizing Wizard 97 free of charge from the
	Microsoft Access Developer Forum Web site at the following address:
	
	  http://www.microsoft.com/Accessdev/a-free.htm
	
	Click the link to Microsoft Access Upsizing Tools 97 to download and install the
	wizard.
	
	For additional information another problem that could cause the Overflow error
	message, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q279454 ACC97: "Overflow" Error Message When You Try to Upsize to SQL Server
	  2000
	
	Additional query words: uw divide
	
	======================================================================
	Keywords          : kberrmsg kbother 
	Technology        : kbAccessSearch kbAccess97Search kbAccessUpsizingTools97
	Version           : :97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
