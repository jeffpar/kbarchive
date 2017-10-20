---
layout: page
title: "Q247593: Err Msg: 401.1 Error (Unauthorized: Logon Failed)"
permalink: /kb/247/Q247593/
---

## Q247593: Err Msg: 401.1 Error (Unauthorized: Logon Failed)

{% raw %}

	Article: Q247593
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4011 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to an Internet Information Services (IIS) 5.0 computer,
	the following error message may occur:
	
	  401.1 Unauthorized: Logon failed
	
	CAUSE
	=====
	
	This problem may be caused by a number of reasons, however, the following are
	the most common:
	
	- The users credentials (the username and password) are not correct.
	
	- The user account may not have the right to log on to the computer
	  interactively (the "log on locally" right).
	
	RESOLUTION
	==========
	
	Check the username and the password of the user to make sure that they are
	correct. If this is correct, be sure the user has the "log on locally" right
	granted to it.
	
	To verify user rights, do the following:
	
	1. Open the Local Security Policy tool from the Administrative Tools folder.
	
	2. Select Local Policies, choose User Rights Assignment, and then click the Log
	  On Locally user right.
	
	If the user account or group that the user belongs to is not listed, then add it.
	
	MORE INFORMATION
	================
	
	See the Internet Information Services 5.0 documentation for more information
	about authentication. This documentation can be found at the following URL
	example:
	
	  http://localhost/IISHelp
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4011 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
