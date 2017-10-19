---
layout: page
title: "Q134529: Persistent Connection Is Dropped"
permalink: /kb/134/Q134529/
---

## Q134529: Persistent Connection Is Dropped

	Article: Q134529
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Persistent connections may be removed if they conflict with commands in the
	NetWare logon script. For example, if the persistent connection attaches to a
	server with one user name and the logon script attaches the user with another
	user name, then the persistent connection is removed and marked as failed in the
	My Computer window.
	
	CAUSE
	=====
	
	The NetWare logon script runs after the persistent connections are restored.
	
	RESOLUTION
	==========
	
	Double-click the broken connection. This restores the connection to the NetWare
	server by using the current user-name attachment.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
