---
layout: page
title: "Q117202: FIX: &quot;Set Bookmarks on All&quot; May Cause Application Error"
permalink: /kb/117/Q117202/
---

## Q117202: FIX: &quot;Set Bookmarks on All&quot; May Cause Application Error

{% raw %}

	Article: Q117202
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following steps cause an application error in the Visual Workbench:
	
	1. Open any file from the File menu.
	
	2. Choose the Duplicate option under the Window menu to duplicate the window
	  with the file.
	
	3. Select the text in the duplicate window, using the mouse.
	
	4. Select Find from the Edit menu.
	
	5. Choose Set Bookmarks on All.
	
	The application error produced on Windows is:
	
	  
	
	 ----------------------------------------------------------
	|                    Application Error                     |
	|                                                          |
	|         MSVC caused a General Protection Fault in        |
	|             module MSVC.EXE at 0002:021F.                |
	|                                                          |
	 ----------------------------------------------------------
	
	The application error produced on Windows NT is:
	
	  
	
	 ----------------------------------------------------------
	|            Find: MSVC.EXE - Application Error            |
	|                                                          |
	|  The instruction at "0x0002a9a5" referenced memory at    |
	|  "0x00000008". The memory could not be "read".           |
	|                                                          |
	|  Click on OK to terminate the application.               |
	|  Click on CANCEL to debug the application.               |
	|                                                          |
	 ----------------------------------------------------------
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This is not an issue in Visual C++ 2.0, because there is no
	Duplicate option.
	
	Additional query words: 1.00 1.50
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
