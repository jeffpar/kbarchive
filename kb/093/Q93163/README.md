---
layout: page
title: "Q93163: File Manager Title Bar: &quot;Too Many Files. Unable to Read...&quot;"
permalink: /kb/093/Q93163/
---

## Q93163: File Manager Title Bar: &quot;Too Many Files. Unable to Read...&quot;

	Article: Q93163
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have too many files in a directory and Windows runs out of memory, File
	Manager displays a dialog box with a partial listing of files and the following
	title:
	
	  Too Many Files. Unable to read entire directory.
	
	This problem can occur with Windows 3.0, 3.0a, 3.1, 3.11 and Windows for
	Workgroups 3.1 and 3.11.
	
	CAUSE
	=====
	
	This message is displayed when the total amount of memory needed to display the
	directory exceeds 64K.
	
	WORKAROUND
	==========
	
	To workaround this problem, close other applications to free up more memory, or
	reduce the number of files you keep in one directory.
	
	MORE INFORMATION
	================
	
	When File Manager reads in a directory structure, it stores the information in
	Windows Global Memory Pool. If Windows cannot allocate the memory File Manager
	needs to read and display the directory structure, the
	
	  Too Many Files
	
	error message is displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a limitation of File Manager.
	
	Additional query words: 3.00 3.00a 3.10 3.11 Novell limit file
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
