---
layout: page
title: "Q270638: BUG: Database Compaction using SQLConfigDataSource fails"
permalink: /kb/270/Q270638/
---

## Q270638: BUG: Database Compaction using SQLConfigDataSource fails

{% raw %}

	Article: Q270638
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.0,3.4,3.5,3.6,4.0
	Operating System(s): 
	Keyword(s): kbJET kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC250bug kbMDACNoSweep
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, versions 3.0, 3.4, 3.5, 3.6, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Access database is password protected, attempts to compact the
	database using the SQLConfigDataSource ODBC API might fail with the following
	error message:
	
	  "Not a valid password"
	
	The error message occurs even if you specify the password information in the
	Attributes list as follows:
	
	  SQLConfigDataSource(NULL,ODBC_ADD_DSN,(LPSTR)"Microsoft Access Driver (*.mdb)",
	                      "COMPACT_DB=C:\\MDB\\Sample.mdb C:\\MDB\\CompatedSample.mdb General\0"
	                      "PWD=WSG\0DataDirectory=C:\\MDB\0MaxScanRows=20\0\0"); 
	
	RESOLUTION
	==========
	
	To work around this problem, use the Microsoft OLE DB Provider for Jet or Data
	Access Objects (DAO) directly and bypass the Microsoft Access ODBC Driver.
	
	Samples follow that show how to achieve this functionality:
	
	- Microsoft Visual Basic sample using the Microsoft OLE DB Provider for Jet and
	  Microsoft Jet and Replication Objects (JRO):
	
	  Private Sub Command1_Click()
	      Dim myJRO As New jro.JetEngine
	
	      myJRO.CompactDatabase "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:\\mymdb\\sample.mdb;Jet OLEDB:Database Password=YourPassword;", _
	     "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:\\mymdb\\compactedSample.mdb;Jet OLEDB:Engine Type=5; Jet OLEDB:Database Password=YourPassword;"
	  End Sub
	
	- Microsoft Visual C++ sample using Microsoft Foundation Classes (MFC) DAO
	  classes:
	
	This is a standard Microsoft Visual C++ application that supports MFC.
	
	  #ifdef _DEBUG
	  #define new DEBUG_NEW
	  #undef THIS_FILE
	  static char THIS_FILE[] = __FILE__;
	  #endif
	
	  ///////////////////////////////////////////////////////////////////////////// 
	  // The one and only application object
	
	  CWinApp theApp;
	
	  using namespace std;
	
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
	  	   CDaoDatabase db;
	  	   try{
	  	        db.m_pWorkspace->CompactDatabase(_T("C:\\MyMDB\\Sample.mdb"),
	                                                    _T("C:\\MyMDB\\CompactedSample.mdb"),dbLangGeneral,dbVersion30,";pwd=YourPassword");
	  	   }
	  	   catch (CDaoException *e)
	  	   {
	  	        AfxMessageBox (e->m_pErrorInfo->m_strDescription);
	  	        e->Delete();
	     	   }
	  	   return nRetCode;
	  	}
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Starting with Microsoft Data Access Components (MDAC) version 2.6, MDAC no
	longer contains the following Jet components:
	
	- Microsoft Jet
	- Microsoft Jet OLE DB Provider
	- ODBC Desktop Database Drivers
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	The "MDAC 2.5 Stack and Windows File Protection" white paper contains a full list
	of the components that are shipped with MDAC 2.5, along with a discussion of
	Windows File Protection. Refer to this white paper for more information about
	the Jet dynamic-link libraries (DLLs) that are included in MDAC 2.5, which are
	no longer a part of MDAC 2.6.
	
	For more information about MDAC 2.5 and Windows File Protection, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/data/mdacwfp.htm
	
	REFERENCES
	==========
	
	For additional information about the problem, and for information about a fix,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q271177 Unable To Repair Password Protected Database Via ODBC Control Panel
	
	For additional information about compacting Microsoft Access databases, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q230496 HOWTO: Compacting Microsoft Access Database Through OLE DB
	
	  Q230501 HOWTO: Compacting Microsoft Access Database via ADO
	
	Additional query words: security passworded
	
	======================================================================
	Keywords          : kbJET kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC250bug kbMDACNoSweep 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbODBCAccess300 kbODBCAccess340 kbODBCAccess350 kbODBCAccess360 kbODBCAccess400
	Version           : :3.0,3.4,3.5,3.6,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
