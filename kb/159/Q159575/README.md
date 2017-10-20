---
layout: page
title: "Q159575: DOC: SendTime Sample Needs DCOM to Work"
permalink: /kb/159/Q159575/
---

## Q159575: DOC: SendTime Sample Needs DCOM to Work

{% raw %}

	Article: Q159575
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kberrmsg kbdocfix kbdocerr kbEEdition kbVC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SendTime sample that is shipped with the Enterprise Edition of Visual C++
	version 4.2 needs DCOM to work. Windows NT version 4.0 supports DCOM by default,
	but Windows 95 does not. You can acquire the Windows 95 DCOM components off of
	the Visual C++ 5.0 CD or by going to the following article in the Microsoft
	Knowledge Base:
	
	  Q165101 HOWTO: Use Win95 as a DCOM Server
	
	MORE INFORMATION
	================
	
	The DCOM requirement is specified under the topic "Learning About the SENDTIME
	Distributed Application" in Books Online. You need an operating system with DCOM
	to execute this sample.
	
	When you use the Visual C++ Enterprise Edition, the sample builds on Windows 95
	and Windows NT 3.51. When you execute the sample, you get an error message
	stating that the entry point, CoCreateInstanceEx, is either missing or cannot be
	found in Ole32.dll.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbdocfix kbdocerr kbEEdition kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : 4.2
	
	=============================================================================
	

{% endraw %}
