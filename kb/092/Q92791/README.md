---
layout: page
title: "Q92791: File Manager Does Not Allow Copying of Open Files"
permalink: /kb/092/Q92791/
---

## Q92791: File Manager Does Not Allow Copying of Open Files

	Article: Q92791
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use File Manager to copy a file that is being used by another
	application, the following error message is generated:
	
	  Access denied, source file may be in use.
	
	However, if you use the COPY command from MS-DOS Prompt to copy a file that is
	being used by another application, the file copies successfully.
	
	CAUSE
	=====
	
	For security reasons, File Manager refuses to copy files that another
	application might be in the process of changing. The COMMAND.COM portion of
	MS-DOS does not check to see of if the file is being changed by another
	application.
	
	NOTE: To avoid losing data, do not try to copy files that are being modified by
	either Windows-based or MS-DOS-based applications.
	
	Additional query words: 3.10 3.11 open file copies open-file
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
