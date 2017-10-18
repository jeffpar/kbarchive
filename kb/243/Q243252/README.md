---
layout: page
title: "Q243252: BUG: Converting Access97 MDB to Access 2000 Format Using DAO 3.6"
permalink: kb/243/Q243252/
---

## Q243252: BUG: Converting Access97 MDB to Access 2000 Format Using DAO 3.6

	Article: Q243252
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbGrpDSVBDB kbDSupport kbDAO360bug
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you convert an Access97 (Jet 3.5) database to Access 2000 (Jet 4.0) format
	using DAO 3.6 and then attempt to open it with Access 2000, a "Convert Database"
	dialog box appears. This dialog box is misleading because the database is in JET
	4.0 format.
	
	RESOLUTION
	==========
	
	Although Access 2000 displays a dialog box indicating that the database needs to
	be converted, the database actually is in Jet 4.0 format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Create a new Visual Basic Standard EXE project and then paste the following code
	in the General Declarations section and set a reference to DAO 3.6. This example
	uses an Access97 Biblio.mdb:
	
	  Sub Form_Click()
	
	  Dim db As DAO.Database
	  Set db = DBEngine(0).OpenDatabase("D:\Program Files\Microsoft Visual Studio\VB98\Biblio.mdb")
	  Debug.Print db.Version
	  db.Close
	
	  dbPath = "D:\Program Files\Microsoft Visual Studio\VB98\"
	  DBEngine.CompactDatabase "D:\Program Files\Microsoft Visual Studio\VB98\Biblio.mdb", _
	                              "D:\Program Files\Microsoft Visual Studio\VB98\Biblio2k.mdb", _
	                              dbLangGeneral, dbVersion40, dbLangGeneral
	
	  Set db = DBEngine(0).OpenDatabase("D:\Program Files\Microsoft Visual Studio\VB98\Biblio2k.mdb")
	  Debug.Print db.Version
	  db.Close
	  MsgBox "Conversion Done!"
	  End Sub
	
	Run the project and click the Form.
	
	Alternatives to DAO 3.6 CompactDatabase for converting are:
	
	- Convert the database with JRO (Jet Replication objects) as shown in the
	  Microsoft Knowledge Base article Q230501 mentioned in the REFERENCES section
	  following. However, this still results in the same "Convert Database" dialog
	  box when opening with Access 2000.
	
	- Create a new database with DAO 3.6 and import all objects from previous
	  database.
	
	REFERENCES
	==========
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q230501 HOWTO: Compacting Microsoft Access Database via ADO
	
	  Q141796 HOWTO: Identify the Jet Database Engine Components
	
	  Q225048 INFO: Issues Migrating from DAO/Jet to ADO/Jet
	
	  Q196809 PRB: CompactDatabase Method Requires Locale to Convert 2.0 MDB
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbGrpDSVBDB kbDSupport kbDAO360bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
