---
layout: page
title: "Q321329: HOWTO: Find Jet Database .mdb File Format Version"
permalink: /kb/321/Q321329/
---

## Q321329: HOWTO: Find Jet Database .mdb File Format Version

	Article: Q321329
	Product(s): Microsoft C Compiler
	Version(s): 2.7,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDatabase
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- ActiveX Data Objects (ADO), version 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to convert or compact your database, it is helpful to know the
	version specific details of the Jet Database. This article includes code that
	finds the version of the Jet Database that your application is connected to.
	
	MORE INFORMATION
	================
	
	The following code finds the Jet Database version using Visual C++ and ADO. To
	find the Jet Database version, follow these steps:
	
	1. Copy the following code, and save it as FindJetVersion.cpp:
	
	  #import "c:\program files\common files\system\ado\msado15.dll" rename_namespace("ado20") rename("EOF", "ADOEOF")
	  using namespace ado20;
	
	  struct HandleCOM
	  {
	  	HandleCOM()  { ::CoInitialize(NULL); }
	  	~HandleCOM() { ::CoUninitialize();   }
	  } _HandleCOM_;
	
	  void main()
	  {
	     
	  	
	  	_bstr_t			bstrEmpty(L"");
	      _ConnectionPtr cnDatabase(__uuidof(Connection));
	     _bstr_t strConn( L""); 
	  	
	     strConn = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=F:\\CustomerCode\\_DAO\\DatabaseConversionIssue\\testdbs\\test.mdb";
	     
	     HRESULT hr = cnDatabase->Open(strConn, bstrEmpty,bstrEmpty,-1);
	
	  	if (cnDatabase->Properties->Item["Jet OLEDB:Engine Type"]->Value == (_variant_t)(long)5)
	  		MessageBox(NULL,"It's Jet 4.0 Format Database","Jet File Format version",MB_OK);
	  	else if
	  	   (cnDatabase->Properties->Item["Jet OLEDB:Engine Type"]->Value == (_variant_t)(long)4)
	  	   MessageBox(NULL,"It's lower than Jet 4.0 format Database","Jet File Format version",MB_OK);
	  	else 
	  		MessageBox(NULL,"Couldn't determine the version of Access File","Jet file version",MB_OK);
	
	  }
	
	NOTE: Depending on your system, you may have to change the paths for #import and
	file location.
	
	2. On the File menu in Visual C++, click Open to open FindJetVersion.cpp that
	  you just saved.
	
	3. On the Build menu, click Build to build FindJetVersion.exe.
	
	4. A dialog box appears with the following message:
	
	  This build command requires an active project workspace. Would you like to create a default project workspace?
	
	  Click Yes to build FindJetVersion.exe.
	
	REFERENCES
	==========
	
	
	Additional query words: vcwd jet version format
	
	======================================================================
	Keywords          : kbProgramming kbDatabase 
	Technology        : kbVCsearch kbAudDeveloper kbADOsearch kbVC600 kbVC32bitSearch kbADO270
	Version           : :2.7,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
