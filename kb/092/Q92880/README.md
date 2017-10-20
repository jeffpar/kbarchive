---
layout: page
title: "Q92880: WFWG Mail Incorrectly Displays Bad Network Connection Icon"
permalink: /kb/092/Q92880/
---

## Q92880: WFWG Mail Incorrectly Displays Bad Network Connection Icon

{% raw %}

	Article: Q92880
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail sometimes displays a bad network connection icon in its status bar when the
	network is functioning correctly. For example, you may see the bad network
	connection icon and still be able to use File Manager to connect to your mail
	server. You may also receive mail while Mail is displaying the bad network
	connection icon.
	
	CAUSE
	=====
	
	The icon is displayed because your system is very low on disk space. The icon
	indicates that your system failed to download a message because there was
	insufficient space in your mail file. Mail waits and then retries five minutes
	later. If you are using Undelete Sentry or a similar undelete protection
	program, less free disk space may actually be available than is indicated.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups Mail
	versions 3.1 and 3.11. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
