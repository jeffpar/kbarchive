---
layout: page
title: "Q201318: FIX: Registering ATL Server with Long Name Causes 0x80070002"
permalink: kb/201/Q201318/
---

## Q201318: FIX: Registering ATL Server with Long Name Causes 0x80070002

	Article: Q201318
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbCOMt kbRegistry kbVC600bug kbATL300 kbATL300bug kbVS600sp2bug
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
	
	Registering an ATL server that has a long file name or one that resides in a
	directory with a long path name, returns a 0x80070002 error:
	
	  The system cannot find the file specified.
	
	For DLLs, this error is returned by Regsvr32.exe. For EXEs, the call to
	Module::RegisterServer (CComModule::RegisterServer) in _tWinMain() returns this
	error.
	
	CAUSE
	=====
	
	ATL's registration code uses GetShortPathName() to retrieve the short name of
	the file and uses the short name for registration. GetShortPathName() fails if
	the file doesn't have a short file name. The default behavior in Windows NT,
	Windows 95, and Windows 98 is to automatically create short file names (8.3
	format) for files with long names. You can turn this option off by using the
	"System Policy Editor" (Poledit.exe). Certain file systems also don't support
	creation of short names by default. ATL tries to use the invalid file name
	returned by GetShortPathName() in a call to LoadLibraryEx(), and fails with
	0x80070002.
	
	RESOLUTION
	==========
	
	When GetShortPathName() is called in the ATL source, add code to check whether
	or not it succeeded. The following functions must be modified:
	
	- CComModule::UpdateRegistryFromResourceS(UINT...) - ATLBASE.H, line 4933.
	
	- CComModule::UpdateRegistryFromResourceS(LPCTSTR...) - ATLBASE.H, line 4965.
	
	- AtlModuleUpdateRegistryFromResourceD() - ATLBASE.H, line 5896.
	
	Change the following lines from:
	
	  // Convert to short path to work around bug in Windows NT 4.0's CreateProcess.
	  TCHAR szModuleShort[_MAX_PATH];
	  GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	  LPOLESTR pszModule = T2OLE(szModuleShort);
	
	to the following:
	
	  // Convert to short path to work around bug in Windows NT 4.0's CreateProcess.
	  TCHAR szModuleShort[_MAX_PATH];
	  int cbShortName = GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	  LPOLESTR pszModule;
	  if (cbShortName == _MAX_PATH)
	      return E_OUTOFMEMORY;
	  pszModule = (cbShortName == 0||cbShortName == ERROR_INVALID_PARAMETER) \  ? T2OLE(szModule) : T2OLE(szModuleShort);
	
	In CComModule::RegisterClassHelper(ATLBASE.H, line 5044), change the following
	lines from:
	
	  // Convert to short path to work around bug in Windows NT 4.0's CreateProcess.
	  TCHAR szModuleShort[_MAX_PATH];
	  GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	  key.SetKeyValue(szLS32, szModuleShort);
	
	to the following:
	
	  // Convert to short path to work around bug in Windows NT 4.0's CreateProcess.
	  TCHAR szModuleShort[_MAX_PATH];
	  int cbShortName = GetShortPathName(szModule, szModuleShort, _MAX_PATH);
	  if (cbShortName == _MAX_PATH)
	      return E_OUTOFMEMORY;
	  if (cbShortName == 0 || cbShortName == ERROR_INVALID_PARAMETER)
	      key.SetKeyValue(szLS32, szModule);
	  else
	      key.SetKeyValue(szLS32, szModuleShort);
	
	These changes have no result if you build for ReleaseMinSize, because code in
	ATL.dll is used instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	ATL registers servers using the short file name to work around a bug in Windows
	NT's CreateProcess() function. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	Q179690 FIX: Launching COM Server with Long File Name Returns 0x80080005
	
	For additional information about obtaining the "System Policy Editor," please see
	the following article in the Microsoft Knowledge Base:
	
	Q173673 Windows NT Server Tools for Windows NT Workstation 4.0 Available
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Samson Tanrena, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q179690 BUG: TCProps.dll Fails to Register During Setup
	
	Additional query words: 80070002
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbCOMt kbRegistry kbVC600bug kbATL300 kbATL300bug kbVS600sp2bug kbFAQ kbVS600sp3fix kbVS600SP1bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
