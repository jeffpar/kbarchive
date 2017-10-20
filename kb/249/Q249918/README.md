---
layout: page
title: "Q249918: Logon Does Not Work, System Error 1385 Appears"
permalink: /kb/249/Q249918/
---

## Q249918: Logon Does Not Work, System Error 1385 Appears

{% raw %}

	Article: Q249918
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to map a drive to a network share on a server, you may not be able
	to do so and you may receive the following system error message (1385):
	
	  Logon failure: The user has not been granted the requested logon type at this
	  computer.
	
	CAUSE
	=====
	
	This behavior can occur when the user account does not have the user right
	"Access this computer from network".
	
	RESOLUTION
	==========
	
	To resolve this behavior, in User Manager For Domains, either grant the user
	account the "Access this computer from network" user right, or add the user
	account to a group that has this right defined on the server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbWinNTS351search
	Version           : WINDOWS:2000; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
