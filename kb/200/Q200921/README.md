---
layout: page
title: "Q200921: PRB: OpenQuery with ATL Provider Fails When Set Up with SQL Ente"
permalink: /kb/200/Q200921/
---

## Q200921: PRB: OpenQuery with ATL Provider Fails When Set Up with SQL Ente

	Article: Q200921
	Product(s): Microsoft C Compiler
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOLEDB kbSQLServ kbVC600 kbMDACNoSweep
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SQL Server version 7.0 provides a mechanism for performing distributed queries
	against an OLE DB provider, by using the new OpenQuery or OpenRowset function.
	For example, the following SQL statement performs a query against a linked
	server called MyLinkedServer using the command "Select * from table1":
	
	  Select * from OpenQuery(MyLinkedServer, 'Select * from table1')
	
	Using the SQL Enterprise Manager to create a linked server that uses an ATL
	wizard-generated OLE DB Provider causes an error to occur using the following
	command:
	
	  select * from openquery (MYPROV1, 'c:\*.*')
	
	The following is the error message:
	
	  Server: Msg 7403, Level 16, State 1, Line 1 Could not locate registry entry
	  for OLE DB provider 'MyProv OLE DB Provider'.
	
	CAUSE
	=====
	
	The SQL Enterprise Manager uses the OLE DB Root Enumerator when retrieving
	information about an OLEDB provider. A wizard-generated ATL OLE DB provider has
	a provider-friendly name as the default value for its CLSID instead of its
	PROGID. While this complies with OLE DB 2.0, OLE DB 2.1 says that the "Default"
	value under the CLSID should be the PROGID.
	
	The same problem may occur when using a third-party provider where the default
	value for its CLSID is the provider friendly name instead of its PROGID.
	
	RESOLUTION
	==========
	
	There are three ways to work around this problem:
	
	- Change the value of CLSID key to contain the PROGID. This method makes the
	  provider OLEDB 2.1-compliant. Open the .rgs file in the Visual C++ ATL
	  project and go to the line where the value is supplied for the CLSID key.
	  Change the value to the PROGID. For example:
	
	  NoRemove CLSID
	  {
	    ForceRemove {78B9A5CE-9EE4-11D2-A896-00105A9F6419} = s 'MyProv.MyProv'
	
	- Use sp_addlinkedserver to set up the linked server, as given below:
	
	  EXEC sp_addlinkedserver
	
	     'MyProv',
	     '',
	     'Myprov.MyProv.1',
	     NULL,
	     NULL,
	     NULL
	
	  go
	
	  select * from openquery (MyProv, 'c:\*.*')
	
	- Use OpenRowset in the query rather than using a linked server. Here is an
	  example:
	
	  SELECT * from OpenRowset('MyProv.1', '', 'c:\*.*')
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL project using the ATL COM AppWizard.
	
	2. Create an ATL OLE DB provider by clicking New ATL Object from the Insert
	  menu, and then selecting Data Access for the category and Provider for the
	  object.
	
	3. Build the ATL OLE DB Provider.
	
	4. Register the provider on a machine with SQL Server 7.0 installed.
	
	5. Set up a linked server MYPROV1 with SQL Enterprise Manager
	  (Server->Security folder) that uses the ATL Provider built above.
	
	6. Run the following command:
	
	  select * from OpenQuery (MYPROV1, 'c:\*.*')
	
	REFERENCES
	==========
	
	For additional information about additional fixes needed to use an ATL OLE DB
	provider with SQL 7.0 distributed queries, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q198520 ATL OLE DB Provider Fails When Called from SQL 7.0 Query
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbDatabase kbOLEDB kbSQLServ kbVC600 kbMDACNoSweep 
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbSQLServ700 kbVC600 kbVC32bitSearch
	Version           : :6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
