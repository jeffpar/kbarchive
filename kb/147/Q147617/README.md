---
layout: page
title: "Q147617: Third-Party Browsers Get Access Denied Msg Connecting to IIS"
permalink: kb/147/Q147617/
---

## Q147617: Third-Party Browsers Get Access Denied Msg Connecting to IIS

	Article: Q147617
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to secure directories on an Internet Information Server
	(IIS) through a browser that does not support Windows NT Authentication, you
	will receive an error message stating that access is denied.
	
	CAUSE
	=====
	
	The Access Denied message occurs because your third-party browser is not capable
	of sending the Windows NT Challenge Authentication information to the server.
	
	WORKAROUND
	==========
	
	To work around this problem, enable Basic Authentication on your browser, and
	when you are prompted for a password, enter your Windows NT account information
	in the following format
	
	  domainname/username
	
	For example, if the Windows NT domain name of johndoe is logging on to a domain
	named mydomain, you would enter
	
	  mydomain/johndoe
	
	in the username (or user) field, and your password in the password field.
	
	NOTE: Your browser must support basic authentication for the domainname/username
	syntax to work correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbiisSearch kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
