---
layout: page
title: "Q241856: PRB: Crash in DllMain After FreeLibrary is Called on a Resource"
permalink: /kb/241/Q241856/
---

## Q241856: PRB: Crash in DllMain After FreeLibrary is Called on a Resource

{% raw %}

	Article: Q241856
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDLL kbResource kbDSupport kbGrpDSMFCATL
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive an access violation in DllMain after unloading a DLL using the
	FreeLibrary() API call.
	
	CAUSE
	=====
	
	The DLL was a resource DLL with no entry point. The crash did not occur
	immediately after the FreeLibrary() call, but rather later on. The resource DLL
	was loaded either by LoadLibrary() or with LoadLibraryEx() with the last
	parameter set to 0.
	
	RESOLUTION
	==========
	
	The resource DLL should be loaded with LoadLibraryEx() instead and with the last
	parameter set to LOAD_LIBRARY_AS_DATAFILE.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A resource DLL does not have an entry point. You can verify that a DLL is
	resource-only by viewing the DLL import headers using the dumpbin utility that
	ships with Visual C++. You can use the following command from a command prompt
	to generate a text file for examination:
	
	  dumpbin /headers mydll.dll > examine.txt
	
	After running the above command, the text file Examine.txt is generated. If you
	open Examine.txt in a text editor, you can verify a DLL is a resource DLL by
	examining the value of RVA of entry point entry under the Optional Header Values
	section. If it is set to zero, then the DLL is a resource-only DLL.
	
	
	REFERENCES
	==========
	
	  Q202197 BUG: Freeing Resource DLLs in ExitInstance Causes Error
	
	Additional query words: Access Violation Win95 localize resources
	
	======================================================================
	Keywords          : kbDLL kbResource kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
