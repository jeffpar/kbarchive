---
layout: page
title: "Q166717: DOC: Instructions for Statically Linking to Registrar Code"
permalink: kb/166/Q166717/
---

## Q166717: DOC: Instructions for Statically Linking to Registrar Code

	Article: Q166717
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbdocfix kbdocerr kbATL kbATL200 kbATL210 kbDTL kbRegistry kbVC420 kbVC500 kbG
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Active Template Library (ATL) Help article entitled "Setting Up a
	Static Link to the Registrar Code" says the following:
	
	  <<<<<<<<<<
	  At the top of stdafx.h, add the following #define statement: #define
	  _ATL_STATIC_REGISTRY
	  >>>>>>>>>>
	
	This causes a series of compiler errors and warnings when you build for "Win32
	Release MinSize":
	
	  
	
	  <<<<<<<<<<
	  C:\Program Files\DevStudio\VC\ATL\include\atlimpl.cpp(1010) : error
	   C2259:
	  'CRegObject' : cannot instantiate abstract class due to following
	  members:
	  C:\Program Files\DevStudio\VC\ATL\include\atlimpl.cpp(1010) : warning
	  C4259: 'long __stdcall IUnknown::QueryInterface(const struct _GUID
	   &,void
	  ** )' : pure virtual function was not defined
	  ...
	  >>>>>>>>>>
	
	Go into Project/Settings and click on the C++ tab. Under "Preprocessor
	definitions," replace _ATL_DLL with _ATL_STATIC_REGISTRY.
	
	If the project was built using the "ATL COM AppWizard," you can also just pick
	"Win32 Release MinDependency," which already has the correct preprocessor
	definitions set for statically linking to the Registrar code.
	
	MORE INFORMATION
	================
	
	ATL 2.x accesses the system registry through the ATL Registry Component
	(Registrar). You can dynamically link to the Registrar but you will have to
	distribute Atl.dll with your application. If you don't want to distribute
	Atl.dll, you can statically link to the Registrar but this increases the size of
	your executable by approximately 5K. The ATL library allows you to set this
	option via preprocessor definitions. _ATL_DLL means you want to dynamically link
	with the Registrar. _ATL_STATIC_REGISTRY means you want to statically link with
	the registrar.
	
	For components built with VC++ 6.0, Atl.dll may need to be shipped even with
	_ATL_STATIC_REGISTRY (Min Dependency build) defined.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q244955 PRB: MinDependency Project May Need to Include Atl.dll
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbdocfix kbdocerr kbATL kbATL200 kbATL210 kbDTL kbRegistry kbVC420 kbVC500 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL210
	Version           : :2.0,2.1
	
	=============================================================================
	
