---
layout: page
title: "Q318677: PRB: System Hangs When You Reach Maximum Child Windows in MDI"
permalink: /kb/318/Q318677/
---

## Q318677: PRB: System Hangs When You Reach Maximum Child Windows in MDI

	Article: Q318677
	Product(s): Microsoft C Compiler
	Version(s): 4.0a,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, 32-bit Editions, versions 4.0a, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a multiple-document interface (MDI) application runs and creates many child
	windows, the following problems may occur:
	
	- You cannot create any more child windows.
	
	- The Start button or menu items do not respond.
	
	- You cannot run other applications.
	
	- Other applications may be adversely affected.
	
	This problem may occur even when there is adequate physical memory available in
	Microsoft Windows NT, Microsoft Windows 2000, or Microsoft Windows XP. This lack
	of physical memory occurs when the desktop heap in the WIN32 subsystem is
	depleted.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You cannot determine the maximum number of child windows that can be created in
	an application because this depends on several factors:
	
	- How a program is implemented,
	- The environment of the program, such as:
	
	   - Physical factors, such as implemented memory
	   - Variable factors, such as the number of applications that are run
	     concurrently.
	
	NOTE: You cannot check the usage status of the desktop heap while an application
	is running.
	
	You may also notice memory shortage problems when you run an MDI application that
	creates many document templates by using the same menu resource. MFC is not
	implemented with a function that deletes added document templates. For
	additional information about templates that share a menu resource, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q118435 INFO: Sharing Menus Between MDI Child Windows
	
	REFERENCES
	==========
	
	For additional information about the desktop heap, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q126962 Increasing the Desktop Application Heap
	
	  Q184802 PRB: User32.dll or Kernel32.dll Fails to Initialize
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC400a kbVC500Search
	Version           : :4.0a,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
