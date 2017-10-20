---
layout: page
title: "Q196809: PRB: CompactDatabase Method Requires Locale to Convert 2.0 MDB"
permalink: /kb/196/Q196809/
---

## Q196809: PRB: CompactDatabase Method Requires Locale to Convert 2.0 MDB

{% raw %}

	Article: Q196809
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAccess kbJET KbVBA kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbgrpdsvc
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic for Applications versions 5.0, 6.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use the Data Access Object (DAO) 3.5 CompactDatabase method
	to convert a Jet 2.0 .mdb file to a Jet 3.0 file format, the resulting .mdb file
	is still in a Jet 2.0 file format.
	
	RESOLUTION
	==========
	
	DAO 3.5 requires you to provide explicitly the locale argument of the
	CompactDatabase when converting .mdb file formats.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Both Microsoft Jet 3.0 and 3.5 use the same file format, which is a different
	file format than the format Jet 2.5 or earlier used. You can convert a .mdb
	database using the CompactDatabase method of the DAO DBEngine object.
	
	Using DAO 3.0 and 3.5 (for Jet 3.0 and 3.5 respectively), you can convert the
	.mdb database as follows:
	
	  DBEngine.CompactDatabase "20.MDB", "30.MDB", dbLangGeneral, dbVersion30
	
	However, if you leave out the locale argument (dbLangGeneral in this case), only
	DAO 3.0 converts the database:
	
	  DBEngine.CompactDatabase "20.MDB", "30.MDB", , dbVersion30
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. With Microsoft Visual Basic 5.0 or 6.0, or with Microsoft Access 97 or other
	  Microsoft Visual Basic for Applications 5.0 or Microsoft Visual Basic for
	  Applications 6.0 applications, create a new project.
	
	2. From the Project menu, choose References and add a reference to the Microsoft
	  DAO 3.5 Object Library.
	
	3. Add a form (Form1) with a command button (Command1) and place the following
	  code in the form's module:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	
	  Const dbPath = "C:\Program Files\ACCESS20\SAMPAPPS\NWIND"
	
	  Dim db As Database
	    Set db = DBEngine(0).OpenDatabase(dbPath)
	    Debug.Print dbPath & " Version:", db.Version
	    db.Close
	
	    DBEngine.CompactDatabase dbPath & ".mdb", _
	                             dbPath & "30.mdb", _
	                             , _
	                             dbVersion30
	
	    Set db = DBEngine(0).OpenDatabase(dbPath & "30")
	    Debug.Print dbPath & "30 Version:", db.Version
	    db.Close
	
	    Kill dbPath & "30.mdb"
	
	  End Sub
	
	NOTE: You must change the dbPath variable to point to a Jet 2.x database.
	
	1. Run the project, open the form, and click the command button. You should get
	  the following output: C:\Program Files\ACCESS20\SAMPAPPS\NWIND Version: 2.0
	  C:\Program Files\ACCESS20\SAMPAPPS\NWIND30 Version: 2.0
	
	2. Replace the CompactDatabase line with the following and run the project
	  again:
	
	  DBEngine.CompactDatabase dbPath & ".mdb", _
	                           dbPath & "30.mdb", _
	                           dbLangGeneral, _
	                           dbVersion30
	
	  The second time you run the project, the output will be as follows:
	  C:\>Program Files\ACCESS20\SAMPAPPS\NWIND Version:       2.0
	  C:\>Program Files\ACCESS20\SAMPAPPS\NWIND30 Version:     3.0
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Help; search on: "CompactDatabase Method".
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Malcolm Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbJET KbVBA kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbgrpdsvc 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess97 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbAccess97Search kbVBASearch kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
