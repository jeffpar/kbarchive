---
layout: page
title: "Q253865: Java Log Is Not Created on Terminal Server"
permalink: /kb/253/Q253865/
---

## Q253865: Java Log Is Not Created on Terminal Server

{% raw %}

	Article: Q253865
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Explorer has an advanced option to create a log file for
	logging Java errors that are encountered by Internet Explorer when the browser
	visits a Java-enabled Web site. This creates a log that is stored in the
	%SystemRoot%\Java folder. However, when you are using Internet Explorer on
	Terminal Server and you enable this option, the log file is not created.
	
	RESOLUTION
	==========
	
	When you enable this advanced option in Internet Explorer while you are using
	Terminal Server, the creation of the Java folder is mapped to the user's space,
	or to the %SytemRoot%\Profiles\<Username>\Windows folder instead of the
	%SystemRoot% folder. To resolve this issue, simply create the Java folder in the
	%SytemRoot%\Profiles\<Username>\Windows folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
