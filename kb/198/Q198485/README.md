---
layout: page
title: "Q198485: HOWTO: SQL Server 7 Distributed Query Using ATL OLEDB Consumer"
permalink: /kb/198/Q198485/
---

## Q198485: HOWTO: SQL Server 7 Distributed Query Using ATL OLEDB Consumer

	Article: Q198485
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0,7.0
	Operating System(s): 
	Keyword(s): kbATL kbDatabase kbDTL kbOLEDB kbSQLServ kbVC600 kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample below is an OLE DB Consumer Application that demonstrates how to
	perform a distributed query with Visual C++ version 6.0 ATL Consumer templates
	to retrieve data from SQL Server (using SQLOLEDB Provider) and Microsoft Access
	Database (using Jet OLEDB Provider) by joining the two NorthWind databases.
	
	The application extracts the PRODUCT ID and PRODUCT NAME from a Products table
	stored in NorthWind Jet database, joins it with the Products table stored in
	NorthWind Microsoft SQL Server 7.0 Database, and applies SQL Server ORDER BY to
	sort the final results.
	
	Briefly, create a .cpp file using the code given below in Visual C++ 6.0 and
	compile/build from the Build menu (it will prompt for creating a new
	workspace--this should build and run without adding new code). Change the
	initialization properties to connect to your SQL 7.0 server. In the OpenRoswset
	call, change the path to point to NorthWind ("nwind.mdb") sample database on
	your machine. The sample database is installed by OLE DB SDK, Access, and Visual
	Basic.
	
	MORE INFORMATION
	================
	
	Microsoft SQL Server version 7.0 provides the ability to perform queries against
	OLE DB providers. This is done by using the OpenQuery or OpenRowset Transact-SQL
	functions or by using a query with four-part names including a linked-server
	name. For example,
	
	  sp_addlinkedserver 'mylinkedserver', 'product_name', 'myoledbprovider',
	  'data_source','location', 'provider_string', 'catalog'
	
	  SELECT * FROM OPENQUERY(mylinkedserver, 'select * from table1')
	
	The SELECT statement performs the SQL statement against the OLE DB Provider.
	
	The following sample code is an OLE DB Consumer Application that uses OLE DB
	Consumer Template classes. It uses OpenRowset Transact-SQL function and does not
	require a linked server definition.
	
	Sample Code
	-----------
	
	     #include <iostream>
	     using namespace std ;
	
	     #include <atlbase.h>
	     #include <atlimpl.cpp>
	
	     CComModule _Module;
	     #define DBINITCONSTANTS
	
	     #include <atlcom.h>
	     #include <atldbcli.h>
	     #include <msdaguid.h>
	
	     //Accessor Class
	     class CProductsAccessor
	     {
	     public:
	        LONG m_ProductID;
	        TCHAR m_ProductName[41];
	
	     //output binding map
	     BEGIN_COLUMN_MAP(CProductsAccessor)
	        COLUMN_ENTRY(1, m_ProductID)
	        COLUMN_ENTRY(2, m_ProductName)
	     END_COLUMN_MAP()
	
	     };
	
	     void main()
	     {
	        HRESULT hr ;
	
	        //Initialize COM
	        hr = CoInitialize(NULL);
	
	        CDataSource connection ;
	        CSession session ;
	        CCommand<CAccessor<CProductsAccessor> > product ;
	
	        // Open connection and session
	        // ===================================================
	        // Setting OLE DB Initialization Properties
	        // ===================================================
	        CDBPropSet propset(DBPROPSET_DBINIT);
	        propset.AddProperty(DBPROP_INIT_DATASOURCE, L"myServer");
	        propset.AddProperty(DBPROP_INIT_CATALOG, L"NorthWind");
	        propset.AddProperty(DBPROP_AUTH_USERID, L"sa");
	        hr = connection.Open("SQLOLEDB", &propset);
	
	        // Open a session.
	        hr = session.Open(connection) ;
	
	        // Perform a distributed join using OpenRowset T-SQL function.
	        //Note the drive C:\ referenced in the query resides on the server.
	
	        hr = product.Open(session, "select P1.ProductID, P1.ProductName
	        from NorthWind..Products P1,
	        OpenRowset('Microsoft.Jet.OLEDB.4.0','c:\\Program Files\\Microsoft
	           Visual Studio\\VB98\\nwind.mdb';
	        'admin';'', 'select ProductID, ProductName from products
	        where UnitsInStock between 1 and 5')P2
	        where P1.ProductID = P2.ProductID order by P1.ProductName");
	
	        //Get data from the rowset.
	        while(product.MoveNext() == S_OK)
	        {
	           cout << product.m_ProductID << " ";
	           cout << product.m_ProductName << endl ;
	        }
	     }
	
	REFERENCES
	==========
	
	For more details on setting up and using Distributed Queries, please see
	"sp_addlinkedserver", "OpenQuery", "OpenRowset", and related topics in SQL
	Server 7.0 Books Online.
	
	To learn more about the Accessor used in the code above, run the ATL Consumer
	Wizard on SQL Server 7 NorthWind database, Products Table.
	
	For additional information that describes the requirements to add OLE DB template
	support to Visual C++ projects, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q190959 PRB: OLE DB Consumer Template Wizard Requires ATL Project
	
	For additional information, see the Support WebCast at the following location:
	
	  http://support.microsoft.com/servicedesks/webcasts/wc102699/WC102699.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbDatabase kbDTL kbOLEDB kbSQLServ kbVC600 kbDSupport 
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbSQLServ700 kbVC600 kbVC32bitSearch
	Version           : winnt:6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
