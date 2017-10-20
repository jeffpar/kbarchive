---
layout: page
title: "Q178271: Problem Renaming Files on a UNIX-based DEC Pathworks Server"
permalink: /kb/178/Q178271/
---

## Q178271: Problem Renaming Files on a UNIX-based DEC Pathworks Server

{% raw %}

	Article: Q178271
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot rename a file that is located on version 6.1 or earlier of a
	UNIX-based DEC Pathworks server to a name that has more characters than the
	current file name.
	
	MORE INFORMATION
	================
	
	This behavior is only seen under the following conditions:
	
	- The files are located on a UNIX-based DEC Pathworks server, version 6.1 or
	  earlier.
	
	- The client exhibiting the behavior is a computer running Windows NT 4.0
	  Server or Workstation, any service pack level.
	
	- The client is using Windows NT Explorer to rename the file.
	
	- The client has a drive letter mapped to the Pathworks server.
	
	Under the above conditions, the file rename will not allow you to extend the name
	of the file. If attempted at an MS-DOS prompt, or through Windows NT Explorer by
	means of a UNC connection, you can rename the file normally as expected.
	
	The reason for this behavior is that the Pathworks server reports its maximum
	allowed file name length incorrectly.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this products'
	performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
