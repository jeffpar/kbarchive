---
layout: page
title: "Q255832: HTTP Compressed Files Not Created in Temporary Folder"
permalink: /kb/255/Q255832/
---

## Q255832: HTTP Compressed Files Not Created in Temporary Folder

{% raw %}

	Article: Q255832
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No compressed files are stored in the temporary folder (also known as the cache
	directory), even though a client that supports HTTP compression has requested
	them.
	
	CAUSE
	=====
	
	Internet Services were not restarted after HTTP compression was enabled.
	
	RESOLUTION
	==========
	
	Restart Internet Services. To do this, perform the following steps:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in.
	
	2. Right-click the computer name, and then click Restart IIS on the Context
	  menu.
	
	3. Select "Restart Internet Services on <ComputerName>", and then click
	  OK.
	
	MORE INFORMATION
	================
	
	When a file is requested, the compressed copy is stored in a temporary folder,
	and then sent when further requests are received. Files are not compressed prior
	to receiving a request for them.
	
	Note: By default, the temporary folder is C:\WINNT\IIS Temporary Compressed
	Files. This is specified on the Service tab in the "WWW Service Master
	Properties for <ComputerName>" dialog box in the IIS snap-in.
	
	Additional query words: iis 5 akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
