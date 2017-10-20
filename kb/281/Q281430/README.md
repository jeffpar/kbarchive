---
layout: page
title: "Q281430: HOWTO: Retrieve XML Data from SQL Server 2000 with CRowsetStream"
permalink: /kb/281/Q281430/
---

## Q281430: HOWTO: Retrieve XML Data from SQL Server 2000 with CRowsetStream

{% raw %}

	Article: Q281430
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbATL kbDTL kbOLEDB kbSQLServ kbVC kbVC600 kbConsumer kbXML kbGrpDSVCDB kbGrpDSMDAC kbS
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To retrieve tokenized XML data from SQL Server 2000, you must request an
	ISequentialStream interface during the call to the ICommand::Execute method.
	
	The Visual C++ 6.0 Active Template Library (ATL) OLE DB Consumer Templates do not
	provide a way to request this interface during the Execute call. This article
	provides information on how to create your own class to provide this
	functionality.
	
	
	MORE INFORMATION
	================
	
	To get XML data from SQL Server 2000 using the OLE DB consumer templates,
	perform the following steps:
	
	1. In Visual C++, create a new empty Win32 Console Application project.
	
	2. Create a CRowsetStream class using the following code. This is a user-defined
	  class that derives from CRowset and asks for an ISequentialStream interface,
	  instead of an IRowset interface, to be returned from ICommand::Execute. Save
	  this class in a new file named RowsetStream.h.
	
	  class CRowsetStream : public CRowset
	  {
	      public:   // Constructors and destructors.   
	      CRowsetStream()   
	      {      
	          m_spRowsetStream = NULL;   
	      }
	      ~CRowsetStream()   
	      {      
	          Close();   
	      }   
	      // Methods.   
	      void Close()
	      {
	         if (m_spRowsetStream != NULL)
	           m_spRowsetStream.Release();
	      }
	
	     // Implementation.
	     static const IID& GetIID()
	     {
	        return IID_ISequentialStream;
	     }
	     IRowset* GetInterface() const
	     {
	        return (IRowset*)(ISequentialStream*)m_spRowsetStream;
	     }
	     IRowset** GetInterfacePtr()
	     {
	        return (IRowset **)&m_spRowsetStream;
	     }
	
	     CComPtr<ISequentialStream> m_spRowsetStream;
	  };
	
	  NOTE: When you construct the command class in step 4, you will specify
	  CRowsetStream as the rowset template type.
	
	3. Create a CDBDemoAccessor accessor class using the following code.
	  CDBDemoAccessor is a standard OLE DB consumer templates accessor (similar to
	  a wizard-generated class) except it does not have a column map. To retrieve
	  XML data, you must request and use an ISequentialStream interface in
	  ICommand::Execute to retrieve a stream of data, instead of using the output
	  columns. Therefore, binding columns using the column map would cause errors.
	  Add this class to the RowsetStream.h header file that you created in step 2.
	
	  class CDBDemoAccessor
	  {
	  public:
	     LONG m_RETURNVALUE;
	     LONG m_percentage;
	
	  BEGIN_PARAM_MAP(CDBDemoAccessor)
	     SET_PARAM_TYPE(DBPARAMIO_OUTPUT)
	     COLUMN_ENTRY(1, m_RETURNVALUE)
	     SET_PARAM_TYPE(DBPARAMIO_INPUT)
	     COLUMN_ENTRY(2, m_percentage)
	  END_PARAM_MAP()
	
	  DEFINE_COMMAND(CDBDemoAccessor, _T("{ ? = CALL dbo.byroyaltyxml;1 (?) }"))
	
	     // You may wish to call this function if you are inserting a record and wish to
	     // initialize all the fields, if you are not going to explicitly set all of them.
	     void ClearRecord()
	     {
	        memset(this, 0, sizeof(*this));
	     }
	  };
	
	  Note that CDBDemoAccessor uses a stored procedure called dbo.byroyaltyxml;
	  this is the same as the sample SQL Server byroyalty stored procedure in the
	  pubs sample database, with a FOR XML AUTO clause added to the end. Use the
	  following SQL code to create this stored procedure:
	
	  CREATE PROCEDURE byroyaltyxml @percentage int
	  AS
	  select au_id from titleauthor
	  where titleauthor.royaltyper = @percentage
	  FOR XML AUTO
	  GO
	
	4. Create a command class CDBDemo using the following code. CDBDemo is slightly
	  modified from what the wizard generates. It specifies the CRowsetStream class
	  that you created earlier as the template type for the rowset. CRowsetStream
	  behaves just like CNoRowset (it does not support iterating through the rows,
	  and so on), but you can use the m_spRowsetStream member variable or the
	  GetInterface method to access the returned stream pointer and read the data.
	  Thus, it lets you request the ISequentialStream interface easily. Add this
	  class to the RowsetStream.h header file that you created in step 2.
	
	  NOTE: Change the user ID, password, and data source below to refer to a valid
	  SQL Server.
	
	  class CDBDemo : public CCommand<CAccessor<CDBDemoAccessor>, CRowsetStream >
	  {
	  public:
	     HRESULT Open()
	     {
	        HRESULT      hr;
	
	        hr = OpenDataSource();
	        if (FAILED(hr))
	           return hr;
	
	        return OpenRowset();
	     }
	     HRESULT OpenDataSource()
	     {
	        HRESULT      hr;
	        CDataSource db;
	        CDBPropSet   dbinit(DBPROPSET_DBINIT);
	
	        dbinit.AddProperty(DBPROP_AUTH_USERID, OLESTR("myUserId"));
	        dbinit.AddProperty(DBPROP_AUTH_PASSWORD, OLESTR("myPassword"));
	        dbinit.AddProperty(DBPROP_INIT_CATALOG, OLESTR("pubs"));
	        dbinit.AddProperty(DBPROP_INIT_DATASOURCE, OLESTR("myServer"));
	        dbinit.AddProperty(DBPROP_INIT_LCID, (long)1033);
	        dbinit.AddProperty(DBPROP_INIT_PROMPT, (short)4);
	        hr = db.Open(_T("SQLOLEDB.1"), &dbinit);
	        if (FAILED(hr))
	           return hr;
	
	        return m_session.Open(db);
	     }
	   HRESULT OpenRowset()
	     {
	        return CCommand<CAccessor<CDBDemoAccessor>, CRowsetStream >::Open(m_session);
	     }
	     CSession   m_session;
	  };
	
	5. Create a new C++ source file in the project and paste the following code:
	
	  #include <atldbcli.h>
	  #include "RowsetStream.h"
	
	  #define BUFFER_SIZE 1000
	
	  int main(int /*argc*/, char* /*argv*/[])
	  {
	          ::CoInitialize(NULL);
	          {
	
	              CDBDemo mydemo;
	              HRESULT hr = S_OK;
	
	              mydemo.ClearRecord();
	              mydemo.m_percentage = 50;
	              hr = mydemo.Open();
	              if (hr == S_OK)
	              {
	                 char szBuf[BUFFER_SIZE];
	                 ULONG ulRead = 0;
	
	                 if (mydemo.m_spRowsetStream != NULL)
	                 {
	                     hr = mydemo.m_spRowsetStream->Read(szBuf, BUFFER_SIZE - 1, &ulRead);
	                     while(hr == S_OK)
	                     {
	                          printf("Read %ld bytes\n", ulRead);
	  					
	                          // The string we just read is not NULL terminated so we'll add one in.
	                          szBuf[ulRead] = '\0';
	                          printf("%s\n", szBuf);
	
	                          hr = mydemo.m_spRowsetStream->Read(szBuf, BUFFER_SIZE - 1, &ulRead);
	                     }
	                 }
	              }
	
	          }
	
	          ::CoUninitialize();
	          return 0;
	  }
	
	
	6. Build the project and then run it. The XML string from the database should be
	  displayed in the console window.
	
	REFERENCES
	==========
	
	Fora additional information on the classes that are described in this article,
	see the Visual Studio 6.0 Service Pack 5 Readme file.
	
	NOTE: The Readme file may provide a slightly different implementation of the
	above classes, and requires changes to Atldblcli.h in order for those classes to
	work. The classes provided in this article do not require any modification to
	Atldbcli.h.
	
	For additional samples of how to retrieve XML data from SQL Server 2000 using the
	OLE DB consumer templates, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q272185 SAMPLE: How to Retrieve Data Using a SQL XML Query in ATL OLE DB
	
	  Q272181 SAMPLE: How to Retrieve Data Using a Template File in ATL OLE DB
	
	Additional query words: IStream msxml oledb
	
	======================================================================
	Keywords          : kbATL kbDTL kbOLEDB kbSQLServ kbVC kbVC600 kbConsumer kbXML kbGrpDSVCDB kbGrpDSMDAC kbSQLServ2000 kbVS600sp5 
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbSQLServ2000Search kbVC600 kbSQLServ2000 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
