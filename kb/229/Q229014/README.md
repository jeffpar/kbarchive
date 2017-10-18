---
layout: page
title: "Q229014: &quot;Connected Users&quot; Values When Using Anonymous Access on FTP Site"
permalink: kb/229/Q229014/
---

## Q229014: &quot;Connected Users&quot; Values When Using Anonymous Access on FTP Site

	Article: Q229014
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Service Manager (ISM) displays the list of connected users for an
	FTP site. When the site uses Anonymous access, the name in the Connected Users
	list varies, depending on how the anonymous connection was established.
	
	MORE INFORMATION
	================
	
	Connected Users Values
	----------------------
	
	The table below lists how the Anonymous access connection is established, and the
	corresponding connected user shown for each connection.
	
	+-----------------------------------------------------------------+
	| Anonymous Connection Method             | Connected Users Value | 
	+-----------------------------------------------------------------+
	| Using FTP utility, no password provided | Anonymous             | 
	+-----------------------------------------------------------------+
	| Using FTP utility, password provided    | PassWord              | 
	+-----------------------------------------------------------------+
	| Browsing with Internet Explorer 4.0     | IE40user@             | 
	+-----------------------------------------------------------------+
	| Browsing with Netscape Navigator 4.08   | mozilla@              | 
	+-----------------------------------------------------------------+
	
	Viewing the Connected Users List
	--------------------------------
	
	To view the list of the connected users, perform the following steps:
	
	1. Start the ISM, which loads the Internet Information Server snap-in for the
	  Microsoft Management Console.
	
	2. Right-click the FTP site, and then click Properties.
	
	3. On the FTP Site tab, click the Current Sessions button. This will display a
	  Connected Users listbox.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
