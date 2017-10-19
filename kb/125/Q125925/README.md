---
layout: page
title: "Q125925: WFWG Client Cannot Connect to Windows 95 Server"
permalink: /kb/125/Q125925/
---

## Q125925: WFWG Client Cannot Connect to Windows 95 Server

	Article: Q125925
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a Windows 95 server that is using user-level access
	control from a Windows for Workgroups client you receive the following error
	message:
	
	  Error 5
	  Access Denied
	
	This error message occurs even if you enter a correct domain, user name, and
	password when you try to log on.
	
	CAUSE
	=====
	
	This behavior can occur when the following two conditions are met:
	
	- The Windows 95 server uses user-level access control.
	
	- The domain (also known as the pass-through domain) the server uses to
	  validate clients is different from the client's domain.
	
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods:
	
	- Use share-level access control on the server instead of user-level access
	  control.
	
	- Upgrade the client to a Windows 95 client.
	
	- Change the client's logon domain to match the server's.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem does not occur if you obtain the list of users and groups from a
	Novell NetWare server.
	
	
	Additional query words: security validation
	
	======================================================================
	Keywords          : msnets win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
