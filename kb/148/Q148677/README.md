---
layout: page
title: "Q148677: Error Attempting to Access IIS Using Netscape Navigator 2.0"
permalink: /kb/148/Q148677/
---

## Q148677: Error Attempting to Access IIS Using Netscape Navigator 2.0

	Article: Q148677
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Netscape Navigator 2.0 to access a Microsoft Internet Information
	Server using the Windows NT Challenge/Response password authentication, a dialog
	box appears that requests your user name and password. After you enter the
	correct user name and password, the following error message appears:
	
	  Error: Access is Denied
	
	CAUSE
	=====
	
	Netscape Navigator 2.0 does not support the Windows NT Challenge/Response
	password authentication even though it does prompt you for a user name and
	password.
	
	RESOLUTION
	==========
	
	To correct this problem, use Anonymous or Basic user authentication in Internet
	Information Server.
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
