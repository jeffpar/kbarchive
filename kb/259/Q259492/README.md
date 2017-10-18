---
layout: page
title: "Q259492: HOWTO:Use DBPROP_SERVERDATAONINSERT to Retrieve Identity Value"
permalink: kb/259/Q259492/
---

## Q259492: HOWTO:Use DBPROP_SERVERDATAONINSERT to Retrieve Identity Value

	Article: Q259492
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.5,2.6,3.0,6.0,7.0,7.01
	Operating System(s): 
	Keyword(s): kbATL kbATL200 kbATL210 kbDTL kbOLEDB kbSQLServ kbVC kbATL300 kbConsumer kbGrpDSVCDB kb
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft OLE DB Provider for SQL Server, versions 7.0, 7.01 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To retrieve the value of a newly inserted Identity field, set the Open rowset
	DBPROP_SERVERDATAONINSERT property to True.
	
	MORE INFORMATION
	================
	
	The DBPROP_SERVERDATAONINSERT property allows the provider to update the local
	row cache as soon as the server commits the insert of the Identity field.
	
	NOTE: The Microsoft OLE DB Programmer's Reference states that setting
	DBPROP_SERVERDATAONINSERT is potentially expensive and may not be supported for
	certain types of rowsets. You must have a Primary Key selected for the table
	before using the DBPROP_SERVERDATAONINSERT property.
	
	The following code demonstrates how to retrieve the value after you insert the
	new row:
	
	  #include "atldbcli.h"
	  class CdboIdentAccessor
	  {
	  public:
	  	LONG m_myident;
	          DBSTATUS m_identstatus;
	  	TCHAR m_name[11];
	          DBSTATUS m_namestatus;
	
	  BEGIN_COLUMN_MAP(CdboIdentAccessor)
	  	COLUMN_ENTRY_STATUS(1, m_myident,m_identstatus)
	  	COLUMN_ENTRY_STATUS(2, m_name,m_namestatus)
	  END_COLUMN_MAP()
	
	  DEFINE_COMMAND(CdboIdentAccessor, _T(" \ 
	  	SELECT \ 
	  		myident, \ 
	  		name  \ 
	  		FROM dbo.Ident"))
	  	
	  	void ClearRecord()
	  	{
	  		memset(this, 0, sizeof(*this));
	  	}
	  };
	
	  class CdboIdent : public CCommand<CAccessor<CdboIdentAccessor> >
	  {
	  public:
	  	HRESULT Open()
	  	{
	  		HRESULT		hr;
	
	  		hr = OpenDataSource();
	  		if (FAILED(hr))
	  			return hr;
	
	  		return OpenRowset();
	  	}
	  	HRESULT OpenDataSource()
	  	{
	  	HRESULT		hr;
	  	  CDataSource db;
	  	  CDBPropSet	dbinit(DBPROPSET_DBINIT);
	
	  	  dbinit.AddProperty(DBPROP_AUTH_USERID, OLESTR("sa"));
	  	  dbinit.AddProperty(DBPROP_INIT_CATALOG, OLESTR("test"));
	             dbinit.AddProperty(DBPROP_INIT_DATASOURCE,
	   OLESTR("SERVER"));
	  	  dbinit.AddProperty(DBPROP_INIT_LCID, (long)1033);
	  	  dbinit.AddProperty(DBPROP_INIT_PROMPT, (short)4);
	  	  hr = db.Open(_T("SQLOLEDB.1"), &dbinit);
	  	  /hr = db.OpenWithServiceComponents(_T("SQLOLEDB.1"),
	   &dbinit);
	  	  if (FAILED(hr))
	  	  return hr;
	
	            return m_session.Open(db);
	  	}
	  	HRESULT OpenRowset()
	  	{
	  	  // Set properties for open
	             // Notice the DBPROP_SERVERDATAONINSERT set to true
	  	     CDBPropSet propset(DBPROPSET_ROWSET);
	  	     propset.AddProperty(DBPROP_SERVERCURSOR, true );
	  	     propset.AddProperty(DBPROP_SERVERDATAONINSERT, true );
	  	     propset.AddProperty(DBPROP_IRowsetChange, true);
	  	     propset.AddProperty(DBPROP_UPDATABILITY, 
	                DBPROPVAL_UP_CHANGE | DBPROPVAL_UP_INSERT 
	  |             DBPROPVAL_UP_DELETE );
	
	            return CCommand<CAccessor<CdboIdentAccessor> 
	  >::Open(m_session, NULL, &propset);
	  	}
	  	CSession	m_session;
	  };
	
	  int main(void)
	  {
	  	HRESULT hr;
	  	CdboIdent test;
	
	  	// Connect the database, session, and accessors
	  	CoInitialize(NULL);
	  	hr = test.Open();
	
	  	if (FAILED(hr))
	  	{
	  		IErrorInfo* pErrInfo;
	  		BSTR bstrDesc = NULL;
	  		GetErrorInfo(0,&pErrInfo);
	  		pErrInfo->GetDescription(&bstrDesc);
	  		SysFreeString(bstrDesc);
	  	}
	
	  	test.ClearRecord();
	     	strcpy ( test.m_name, "New");
	     	test.m_identstatus = DBSTATUS_S_IGNORE;
	     	hr = test.Insert(0,true);   // Insert new Row
	
	  	test.GetData();            // Get the inserted row
	           cout << test.m_myident << endl;  // Output the 
	  value for Identity field
	  	test.Close( );
	  	return S_OK;
	  }
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q194678 HOWTO: SQL Server Identity, OLE DB Templates and OLE DB for ODBC
	
	  Q219029 HOWTO: Retrieve Calculated Fields from SQL Server 7.0
	
	For more information about the BPROP_SERVERDATAONINSERT property, please refer to
	the Microsoft OLE DB Programmer's Reference.
	
	Additional query words: autonumber add
	
	======================================================================
	Keywords          : kbATL kbATL200 kbATL210 kbDTL kbOLEDB kbSQLServ kbVC kbATL300 kbConsumer kbGrpDSVCDB kbGrpDSMDAC kbDSupport MSGRAPH kbMDAC250 kbMDAC260 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,2.1,2.5,2.6,3.0,6.0,7.0,7.01
	Issue type        : kbhowto
	
	=============================================================================
	
