---
layout: page
title: "Q177665: Path Too Long Error Message When Exceeding MAX_PATH"
permalink: /kb/177/Q177665/
---

## Q177665: Path Too Long Error Message When Exceeding MAX_PATH

{% raw %}

	Article: Q177665
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 and Windows NT 4.0 clients can expand a server directory structure
	beyond MAX_PATH (256 characters) by accessing a server share and creating
	directories and files through the network.
	
	As a result, a server running Windows NT 4.0 returns the following error message
	if the server administrator tries to access these files or directories locally
	on the server through Windows NT Explorer:
	
	  Can't access this folder.
	  Path is too long.
	
	If you attempt to create a new folder, you may receive the following error
	message:
	
	  Unable to create the folder '<name>'.
	  The filename or extension is too long.
	
	A server running Windows NT 3.51 shows unexpected results in File Manager such as
	a general protection fault (GP fault), WINFILE crash, or display of nonexistent
	directories.
	
	Several tools and programs may also show problems when working with this
	directory structure that exceeds MAX_PATH.
	
	
	
	CAUSE
	=====
	
	Win32 programs are limited to a 256-character string size limit because of the
	MAX_PATH variable. Software programs can work around this problem by passing
	Win32 a path that is MAX_PATH or less. The real underlying path can then be
	accessed independently of the real length of the path. In this way, a program
	can access files or directories beyond MAX_PATH on the server.
	
	RESOLUTION
	==========
	
	To resolve problems when the directory structure exceeds MAX_PATH, use either of
	the following methods:
	
	- On the server that contains the long directory structure, access these files
	  and folders through a local redirection ("net use" or "subst") of the same
	  share/folder that the network clients access across the network.
	
	- In Windows NT Explorer, select the folder one level above the folder that
	  returns the error. Right-click the folder returning the error and then click
	  Rename. Rename the folder to reduce the number of characters used in the
	  folder name.
	
	MORE INFORMATION
	================
	
	The problem described above could not be reproduced with NTBACKUP and files and
	directories that were beyond the MAX_PATH limit could be backed up and restored
	successfully.
	
	Additional query words: User Interface explore
	
	======================================================================
	Keywords          : kberrmsg kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
