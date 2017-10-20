---
layout: page
title: "Q154054: PRB: Possible Application Failure Using SmartHeap"
permalink: /kb/154/Q154054/
---

## Q154054: PRB: Possible Application Failure Using SmartHeap

{% raw %}

	Article: Q154054
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbCRT kbVC
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to MicroQuill Technical Support, if your application is using:
	
	- the SmartHeap 3.0 or 3.1 DLL, sh30w32.dll or sh31w32.dll
	
	  -and-
	
	- the DLL version of the C runtime library, msvcrt40.dll that ships with Visual
	  C++ 4.2
	
	  -and-
	
	- the application is linked with another DLL before the SmartHeap DLL,
	
	you may have compatibility problems between SmartHeap and msvcrt40.dll.
	
	NOTE: The properties for this DLL contain a description saying it is a "Microsoft
	(R) C Runtime Library Forwarder DLL."
	
	The symptoms of compatibility problems may include a crash of your application
	with a stack fault in a call to _msize(), or a process termination without
	warning during initialization of a DLL.
	
	For information about how to contact MicroQuill Technical Support, query in the
	Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	For more information regarding the MSVCRT40.DLL (Forwarder DLL), please see the
	following article:
	
	  Q154591 BUG:Wrong Version of MSVCRT40.DLL(Forwarder DLL) in Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : :4.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
