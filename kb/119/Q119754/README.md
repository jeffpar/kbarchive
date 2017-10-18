---
layout: page
title: "Q119754: ADT/ODE: Compile Error When Running ADT or ODE Application"
permalink: kb/119/Q119754/
---

## Q119754: ADT/ODE: Compile Error When Running ADT or ODE Application

	Article: Q119754
	Product(s): Microsoft Access Distribution Kit
	Version(s): 2.0 7.0 97
	Operating System(s): 
	Keyword(s): kberrmsgkbfaq
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you run a custom application that you created with the Microsoft Office 97
	Developer Edition Tools or the Microsoft Access Developer's Toolkit, you receive
	a compile error. The same application runs correctly when you run it with the
	retail version of Microsoft Access.
	
	CAUSE
	=====
	
	This compile error will occur in Microsoft Access 97 or Microsoft Access for
	Windows 95 version 7.0 if your application uses methods or properties in a
	referenced database that has not been included in the application distribution
	set or if Microsoft Access cannot establish a valid reference. (Wizards in
	Microsoft Access 97 and in Microsoft Access 7.0 are shipped in a compiled state
	and cannot be referenced.)
	
	A similar error can occur in Microsoft Access version 2.0 if you make a reference
	in your application's code to functions or variables defined in the WZLIB.MDA
	file (which cannot be legally distributed with your application), or to any
	other library database that is not loaded in your application.
	
	
	RESOLUTION
	==========
	
	Remove or modify the code in your application that refers to the WZLIB.MDA file,
	or to any other file that is not referenced (in Microsoft Access 97 and 7.0) or
	not loaded (in version 2.0).
	
	MORE INFORMATION
	================
	
	Microsoft Access 97 and Microsoft Access 7.0
	--------------------------------------------
	
	The Microsoft Access 97 and Microsoft Access 7.0 run-time environment uses the
	same executable file (Msaccess.exe) as the full Microsoft Access environment. To
	test the run-time application on a computer with full Microsoft Access
	installed, start the application using the run-time switch on the command line.
	For example, the following command line starts Microsoft Access and opens the
	Northwind sample database in the run-time environment.
	
	NOTE: In the following example, an underscore (_) at the end of a line is used as
	a line-continuation character. Remove the underscore from the end of the line
	when re-creating this example.
	
	Microsoft Access 97:
	
	  C:\Program Files\Microsoft Office\Office\MSAccess.exe /Runtime _
	  C:\Program Files\Microsoft Office\Office\Samples\Northwind.mdb
	
	Microsoft Access 7.0:
	
	  C:\MSOffice\Access\MSAccess.exe /Runtime C:\MSOffice\Access\Samples_
	  \Northwind.mdb
	
	If a compile error occurs on one computer but not when opened as a run-time
	application on the development computer, you may have referenced methods or
	procedures contained in a file that you failed to distribute.
	
	To check the references that are available on the development computer, open the
	application in full Microsoft Access. On the View menu, click Code to open a
	code module. On the View menu, click Object Browser. If the drop down list
	labeled Libraries/Databases contains a custom database and if you have used a
	function, method, or property from it, you must distribute that custom database
	with your application.
	
	Microsoft Access Version 2.0
	----------------------------
	
	The WZLIB.MDA library database contains routines and utilities used by the
	Microsoft Access Wizards and by other code. For example, the Reattach NWIND
	module in the SOLUTION.MDB database (a sample database shipped with Microsoft
	Access version 2.0) includes a function that refers to WZLIB.MDA.
	
	If you include code in your application that refers to the WZLIB.MDA file, and
	then run your application with the retail version of Microsoft Access, the
	application will run correctly. However, if you run the Setup Wizard to create
	distribution disks for your application, and correctly modify the initialization
	(.INI) file for the application to remove the Wizard files from the [Libraries]
	section, you will receive a compile error when you run the application as a
	run-time application. Note that error-trapping routines that you may have
	included in your code will not be called, because these routines cannot trap
	compile errors.
	
	To discover which section of your code is causing the compile error, run your
	application with the retail version of Microsoft Access, but with your
	application's custom .INI file. For example, to run an application called
	MYAPP.MDB with a custom .INI file called MYAPP.INI, create an icon with the
	following command line.
	
	NOTE: This example assumes that you have Microsoft Access installed in the ACCESS
	directory on drive C, and that the MYAPP.MDB application is in the MYAPP
	directory on drive C.
	
	  C:\ACCESS\MSACCESS.EXE C:\MYAPP\MYAPP.MDB /INI C:\MYAPP\MYAPP.INI
	
	This command will run the MYAPP.MDB application with only the libraries specified
	in the [Libraries] section of the custom MYAPP.INI file. Compile your
	application's code at this point to locate the cause of the compile error.
	
	NOTE: If you open a module in Design view and then choose Compile Loaded Modules
	from the Run menu, code in any form or report modules will not be compiled. To
	compile code in form and report modules, the forms and reports must be open in
	Design view.
	
	REFERENCES
	==========
	
	For additional information on compile errors, please see the following article
	in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q160870
	  TITLE : ACC: VBA Functions Break in Database with Missing References
	
	For more information about compile errors, search the Help Index for "compiling,
	resolving errors," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words: autodialer reattachtables runtime
	
	======================================================================
	Keywords          : kberrmsg kbfaq
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : 2.0 7.0 97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
