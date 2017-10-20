---
layout: page
title: "Q166910: &quot;A Slow Network Connection...&quot; When Logging On at DC"
permalink: /kb/166/Q166910/
---

## Q166910: &quot;A Slow Network Connection...&quot; When Logging On at DC

{% raw %}

	Article: Q166910
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start a Windows NT 4.0 domain controller and log on at the console,
	the following message appears:
	
	  A slow network connection has been detected
	
	The user is then asked whether or not to load a roaming profile. However, if the
	user logs off and logs on again after the system has been started, the message
	will not be displayed.
	
	CAUSE
	=====
	
	Depending on the speed of the computer and the number of services started when
	the system starts, it is possible to attempt to log on at the system console
	before the networking services have fully started. In this case, a user logging
	on at the console may get this message. After networking services have fully
	started, the user can log off and log on again without getting the message.
	
	RESOLUTION
	==========
	
	To resolve this problem, wait until startup drive activity stops before logging
	on.
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
