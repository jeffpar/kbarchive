---
layout: page
title: "Q169497: PRB: &quot;Another Application is Currently Using JET File...&quot;"
permalink: /kb/169/Q169497/
---

## Q169497: PRB: &quot;Another Application is Currently Using JET File...&quot;

{% raw %}

	Article: Q169497
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 5.0 6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbODBC kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install DAO components, the following error message may appear:
	
	  Another application is currently using JET file, close all applications and
	  continue.
	
	CAUSE
	=====
	
	This error message can have one of following causes:
	
	- Another application has opened one of the DAO/Jet DLL's. When a DLL is loaded
	  in memory, Windows treats the file on the disk it was loaded from as
	  read-only. This is by design.
	
	- The read-only attribute of the file that is being updated has been turned on.
	
	RESOLUTION
	==========
	
	To resolve the first problem, if one of the DLL's that DAO is trying to update
	is loaded in memory, then shut down all of your applications and tell the setup
	program to continue. It is a good idea to perform a setup with all applications
	shut down for this very reason.
	
	The second problem is not as obvious because the setup program cannot distinguish
	between a file with a read-only attribute set and a file that is currently
	loaded into memory. The setup program will not identify the specific file(s)
	that have read-only turned on.
	
	Having the read-only flag set for DLL's is usually used as a low-level virus
	protection, but it can also hamper the operation of programs using those DLL's
	or attempting to upgrade them. From a DOS command prompt, go to the Windows
	directory and type:
	
	     attrib -r *.* /s
	
	You may encounter some files that cannot be set as read-only. As long as they are
	not EXE's or DLL's, it is not a problem.
	
	You may also want to go to the \Program Files\Common Files directory and perform
	the same procedure because DAO/Jet and other shared components are often
	installed there as well.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbvc400 kbvc410 kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 4.0 4.1 4.2 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
