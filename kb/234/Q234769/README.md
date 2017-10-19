---
layout: page
title: "Q234769: BUG: Unregistering CE ATL Servers Don't Remove Registry Entries"
permalink: /kb/234/Q234769/
---

## Q234769: BUG: Unregistering CE ATL Servers Don't Remove Registry Entries

	Article: Q234769
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0,6.0
	Operating System(s): 
	Keyword(s): kbRegistry kbOSWinCEsearch kbATL300bug kbDSupport kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- The Microsoft Active Template Library (ATL) 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run "REGSVRCE.exe /U" on an ATL DLL to unregister components or controls
	will not clean up the registry. The ProgID and entries under the CLSID will not
	be removed.
	
	CAUSE
	=====
	
	During unregistration, ATL checks to see if a key has subkeys or values before
	deleting it. ATL checks for values by calling CRegParser::HasValues(). Inside
	this function, RegEnumValue() is called. Under Win32, RegEnumValue() returns
	NULL if the key only has a default value. Under CE, it returns the string
	"Default". This causes CRegParser::HasValues() to return TRUE and prevents ATL
	from deleting the key.
	
	RESOLUTION
	==========
	
	In the function CRegParser::HasValues() in STATREG.h, the following line needs
	to be changed from:
	
	  if (ERROR_SUCCESS == lResult && (szValueName[0] != NULL))
	
	to:
	
	  if (ERROR_SUCCESS == lResult && (szValueName[0] != NULL) && lstrcmpi(szValueName, _T("Default")))
	
	You will need to statically link with the registration code by building for
	ReleaseMinDependency. To build a debug version, you'll need to add
	_ATL_STATIC_REGISTRY to the preprocessor symbols (under Project menu select
	Settings in the C++ tab). Make sure to select Rebuild All.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Make sure you're modifying the right version of STATREG.h. It should be the one
	in the "Windows CE Tools" directory (for example, "\Windows CE Tools\WCE200\MS
	HPC\atl\include").
	
	Additional query words: regsvrce unregister
	
	======================================================================
	Keywords          : kbRegistry kbOSWinCEsearch kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300 kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : WINDOWS:3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
