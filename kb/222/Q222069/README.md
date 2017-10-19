---
layout: page
title: "Q222069: IIS 4.0 Requires Username &amp; Password When Using Remote Computer"
permalink: /kb/222/Q222069/
---

## Q222069: IIS 4.0 Requires Username &amp; Password When Using Remote Computer

	Article: Q222069
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Internet Information Server (IIS) 4.0, you can put content on a
	remote Windows NT computer and access it through an IIS virtual directory. When
	doing this, you must enter a username and password on the "Connect As..."
	button.
	
	This is required because Windows NT 4.0 supports only one set of credentials
	(user information) across an authenticated connection and all connections
	between two Windows NT computers are authenticated and secure. When you set this
	option, you must instruct IIS as to what username and password to use.
	
	Note that all access to the computer sharing the network resources is done in the
	context of the person specified in the "Connect As.." dialog box. Therefore,
	this account must be both accessible on the remote computer, and have NTFS
	permissions to the content shared on the remote computer.
	
	MORE INFORMATION
	================
	
	For more information on Microsoft Internet Information Server 4.0 and
	authentication, please see the following Knowledge Base article:
	
	  Q207671 Accessing Network Files from IIS Applications
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
