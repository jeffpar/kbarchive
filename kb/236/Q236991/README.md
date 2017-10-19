---
layout: page
title: "Q236991: PRB: Unrecognized Database Format Error w/ Access 2000 Database"
permalink: /kb/236/Q236991/
---

## Q236991: PRB: Unrecognized Database Format Error w/ Access 2000 Database

	Article: Q236991
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbVC600 kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening a database created with Access 2000 through MFC DAO classes in
	Visual C++, you get the following error message:
	
	  Unrecognized database format.
	
	You also get this message when trying to create a new MFC DAO database SDI or MDI
	project using MFC AppWizard.
	
	CAUSE
	=====
	
	This error message occurs because the MFC DAO classes that ship with Visual C++
	6.0 load DAO 3.5 (Dao350.dll) by default. DAO 3.5 uses Jet 3.5, which can only
	open Jet 3.5 format (or earlier) databases. Access 2000 creates Jet 4.0 format
	database files, which are unrecognizable to Jet 3.5. To successfully open an
	Access 2000 database using the MFC DAO classes, you need to use DAO 3.6
	(Dao360.dll). DAO 3.6 uses Jet 4.0, which can open any available Access database
	format.
	
	RESOLUTION
	==========
	
	Currently, there is no workaround to using AppWizard with Access 2000 data
	sources.
	
	For your application to use version 3.6 of DAO, you must update the version of
	MFC at run time to MFC version 6.01. To do this depends on whether you are
	building the application to use the MFC DLL or to build with the static
	libraries for MFC.
	
	If you are linking with the MFC DLL, you can specify that you want MFC to use DAO
	3.6 by inserting the following line of code before you open an Access 2000
	database:
	
	  AfxGetModuleState()->m_dwVersion = 0x0601;
	
	Insert this line in the CYourApp::Initinstance() function of your program. If you
	are building with the static MFC libraries, following are the steps to get
	static builds of MFC to use DAO 3.6:
	
	1. Modify the Daocore.cpp file in the MFC SRC directory. You will receive the
	  following comment:
	
	  // Determine whether to use DAO 3.6, 3.5, or 3.0
	  // Use DAO 3.0 if DLL build and not built with MFC 4.21 or later
	  // Use DAO 3.6 if MFC 6.01 or later
	  // otherwise, DAO 3.5
	
	  Add the following lines:
	
	  #undef _MFC_VER
	  #define _MFC_VER 0x0601
	
	2. Rebuild the library for the variant you need. For example, to build the
	  static MFC library, debug version, non-Unicode, with no browser files use the
	  following command at the command prompt in the MFC\SRC folder:
	
	    nmake DEBUG=1
	
	  for release:
	     nmake DEBUG=0
	
	  for unicode builds:
	     nmake DEBUG=1  UNICODE=1
	     nmake DEBUG=0  UNICODE=1
	
	NOTE: You need to make certain that the compiler tools are in your path. If not,
	you may need to run the Vcvars32.bat file located in the Visual C++ \BIN folder.
	Also note that when you build these new versions of the libraries, they will be
	copied over the top of the existing ones in the MFC\LIB folder so you may want
	to save the old ones first.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	
