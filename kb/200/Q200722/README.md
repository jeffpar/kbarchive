---
layout: page
title: "Q200722: FP: Unable to Create CGI-BIN Folder When Publishing Web"
permalink: /kb/200/Q200722/
---

## Q200722: FP: Unable to Create CGI-BIN Folder When Publishing Web

{% raw %}

	Article: Q200722
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
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
	
	Additional query words: 97 cgi-bin create folder
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
