---
layout: page
title: "Q301357: PRB: DLLs Not Unloaded After Calling CoFreeUnusedLibraries"
permalink: kb/301/Q301357/
---

## Q301357: PRB: DLLs Not Unloaded After Calling CoFreeUnusedLibraries

	Article: Q301357
	Product(s): Microsoft Programming Utilities
	Version(s): (all versions and editions),4.0
	Operating System(s): 
	Keyword(s): kbCOMt kbGrpDSVCDB kbDSupport
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT, versions (all versions and editions), 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dynamic-link libraries (DLLs) that are not in use may not be unloaded from the
	process space after calling the CoFreeUnusedLibraries function.
	
	CAUSE
	=====
	
	This problem occurs when the application still has references to the components
	in the DLL, or when the application releases all the references to a DLL but
	does not make a subsequent call to CoFreeUnusedLibraries.
	
	RESOLUTION
	==========
	
	CoFreeUnusedLibraries does not immediately release DLLs that have no active
	object. There is a ten minute delay for multithreaded apartments (MTAs) and
	neutral apartments (NAs). For single-threaded apartments (STAs), there is no
	delay. The ten minute delay for CoFreeUnusedLibraries is to avoid multithread
	race conditions caused by unloading a component DLL.
	
	To work around the problem, make a second call to CoFreeUnusedLibraries after ten
	minutes, or make periodic calls to CoFreeUnusedLibraries. For applications that
	run for long periods, such as Windows NT Service applications, calling
	CoFreeUnusedLibraries periodically ensures that DLLs that are not being used are
	unloaded.
	
	Another workaround is to call CoUninitialize, which closes the COM library and
	releases all resources used by the current thread.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following example uses the Microsoft XML Parser version 3 to demonstrate this
	behavior. This parser can be downloaded and installed from the following
	Microsoft Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/xml (http://msdn.microsoft.com/xml)
	
	1. Create an empty Win32 Console Application in Microsoft Visual C++ 6.0.
	
	2. Save the following code as main.cpp and add it to the project:
	
	  #include <stdio.h>
	  #include <conio.h>
	
	  #import "msxml3.dll" named_guids raw_interfaces_only
	  using namespace MSXML2;
	
	  // Global instance to force load/unload of OLE.
	  struct InitOle {
	      InitOle()  { ::CoInitialize(NULL); }
	      ~InitOle() { ::CoUninitialize();   }
	  } _init_InitOle_;			
	
	  // Function declarations.
	  inline void TESTHR(HRESULT x) {if FAILED(x) _com_issue_error(x);};
	
	  void main()
	  {
	
	  	try
	  	{
	  		printf( "Note that the msxml3.dll is not loaded yet. Press any key to start the test.\n\n" );
	  		_getch();
	
	  		// Create an instance of DOMDocument.  This will load Msxml3.dll into the process.
	  		IXMLDOMDocument *pDoc = NULL;
	  		HRESULT hr = CoCreateInstance(CLSID_DOMDocument, NULL, CLSCTX_INPROC_SERVER,
	  			IID_IXMLDOMDocument, (LPVOID*)&pDoc);
	
	  		TESTHR(hr);
	
	  		// Release the reference.
	  		if (pDoc) pDoc->Release();
	  		
	  		// Free unused resources.
	  		CoFreeUnusedLibraries();
	  		
	  		printf( "Now the DLL is loaded into the process. Monitor the process and note that the DLL will not be released even after 10 minutes. Then press any key to continue..\n\n" );
	  		_getch();
	
	  		// Second call.
	  		CoFreeUnusedLibraries();
	  		
	  		printf( "Now the DLL should have been unloaded. Press any key to finish.\n\n" );
	  		_getch();
	
	  	}
	  	catch(_com_error &e)
	  	{
	  		printf("Com Error:\n");
	  		printf("Code = %08lx\n", e.Error());
	  		printf("Code meaning = %s\n", (char*) e.ErrorMessage());
	  		printf("Source = %s\n", (char*) e.Source());
	  		printf("Error Description = %s\n", (char*) e.Description());
	  	}
	  }
	
	3. Run the application and use a utility, such as Process Explorer from
	  Sysinternals (see "References"), to monitor the loading and unloading of
	  Msxml3.dll.
	
	REFERENCES
	==========
	
	Process Explorer is available from the following Web site:
	
	  http://www.sysinternals.com/ntw2k/freeware/procexp.shtml
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbGrpDSVCDB kbDSupport 
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :(all versions and editions),4.0
	Issue type        : kbprb
	
	=============================================================================
	
