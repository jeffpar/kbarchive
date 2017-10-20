---
layout: page
title: "Q152526: Changing the Default Interval for User Tokens in IIS"
permalink: /kb/152/Q152526/
---

## Q152526: Changing the Default Interval for User Tokens in IIS

{% raw %}

	Article: Q152526
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbnetwork kbIIS
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) has a default delay of 15 minutes before users
	tokens are updated. For example, if you change the password on a user account,
	you will be able to connect to the server with both the old password and the new
	password.
	
	CAUSE
	=====
	
	For performance reasons, user tokens are cached by IIS and updated at 15 minute
	intervals.
	
	RESOLUTION
	==========
	
	The token cache can be refreshed manually by stopping and restarting ALL of the
	IIS services (Gopher, FTP, and WWW). For performance reasons, this is the
	preferred method if updates are infrequent.
	
	The default interval for the token cache can also be changed in the Microsoft
	Windows NT registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\InetInfo\Parameters
	
	3. Click Add Value on the Edit menu, and add the following:
	
	Value Name: UserTokenTTL
	Data Type: REG_DWORD
	Data: (Number of Seconds for token to be cached - 30 sec. Min)
	
	NOTE: For IIS version 4.0, the minimum value is 30 seconds. For IIS 5.0, the
	minimum value is 1 second. If you set the value to 0, the minimum value will be
	used instead.
	4. Stop and restart all three IIS services (WWW, FTP, and GOPHER).
	
	Additional query words: prodiis iis timeout credentials
	
	======================================================================
	Keywords          : kbnetwork kbIIS 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0,5.0
	
	=============================================================================
	

{% endraw %}
