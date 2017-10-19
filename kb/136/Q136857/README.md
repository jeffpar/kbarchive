---
layout: page
title: "Q136857: How the EXCLUSIVE Setting Interacts With OPEN DATABASE Command"
permalink: /kb/136/Q136857/
---

## Q136857: How the EXCLUSIVE Setting Interacts With OPEN DATABASE Command

	Article: Q136857
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a database is opened in SHARED mode, it is automatically marked READONLY in
	the Database Designer. Therefore, the object definitions in the database cannot
	be modified. This article describes the settings that affect whether a database
	is opened in EXCLUSIVE or SHARED mode.
	
	MORE INFORMATION
	================
	
	The most straightforward way to make sure you open a database in the mode you
	want is to explicitly use the keywords EXCLUSIVE or SHARED in the OPEN DATABASE
	command. If these keywords are left off, Visual FoxPro uses the global EXCLUSIVE
	setting currently in effect. This setting is originally read from the registry,
	but it can be changed with either the SET EXCLUSIVE command or through the menus
	(on the Tools menu, click Options. Then click Data, and select the Open
	Exclusive check box.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
