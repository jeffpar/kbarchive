---
layout: page
title: "Q104042: PRB: Unable to Write to the Windows NT Registry"
permalink: /kb/104/Q104042/
---

## Q104042: PRB: Unable to Write to the Windows NT Registry

{% raw %}

	Article: Q104042
	Product(s): Microsoft C Compiler
	Version(s): 1.0 2.0 2.1 4.0 4.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT sets up each Windows NT user with a different environment. When you
	install Visual C++ 32-bit Edition, Visual C++ installs for that particular user.
	If the user changes his or her group membership (privileges), then the Registry
	Key will not work accordingly with Visual C++. The following two messages may
	appear if this happens when starting Visual Workbench:
	
	- Message 1:
	
	  
	
	  The options Registry Key 'Visual C++' is missing. A new Registry
	  Key will be created using the default settings."
	
	  Press OK to continue.
	
	- Message 2:
	
	  
	
	  Unable to write to the NT Registry. Option settings will not be
	  saved.
	
	  Press OK to continue.
	
	After these messages, Visual C++ starts running. However, when you exit you
	receive the second message again.
	
	CAUSE
	=====
	
	Each Windows NT user has a different user profile and privilege level. Each user
	may not have access to the same Registry Key information as the person who
	installed Visual C++. Changing the privilege level of the person who installed
	Visual C++ causes this problem.
	
	RESOLUTION
	==========
	
	Check with the Windows NT administrator for the machine to correctly perform the
	following steps to rebuild the Registry Key for that particular Visual C++
	user.
	
	1. Log in as Administrator and give the user of Visual C++ administrative
	  privileges to delete the Visual C++ entry, with the Registry Editor
	  (REGEDT32.EXE) located in the \WINNT\SYSTEM32 directory. The Visual C++ entry
	  is under the HKEY_CURRENT_USER, Software, Microsoft, Visual C++. Be sure not
	  to delete any entries other than Visual C++.
	
	2. Remove the administrative privileges for the Visual C++ user.
	
	3. Log in as the user and start Visual C++ again; this time you will only
	  receive the first message above and a new Registry entry will be created.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC410 kbVC200 kbVC210
	Version           : 1.0 2.0 2.1 4.0 4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
