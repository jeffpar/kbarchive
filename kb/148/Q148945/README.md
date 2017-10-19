---
layout: page
title: "Q148945: Error in &quot;Services for Netware Networks&quot;"
permalink: /kb/148/Q148945/
---

## Q148945: Error in &quot;Services for Netware Networks&quot;

	Article: Q148945
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	The manual "Services for NetWare Networks" explains how users are
	transferred to the NT Server, and how groups are created when you do a
	NetWare-to-NT conversion. The manual reads in part:
	
	  When you transfer groups to a master domain, they are created as global
	  groups in the master domain and again as local groups on the server specified
	  in the Servers For Migration list(page 91).
	
	The manual is misleading. In fact, when you transfer groups to a master
	domain model or domain model, global groups are created locally to the
	server you are moving the accounts to. The group will still be global, and
	can be added to your local group. Some companies have security issues with
	adding global groups to local groups. They can write a batch file or files
	in order to add users to a local group.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
