---
layout: page
title: "Q190796: PRB: VC Installation Hangs With Message &quot;Updating Registry&quot;"
permalink: /kb/190/Q190796/
---

## Q190796: PRB: VC Installation Hangs With Message &quot;Updating Registry&quot;

	Article: Q190796
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbVC500
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual C++ 5.0 Setup hangs with the following message:
	
	  Updating Registry
	
	CAUSE
	=====
	
	A third-party provider has replaced WSock32.dll.
	
	RESOLUTION
	==========
	
	To work around this problem, perform the following steps:
	
	1. Exit Setup.
	
	2. Exit all applications that use WSock32.dll, typically Internet related
	  applications.
	
	3. Rename WSock32.dll to WSock32.3rd:
	
	        REN WSOCK32.DLL WSOCK32.3RD
	
	  On Windows 95 this file is found in %SYSTEMROOT%/SYSTEM, and on Windows NT
	  this file is found in %SYSTEMROOT%/SYSTEM32.
	
	4. Copy over WSock32.dl_ from your operating system media disk to the same
	  directory in step 3.
	
	5. Expand the file WSock32.dl_ to WSock32.dll:
	
	        EXPAND WSOCK32.DL_ WSOCK32.DLL
	
	6. Run Visual C++ 5.0 Setup.
	
	7. After a successful setup you can revert back to your old third party
	  WSock32.dll although this is not recommended.
	
	STATUS
	======
	
	This behavior is caused by a third party who has been made aware of the
	problem.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
