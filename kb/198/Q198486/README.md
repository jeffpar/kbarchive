---
layout: page
title: "Q198486: HOWTO: SQL Server Full-Text Query Using ATL OLEDB Consumer"
permalink: /kb/198/Q198486/
---

## Q198486: HOWTO: SQL Server Full-Text Query Using ATL OLEDB Consumer

{% raw %}

	Article: Q198486
	Product(s): Microsoft C Compiler
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbATL kbDatabase kbDTL kbOLEDB kbSQLServ kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This sample code below is an OLE DB Consumer Application that demonstrates how
	to perform a full-text query with the Visual C++ 6.0 OLE DB Consumer Templates
	to retrieve data from the SQL Server NorthWind database using SQLOLEDB
	Provider.
	
	Full-text indexes can be administered using either the SQL Server Enterprise
	Manager or stored procedures. Before you run this sample, run the FullText
	Indexing Wizard (in SQL Server's Enterprise Manager) on the NorthWind.Products
	table, and index the ProductName column. Populate the index by right-clicking
	its name under the Full-text catalogs folder in the NorthWind database. For more
	information, see SQL Books Online.
	
	Briefly, create a .cpp file using the code given below in Visual C++ 6.0 and
	compile/build from Build menu (it will prompt for creating a new workspace--this
	should build and run without adding new code). Change the initialization
	properties to connect to your SQL 7.0 server.
	
	MORE INFORMATION
	================
	
	Microsoft SQL Server version 7.0 provides the ability to perform full-text
	queries on character data stored in SQL Server tables. For example:
	
	  SELECT ProductID, ProductName FROM Products
	  WHERE CONTAINS(ProductName,'spread NEAR () Boysenberry')
	
	The following sample code is an OLE DB Consumer Application that uses OLE DB
	Consumer Template classes.
	
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
	
	     //Accessor Class.
	     class CProductsAccessor
	     {
	     public:
	        LONG m_ProductID;
	        TCHAR m_ProductName[41];
	
	     //output binding map.
	     BEGIN_COLUMN_MAP(CProductsAccessor)
	        COLUMN_ENTRY(1, m_ProductID)
	        COLUMN_ENTRY(2, m_ProductName)
	     END_COLUMN_MAP()
	     };
	
	     void main()
	     {
	        HRESULT hr ;
	
	        //Initialize COM.
	        hr = CoInitialize(NULL);
	
	        CDataSource connection ;
	
	        CSession session ;
	
	        CCommand<CAccessor<CProductsAccessor> > product ;
	
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
	
	        hr = product.Open(session, "SELECT ProductID, ProductName FROM
	           Products WHERE CONTAINS(ProductName,'spread NEAR Boysenberry')");
	
	        //Get data from the rowset.
	        while(product.MoveNext() == S_OK)
	        {
	           cout << product.m_ProductID << " ";
	           cout << product.m_ProductName << endl ;
	        }
	     }
	
	REFERENCES
	==========
	
	For more details on SQL 7.0 full-text search, please refer to SQL 7.0 Books
	Online.
	
	To learn more about the Accessor used in the code above, run the ATL Consumer
	Wizard on the SQL Server 7 NorthWind database, Products Table.
	
	For additional information that describe the requirements to add OLE DB template
	support to Visual C++ projects, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q190959 PRB: OLE DB Consumer Template Wizard Requires ATL Project
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbATL kbDatabase kbDTL kbOLEDB kbSQLServ kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260 kbmdac270 
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbSQLServ700 kbVC600 kbVC32bitSearch
	Version           : :6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
