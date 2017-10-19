---
layout: page
title: "Q126640: Setting Up a Backup Domain Controller Stated Incorrectly"
permalink: /kb/126/Q126640/
---

## Q126640: Setting Up a Backup Domain Controller Stated Incorrectly

	Article: Q126640
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	Page 38 of the "Windows NT Server Concepts and Planning Guide" incorrectly
	states:
	
	  (However, if you have an existing backup domain controller in a
	  different domain, you can move it from that domain to another.)
	
	This is incorrect. Windows NT identifies each domain by it's security
	identifier (SID), a unique number assigned to the domain. If Windows NT
	Server is moved from one domain to another, the new domain name and the
	original SID will not match. There is no way to replace the original SID
	without reinstalling Windows NT Server.
	
	Page 23 of the "Windows NT Server Installation Guide" correctly states the
	procedure of joining different domains:
	
	  After Setup is finished, the only way a Windows NT Server computer
	  can join a different domain is if you reinstall Windows NT Server.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
