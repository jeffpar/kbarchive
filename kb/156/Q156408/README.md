---
layout: page
title: "Q156408: Setting Up Virtual Directory May Cause &quot;Logon Failure&quot; ErrMsg"
permalink: kb/156/Q156408/
---

## Q156408: Setting Up Virtual Directory May Cause &quot;Logon Failure&quot; ErrMsg

	Article: Q156408
	Product(s): Internet Information Server
	Version(s): WinNT:2.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 17-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Internet Information Server (IIS) version 2.0 with a virtual
	directory to a NetWare server, you may receive the following error message:
	
	  Logon failure: unknown user or password.
	
	CAUSE
	=====
	
	Internet Information Server uses the username and password in the Virtual
	Directory Configuration dialog box to connect to the NetWare server. IIS assumes
	this is a valid account on both the NetWare server and the Windows NT Server
	computer.
	
	RESOLUTION
	==========
	
	You can use User Manager for domains to assure that the account used to access
	the NetWare server is valid on both the NetWare server and in the Windows NT
	domain local database. If the account is a domain user, then remember to use the
	<domain name>\<username> nomenclature when you enter the user name.
	
	Additional query words: log on
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis200
	Version           : WinNT:2.0
	
	=============================================================================
	
