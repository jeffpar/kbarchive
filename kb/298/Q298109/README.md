---
layout: page
title: "Q298109: SAMPLE: Create a Context Menu Handler by Using ATL"
permalink: /kb/298/Q298109/
---

## Q298109: SAMPLE: Create a Context Menu Handler by Using ATL

{% raw %}

	Article: Q298109
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbATL kbContMenu kbATL300 kbDSupport kbGrpDSMFCATL kbgrpdsvc
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Context menu handlers extend the functionality of the Windows shell and can be
	easily created through the use of the Active Template Library (ATL). This
	article provides an example of a handler that registers and unregisters modules
	with .dll and .ocx extensions.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Rscontext.exe now
	  (http://download.microsoft.com/download/vc60ent/sample03/1.0/WIN98MeXP/EN-US/RSContext.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	The RSContext sample is an ATL DLL project created with Visual C++ 6.0 with
	Service Pack 5. The "RS" is short for RegisterServer. The project can be rebuilt
	and registered from the sample files and will be loaded by Windows Explorer when
	a context menu is displayed for .dll and .ocx files.
	
	The new context menu items will be called Register and Unregister. The
	implementation will look for Regsvr32.exe and try to register and unregister
	these file types with COM. Normally, Regsvr32.exe is located in the System32
	folder for Windows NT, Windows 2000, and Windows XP-based systems or the System
	folder for Windows 95, Windows 98 or Windows Millennium Edition-based computers,
	so it should not be necessary to include the full path to the module, but it can
	be added if necessary.
	
	The following steps demonstrate creation of a simple context menu handler.
	
	1. Create an ATL DLL project and add a simple object with all the defaults.
	  Include shlobj.h and comdef.h in stdafx.h. Then add two more interfaces to
	  inherit from: IShellExtInit and IContextMenu:
	
	  public IShellExtInit,
	  public IContextMenu,
	
	  Add these interfaces to the COM map as well:
	
	  COM_INTERFACE_ENTRY(IShellExtInit)
	  COM_INTERFACE_ENTRY(IContextMenu)
	
	2. The IShellExtInit interface has one method, called Initialize(). Initialize
	  receives three parameters: an ITEMIDLIST, an IDataObject, and a ProgID
	  registry key (if one exists). The Initialize method must just store the file
	  name so DragQueryFile can be called on the IDataObject pointer to retrieve
	  it.
	
	  IContextMenu has three methods: GetCommandString, InvokeCommand, and
	  QueryContextMenu. QueryContextMenu inserts the new menu options,
	  GetCommandString asks for help text for the options, and InvokeCommand
	  executes the option the user selected.
	
	  Declare the methods in the class header:
	
	  // IContextMenu
	  STDMETHOD(GetCommandString)(UINT idCmd, UINT uFlags, 
	               UINT *pwReserved, LPSTR pszName, UINT cchMax);
	  STDMETHOD(InvokeCommand)(LPCMINVOKECOMMANDINFO pici);
	  STDMETHOD(QueryContextMenu)(HMENU hmenu, UINT indexMenu, 
	  			UINT idCmdFirst, UINT idCmdLast, 
	  					UINT uFlags);
	
	  // IShellExtInit
	  STDMETHOD(Initialize)(LPCITEMIDLIST pidlFolder, 
	                           LPDATAOBJECT lpdobj, 
	  		      HKEY hkeyProgID);
	
	3. In addition, add two member variables to hold the file name and path:
	
	  TCHAR m_szPath[MAX_PATH];<BR/>
	  TCHAR m_szFile[MAX_PATH];
	
	4. Implement the methods as follows:
	
	  HRESULT CRSMenu::QueryContextMenu(HMENU hmenu, UINT indexMenu,
	  					       UINT idCmdFirst,
	                                                 UINT idCmdLast,
	  					       UINT uFlags)
	  {
	  	if (!(CMF_DEFAULTONLY & uFlags))
	  	{
	  		int nCmdRegister = idCmdFirst;
	  		int nCmdUnregister = idCmdFirst+1;
	
	  		InsertMenu(hmenu, indexMenu++, MF_STRING|MF_BYPOSITION,
	  				nCmdRegister, _T("&Register"));
	  		InsertMenu(hmenu, indexMenu++, MF_STRING|MF_BYPOSITION,
	  				nCmdUnregister, _T("&Unregister"));
	
	                  // A successful return code should be the offset of
	                  // the largest command identifier assigned, plus one
	  		return MAKE_HRESULT(SEVERITY_SUCCESS, FACILITY_NULL,
	                                     nCmdUnregister - idCmdFirst + 1);
	  	}
	  	
	  	return MAKE_HRESULT(SEVERITY_SUCCESS,
	                              FACILITY_NULL, USHORT(0));
	  }
	
	  HRESULT CRSMenu::InvokeCommand(LPCMINVOKECOMMANDINFO pici)
	  {
	  	TCHAR szParms[MAX_PATH+6];
	
	          // The offset will determine which option was requested:
	          // 0 for Register, 1 for Unregister
	  	UINT idOffset = LOWORD(pici->lpVerb);
	
	          // Embed a '/u' for the Unregister command into the
	          // parameters, and always put quotes around the path
	          // so spaces in the path won't be a problem
	  	if (1 == idOffset)
	  	{
	  		lstrcpy(szParms, _T("/u \""));
	  		lstrcat(szParms, m_szFile);
	                  lstrcat(szParms, _T("\""));
	  	}
	  	else
	          {
	                  lstrcpy(szParms, _T("\""));
	  		lstrcat(szParms, m_szFile);
	                  lstrcat(szParms, _T("\""));
	          }
	  	ShellExecute(pici->hwnd, NULL, _T("regsvr32.exe"), szParms,
	  					NULL, 0);
	
	  	return S_OK;
	  }
	
	  HRESULT CRSMenu::GetCommandString(UINT idCmd, UINT uFlags, 
	                                    UINT* pwReserved,
	  				  LPSTR pszName, UINT cchMax)
	  {
	  	if (uFlags & GCS_HELPTEXT)
	  	{
	                  // Windows NT will ask for Unicode strings
	  		switch(idCmd)
	  		{
	  		case 0:
	  			if (uFlags & GCS_VERBA)
	  			lstrcpynA(pszName, 
	                              "Perform COM registration for this module",
	                                   cchMax);
	  			else
	  			lstrcpynW((LPWSTR)pszName,
	                             L"Perform COM registration for this module",
	                                   cchMax);
	  			break;
	  		case 1:
	  			if (uFlags & GCS_VERBA)
	  			lstrcpynA(pszName,
	                             "Perform COM unregistration for this module",
	                                  cchMax);
	  			else
	  			lstrcpynW((LPWSTR)pszName,
	                            L"Perform COM unregistration for this module",
	                                  cchMax);
	  			break;
	  		default:
	  			break;
	  		}
	  	}
	
	  	return S_OK;
	  }
	
	  HRESULT CRSMenu::Initialize(LPCITEMIDLIST pidlFolder,
	                              LPDATAOBJECT lpdobj, HKEY hkeyProgID)
	  {
	  	if (lpdobj == NULL)
	  		return E_INVALIDARG;
	
	          // The file can be referenced through the STGMEDIUM structure
	          // that is retrievable through the IDataObject pointer, and
	          // DragQueryFile can then be used to retrieve the file name.
	  	STGMEDIUM medium;
	          FORMATETC fe = {CF_HDROP, NULL, DVASPECT_CONTENT, -1,
	                          TYMED_HGLOBAL};
	  	HRESULT hr = lpdobj->GetData(&fe, &medium);
	  	if (FAILED(hr))
	  		return E_INVALIDARG;
	
	  	DragQueryFile(reinterpret_cast<HDROP>(medium.hGlobal), 0,
	  					m_szFile, MAX_PATH);
	
	  	ReleaseStgMedium(&medium);
	  	return hr;
	  }
	
	5. Add the following to the .rgs file to register the context menu handlers for
	  the file types:
	
	  Ocxfile
	  {
	  	Shellex
	  	{
	  		ContextMenuHandlers
	  		{
	  			{A9F3EE64-2047-49CF-8522-FE41C75C158B}
	  		}
	  	}
	  }
	  Dllfile
	  {
	  	Shellex
	  	{
	  		ContextMenuHandlers
	  		{
	  			{A9F3EE64-2047-49CF-8522-FE41C75C158B}
	  		}
	  	}
	  }
	
	6. Build and register the extension and test it with Windows Explorer. The
	  InvokeCommand method runs Regsvr32.exe, which should be in System32 on
	  Windows NT, Windows 2000, or Windows XP, or System on Windows 95, Windows 98,
	  or Windows Millennium Edition, so the full path should not be necessary. The
	  extensions will try to register (or unregister) any .dll or .ocx file. If a
	  .dll does not export DllRegisterServer, the registration will fail, and an
	  error message will appear indicating that either the function is not exported
	  or the file is corrupt. Note that for a non-COM .dll, this failure is normal,
	  and no corrective measures are needed.
	
	Additional query words: kbContMenu IContextMenu IShellExtInit RSContext
	
	======================================================================
	Keywords          : kbfile kbATL kbContMenu kbATL300 kbDSupport kbGrpDSMFCATL kbgrpdsvc 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
