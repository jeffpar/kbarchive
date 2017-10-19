---
layout: page
title: "Q103489: Logon Hours Rights Are Checked Only During Actual Logon Time"
permalink: /kb/103/Q103489/
---

## Q103489: Logon Hours Rights Are Checked Only During Actual Logon Time

	Article: Q103489
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	In Windows NT Advanced Server, the Logon Hours set in Users Rights are
	checked only at the actual logon time. If a User is logged on to
	Domain B with Workstation A and the Administrator changes their logon
	hours to not allow access to Domain B at that time, the user is NOT
	logged off of Domain B automatically. The User would have to log off
	and attempt to log back on before access would be denied. The Logon
	Hours Rights for Users are set with the User Manager for Domains.
	
	
	NOTE: This issue affects Windows NT Services for Macintosh as well.
	
	Additional query words: sfm prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
