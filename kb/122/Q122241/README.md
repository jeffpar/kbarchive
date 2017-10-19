---
layout: page
title: "Q122241: ADT2: WRKGADM.EXE File Installed Without Being Specified"
permalink: /kb/122/Q122241/
---

## Q122241: ADT2: WRKGADM.EXE File Installed Without Being Specified

	Article: Q122241
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you install a custom application that you created with the Microsoft Access
	Developer's Toolkit (ADT) version 2.0, a file named WRKGADM.EXE is installed in
	the application directory even though you did not specify this file for
	installation when you created the application's custom Setup.
	
	CAUSE
	=====
	
	The WRKGADM.EXE file is the Workgroup Administrator utility and is required to
	create a system database if you do not include one with your run-time
	application. Setup copies the WRKGADM.EXE file to the application directory and
	then runs it to create the system database. After running the file, Setup is
	unable to delete it.
	
	RESOLUTION
	==========
	
	If you include a system database file called SYSTEM.MDA with your custom
	application, Setup will not copy the WRKGADM.EXE file to the application
	directory. If you want to include a system database with a name other than
	SYSTEM.MDA, include the custom system database and any file called SYSTEM.MDA
	(for instance, a text file) with your application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access Developer's
	Toolkit version 2.0. This problem no longer occurs in the Microsoft Access
	Developer's Toolkit version 7.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
