---
layout: page
title: "Q237285: SAMPLE: Daoprop.exe Sets a Custom Property on an Access Database"
permalink: /kb/237/Q237285/
---

## Q237285: SAMPLE: Daoprop.exe Sets a Custom Property on an Access Database

	Article: Q237285
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbDAOsearch kbVC kbVC600 kbGrpDSVCDB kbDSupport
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Daoprop.exe sample demonstrates how to add a custom property to a Microsoft
	Access database by using the Microsoft Foundation Class Library (MFC) Data
	Access Objects (DAO) classes and the underlying DAO OLE interfaces.
	
	The sample is based on another Microsoft Knowledge Base article, which
	demonstrates the same concept by using Microsoft Visual Basic for Applications
	in Microsoft Access 97. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q178745 ACC: Using DAO to Set and Retrieve Custom Database Properties
	
	The MFC DAO classes directly expose a subset of the DAO hierarchy. However, the
	MFC DAO classes do not expose all of the functionality that is available to
	developers who are using Microsoft Visual Basic, Visual Basic for Applications,
	or the DAO Software Development Kit (SDK) in Visual C++. It is possible to use
	the complete hierarchy indirectly by using the underlying DAO OLE interfaces
	that the MFC DAO classes wrap.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Daoprop.exe
	
	Release Date: Sept. 7, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The Daoprop.exe sample contains the following files:
	
	+---------------------------------+
	| File name           | Size      | 
	+---------------------------------+
	| Daoproperty.asp     | 42.8 KB   | 
	+---------------------------------+
	| Daoproperty.clw     | 1.54 KB   | 
	+---------------------------------+
	| Daoproperty.cpp     | 3.34 KB   | 
	+---------------------------------+
	| Daoproperty.dsp     | 4.42 KB   | 
	+---------------------------------+
	| Daoproperty.dsw     | 545 bytes | 
	+---------------------------------+
	| Daoproperty.h       | 1.23 KB   | 
	+---------------------------------+
	| Daoproperty.ncb     | 57.0 KB   | 
	+---------------------------------+
	| Daoproperty.opt     | 47.5 KB   | 
	+---------------------------------+
	| Daoproperty.rc      | 9.74 KB   | 
	+---------------------------------+
	| Daopropertydoc.cpp  | 9.25 KB   | 
	+---------------------------------+
	| Daopropertydoc.h    | 1.68 KB   | 
	+---------------------------------+
	| Daopropertyview.cpp | 1.67 KB   | 
	+---------------------------------+
	| Daopropertyview.h   | 1.61 KB   | 
	+---------------------------------+
	| Db1.mdb             | 58.0 KB   | 
	+---------------------------------+
	| Mainfrm.cpp         | 1.70 KB   | 
	+---------------------------------+
	| Mainfrm.h           | 1.37 KB   | 
	+---------------------------------+
	| Resource.h          | 739 bytes | 
	+---------------------------------+
	| Stdafx.cpp          | 213 bytes | 
	+---------------------------------+
	| Stdafx.h            | 1.19 KB   | 
	+---------------------------------+
	| Daoproperty.ico     | 1.05 KB   | 
	+---------------------------------+
	| Daoproperty.rc2     | 403 bytes | 
	+---------------------------------+
	| Daopropertydoc.ico  | 1.05 KB   | 
	+---------------------------------+
	
	The DAO interfaces are defined in the Dbdaoint.h file in the VC98\Include folder.
	When you use the DAO OLE interfaces, it is often necessary to use the VARIANT
	and BSTR data types. These data types can be conveniently manipulated by using
	the wrapper class COleVariant. To initialize a VARIANT object with a BSTR
	string, use the VT_BSTRT type specified to ensure that the string is created as
	an ANSI string in ANSI builds, and as a Unicode string in Unicode builds. For
	additional information about strings and DAO, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q140599 PRB: MFC DAO Functions Accepting COleVariant Strings May Fail
	
	For a demonstration of how to initialize a COleVariant object and extract values
	from it, see the DAOVIEW sample in the Microsoft Developer Network (MSDN).
	
	The project included in the self-extracting executable is an MFC single document
	project. Its functionality is contained in the three menu handlers
	OnPropertyCreate, OnPropertyGet, and OnPropertySet. These functions call the
	CreateCustomProp, GetCustomProp, and SetCustomProp functions, respectively.
	
	Several concepts are demonstrated by this sample:
	
	- Creating a COleVariant of type VT_BSTRT in OnPropertyCreate and
	  OnPropertyGet.
	
	- Using the V_BSTRT macro to extract a string from a COleVariant in
	  OnPropertyGet.
	
	- Using the DAO OLE interfaces in CreateCustomProp, GetCustomProp, and
	  SetCustomProp.
	
	- Using the DAO_CHECK macro to test the success of a DAO call and throw an
	  exception in case of failure.
	
	- Using the TRY, CATCH_ALL, END_CATCH_ALL and THROW_LAST macros to correctly
	  handle exceptions when using the DAO OLE interfaces.
	
	To check the custom property in your Access database file, open the file in
	Access 97, on the File menu, click Database Properties, and then click the
	Custom tab.
	
	REFERENCES
	==========
	
	For additional information about using DAO functions, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q178745 ACC: Using DAO to Set and Retrieve Custom Database Properties
	
	  Q140599 PRB: MFC DAO Functions Accepting COleVariant Strings May Fail
	
	For more information, please see the DAOVIEW sample, which is located on the
	Microsoft Developer Network (MSDN) Web Workshop:
	
	  http://msdn.microsoft.com/library/devprods/vs6/visualc/vcsample/_sample_mfc_daoview.htm
	  (http://msdn.microsoft.com/library/devprods/vs6/visualc/vcsample/_sample_mfc_daoview.htm)
	
	For a description of how to use the DAO OLE interfaces, see the MFC technical
	note #54 in the MSDN.
	
	Additional query words: Daoprop
	
	======================================================================
	Keywords          : kbfile kbSample kbDAOsearch kbVC kbVC600 kbGrpDSVCDB kbDSupport 
	Component         : dao
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
