---
layout: page
title: "Q202157: FP98: Unable to Create CGI-BIN Folder When Publishing Web"
permalink: /kb/202/Q202157/
---

## Q202157: FP98: Unable to Create CGI-BIN Folder When Publishing Web

	Article: Q202157
	Product(s): Word Front Page
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 97 version of this article, see Q200722.
	
	SUMMARY
	=======
	
	When you publish your web to a remote server, you may receive an error message
	that states: "Unable to create cgi-bin folder."
	
	MORE INFORMATION
	================
	
	Many servers have a directory called "cgi-bin" that contains various scripts
	that can be used by all users of that server. This is often a "virtual"
	directory that exists in separate locations on the server. Because it is a
	"virtual" directory, it acts as if it is a part of each user's directory.
	
	To work around this issue, rename the "cgi-bin" folder in your web. To do so,
	follow these steps:
	
	1. In FrontPage Explorer, click Folders on the View menu.
	
	2. Right-click the cgi-bin folder, and then click Rename on the shortcut menu.
	
	3. Rename the folder. For example, rename it scripts.
	
	Additional query words: 98 cgi-bin create folder 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
