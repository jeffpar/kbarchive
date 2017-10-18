---
layout: page
title: "Q157608: User Migration Fails If Only the &quot;Everyone&quot; Group Exists"
permalink: kb/157/Q157608/
---

## Q157608: User Migration Fails If Only the &quot;Everyone&quot; Group Exists

	Article: Q157608
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Migration Tool for NetWare (Nwconv.exe) to transfer user and
	group accounts from a NetWare server to a computer running Windows NT Server, no
	user accounts are transferred. In addition, you see the following error message
	in the log file:
	
	  Error: getting groups on server: <server-name>
	
	CAUSE
	=====
	
	This behavior can occur if there are no groups other than the default EVERYONE
	group on the NetWare server.
	
	RESOLUTION
	==========
	
	To work around this problem, create another group (other than the EVERYONE
	group) on the NetWare server before you migrate the accounts to Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	
	Additional query words: nwconv migrate convert
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
