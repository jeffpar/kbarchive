---
layout: page
title: "Q187626: &quot;Anonymous&quot; Group Members' Profiles Will Be Deleted at Logoff"
permalink: /kb/187/Q187626/
---

## Q187626: &quot;Anonymous&quot; Group Members' Profiles Will Be Deleted at Logoff

{% raw %}

	Article: Q187626
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you would like to have a user profile removed from Terminal Server when the
	user logs off, create a local group on the Terminal Server called "Anonymous."
	Profiles from Anonymous will be deleted from Terminal Server when the user logs
	off, similar to the way in which Windows NT Server and Terminal Server remove
	Guest profiles at logoff.
	
	This procedure is simpler than creating a system policy to not cache user
	profiles.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
