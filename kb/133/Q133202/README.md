---
layout: page
title: "Q133202: Windows NT File System Security and WWW Browsing"
permalink: /kb/133/Q133202/
---

## Q133202: Windows NT File System Security and WWW Browsing

{% raw %}

	Article: Q133202
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Windows NT as your HyperText Transfer Protocol (HTTP) Server, you
	cannot effectively use Windows NT file system (NTFS) permissions to secure
	access to files when they are accessed from a World Wide Web browser.
	
	MORE INFORMATION
	================
	
	If your HTTP Server has HyperText Markup Language (HTML) documents on an
	NTFS-formatted drive, the document files need to have permissions assigned to
	the SYSTEM account to allow client Web browsers to read the files. If you use a
	Web browser to access a file that has been given the No Access permission for
	SYSTEM, or does not have any access permissions, an error similar to the
	following appears:
	
	  HTAccess: Error accessing "http://server/file.htm":
	
	  "HTTP: File/directory does not exist"
	
	The exact error message text varies depending on the client browser software.
	
	As long as the file has the Read permission granted to the SYSTEM account, which
	is part of the Everyone group, Web browsers will be able to read the file.
	
	This information is based on the HTTP Server version 0.94 from the European
	Microsoft Windows NT Academic Centre (EMWAC) and NCSA Mosaic for Windows version
	2.0 Final Beta. These products are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: HTM internet prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
