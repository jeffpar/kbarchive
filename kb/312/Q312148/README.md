---
layout: page
title: "Q312148: POSIX Utilities Do Not Work If Source Path Folders Contain Space"
permalink: /kb/312/Q312148/
---

## Q312148: POSIX Utilities Do Not Work If Source Path Folders Contain Space

	Article: Q312148
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Server Resource Kit Supplement One ISBN 0-7356-1279-x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The POSIX utilities, which are included with Supplement One of the Windows 2000
	Server Resource Kit, do not work if any folder name in the source path of the
	POSIX utilities contains a space.
	
	For example, if the POSIX utility ls.exe is placed in the folder C:\Program
	Files, when running ls.exe at the command prompt from that folder you will
	receive the following error message:
	
	C:\Program Files\ls
	Usage: posix /c <path> [<args>]
	
	To work around this issue, you must place the POSIX utilities in a source path
	that does not contain folders with spaces in their names.
	
	MORE INFORMATION
	================
	
	The POSIX utilities included with the Resource Kit are not the official Unix
	tools provided by Microsoft. If you need to run full-featured UNIX tools in
	Windows, please obtain the Microsoft Windows Services For Unix:
	
	http://www.microsoft.com/windows2000/sfu
	(http://www.microsoft.com/windows2000/sfu)
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: RKBOOK TOOLS 0-7356-1279-X
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
