---
layout: page
title: "Q149091: Power Users Can Modify Common Groups"
permalink: /kb/149/Q149091/
---

## Q149091: Power Users Can Modify Common Groups

	Article: Q149091
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Only administrators should be able to modify common groups in Windows NT Server
	and Workstation. However, members of the Power Users group are able to add,
	delete, and modify icons in common groups. Power Users can also create new
	common groups and delete existing common groups.
	
	This problem does not occur on NT 4.0 Workstation or Server when installed on an
	NTFS partition. Default permissions on the %systemroot%\profiles \all users
	directory which defines common groups and icons grants full control to the
	Administrator and System acconts with read-only access to the everyone group. NT
	4.0 Workstation and Server installed on a fat partition are subject to the same
	limitation as 3.5X.
	
	
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0 with on an NTFS partition..
	
	You can work around this problem by not using the Power Users group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.50 and
	3.51. This problem was corrected in Windows NT Workstation or Server version 4.0
	when installed on NTFS partitions.
	
	Additional query words: 3.50 3.51 power common
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
