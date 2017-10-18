---
layout: page
title: "Q129484: Renaming User Account Does Not Keep Permissions in LAN Manager"
permalink: kb/129/Q129484/
---

## Q129484: Renaming User Account Does Not Keep Permissions in LAN Manager

	Article: Q129484
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft LAN Manager, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you rename a user account on a Windows NT Server primary domain controller
	(PDC) and the user account has specific permissions on a Microsoft LAN Manager
	Server backup domain controller (BDC), the new user account does not have the
	same permissions on the LAN Manager BDC's network share.
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Change the access control lists (ACLs) of all files on the LAN Manager Server
	  to reference groups rather than individual users before you rename the user
	  account.
	
	2. After you rename the user account, change the ACLs of the files to include
	  the new user name.
	
	Additional query words: prodnt 2.2b 2.2c user name
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan220
	
	=============================================================================
	
