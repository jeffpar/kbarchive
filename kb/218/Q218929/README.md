---
layout: page
title: "Q218929: FIX: UUID.LIB In VC6 Has Bad Definition for IViewFilter w/OLE DB"
permalink: /kb/218/Q218929/
---

## Q218929: FIX: UUID.LIB In VC6 Has Bad Definition for IViewFilter w/OLE DB

	Article: Q218929
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbATL kbDatabase kbOLEDB kbVC600bug kbVS600sp2bug kbVS600sp3fix kbGrpDSVC
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	E_NOINTERFACE is returned when you QueryInterface an OLE DB provider for the
	IViewFilter interface and the provider is known to properly support the
	IViewFilter interface. This output is received rather than the expected S_OK.
	
	CAUSE
	=====
	
	Your OLE DB consumer may have a different GUID value for IViewFilter obtained
	when linking with the Uuid.lib file. The library file Uuid.lib installed by
	Visual C++ 6.0 contains the GUID {3050F2F1-98B5-11CF-BB82-00AA00BDCE0B} for the
	IViewFilter interface. The correct GUID value for IViewFilter when used in
	conjunction with Oledb.h is {0C733A9B-2A1C-11CE-ADE5-00AA0044773D}.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	To verify that you have the correct GUID value for IViewFilter, run the
	following sample code from your consumer application:
	
	     OLECHAR wszGUID[1024];
	     ::StringFromGUID2( IID_IViewFilter, 
	                        wszGUID, 
	                        sizeof(wszGUID) / sizeof(OLECHAR) );
	     ::MessageBoxW( NULL, wszGUID, L"IViewFilter Guid Value", MB_OK );
	
	If the message box displays the GUID {0C733A9B-2A1C-11CE-ADE5-00AA0044773D}, then
	you have a valid GUID for IViewFilter when used with OLE DB.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbATL kbDatabase kbOLEDB kbVC600bug kbVS600sp2bug kbVS600sp3fix kbGrpDSVCDB kbVS600SP1bug kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
