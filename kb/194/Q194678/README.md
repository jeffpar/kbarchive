---
layout: page
title: "Q194678: HOWTO: SQL Server Identity, OLE DB Templates and OLE DB for ODBC"
permalink: kb/194/Q194678/
---

## Q194678: HOWTO: SQL Server Identity, OLE DB Templates and OLE DB for ODBC

	Article: Q194678
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.5; winnt:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbProvider kbVC600 kbATL300 kbConsumer kbGrpDSVCDB kbDSupport kbMDAC2
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the OLE DB Templates with a SQL Server database, it is often
	necessary to add records to a table that contains an identity column.
	
	Getting an identity column to increment properly with the OLE DB for ODBC
	provider that ships with Visual C++ 6.0, Msdasql.dll, requires that the
	COLUMN_ENTRY_STATUS macro be used.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates how to use this macro when defining an
	accessor map with Visual C++ 6.0 OLE DB Consumer Templates:
	
	Sample Code
	-----------
	
	     class CMyTableAccessor
	     {
	     public:
	        LONG m_id;          // This is an identity column
	        DWORD m_id_status;  // Status variable for id column
	        TCHAR m_name[11];
	
	     BEGIN_COLUMN_MAP(CMyTableAccessor)
	       COLUMN_ENTRY_STATUS(1, m_id, m_id_status)
	       COLUMN_ENTRY(2, m_name)
	     END_COLUMN_MAP()
	
	     ...
	     };
	
	The code to add a new record to the table would resemble the following:
	
	     CMyTable rs;
	
	     rs.Open();
	     rs.ClearRecord();  //Null out current structure
	
	     strcpy(rs.m_name , "New Name");
	     rs.m_id_status = DBSTATUS_S_IGNORE;  //Tells the provider to ignore this
	                                          // column when updating.
	
	     rs.Insert();  // Insert new record into the table letting server update
	                  // of the identity column.
	     rs.Close();
	
	REFERENCES
	==========
	
	Please see the following topics in MSDN online documentation:
	
	- VC++ documentation for COLUMN_ENTRY_STATUS
	
	- OLE DB Topic titled "Status" defines "DBSTATUS_S_IGNORE"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbProvider kbVC600 kbATL300 kbConsumer kbGrpDSVCDB kbDSupport kbMDAC250 
	Technology        : kbVCsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVC600 kbVC32bitSearch
	Version           : WINDOWS:2.5; winnt:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
