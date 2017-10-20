---
layout: page
title: "Q131785: Cannot Find Home Directory Share on Windows NT Server"
permalink: /kb/131/Q131785/
---

## Q131785: Cannot Find Home Directory Share on Windows NT Server

{% raw %}

	Article: Q131785
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows for Workgroups you cannot connect to your home directory
	share on a Windows NT Server. The following error message appears:
	
	  Error 53: The computer name specified in the network path cannot be located.
	
	CAUSE
	=====
	
	This problem occurs when the Windows NT server name is 13 or more characters
	long.
	
	WORKAROUND
	==========
	
	To work around this problem, use a server name that is 12 characters or fewer.
	
	Additional query words: 3.11 wfw wfwg user name
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
