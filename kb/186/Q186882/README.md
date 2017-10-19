---
layout: page
title: "Q186882: FIX: Non-U.S. English DevStudio Typelibs Improperly Registered"
permalink: /kb/186/Q186882/
---

## Q186882: FIX: Non-U.S. English DevStudio Typelibs Improperly Registered

	Article: Q186882
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbcode kbAutomation kbide kbRegistry kbVC kbVC500bug kbVC600fix kbVS kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Macro constants in Visual Basic Scripting Edition are not defined in non- U.S.
	English installations, and the OLE/COM Object Viewer fails to display the four
	Visual C++ type libraries.
	
	CAUSE
	=====
	
	The Visual C++, version 5.0 type libraries are compiled for the U.S. English
	locale and the installation registers them under that locale code.
	
	RESOLUTION
	==========
	
	
	To access the original type libraries programmatically, use LoadRegTypeLib(), and
	specify U.S. English as the locale ID (LCID). The LCID for U.S. English is
	0x409.
	
	To use VBScript macro constants, temporarily change the Regional Settings in
	Control Panel to English (United States). Change the settings back to the
	desired locale after using Visual C++.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q183813 Developer Studio Macro Constants Not Defined
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	Visual C++ 5.0 introduced a new Automation Model that gives access to a variety
	of internal data and functions. Four type libraries describe the interfaces to
	the objects exposed by this model. Installing Visual C++ registers these type
	libraries with OLE/COM under globally unique IDs (GUIDs). The installation saves
	the paths to the type libraries under the U.S. English locale code, the code
	under which they were compiled.
	
	The four libraries and their GUIDs are:
	
	  DSDebugger (devdbg.pkg)       {34C63000-AE64-11CF-AB59-00AA00C091A1}
	  DSProjectSystem (devbld.pkg)  {96961265-A819-11CF-AD07-00A0C9034965}
	  DSSharedObjects (devshl.dll)  {B3CF8E20-19B6-11CF-8E4D-00AA004254C4}
	  DSTextEditor (devedit.pkg)    {2A6DF200-8240-11CF-AB59-00AA00C091A1}
	
	Several OLE interfaces (for example, ITypeLib, ITypeLib2) return object and
	method documentation from type libraries. The following code gets the ITypeLib
	interface for Visual Studio Shared Objects (Devshl.dll):
	
	     #include <atlbase.h>
	     const GUID guidShl
	                 = { 0xB3CF8E20L, 0x19B6, 0x11CF,
	                   { 0x8E, 0x4D, 0x00, 0xAA, 0x00, 0x42, 0x54, 0xC4 } }
	     CComPtr<ITypeLib> pTLib;
	     HRESULT hr  = LoadRegTypeLib(
	        &guidShl,   // REFGUID rguid.
	        1,          // Unsigned short wVerMajor.
	        0,          // Unsigned short wVerMinor.
	        0x409,      // LCID lcid.
	        &pTLib );   // ITypeLib FAR* FAR* pptlib.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In OLE/COM Object Viewer, click View and verify that Expert Mode is selected.
	
	2. In the left pane, expand the Type Libraries node.
	
	3. Find the four Visual C++ type libraries:
	
	  Visual Studio 97 Debugger (Ver 1.0): devdbg.pkg
	  Visual Studio 97 Project System (Ver 1.0): devbld.pkg
	  Visual Studio 97 Shared Objects (Ver 1.0): devshl.dll
	  Visual Studio 97 Text Editor (Ver 1.0): devedit.pkg
	
	  The Visual C++, version 6.0 type libraries that work properly are:
	
	  Visual C++ Debugger (Ver 6.0): devdbg.pkg
	  Visual C++ Project System (Ver 6.0): devbld.pkg
	  Visual C++ Shared Objects (Ver 6.0): devshl.dll
	  Visual C++ Text Editor (Ver 6.0): devedit.pkg
	
	4. Double-click the name of the type library.
	
	RESULT: In non-U.S. English systems, OLE/COM Object Viewer fails to display the
	type library.
	
	REFERENCES
	==========
	
	Platform SDK: COM and ActiveX Object Services; Automation; Exposing ActiveX
	Objects; Type Libraries; Registering a Type Library
	
	Platform SDK: COM and ActiveX Object Services; Automation; Type Description
	Interfaces; Overview of Type Compilation and Library Functions; LoadRegTypeLib
	
	Visual C++ Online Books; search on "LoadRegTypeLib"; search on "Registering a
	Type Library"
	
	======================================================================
	Keywords          : kbcode kbAutomation kbide kbRegistry kbVC kbVC500bug kbVC600fix kbVS kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
