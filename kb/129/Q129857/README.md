---
layout: page
title: "Q129857: When to Use the New 3.0 DAO TypeLib in Visual Basic"
permalink: /kb/129/Q129857/
---

## Q129857: When to Use the New 3.0 DAO TypeLib in Visual Basic

	Article: Q129857
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDatabase
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic version 4.0 includes two TypeLibs for data access objects (DAO):
	
	- Microsoft DAO 2.5/3.0 Compatibility Library TypeLib
	
	- Microsoft DAO 3.0 Object Library
	
	This article explains when and why you should upgrade to the newer 3.0 TypeLib.
	
	MORE INFORMATION
	================
	
	The Microsoft DAO 2.5/3.0 Compatibility Library is provided for compatibility
	with older DAO methods. Objects and methods that have changed significantly or
	were replaced in the newer DAO 3.0 TypeLib are preserved in the DAO 2.5/3.0
	TypeLib. These include such things as: DynaSets, SnapShots, and Tables as well
	as methods (CreateDynaset, CreateSnapshot, and so on) that are specific to these
	objects.
	
	The DAO 2.5/3.0 also provides access to the new, recommended DAO 3.0 methods
	(OpenRecordset, and so on). This TypeLib is provided so that your Visual Basic
	version 3.0 code will port to Visual Basic version 4.0. But once this is
	completed, Microsoft recommends that you convert to the newer DAO 3.0 methods,
	which are available only in Visual Basic version 4.0.
	
	The DAO 3.0 TypeLib is provided for speed and forward compatibility. The older
	DAO methods are not available in the DAO 3.0 TypeLib. It contains only the newer
	and more efficient methods. If your code runs with the DAO 3.0 TypeLib, it will
	run with future versions of of the Microsoft Jet database engine. Microsoft
	recommends that you update your Visual Basic projects so that they run with the
	DAO 3.0 TypeLib.
	
	How to Change the Version of the DAO TypeLib
	--------------------------------------------
	
	You can change the version of the TypeLib that you are using by choosing Tools
	References from the menu. This brings up a dialog with all of the available
	TypeLibs.
	
	Note that if you choose to use the newer DAO 3.0 and continue to use obsolete DAO
	2.5 methods and objects, you may see some unexpected errors. For example, under
	DAO 2.5, the following code is perfectly acceptable:
	
	     Dim DS As Dynaset
	     Dim DB As Database
	     Set DB = OpenDatabase("Biblio.MDB")
	     Set DS = DB.CreateDynaset("Authors")
	
	However, if you chose to use the DAO 3.0 Library, the references to Dynaset and
	CreateDynaset will generate this error:
	
	  User-defined type not defined
	
	This is because the Dynaset object and CreateDynaset method do not exist in the
	DAO 3.0 Library. The code could be rewritten properly as:
	
	     Dim RS As RecordSet
	     Dim DB As Database
	     Set DB = DBEngine.Workspaces(0).OpenDatabase("Biblio.Mdb")
	     Set RS = DB.OpenRecordSet("Authors", dbOpenDynaset)
	
	Note that when you reload a Project that was saved with a particular TypeLib,
	Visual Basic detects this and loads the appropriate TypeLib.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbDatabase 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
