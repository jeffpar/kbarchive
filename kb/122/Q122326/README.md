---
layout: page
title: "Q122326: BUG: Win32s Setup May Fail if BUFFERS or FILES Set Too Small"
permalink: /kb/122/Q122326/
---

## Q122326: BUG: Win32s Setup May Fail if BUFFERS or FILES Set Too Small

{% raw %}

	Article: Q122326
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 4.00 4.10
	Operating System(s): 
	Keyword(s): kbsetup kbOSWin32s
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ Win32s Setup program may fail if BUFFERS or FILE settings in your
	CONFIG.SYS file are set too low. Setup requires that the number of files
	specified be at least 50 and the number of buffers specified be at least 30.
	
	RESOLUTION
	==========
	
	Make sure your CONFIG.SYS file contains the following lines:
	
	     BUFFERS=30
	     FILES=50
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1.20 2.00 2.10 4.00 4.10 4.20 uae failure vcbuglist40
	
	======================================================================
	Keywords          : kbsetup kbOSWin32s 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC200 kbVC210 kbVC32bitSearch
	Version           : 2.00 2.10 4.00 4.10
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
