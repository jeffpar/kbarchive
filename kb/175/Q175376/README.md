---
layout: page
title: "Q175376: Connected User Names Disappear from List on SBS"
permalink: /kb/175/Q175376/
---

## Q175376: Connected User Names Disappear from List on SBS

{% raw %}

	Article: Q175376
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When observing the users who are connected to the computer running Microsoft
	BackOffice Small Business Server by looking at the Manage Connected Users page,
	you will see the user names slowly appear and disappear from the list.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Click the following tabs on the Small Business Server Administrative Console to
	observe the client connections to the server:
	
	1. Click Task.
	
	2. Click Manage Users.
	
	3. Click Manage Connected Users.
	
	When a user is connected to the server and is browsing the Internet, and so on,
	the user name will show up in the list. When the user is no longer actively
	using the connection, the connection is dropped and the user name will disappear
	from the list. This is normal and shows only the users who have actively
	accessed the connection within the last few minutes.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: smallbiz sbs lost dropping drop
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
