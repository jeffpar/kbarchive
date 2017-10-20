---
layout: page
title: "Q183729: Valid User Needed for Remote Administration Using HTMLA"
permalink: /kb/183/Q183729/
---

## Q183729: Valid User Needed for Remote Administration Using HTMLA

{% raw %}

	Article: Q183729
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To administer a remote computer running Internet Information Server (IIS) 4.0
	using Internet Service Manager (HTML), you must log on with a valid
	administrator (or operator) account for that remote computer. If you want to
	access Internet Service Manager (HTML) on a remote computer with a different
	account, an account other than the one you used to log on to the local computer,
	you must enable Basic Authentication and disable Windows NT Challenge/Response
	authentication on the Directory Security property sheet for the Administration
	Web site or the IISAdmin virtual directory. You will then be prompted for proper
	user account credentials.
	
	MORE INFORMATION
	================
	
	With previous releases, you could create a session to \\ServerName\IPC$ using a
	different user account to get access. This will not work for IIS 4.0.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
