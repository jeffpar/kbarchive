---
layout: page
title: "Q218475: FIX: ATL In-Proc Servers Load Twice if Using Short Filename"
permalink: kb/218/Q218475/
---

## Q218475: FIX: ATL In-Proc Servers Load Twice if Using Short Filename

	Article: Q218475
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCOMt kbDLL kbRegistry kbVC600 kbATL300bug kbVS600sp3fix kbGrpDSMFCATL
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Active Template Library (ATL) uses the DECLARE_REGISTRY_RESOURCEID macro and
	registers the COM object with the short filename when registering an in-proc COM
	object. This causes such problems as not hitting breakpoints or seeing two
	copies of global data.
	
	CAUSE
	=====
	
	Windows NT's LoadLibrary incorrectly loads a DLL twice if a long and short
	filename are used. In an ATL DLL COM server where you are also implicitly linked
	to the DLL, COM uses the short filename where the Windows NT loader uses the
	long filename when loading the DLL.
	
	RESOLUTION
	==========
	
	In the atlbase.h file, override the following functions:
	AtlModuleUpdateRegistryFromResourceD (for non-static builds) and both versions
	of CComModule::UpdateRegistryFromResourceS (for static builds). In addition,
	replace this code sample:
	
	  // Convert to short path to work around bug in Windows NT 4.0's CreateProcess
	  TCHAR szModuleShort[_MAX_PATH];
	  GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	  LPOLESTR pszModule = T2OLE(szModuleShort);
	
	with the following:
	
	  LPOLESTR pszModule;
	  if ((pM->m_hInst == NULL) || (pM->m_hInst == GetModuleHandle(NULL))) // register as EXE
	  {
	      // Convert to short path to work around bug in NT4's CreateProcess
	      TCHAR szModuleShort[_MAX_PATH];
	      int cbShortName = GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	
	      if (cbShortName == _MAX_PATH)
	          return E_OUTOFMEMORY;
	
	      pszModule = (cbShortName == 0 || cbShortName ==
	          ERROR_INVALID_PARAMETER) ? T2OLE(szModule) : T2OLE(szModuleShort);
	  }
	  else
	      pszModule = T2OLE(szModule);
	
	In the new code, the DLL servers are registered using the long filename whereas
	the .exe file servers are registered using the short file name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This problem can be solved by overriding the registration functions in
	CComModule. The resolution shown here is provided to handle the general
	registration process for both the .exe file and DLL COM servers even though the
	steps are shown specifically for DLL servers.
	
	1. Derive a class from CComModule, CDllModule, and declare it as shown in
	  Stdafx.h:
	
	  class CDllModule : public CComModule
	  {
	  public:
	  #ifdef _ATL_STATIC_REGISTRY
	      // Statically linking to Registry component.
	
	      HRESULT WINAPI UpdateRegistryFromResourceS(UINT nResID,
	          BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries = NULL);
	      HRESULT WINAPI UpdateRegistryFromResourceS(LPCTSTR lpszRes,
	          BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries = NULL);
	
	  #else
	
	      HRESULT WINAPI UpdateRegistryFromResourceD(LPCTSTR lpszRes,
	          BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries = NULL);
	      HRESULT WINAPI UpdateRegistryFromResourceD(UINT nResID,
	          BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries = NULL);
	
	  #endif
	  };
	
	  extern CDllModule _Module;
	
	2. In Myproject.cpp, change CComModule to CDllModule as follows:
	
	  CDllModule _Module;
	
	3. Add the following to the includes at the top of the file:
	
	  #ifdef _ATL_STATIC_REGISTRY
	  #include <statreg.h>
	  #endif
	
	4. In Myproject.cpp, add the following code to the end of the file:
	
	  #ifdef _ATL_STATIC_REGISTRY
	  #include <statreg.h>
	
	  // Statically linking to Registry Ponent
	  inline HRESULT WINAPI CDllModule::UpdateRegistryFromResourceS(UINT nResID, BOOL bRegister,
	      struct _ATL_REGMAP_ENTRY* pMapEntries)
	  {
	      USES_CONVERSION;
	      ATL::CRegObject ro;
	      TCHAR szModule[_MAX_PATH];
	      GetModuleFileName(_pModule->GetModuleInstance(), szModule, _MAX_PATH);
	
	      LPOLESTR pszModule;
	      if ((pM->m_hInst == NULL) || (pM->m_hInst == GetModuleHandle(NULL))) // register as EXE
	      {
	          // Convert to short path to work around bug in NT4's CreateProcess
	          TCHAR szModuleShort[_MAX_PATH];
	          int cbShortName = GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	
	          if (cbShortName == _MAX_PATH)
	              return E_OUTOFMEMORY;
	
	          pszModule = (cbShortName == 0 || cbShortName == ERROR_INVALID_PARAMETER) ? T2OLE(szModule) : T2OLE(szModuleShort);
	      }
	      else
	          pszModule = T2OLE(szModule);
	
	      int nLen = ocslen(pszModule);
	      LPOLESTR pszModuleQuote = (LPOLESTR)alloca((nLen*2+1)*sizeof(OLECHAR));
	      ReplaceSingleQuote(pszModuleQuote, pszModule);
	      ro.AddReplacement(OLESTR("Module"), pszModuleQuote);
	      if (NULL != pMapEntries)
	      {
	          while (NULL != pMapEntries->szKey)
	          {
	              ATLASSERT(NULL != pMapEntries->szData);
	              ro.AddReplacement(pMapEntries->szKey, pMapEntries->szData);
	                  pMapEntries++;
	          }
	      }
	
	      LPCOLESTR szType = OLESTR("REGISTRY");
	      return (bRegister) ? ro.ResourceRegister(pszModule, nResID, szType) :
	          ro.ResourceUnregister(pszModule, nResID, szType);
	  }
	
	  inline HRESULT WINAPI CDllModule::UpdateRegistryFromResourceS(LPCTSTR lpszRes, BOOL bRegister,
	      struct _ATL_REGMAP_ENTRY* pMapEntries)
	  {
	      USES_CONVERSION;
	      ATL::CRegObject ro;
	      TCHAR szModule[_MAX_PATH];
	      GetModuleFileName(_pModule->GetModuleInstance(), szModule, _MAX_PATH);
	
	      LPOLESTR pszModule;
	      if ((pM->m_hInst == NULL) || (pM->m_hInst == GetModuleHandle(NULL))) // register as EXE
	      {
	          // Convert to short path to work around bug in NT4's CreateProcess
	          TCHAR szModuleShort[_MAX_PATH];
	          int cbShortName = GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	
	          if (cbShortName == _MAX_PATH)
	              return E_OUTOFMEMORY;
	
	          pszModule = (cbShortName == 0 || cbShortName == ERROR_INVALID_PARAMETER) ? T2OLE(szModule) : T2OLE(szModuleShort);
	      }
	      else
	          pszModule = T2OLE(szModule);
	
	      int nLen = ocslen(pszModule);
	      LPOLESTR pszModuleQuote = (LPOLESTR)alloca((nLen*2+1)*sizeof(OLECHAR));
	      ReplaceSingleQuote(pszModuleQuote, pszModule);
	      ro.AddReplacement(OLESTR("Module"), pszModuleQuote);
	      if (NULL != pMapEntries)
	      {
	          while (NULL != pMapEntries->szKey)
	          {
	              ATLASSERT(NULL != pMapEntries->szData);
	              ro.AddReplacement(pMapEntries->szKey, pMapEntries->szData);
	              pMapEntries++;
	          }
	      }
	
	      LPCOLESTR szType = OLESTR("REGISTRY");
	      LPCOLESTR pszRes = T2COLE(lpszRes);
	      return (bRegister) ? ro.ResourceRegisterSz(pszModule, pszRes, szType) :
	  			ro.ResourceUnregisterSz(pszModule, pszRes, szType);
	  }
	
	  #else
	
	  ATLINLINE ATLAPI MyAtlModuleUpdateRegistryFromResourceD(_ATL_MODULE* pM, LPCOLESTR lpszRes,
	      BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries, IRegistrar* pReg = NULL)
	  {
	      USES_CONVERSION;
	      ATLASSERT(pM != NULL);
	      HRESULT hRes = S_OK;
	      CComPtr<IRegistrar> p;
	      if (pReg != NULL)
	          p = pReg;
	      else
	      {
	          hRes = CoCreateInstance(CLSID_Registrar, NULL,
	              CLSCTX_INPROC_SERVER, IID_IRegistrar, (void**)&p);
	      }
	      if (SUCCEEDED(hRes))
	      {
	          TCHAR szModule[_MAX_PATH];
	          GetModuleFileName(pM->m_hInst, szModule, _MAX_PATH);
	
	          LPOLESTR pszModule;
	          if ((pM->m_hInst == NULL) || (pM->m_hInst == GetModuleHandle(NULL))) // register as EXE
	          {
	              // Convert to short path to work around bug in NT4's CreateProcess
	              TCHAR szModuleShort[_MAX_PATH];
	              int cbShortName = GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	
	              if (cbShortName == _MAX_PATH)
	                  return E_OUTOFMEMORY;
	
	              pszModule = (cbShortName == 0 || cbShortName == ERROR_INVALID_PARAMETER) ? T2OLE(szModule) : T2OLE(szModuleShort);
	          }
	          else
	              pszModule = T2OLE(szModule);
	
	          int nLen = ocslen(pszModule);
	          LPOLESTR pszModuleQuote = (LPOLESTR)alloca((nLen*2+1)*sizeof(OLECHAR));
	          CComModule::ReplaceSingleQuote(pszModuleQuote, pszModule);
	          p->AddReplacement(OLESTR("Module"), pszModuleQuote);
	
	          if (NULL != pMapEntries)
	          {
	              while (NULL != pMapEntries->szKey)
	              {
	                  ATLASSERT(NULL != pMapEntries->szData);
	                  p->AddReplacement((LPOLESTR)pMapEntries->szKey,
	                      (LPOLESTR)pMapEntries->szData);
	                  pMapEntries++;
	              }
	          }
	          LPCOLESTR szType = OLESTR("REGISTRY");
	          if (HIWORD(lpszRes)==0)
	          {
	              if (bRegister)
	                  hRes = p->ResourceRegister(pszModule, ((UINT)LOWORD((DWORD)lpszRes)), szType);
	              else
	                  hRes = p->ResourceUnregister(pszModule, ((UINT)LOWORD((DWORD)lpszRes)), szType);
	          }
	          else
	          {
	              if (bRegister)
	                  hRes = p->ResourceRegisterSz(pszModule, lpszRes, szType);
	              else
	                  hRes = p->ResourceUnregisterSz(pszModule, lpszRes, szType);
	          }
	      }
	      return hRes;
	  }
	
	  // Resource-based Registration
	  HRESULT WINAPI CDllModule::UpdateRegistryFromResourceD(LPCTSTR lpszRes, BOOL bRegister,
	      struct _ATL_REGMAP_ENTRY* pMapEntries)
	  {
	      USES_CONVERSION;
	      return MyAtlModuleUpdateRegistryFromResourceD(this, T2COLE(lpszRes), bRegister,
	          pMapEntries);
	  }
	  HRESULT WINAPI CDllModule::UpdateRegistryFromResourceD(UINT nResID, BOOL bRegister,
	      struct _ATL_REGMAP_ENTRY* pMapEntries)
	  {
	      return MyAtlModuleUpdateRegistryFromResourceD(this,
	          (LPCOLESTR)MAKEINTRESOURCE(nResID), bRegister, pMapEntries);
	  }
	
	  #endif
	
	5. Save the changes and rebuild all.
	
	REFERENCES
	==========
	
	  Q193513 BUG: Breakpoints Not Hit in ATL MMC Snap-In
	
	  Q179690 FIX: Launching COM Server with Long File Name Returns 0x80080005
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Adam Kim, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCOMt kbDLL kbRegistry kbVC600 kbATL300bug kbVS600sp3fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
