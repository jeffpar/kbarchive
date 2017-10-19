---
layout: page
title: "Q167157: Cannot Connect to Netcom"
permalink: /kb/167/Q167157/
---

## Q167157: Cannot Connect to Netcom

	Article: Q167157
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty dun kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to Netcom using Windows 95 Dial-Up Networking, the
	connection may be denied even though it appears you supplied the correct name
	and password.
	
	CAUSE
	=====
	
	The Netcom online service requires "us,ppp," characters as a prefix to your user
	name.
	
	RESOLUTION
	==========
	
	To include the "us,ppp," character as a prefix to your user name, follow these
	steps:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Double-click the connection icon for Netcom.
	
	3. In the User Name box, insert the "us,ppp," characters at the beginning of
	  your user name. For example:
	
	  us,ppp,<username>
	
	4. If appropriate, type your password in the Password box.
	
	5. Click Connect.
	
	Note that your name and password are saved only if the connection is completed.
	If the attempt to connect fails for any reason (such as a busy signal), the user
	name and password revert to their original values.
	
	MORE INFORMATION
	================
	
	The Internet service provider discussed in this article is a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this vendor's
	performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty dun kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
