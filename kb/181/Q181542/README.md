---
layout: page
title: "Q181542: PRB: Error 13 Type Mismatch Error on DAO OpenRecordset Method"
permalink: /kb/181/Q181542/
---

## Q181542: PRB: Error 13 Type Mismatch Error on DAO OpenRecordset Method

	Article: Q181542
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1 SP2,2.5,2.6,2.7,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAccess kbATM kbDAOsearch kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbmdac270 kbado270
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.1 SP2, 2.5, 2.6, 2.7 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Access 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you dimension an object as a Recordset and then set that object to
	databaseobject.OpenRecordset(source), you may get the following error message:
	
	  Run time error '13': Type mismatch
	
	CAUSE
	=====
	
	If your project contains references to both the Data Access Objects (DAO)
	library and the ActiveX Data Objects (ADO) library, you may see multiple
	Recordset entries in the list box when you dimension the Recordset object. This
	error occurs when you list the ADO library with a higher priority than the DAO
	library in the References dialog box, regardless of which Recordset entry you
	select from the list box.
	
	RESOLUTION
	==========
	
	If you need only the DAO Recordset object, make sure that the reference for the
	DAO object library has a higher priority in the References dialog box, or clear
	the reference to Microsoft ActiveX Data Objects.
	
	If you need to reference and use both DAO and ADO Recordset objects, dimension
	the objects explicitly as follows:
	
	     Dim adoRS As ADODB.Recordset
	     Dim daoRS As DAO.Recordset
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Project menu, select References.
	
	2. In the References dialog box, set references to both the Microsoft Data
	  Access Objects 3.x library and the Microsoft ActiveX Data Objects library.
	
	3. Make sure that the ADO library appears in the list above the DAO library.
	
	4. Place the following code in the General Declarations section of your project:
	
	        Dim dbs AS Database
	        Dim rs AS Recordset  ' When you press the spacebar after "AS," the
	                             ' list box includes multiple Recordset entries.
	                             ' Pick any Recordset item, or type "Recordset."
	
	5. Place this code in the Form_Load procedure:
	
	        Set dbs=OpenDatabase(dbname)
	        Set rs=dbs.OpenRecordset(source)  ' The error occurs when this line
	                                          ' of code executes.
	
	Additional query words: OpenRecordset DAO mismatch run time error 13 type
	
	======================================================================
	Keywords          : kbAccess kbATM kbDAOsearch kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbAccessSearch kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbAccess2000 kbZNotKeyword2 kbVB500Search kbVB600Search kbAccess2000Search kbVB500 kbVB600 kbADO270
	Version           : :2.1 SP2,2.5,2.6,2.7,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
