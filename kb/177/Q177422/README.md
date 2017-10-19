---
layout: page
title: "Q177422: BUG: Invalid Directory Path Encountered During Install"
permalink: /kb/177/Q177422/
---

## Q177422: BUG: Invalid Directory Path Encountered During Install

	Article: Q177422
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbVC kbVC100bug kbVC200bug kbOSWinCEsearch kbOSWinCE100
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows CE, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While installing the product listed above, the Setup program may display an
	invalid folder name, such as "/:/Program Files," and state that the folder
	cannot be created.
	
	CAUSE
	=====
	
	The Microsoft Visual C++ version 5.0 registry keys are missing contents or are
	corrupted.
	
	RESOLUTION
	==========
	
	You can resolve this problem by setting up the Microsoft Visual C++ registry
	correctly. One of the following methods can be used to resolve this problem:
	
	- Microsoft Visual C++ was not installed with the current user profile. If you
	  originally installed Microsoft Visual C++ version 5.0 using a different user
	  account/domain, use the same one when installing Microsoft Visual C++ for
	  Windows CE version 1.0.
	
	- Microsoft Visual C++ version 5.0 may not be installed. If you have only
	  installed other Microsoft Developer Studio based products such as Microsoft
	  Visual J++ or Microsoft Visual InterDev, you may experience this problem. You
	  must install Microsoft Visual C++ version 5.0 to use Microsoft Visual C++ for
	  Windows CE version 1.0.
	
	- The Microsoft Developer Studio registry keys may be corrupted. To resolve
	  this problem, uninstall Microsoft Visual C++ version 5.0, reboot and then
	  re-install Microsoft Visual C++ version 5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft product listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbwince100bug
	
	======================================================================
	Keywords          : kbVC kbVC100bug kbVC200bug kbOSWinCEsearch kbOSWinCE100 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword3 kbVC100WinCE kbVC200WinCE
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
