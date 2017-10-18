---
layout: page
title: "Q308702: BUG: Jet VB Expression Service Changes FPU Precision to 64 Bits"
permalink: kb/308/Q308702/
---

## Q308702: BUG: Jet VB Expression Service Changes FPU Precision to 64 Bits

	Article: Q308702
	Product(s): Microsoft C Compiler
	Version(s): 3.51,4.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVCDB
	Last Modified: 13-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft OLE DB Provider for Jet, versions 3.51, 4.0 
	- The C Run-Time (CRT) 
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Microsoft Jet SQL query with a Visual Basic for Applications
	(VBA) expression in it, the floating point unit (FPU) precision of an
	application may be changed to 64 bits. For example, the SQL statement might
	resemble the following:
	
	  Select Left([City],4) AS MyCity FROM Customers
	
	CAUSE
	=====
	
	Most applications that are built with the C/C++ Run-time Library or with
	Microsoft Visual Basic use the default 53-bit precision. However, when using Jet
	queries you may find that the precision changes to 64 bits.
	
	Expsrv.dll internally implements its own InitFP() function. This function calls
	the FPU's FNINIT function, which changes the precision to 64 bits. InitFP() is
	called at the initialization of the VBA expression service. The initialization
	occurs when you first use a VBA-intrinsic function in a SQL statement. If your
	application does not maintain a default workspace (for instance, an open
	connection handle), InitFP is called each time that a connection is made to the
	database. InitFP is also called when an exception occurs.
	
	RESOLUTION
	==========
	
	To work around this problem, write your application to set FPU precision values
	when needed.
	
	For example, assume that you have a function which requires 53-bit precision
	(doing some flointing point calls in the C runtime). You can change the
	precision at the beginning of a function and then change it back at the end of
	the scope of your function. To do this, you can write a helper C++ class that
	sets the FPU precision on construction and resets it on destruction; for
	example:
	
	  class C53Precision
	  {
	  DWORD m_dwOldPrecision;
	  public:
	   C53Precision(){ 
	  	 m_dwOldPrecision= _controlfp(0,0)&_MCW_PC;
	  	 _controlfp(_PC_53, _MCW_PC); 
	   }
	  ~C53Precision(){_controlfp(m_dwOldPrecision, _MCW_PC); }
	  };
	
	The class constructor changes the precision to 53 bits, and the destructor
	changes it back to the original precision.
	
	Alternatively, because only Jet database calls which use VBA built-in functions
	change the FPU precision, you can change the precision after those Jet calls;
	for example:
	
	  CRecordset rs(&db);
	  rs.Open(CDatabase::dbDynaset, szSQL);
	  _controlfp(_PC_53, _MCW_PC); //Change the precision back to 53 bits.
	
	For Visual C++ developers, another alternative is to use 64-bit precision
	thoughout your application. You can do this by linking to fp10.obj, which
	changes CRT's precision to 64 bits.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following code reproduces this problem using Visual C++ and the JET ODBC
	driver:
	
	  	dwPrec= _control87( 0, 0)&_MCW_PC;
	  	// dwPrec is PC_53 here.
	  	CDatabase db;
	  	db.OpenEx("DSN=accessdb");
	  	CRecordset rs(&db);
	  	rs.Open(CRecordset::dynaset , "Select Left([City],4) AS MyCity FROM Customers;");
	  	dwPrec= _control87( 0, 0)&_MCW_PC;
	  	// dwPrec is now PC_64.
	
	The following code does not change the precsion because no VBA functions are used
	in the query:
	
	  	CDatabase db;
	  	db.OpenEx("DSN=accessdb");
	  	CRecordset rs(&db);
	  	rs.Open(CRecordset::dynaset , "Select * from customers");
	  	dwPrec= _control87( 0, 0)&_MCW_PC;
	  	// dwPrec is PC_53.
	
	Be aware that the precision terminology can be confusing; some documentation may
	refer to total size of the floating point number whereas other documentation may
	refer to precision bits:
	
	_PC_24 (24 bits precision) (32 bit length)
	_PC_53 (53 bits precision) (64 bit length) ---CRT's default value
	_PC_64 (64 bits precision) (80 bit length) ---INTEL's default value
	
	Also note that the FPU precision has thread affinity; changing the precision for
	one thread does not change it for others.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVCDB 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbOLEDBSearch kbOLEDBProvJet351 kbOLEDBProvJet400 kbVC600 kbVC32bitSearch kbCRT kbOLEDBProvSearch
	Version           : :3.51,4.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
