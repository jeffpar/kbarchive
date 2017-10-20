---
layout: page
title: "Q164238: ACC97: Duplicate Relationships Multiply in Back-End Database"
permalink: /kb/164/Q164238/
---

## Q164238: ACC97: Duplicate Relationships Multiply in Back-End Database

{% raw %}

	Article: Q164238
	Product(s): Microsoft SourceSafe
	Version(s): 97
	Operating System(s): 
	Keyword(s): _IK kbAccess kbSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	You notice duplicate relationships appearing in a data (back-end) database under
	one or both of the following conditions:
	
	- When you import tables into a new database, and the tables you are importing
	  are links to a data database.
	
	- When you check in, check out, or get the latest version of the Data and Misc.
	  Objects in a database under source code control that contains linked tables
	
	This article assumes that you are familiar with Visual Basic for Applications and
	with creating Microsoft Access applications using the programming tools provided
	with Microsoft Access. For more information about Visual Basic for Applications,
	please refer to the "Building Applications with Microsoft Access 97" manual.
	
	This article also assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or the Help topics
	available from the Visual SourceSafe Help menu.
	
	RESOLUTION
	==========
	
	Run the following custom procedure periodically in your data database to remove
	the duplicate relationships that are created when you import linked tables, or
	when you check out, check in, or get the latest version of Data and Misc.
	Objects in a database under source code control.
	
	Create a module in your data database and type the following procedure:
	
	     Function CleanMeUp()
	        Dim db As Database
	        Dim relFirst As Relation, relSecond As Relation
	        Dim bDifferent As Boolean
	        Dim iField As Integer
	
	        Set db = CurrentDb()
	        For Each relFirst In db.Relations()
	           For Each relSecond In db.Relations()
	              ' Make sure the names are different, the foreign tables are
	              ' the same, the tables are the same, and they both have the
	              ' same number of fields.
	              If (relFirst.Name <> relSecond.Name) And _
	              (relFirst.ForeignTable = relSecond.ForeignTable) And _
	              (relFirst.Table = relSecond.Table) And _
	              (relFirst.Fields.Count = relSecond.Fields.Count) Then
	                 bDifferent = False
	                    For iField = 0 To relFirst.Fields().Count - 1
	                     ' If any of the fields are different, these two rels
	                     ' are not duplicates.
	                        If (relFirst.Fields(iField).Name <> _
	                        relSecond.Fields(iField).Name) Or _
	                        (relFirst.Fields(iField).ForeignName <> _
	                        relSecond.Fields(iField).ForeignName) Then _
	                           bDifferent = True
	                    Next iField
	                 ' If you don't find any differences, then delete the
	                 ' second rel.
	                 If Not bDifferent Then
	                    db.Relations.Delete relSecond.Name
	                 End If
	              End If
	           Next relSecond
	        Next relFirst
	     End Function
	
	To run this function, type the following line in the Debug window, and then press
	ENTER.
	
	  CleanMeUp
	
	After the procedure runs, click Relationships on the Tools menu, or open the
	MSysRelationships system table in your data database and note that duplicate
	relationships are gone.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access 97. This
	problem no longer occurs in Microsoft Access 97 Service Release 1.
	
	
	MORE INFORMATION
	================
	
	The sections that follow contain steps to reproduce the problem in two different
	scenarios. To prepare for either example, follow the next 9 steps first.
	
	CAUTION: Following the steps in this example will modify the sample database
	Northwind.mdb. You may want to back up the Northwind.mdb file and perform these
	steps on a copy of the database.
	
	1. Start Microsoft Access and open the sample database Northwind.mdb.
	
	2. On the Tools menu, click Options.
	
	3. In the Options dialog box, click the View tab.
	
	4. Under the View tab, click System Objects, and then click OK.
	
	5. Open the MSysRelationships table and note the number of rows in the table.
	
	6. On the File menu, click New Database. Create a new blank database called
	  Front1.mdb.
	
	7. On the File menu, point to Get External Data, and then click Link Tables.
	
	8. In the Link dialog box, locate the sample database Northwind.mdb, and then
	  click the Link button. Northwind.mdb is installed by default in your \Program
	  Files\Microsoft Office\Office\Samples folder.
	
	9. In the Link Tables dialog box, click the following tables, and then click
	  OK:
	
	  Categories
	  Customers
	  Employees
	  Order Details
	  Orders
	  Products
	  Shippers
	  Suppliers
	
	Steps to Reproduce Problem by Importing Linked Tables
	-----------------------------------------------------
	
	1. Perform the nine steps at the beginning of this section.
	
	2. On the File menu, click New Database. Create a new blank database called
	  Front2.mdb.
	
	3. On the File menu, point to Get External Data, and then click Import.
	
	4. In the Import dialog box, locate Front1.mdb, and then click the Import
	  button.
	
	5. In the Import Objects dialog box, click the following tables:
	
	  Categories
	  Customers
	  Employees
	  Order Details
	  Orders
	  Products
	  Shippers
	  Suppliers
	
	6. Click the Options button, and then click Relationships. Click OK.
	
	7. Open the sample database Northwind.mdb.
	
	8. Open the MSysRelationships table. Note that the number of rows in the table
	  is greater than the number you noted the first time you opened it.
	
	Steps to Reproduce Problem in a Database Under Source Code Control
	------------------------------------------------------------------
	
	In order to follow these steps, you must have both the Source Code Control
	component of Microsoft Office 97 Developer Edition Tools and source code control
	software, such as Microsoft Visual SourceSafe, installed on your computer.
	
	1. Perform the nine steps at the beginning of this section.
	
	2. Add Front1.mdb to source code control by pointing to SourceSafe on the Tools
	  menu, and then click Add Database to SourceSafe. Follow the instructions on
	  your screen to add the database to a SourceSafe project.
	
	3. On the Tools menu, point to SourceSafe and then click Get Latest Version.
	
	4. In the Get Objects from SourceSafe dialog box, click Data and Misc. Objects,
	  and then click OK.
	
	5. Open the sample database Northwind.mdb.
	
	6. Open the MSysRelationships table. Note that the number of rows in the table
	  is greater than the number you noted the first time you opened it.
	
	Additional query words: VSS ACCSCC SCC source code duplicate multiple
	
	======================================================================
	Keywords          : _IK kbAccess kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe500
	Version           : 97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
