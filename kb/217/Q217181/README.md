---
layout: page
title: "Q217181: FIX: PROVIDER_COLUMN_ENTRY Sets DBID.eKind to DBKIND_GUID_NAME"
permalink: /kb/217/Q217181/
---

## Q217181: FIX: PROVIDER_COLUMN_ENTRY Sets DBID.eKind to DBKIND_GUID_NAME

	Article: Q217181
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDatabase kbProvider kbVC600bug kbATL300bug kbVS600sp2bug kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the default PROVIDER_COLUMN_ENTRY macro when creating an OLE DB
	Provider using the Active Template Library (ATL) OLE DB Provider template
	classes, the DBID of each column is set to DBKIND_GUID_NAME rather than
	DBKIND_NAME.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The PROVIDER_COLUMN_ENTRY macro creates a columnid value for each column in your
	provider's rowset. The columnid is a DBID structure, which allows the use of a
	GUID plus either a string or an unsigned long integer to identify the column.
	The DBID structure also contains a flag (DBKIND eKind), which is an enumerated
	value that indicates which part of the DBID structure to use as the identifier
	for the column.
	
	The PROVIDER_COLUMN_ENTRY macro sets each column's DBID GUID to a null GUID and
	also assigns the string identifier (LPWSTR pwszName) using the name of the
	column. The macro also sets DBID.eKind to DBKIND_GUID_NAME, which indicates to
	OLE DB that you can use either the GUID or the name part of the DBID structure
	to identify the column.
	
	The expected value for the DBID is DBKIND_NAME because the GUID value for each of
	the columns is set to a NULL GUID. Since all of the GUID values are null, they
	are not useful as a means to identify the column.
	
	The updated ATL OLE DB Provider header file atldb.h installed by Visual C++
	Service Pack 3 uses DBKIND_NAME for the DBID.eKind value in the
	PROVIDER_COLUMN_ENTRY rather than DBKIND_GUID_NAME.
	
	  See ATLDB.H line 5317 for BEFORE.
	  See ATLDB.H line 5341 in VS 6.0 SP3 for AFTER.
	  #define PROVIDER_COLUMN_ENTRY(name, ordinal, member) \ 
	  	{ \ 
	  		(LPOLESTR)OLESTR(name), \ 
	  		(ITypeInfo*)NULL, \ 
	  		(ULONG)ordinal, \ 
	  		DBCOLUMNFLAGS_ISFIXEDLENGTH, \ 
	  		(ULONG)sizeof(((_Class*)0)->member), \ 
	  		_GetOleDBType(((_Class*)0)->member), \ 
	  		(BYTE)0, \ 
	  		(BYTE)0, \ 
	  		{ \ 
	  			EXPANDGUID(GUID_NULL), \ 
	  			(DWORD)2, \ <---- CHANGE IS HERE (0 -> 2)
	  			(LPOLESTR) name \ 
	  		}, \ 
	  		offsetof(_Class, member) \ 
	  	},
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDatabase kbProvider kbVC600bug kbATL300bug kbVS600sp2bug kbVS600sp3fix kbGrpDSVCDB kbVS600SP1bug 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
