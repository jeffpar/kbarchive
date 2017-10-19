---
layout: page
title: "Q230485: HOWTO: Create an Access 2000 Database with MFC DAO"
permalink: /kb/230/Q230485/
---

## Q230485: HOWTO: Create an Access 2000 Database with MFC DAO

	Article: Q230485
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbOffice2000 kbGrpDSVCDB kbDAO360
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create an Access 2000 (Jet 4.0) database in Visual
	C++ 6.0. To create an Access 2000 database, it is necessary to use DAO 3.6 by
	setting the version of MFC to 6.01 at run time. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  236991 PRB: Unrecognized Database Format Error with Access 2000 Database
	
	Specify the DAO version explicitly as 0x40 in the CDaoDatabase::Create() method
	as described in the MORE INFORMATION section below.
	
	NOTE: Creating an Access 2000 database requires Jet 4.0 and DAO 3.6 installed on
	the computer. Jet 4.0 is installed with MDAC 2.1 and Office 2000. DAO 3.6 is
	installed with Office 2000.
	
	MORE INFORMATION
	================
	
	Steps to Create Access 2000 Database
	------------------------------------
	
	1. Create an MFC dialog box-based application.
	
	2. Add a command button to the dialog box resource. Add the following code to
	  the command button handler:
	
	  	AfxGetModuleState()->m_dwVersion = 0x0601;
	  	CDaoDatabase db;
	  	db.Create("NewDatabase.mdb",dbLangGeneral,0x40);         
	
	3. Add the following code to Stdafx.h:
	
	  #ifndef _AFX_NO_DAO_SUPPORT
	  #include <afxdao.h>			// MFC DAO database classes.
	  #endif // _AFX_NO_DAO_SUPPORT
	
	4. Compile and run your application.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  236991 PRB: Unrecognized Database Format Error with Access 2000 Database
	
	Additional query words: Access2000 Office2000 Office 2000 DatabaseTypeEnum dbVersion40
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbOffice2000 kbGrpDSVCDB kbDAO360 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
