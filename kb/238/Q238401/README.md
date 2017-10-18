---
layout: page
title: "Q238401: PRB: Unrecognized Database Format Error Upgrading to Access 2000"
permalink: kb/238/Q238401/
---

## Q238401: PRB: Unrecognized Database Format Error Upgrading to Access 2000

	Article: Q238401
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,2.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtophit kbAccess kbATM kbCtrl kbDAOsearch kbJET kbOLEDB kbVBp500 kbVBp600 kbGrpDSMDAC
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Access 2000 
	- Microsoft Access 2002 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to gain access to an Access 2000 or Access 2002 database, you may
	receive one of the following errors within your Visual Basic program.
	
	If you are using Microsoft ActiveX Data Objects (ADO) (or the ADO Data Control),
	you receive the following error message:
	
	  Run-time error -2147467259 Unrecognized Database Format XXX
	
	If you are using Data Access Objects (DAO) (or the DAO generic Data Control), you
	receive the following error message:
	
	  Run-time error 3343 Unrecognized Database Format XXX
	
	CAUSE
	=====
	
	Access 2000 and Access 2002 use the Jet 4.0 engine, which creates Jet 4.0 format
	database files. Jet 3.5 components do not recognize such a format.
	
	- If you are using ADO, you get error -2147467259 when you try to connect to
	  your Access 2000 or 2002 database through the Microsoft.Jet.OLEDB.3.51
	  provider.
	
	- If you are using DAO, you get error 3343 when you use the Microsoft DAO 3.51
	  Object Library.
	
	- The DAO generic Data Control does not work against Access 2000 or 2002
	  databases and always generates error 3343 unless it is used as instructed in
	  the "Resolution" section of this article. This occurs because this control is
	  based on Jet 3.51 and only recognizes Jet 3.51 (or before) database formats.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Install Visual Studio Service Pack 4 or later. (If you are using the Data
	  Control, change its Connect property to Access 2000.)
	
	- For ADO (or the ADO Data Control), use the Microsoft.Jet.OLEDB.4.0 provider.
	
	- For DAO, add a reference to the Microsoft DAO 3.6 Object Library.
	
	- If you use the generic Data Control, you must open a DAO 3.6 recordset and
	  then assign it to be the source of the Data Control as follows:
	
	  Option Explicit
	  Private daoDB36 As Database
	  Private rs As DAO.Recordset
	  Dim sPath As String
	
	  Private Sub Form_Load()
	  sPath = _
	  "C:\Program Files\Microsoft Office\Office\Samples\Northwind.mdb"
	  Set daoDB36 = DBEngine(0).OpenDatabase(sPath)
	  Set rs = daoDB36.OpenRecordset("Customers")
	  Set Data1.Recordset = rs
	  End Sub
	
	- This problem has been addressed by Visual Basic Service Pack 4. A new value
	  (Access 2000) has been added for the Connect property that will allow the DAO
	  Data Control to open Access 2000 databases.
	
	STATUS
	======
	
	This problem was first corrected in Visual Studio 6.0 Service Pack Service Pack
	4. For additional information about Visual Studio service packs, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	REFERENCES
	==========
	
	For more information on Jet 4.0, refer to the Access 2000 documentation.
	
	For more information on ADO and DAO, refer to the Visual Basic documentation.
	
	For more information, query on "Unrecognized Database Format" in the MSDN Library
	that is supplied with Visual Basic.
	
	Additional query words: error message -2147467259 3343
	
	======================================================================
	Keywords          : kbtophit kbAccess kbATM kbCtrl kbDAOsearch kbJET kbOLEDB kbVBp500 kbVBp600 kbGrpDSMDAC kbMDAC260 kbADO260 kbAccess2002 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess2000 kbAccess2002 kbZNotKeyword2 kbVB500Search kbVB600Search kbAccess2000Search kbAccess2002Search kbVB500 kbVB600 kbMDACSearch kbMDAC250 kbMDAC260
	Version           : :2.5,2.6,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
