---
layout: page
title: "Q264526: Snaoledb.dll Init Fails with CoInitializeEx Multithreaded"
permalink: /kb/264/Q264526/
---

## Q264526: Snaoledb.dll Init Fails with CoInitializeEx Multithreaded

	Article: Q264526
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft OLE DB Provider for AS/400 and VSAM, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an application thread calls the CoInitializeEx(NULL, CO_MULTITHREADED)
	function on a Windows NT 4.0-based computer, the thread may receive the
	following error message when it attempts to initialize the OLE DB Provider for
	AS/400 and VSAM:
	
	  Initialization of the dynamic link library e:\program
	  files\sna\system\snaoledb failed. The process is terminating abnormally.
	
	This problem does not occur on Windows 2000-based computers, or if Apartment
	threading is requested.
	
	NOTE: Even though the OLE DB Provider for AS/400 and VSAM only supports the
	Apartment-threading model (as documented in the SNA Server SDK online Help topic
	"Programming Considerations Using the OLE DB Provider for AS/400 and VSAM"), the
	application calling the thread must still be able to initialize the COM
	interface using the Multithreaded option.
	
	CAUSE
	=====
	
	The OLE DB Provider for AS/400 and VSAM is incorrectly calling OleInitialize,
	requiring the calling thread to request Apartment threading.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	If possible, initialize the thread using the Apartment-threading model:
	
	Call CoInitializeEx(NULL, COINIT_APARTMENTTHREADED)
	
	-OR-
	
	Call CoInitialize(NULL)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following sample program can be used to reproduce this problem. In this
	sample, the error message occurs when Initialize() is called:
	
	  #define DBINITCONSTANTS
	  #define INITGUID
	  #define _WIN32_DCOM
	  #include <windows.h>
	  #include <msdaguid.h>
	  #include <oledb.h>
	  #include <tchar.h>
	  #include <stdio.h>
	  #include <assert.h>
	  #include <msdasc.h>
	  int main ()
	  {
	          HRESULT            hr                 = S_OK;
	  	IDataInitialize    *pIDataInitialize  = NULL;
	  	IDBInitialize	   *pIDBInitialize    = NULL;
	  	LPOLESTR pwszFileName = SysAllocString (OLESTR("c:\\thor.udl"));
	
	  	LPOLESTR ppwszInitializationString;
	
	  	hr = CoInitializeEx( NULL, COINIT_MULTITHREADED );
	  	assert (hr == S_OK);
	  	hr = CoCreateInstance(CLSID_MSDAINITIALIZE, NULL, CLSCTX_INPROC_SERVER, IID_IDataInitialize,
	  		reinterpret_cast<void **>(&pIDataInitialize));
	
	  	hr = pIDataInitialize->LoadStringFromStorage(pwszFileName, &ppwszInitializationString);
	
	  	hr = pIDataInitialize->GetDataSource(NULL,CLSCTX_INPROC_SERVER, ppwszInitializationString, IID_IDBInitialize, (IUnknown **)(&pIDBInitialize));
	
	  	hr = pIDBInitialize->Initialize();
	
	  	SysFreeString (pwszFileName);
	  	SysFreeString (ppwszInitializationString);
	
	  	hr = pIDBInitialize->Release ();	
	  	
	  	CoUninitialize( );
	
	  	return 0;
	  }
	
	NOTE: When you build the project above, make sure to link with the multithreaded
	Microsoft C Runtime Library and Msdasc.lib.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbSNAServSearch kbOLEDBProvAS400VSAM400SP2 kbOLEDBProvAS400VSAM400SP3 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbOLEDBProvSearch
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
