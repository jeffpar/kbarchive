---
layout: page
title: "Q191305: SMS: Hierarchy Manager Can Ignore the Site Attachment Dump"
permalink: /kb/191/Q191305/
---

## Q191305: SMS: Hierarchy Manager Can Ignore the Site Attachment Dump

{% raw %}

	Article: Q191305
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbHMan smshierman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To avoid the cost of doing a database dump when attaching a child primary site
	to a parent site, Hierarchy Manager can now ignore the dump creation command,
	based on a registry setting. This way, if your site has a large number of
	computers, you can set the registry entry and attach to a parent site, and you
	do not need to waste the time doing the dump.
	
	MORE INFORMATION
	================
	
	The Systems Management Server Hierarchy Manager has been modified to look for a
	new DWORD registry value in its component registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Components
	  \SMS_HIERARCHY_MANAGER
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	The new entry is "Dont Send DB To Parent Site". If this entry exists, and its
	DWORD value is set to "1", Systems Management Server does not do a database dump
	to the parent on site attachment. Also, some extra logging has been added, so
	that Systems Management Server can tell whether or not a database dump has been
	instigated.
	
	Additional query words: prodsms hman hrman sms_hierarchy_manager flag SP SP4
	
	======================================================================
	Keywords          : kbHMan smshierman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
