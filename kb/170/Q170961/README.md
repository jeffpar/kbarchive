---
layout: page
title: "Q170961: HOWTO: Change an Access Database Password"
permalink: kb/170/Q170961/
---

## Q170961: HOWTO: Change an Access Database Password

	Article: Q170961
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 5.0 7.0 97
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVB kbhowto kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Access 7.0 and 97 MDB files can be password protected. This article
	demonstrates how to change the password associated with a Microsoft Access 7.0
	or 97 MDB file.
	
	MORE INFORMATION
	================
	
	Microsoft Access 7.0 and 97 use Jet 3.0 and Jet 3.5 MDB files, respectively. For
	the code below to work correctly, you must have a reference to an appropriate
	Microsoft DAO Object Library.
	
	The database password can be changed by using the NewPassword method. The
	following example changes the password of the MyDB.mdb database from
	"MyPassword1" to "MyPassword2":
	
	     Sub ChangeDBPassword ()
	        Dim Db As Database
	
	        Set Db = OpenDatabase("C:\My Documents\MyDB.mdb",True, _
	           False,";pwd=MyPassword1")
	        Db.NewPassword "MyPassword1","MyPassword2"
	        Db.Close
	     End Sub
	
	The code above does not handle the possibility of trying to open the database
	with the wrong password, which would generate an error. Every application that
	tries to open password protected databases should be able to handle this
	scenario.
	
	To remove password protection from a database, use an empty string for the second
	parameter of the NewPassword method. For example:
	
	     Db.NewPassword "MyPassword2", ""
	
	To assign a database password to a MDB that is currently without a password, use
	an empty string for the first parameter of the NewPassword method. For example:
	
	     Db.NewPassword "", "MyPassword1"
	
	
	You can also change, assign or remove a database password using the
	CompactDatabase method. When using this method on a database with a password,
	the Optional arguments must be provided:
	
	     Sub CompactDB ()
	        ' Compact the database, supplying the password
	        DBEngine.CompactDatabase "C:\My Documents\MyDB.mdb", _
	           "C:\My Documents\Test.MDB", dbLangGeneral, dbVersion30, _
	           ";pwd=MyPassword1"
	     End Sub
	
	The new database has the same password as the old. Here you compact a MDB with a
	password of "MyPassword1" and give the new database a password of "MyNewPWD":
	
	     DBEngine.CompactDatabase "C:\My Documents\Test.mdb", _
	        "C:\My Documents\TestII.MDB", dbLangGeneral & ";pwd=MyNewPWD", _
	        dbVersion30, ";pwd=MyPassword1"
	
	With this line, you can remove the database password:
	
	     DBEngine.CompactDatabase "C:\My Documents\TestII.mdb", _
	        "C:\My Documents\TestIII.MDB", dbLangGeneral & ";pwd=", _
	        dbVersion30, ";pwd=MyNewPWD"
	
	This line compacts a database without a password and assigns a password of
	"NewPassword" to the new database:
	
	     DBEngine.CompactDatabase "C:\My Documents\TestIII.mdb", _
	       "C:\My Documents\TestIV.mdb", dbLangGeneral & _
	       ";pwd=NewPassword", dbVersion30
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVB kbhowto kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess97 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbAccess97Search kbAccess95Search kbVB400Search kbVB400 kbZNotKeyword3 kbAccess700
	Version           : 4.0 5.0 7.0 97
	
	=============================================================================
	
