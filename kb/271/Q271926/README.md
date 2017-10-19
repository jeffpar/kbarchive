---
layout: page
title: "Q271926: BUG: Memory Leak in ATL OLE DB Consumer Template Functions"
permalink: /kb/271/Q271926/
---

## Q271926: BUG: Memory Leak in ATL OLE DB Consumer Template Functions

	Article: Q271926
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbATL kbDTL kbVC600bug kbATL300bug kbConsumer kbGrpDSVCDB kbDSupport MSGRAPH
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following Active Template Library (ATL) OLE DB consumer template methods do
	not properly release allocated memory, and therefore cause a memory leak:
	
	- OpenWithPromptFileName
	- OpenFromFileName
	- GetInitializationString
	
	These are all methods of the CDataSource class, which is defined in the
	Atldbcli.h header file.
	
	CAUSE
	=====
	
	These CDataSource methods do not release the memory for a string that was
	allocated for them. These methods call OLE DB functions that allocate the memory
	for the string and populate it. The OLE DB functions call the CoTaskMemAlloc
	function to allocate memory for the string, and the ATL OLE DB consumer caller
	gets the string back as a result.
	
	It is the caller's responsibility to free this memory. In this situation, the ATL
	code is the caller. It does not release the string after it is used, which
	causes the memory leak.
	
	RESOLUTION
	==========
	
	One workaround is to add code to free the allocated memory for the string at the
	the end of each of the methods listed above. The following code illustrates this
	workaround:
	
	  HRESULT GetInitializationString(BSTR* pInitializationString, bool bIncludePassword=false)
	  {
	          	// If the datasource isn't open, we're not going to get an init string.
	  	_ASSERTE(m_spInit != NULL);
	  	CComPtr<IDataInitialize> spDataInit;
	  	LPOLESTR    szInitString;
	  	HRESULT hr = CoCreateInstance(CLSID_MSDAINITIALIZE, NULL, CLSCTX_INPROC_SERVER,
	  		IID_IDataInitialize, (void**)&spDataInit);
	  	if (FAILED(hr))
	  		return hr;
	  	hr = spDataInit->GetInitializationString(m_spInit, bIncludePassword, &szInitString);
	
	  	if (SUCCEEDED(hr))
	  	        *pInitializationString = ::SysAllocString(szInitString);
	
	  	// Free the string here.
	  	if(szInitString) CoTaskMemFree((void*)szInitString);
	  	return hr;
	  }
	
	  HRESULT OpenWithPromptFileName(HWND hWnd = GetActiveWindow(),
	                                 DBPROMPTOPTIONS dwPromptOptions = DBPROMPTOPTIONS_NONE,
	                                 LPCOLESTR szInitialDirectory = NULL)
	  {
	  	USES_CONVERSION;
	  	CComPtr<IDBPromptInitialize> spDBInit;
	
	  	HRESULT hr = CoCreateInstance(CLSID_DataLinks, NULL, CLSCTX_INPROC_SERVER,
	  		IID_IDBPromptInitialize, (void**) &spDBInit);
	  	if (FAILED(hr))
	  		return hr;
	
	  	CComPtr<IDBProperties> spIDBProperties;
	  	LPOLESTR szSelected;
	
	  	hr = spDBInit->PromptFileName(hWnd,
	                                         dwPromptOptions,
	                                         szInitialDirectory,
	                                         L"*.udl",
	                                         &szSelected);
	
	  	if (hr == S_OK)
	  		hr = OpenFromFileName(szSelected);
	  	else if (hr == S_FALSE) // The user clicked cancel.
	  		hr = MAKE_HRESULT(SEVERITY_ERROR, FACILITY_WIN32, ERROR_CANCELLED);
	
	  	// Free the string here.
	  	if(szSelected) CoTaskMemFree((void*)szSelected);
	
	  	return hr;
	  }
	
	  HRESULT OpenFromFileName(LPCOLESTR szFileName)
	  {
	  	CComPtr<IDataInitialize> spDataInit;
	  	LPOLESTR                 szInitString;
	
	  	HRESULT hr = CoCreateInstance(CLSID_MSDAINITIALIZE,
	                                         NULL,
	                                         CLSCTX_INPROC_SERVER,
	                                         IID_IDataInitialize,
	                                         (void**)&spDataInit);
	  	if (FAILED(hr))
	  	   return hr;
	
	  	hr = spDataInit->LoadStringFromStorage(szFileName,&szInitString);
	  	if (FAILED(hr))
	   	   return hr;
	
	  	hr = OpenFromInitializationString(szInitString);
	  	if (FAILED(hr))
	              return hr;
	
	  	//Done with the szInitString, so free the string here.
	  	if(szInitString) CoTaskMemFree((void*)szInitString);
	
	          return hr;
	  }
	
	To modify the header file, perform the following steps:
	
	1. Atldbcli.h is the main file that contains the implementation of ATL OLE DB
	  consumer template classes. It is best to make a copy of this header file in
	  your local project folder, and modify it directly there.
	
	2. Be sure to #include the new header file in your project, instead of the
	  original Atldbcli.h file.
	
	3. To confirm that your application is using the modified version of the header
	  file, set a breakpoint in one of the revised functions, and verify whether or
	  not the breakpoint is hit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a .udl file named Connection1.udl. For additional information on how
	  to create .udl files, click the article numbers below to view the articles in
	  the Microsoft Knowledge Base:
	
	  Q244659 MDAC 2.5 Sample How to Create a Data Link File with Windows 2000
	
	  Q195913 HOWTO: Generate ODBC and OLEDB Connection Strings with Data Links
	
	2. In Visual C++, create a new Win32 Console Application, and add the following
	  code:
	
	  #include <atldbcli.h>
	  void main()
	  {
	  	CoInitialize(NULL);	
	  	while(true){
	  		CDataSource db;
	  		HRESULT  hr;
	  		BSTR bstr;
	  		
	  		//hr = db.OpenWithPromptFileName();
	  		hr = db.OpenFromFileName(L"connection1.udl");
	  		if( hr != S_OK ) MessageBox(0,"Failure in OpenFromFileName","",1);
	  		
	  		hr = db.GetInitializationString(&bstr);
	  		if( hr != S_OK ) MessageBox(0,"Failure in GetInitializationString","",1);
	  		if(bstr) CoTaskMemFree((void*)bstr);
	
	  		db.Close();
	  	}
	  	CoUninitialize();
	  }
	
	3. Build and run the application. As it runs, you can use the Microsoft Windows
	  NT Performance Monitor (PerfMon) to watch the memory usage increase, by
	  monitoring the Private Bytes that are used by this process.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbDTL kbVC600bug kbATL300bug kbConsumer kbGrpDSVCDB kbDSupport MSGRAPH 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
