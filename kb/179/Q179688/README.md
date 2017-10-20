---
layout: page
title: "Q179688: FIX: ATL Servers Do Not Unregister Their Type Library"
permalink: /kb/179/Q179688/
---

## Q179688: FIX: ATL Servers Do Not Unregister Their Type Library

{% raw %}

	Article: Q179688
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200bug kbATL210bug kbCOMt kbRegistry kbVC500bug kbVC600fix kbATL300fix M
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ATL servers do not remove type library registry entries when unregistered.
	
	CAUSE
	=====
	
	There is no code to remove type library registry entries.
	
	RESOLUTION
	==========
	
	Add the code below to each type of ATL server to make sure registry entries are
	removed.
	
	In-Process Server
	-----------------
	
	For an In-Process server, add the call UnRegisterTypeLib() to
	DllUnregisterServer():
	
	  STDAPI DllUnregisterServer(void)
	  {
	     HRESULT hr = _Module.UnregisterServer();
	     if (FAILED(hr))
	        return hr;
	
	  #if _WIN32_WINNT >= 0x0400
	     hr = UnRegisterTypeLib(LIBID_<ProjName>Lib, 1, 0,
	        LOCALE_NEUTRAL, SYS_WIN32);
	  #endif
	     return hr;
	  }
	
	Local Server
	------------
	
	For a local server, add the call to UnRegisterTypeLib() to WinMain():
	
	  extern "C" int WINAPI _tWinMain(HINSTANCE hInstance,
	     HINSTANCE /*hPrevInstance*/, LPTSTR lpCmdLine, int /*nShowCmd*/)
	  {
	     ...
	     ...
	     while (lpszToken != NULL)
	     {
	        if (lstrcmpi(lpszToken, _T("UnregServer"))==0)
	        {
	           bRun = FALSE;
	           _Module.UpdateRegistryFromResource(IDR_<ProjName>, FALSE);
	           nRet = _Module.UnregisterServer();
	           if (FAILED(nRet))
	              break;
	
	  #if _WIN32_WINNT >= 0x0400
	           nRet = UnRegisterTypeLib(LIBID_<ProjName>Lib, 1, 0,
	              LOCALE_NEUTRAL,SYS_WIN32);
	  #endif
	           break;
	        }
	        ...
	        ...
	     }
	     ...
	     ...
	  }
	
	Service
	-------
	
	For a service, add the call to UnRegisterTypeLib() to WinMain():
	
	  extern "C" int WINAPI _tWinMain(HINSTANCE hInstance,
	     HINSTANCE /*hPrevInstance*/, LPTSTR lpCmdLine, int /*nShowCmd*/)
	  {
	     ...
	     while (lpszToken != NULL)
	     {
	        if (lstrcmpi(lpszToken, _T("UnregServer"))==0)
	        {
	           int nRet = _Module.UnregisterServer();
	           if (FAILED(nRet))
	              return nRet;
	
	  #if _WIN32_WINNT >= 0x0400
	           return UnRegisterTypeLib(LIBID_<ProjName>Lib, 1, 0,
	              LOCALE_NEUTRAL, SYS_WIN32);
	  #endif
	        }
	        ...
	        ...
	     }
	     ...
	     ...
	  }
	
	NOTE: UnRegisterTypeLib() is exported only by the newer version of Oleaut32.dll
	shipped with Windows NT 4.0, Windows 95 with DCOM, and Internet Explorer 3.x.
	
	NOTE: Make sure the LCID and major and minor version numbers passed as parameters
	to UnRegisterTypeLib() are the same as that specified in the project .idl file.
	No lcid attribute in the .idl file implies LOCALE_NEUTRAL.
	
	STATUS
	======
	
	This problem was corrected in ATL version 3.0, which shipped with Microsoft
	Visual C++ version 6.0.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Jaganathan Thangavelu, Microsoft Corporation
	
	
	Additional query words: kbRegistry kbServer kbATL200 kbATL210 kbVC500 kbDSupport kbDSD kbatl300fix kbvc600fix
	
	======================================================================
	Keywords          : kbActiveX kbATL200bug kbATL210bug kbCOMt kbRegistry kbVC500bug kbVC600fix kbATL300fix MSGRAPH kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
