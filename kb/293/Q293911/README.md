---
layout: page
title: "Q293911: SAMPLE: ABParam.exe Passes a BLOB Parameter with ATL"
permalink: kb/293/Q293911/
---

## Q293911: SAMPLE: ABParam.exe Passes a BLOB Parameter with ATL

	Article: Q293911
	Product(s): Microsoft C Compiler
	Version(s): 6.0,6.0SP3,6.0sp4,6.0sp5
	Operating System(s): 
	Keyword(s): kbfile kbSample kbATL kbOLEDB kbConsumer kbGrpDSVCDB kbGrpDSMDAC tslic_tslic
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 6.0, 6.0SP3, 6.0sp4, 6.0sp5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ABParam.exe sample demonstrates how to pass a large binary object (BLOB) as
	a parameter when using the Active Template Library (ATL) Consumer Templates.
	
	Because the ATL Consumer Templates do not currently allow passing of parameters
	as BLOBs when using a CDynamicParameterAccessor, the Atldbcli.h header file must
	be modified to allow this behavior. This sample contains a modified header file,
	called Atldbcli_new.h, and a simple application that inserts a BLOB value into a
	SQL Server 7.0 or SQL Server 2000 database by using a parameterized INSERT
	statement.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ABParam.exe
	  (http://download.microsoft.com/download/vc60std/sample/6.0/W98NT42KMeXP/EN-US/abparam.exe)
	
	Release Date: June 18, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The ABParam.exe file contains the following files:
	
	+---------------------------+
	| File name        | Size   | 
	+---------------------------+
	| AtlBlobParam.cpp | 3 KB   | 
	+---------------------------+
	| AtlBlobParam.dsp | 5 KB   | 
	+---------------------------+
	| AtlBlobParam.dsw | 1 KB   | 
	+---------------------------+
	| AtlBlobParam.ncb | 57 KB  | 
	+---------------------------+
	| AtlBlobParam.opt | 51 KB  | 
	+---------------------------+
	| AtlBlobParam.plg | 2 KB   | 
	+---------------------------+
	| Atldbcli_new.h   | 106 KB | 
	+---------------------------+
	| ISSHelper.cpp    | 3 KB   | 
	+---------------------------+
	| ISSHelper.h      | 2 KB   | 
	+---------------------------+
	| StdAfx.cpp       | 1 KB   | 
	+---------------------------+
	| StdAfx.h         | 1 KB   | 
	+---------------------------+
	
	To use the sample, modify the connection properties in AtlBlobParam.cpp to
	reflect your SQL Server server, authentication settings, and database. Then
	compile the sample and run it. The sample creates a table named "BlobTable" in
	the database and inserts a single record into it.
	
	Implementation Details
	----------------------
	
	For an OLE DB consumer application to use BLOB input parameters, several
	requirements must be met:
	
	- If the provider does not support writing to the provider's storage object,
	  the consumer application must implement an object that implements the
	  ISequentialStream interface. This is the case with the Microsoft OLE DB
	  Provider for SQL Server (SQLOLEDB).
	
	  To implement the consumer storage class, this sample uses the ISSHelper class,
	  which is presented in the following article in the Microsoft Knowledge Base:
	
	  Q190958 SAMPLE: AOTBLOB Read/Writes BLOB Using OLE DB Consumer Template
	
	- The consumer application must bind status, length, and value for the
	  parameter. One problem with the current ATL Consumer Template implementation
	  of CDynamicParameterAccessor is that it does not allow the setting and
	  getting of status and length when binding parameters. The Atldbcli_new.h
	  header file contains modifications to allow binding status and length. The
	  approach used is similar to that described in the following article in the
	  Microsoft Knowledge Base:
	
	  Q264291 SAMPLE: Retrieve and Set the DBSTATUS of Parameters Through the Use
	  of CDynamicParameterAccessorEx
	
	- The consumer application must bind the BLOB parameter as an ISequentialStream
	  object instead of a memory buffer. The ATL Consumer Templates do not bind to
	  ISequentialStream when using CDynamicParameterAccessor. The Atldbcli_new.h
	  file modifies the binding calls to bind to an ISequentialStream object.
	
	When you attempt to use a BLOB parameter with the CDynamicParameterAccessor class
	without the changes outlined in this sample, the following error code may be
	returned by the BindParameters function when binding the parameters:
	
	  E_OUTOFMEMORY, 0x8007000e, or -2147024882
	
	This error occurs when the BindParameters call attempts to allocate a memory
	buffer of size 0x7fffffff or greater, because this is the size of the BLOB
	parameter as described by a call to IColumnsInfo which is performed by the
	CDynamicParameterAccessor class.
	
	To meet the requirements described above, the following changes have been made to
	Atldbcli.h in the Atldbcli_new.h header file:
	
	- GetParamLength and GetParamStatus have been added to the
	  CDynamicParameterAccessor class.
	
	- The BindParameters function of the CDynamicParameterAccessor class has been
	  modified as follows:
	
	   - The nLengthOffset and nStatusOffset variables have been added to track the
	     current offset to the length and status parts of the current binding.
	
	   - The DBOBJECT* pObject variable has been added to allow binding to a
	     storage object.
	
	   - If the size of the parameter is determined to be more than 1024 bytes, or
	     the type of the parameter is DBTYPE_IUNKNOWN, the pObject variable is
	     initialized to point to a new DBOBJECT structure that will be used to bind
	     to an ISequentialStream object.
	
	   - The Bind call has been modified to include nonzero offsets to status and
	     length variables.
	
	Additional query words: BLOB CDynamicParameterAccessor Parameters ISequentialStream ABParam
	
	======================================================================
	Keywords          : kbfile kbSample kbATL kbOLEDB kbConsumer kbGrpDSVCDB kbGrpDSMDAC tslic_tslic 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVC600SP3 kbVC600SP4 kbVC600SP5
	Version           : :6.0,6.0SP3,6.0sp4,6.0sp5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
