---
layout: page
title: "Q157606: Using NWCONV with Duplicate Group Names"
permalink: /kb/157/Q157606/
---

## Q157606: Using NWCONV with Duplicate Group Names

	Article: Q157606
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
	
	Before you perform a migration, a group on a Novell NetWare server, for example
	GROUP1, is a member of "print server operator." On the computer running Windows
	NT, which is the migration destination, a group with a duplicate name already
	exists. When you choose the "add prefix: nw" option for duplicated group names
	using the Migration Tool for NetWare, after migration GROUP1 belongs to the
	"print operator" group, but NWGROUP1 does not belong to the "print operator"
	group.
	
	RESOLUTION
	==========
	
	To work around this problem, add the prefix "NW" (without quotation marks) to
	the group on the NetWare server before you begin the migration process. For
	example, if the group is named GROUP1 on both the NetWare server and the
	computer running Windows NT, rename the group on the NetWare server to NWGROUP1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0.
	
	Additional query words: NWCONV 4.00 migrate convert
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
