---
layout: page
title: "Q246325: System Administration of File and Directory Access in Interix"
permalink: kb/246/Q246325/
---

## Q246325: System Administration of File and Directory Access in Interix

	Article: Q246325
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the system administration of file and directory access in
	Interix.
	
	MORE INFORMATION
	================
	
	By default, Microsoft Windows NT users do not require Execute permissions on all
	components of a directory path to gain access to a file. To change this
	configuration for Interix users, disable the Bypass Traverse Checking privilege
	using the following steps:
	
	1. Log on as Administrator.
	
	2. Start User Manager.
	
	3. On the Policies menu, click User Rights.
	
	4. Click Show Advanced User Rights.
	
	5. In the Bypass Traverse Checking area, replace Everyone with the list of users
	  who do not require Posix.1 conformance. In most Interix installations, no
	  users are given the Bypass Traverse Checking privilege.
	
	For additional information, refer to the following Interix Web site:
	
	  http://www.interix.com/NewInterix/technotes/note0006.html
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
