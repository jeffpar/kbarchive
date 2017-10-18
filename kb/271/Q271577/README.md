---
layout: page
title: "Q271577: Fix: CManualAccessor Does Not Work With Schema Rowsets"
permalink: kb/271/Q271577/
---

## Q271577: Fix: CManualAccessor Does Not Work With Schema Rowsets

	Article: Q271577
	Product(s): Microsoft C Compiler
	Version(s): 6.0,6.0sp5
	Operating System(s): 
	Keyword(s): kbATL kbDatabase kbDTL kbATL300fix kbGrpDSVCDB kbDSupport kbVS600sp5fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 6.0, 6.0sp5 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 6.0, 6.0sp5 
	- Microsoft Visual C++, 32-bit Learning Edition, versions 6.0, 6.0sp5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Active Template Library (ATL) Consumer templates to get schema
	rowsets from a data store, it is impossible to use a CManualAccessor class and
	base the accessor on the metadata after retrieving the rowset. It is only
	possible to set up the accessor before opening the rowset.
	
	The ATL Consumer classes provide specialized template classes for most common
	schema rowsets based on a static CAccessor class such as CTables or CColumns.
	For this reason the problem described in this article only manifests itself when
	you retrieve non-standard schema rowsets and base them on the CManualAccessor
	class to avoid creating static accessors.
	
	An example of such schema rowsets are the multi-dimensional schema rowsets
	available with the Microsoft OLE DB Provider for OLAP Services, such as
	MDSCHEMA_MEMBERS.
	
	CAUSE
	=====
	
	The CRestrictions and CSchemaRowset classes did not have a parameter in their
	Open method that specified whether an accessor should be bound in the Open
	method call. The CSchemaRowset::Open method called the CAccessorRowset::Bind
	method automatically, which required the accessor to be set up before the Open
	method was called.
	
	RESOLUTION
	==========
	
	Install Visual Studio 6.0 Service Pack 5 and use the new parameter available in
	the CRestrictions class to indicate that the accessor should not be bound in the
	Open call. For additional information, refer to the "More Information" section.
	
	STATUS
	======
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	A new parameter has been added to the CRestrictions::Open and
	CSchemaRowset::Open methods called bBind. bBind is the ninth parameter in the
	CRestrictions::Open call and the third parameter in the CSchemaRowset::Open
	call. Both these parameters have a default true value so existing code that does
	not use this parameter works without changes.
	
	The following code sample demonstrates how to use this new parameter with a
	CManualAccessor class. The accessor is created dynamically based on the metadata
	retrieved from a call to IColumnsInfo::GetColumnInfo. The sample connects to a
	Microsoft SQL Server 7.0 or a Microsoft SQL Server 2000 database, and retrieves
	column information for the authors table in the pubs database.
	
	To run the code, follow these steps:
	
	1. Create a console application that supports Microsoft Foundation Classes (MFC)
	  in Visual C++.
	
	2. Include the following header files:
	
	  #include <oledberr.h>
	  #include <atldbcli.h>
	  #include <atldbsch.h>
	
	3. Paste in the following code to replace the skeleton _tmain code.
	
	SAMPLE CODE
	
	  typedef CRestrictions<CManualAccessor, 4, &DBSCHEMA_COLUMNS> CMyColumns;
	
	  const int DATA_LENGTH = 128;
	  struct MYBIND
	  {
	  	union tagData
	  	{
	  		OLECHAR wszData[DATA_LENGTH];
	  		ULONG ulData;
	  	} data;
	  	DBSTATUS dwStatus;
	  	ULONG ulLength;
	  	MYBIND()
	  	{
	  		memset(this,0,sizeof(MYBIND));
	  	}
	  };
	
	  int _tmain(int argc, TCHAR* argv[], TCHAR* envp[])
	  {
	  	int nRetCode = 0;
	
	  	// initialize MFC and print and error on failure
	  	if (!AfxWinInit(::GetModuleHandle(NULL), NULL, ::GetCommandLine(), 0))
	  	{
	  		// TODO: change error code to suit your needs
	  		cerr << _T("Fatal Error: MFC initialization failed") << endl;
	  		nRetCode = 1;
	  	}
	  	else
	  	{
	  		CDataSource DataSource;
	  		CSession Session;
	
	  		HRESULT hr;
	
	  		hr = CoInitialize(NULL);
	  		hr = DataSource.OpenFromInitializationString(
	  			L"Provider=SQLOLEDB.1;Persist Security Info=False;User ID=sa;Initial Catalog=Pubs;Data Source=(local)");
	  		hr = Session.Open(DataSource);
	
	  		CMyColumns columns;
	  		//Uncomment the following line to see the pre-SP5 behavior, comment out line after that
	  		//hr = columns.Open(Session, "pubs", NULL, "authors", NULL, NULL, NULL, NULL);
	  		hr = columns.Open(Session, "pubs", NULL, "authors", NULL, NULL, NULL, NULL, false);
	
	  		CComPtr<IColumnsInfo> pColumnsInfo;
	  		hr = columns.m_spRowset->QueryInterface(IID_IColumnsInfo, (void**) &pColumnsInfo);
	
	  		DBORDINAL ColCount;
	  		DBCOLUMNINFO* pColInfo;
	  		OLECHAR* wszInfo;
	
	  		hr = pColumnsInfo->GetColumnInfo(&ColCount,&pColInfo, &wszInfo);
	  		MYBIND* pData = new MYBIND[ColCount];
	  		hr = columns.CreateAccessor(ColCount,pData, ColCount * sizeof(MYBIND));		
	  		int i;
	  		
	  		for (i = 0; i < ColCount; i++)
	  		{
	  			//We are only binding to two different data types, UI4 and WSTR
	  			//A more elaborate scheme can be implemented here
	  			if (pColInfo[i].wType == DBTYPE_UI4 || pColInfo[i].wType == DBTYPE_UI2)
	  			{
	  				columns.AddBindEntry(i+1, 
	  					DBTYPE_UI4,
	  					4,
	  					&(pData[i].data.ulData),
	  					&(pData[i].ulLength),
	  					&(pData[i].dwStatus));
	  			}
	  			else
	  			{
	  				columns.AddBindEntry(i+1, 
	  					DBTYPE_WSTR,
	  					DATA_LENGTH,
	  					&(pData[i].data.wszData),
	  					&(pData[i].ulLength),
	  					&(pData[i].dwStatus));
	  			}
	  			TRACE("%i) %S ", i, pColInfo[i].pwszName);
	  			
	  		}
	  		TRACE("\n");
	
	  		hr = columns.Bind();
	  		
	  		while (SUCCEEDED(hr = columns.MoveNext()) && hr != DB_S_ENDOFROWSET )
	  		{
	  			for(i = 0; i < ColCount; i++)
	  			{
	  				if (pData[i].dwStatus != DBSTATUS_S_ISNULL)
	  				{
	  					if (pColInfo[i].wType == DBTYPE_UI4 || pColInfo[i].wType == DBTYPE_UI2)
	  					{
	  						TRACE("%i) %i ", i, pData[i].data.ulData);
	  					}
	  					else
	  					{
	  						TRACE("%i) %S ", i, pData[i].data.wszData);
	  					}
	  				}
	  			}
	  			TRACE("\n");
	  		} 
	
	  		delete [] pData;
	  		CoTaskMemFree(pColInfo);
	  		CoTaskMemFree(wszInfo);
	  	}
	
	  	return nRetCode;
	  }
	
	4. Modify the connection string to reflect the name of your SQL Server server.
	
	Additional query words: DB_S_ERRORSOCCURRED DB_E_ERRORSOCCURRED
	
	======================================================================
	Keywords          : kbATL kbDatabase kbDTL kbATL300fix kbGrpDSVCDB kbDSupport kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVC600SP5
	Version           : :6.0,6.0sp5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
