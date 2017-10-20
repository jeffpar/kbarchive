---
layout: page
title: "Q107820: WFWG: Can't Connect to Share That Has Multiple Passwords"
permalink: /kb/107/Q107820/
---

## Q107820: WFWG: Can't Connect to Share That Has Multiple Passwords

{% raw %}

	Article: Q107820
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating a share with multiple passwords, one password for the read-only
	option and the other for the write option for example, you cannot log on to both
	shares simultaneously.
	
	CAUSE
	=====
	
	This occurs because the redirector is using the same universal naming convention
	(UNC) path for both sessions.
	
	This functionality is by design.
	
	WORKAROUND
	==========
	
	Disconnect from the share with one option password if you want to connect to the
	same share with another option password.
	
	For example, if you have the following shares set up:
	
	- "D" connecting to \\MYSERVER\MYSHARE with read-only access
	
	  -and-
	
	- "E" connecting to \\MYSERVER\MYSHARE with read/write access
	
	You must disconnect from "E" if you want to have read-only access. Conversely,
	you must disconnect from "D" if you want to have read/write access.
	
	Additional query words: 3.11 unc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
