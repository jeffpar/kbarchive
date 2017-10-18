---
layout: page
title: "Q180356: NWConv Fails to Apply Correct Group Permissions"
permalink: kb/180/Q180356/
---

## Q180356: NWConv Fails to Apply Correct Group Permissions

	Article: Q180356
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork kbWinNT400sp4fixkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Migration Tool for NetWare (Nwconv.exe) with a mapping file to
	migrate files, groups, and users from a NetWare server to a Windows NT domain
	controller, you may find that file and folder permissions for groups are not
	correctly migrated. In addition, you may see errors in the Error Log similar to
	the following:
	
	  [Transferring Files]
	  Access Rights for: <Volume>:<Dir>Error 0: Adding Access Rights.
	  User/Group:<OldGroupName>
	
	NOTE: The old group name is listed in the Error Log instead of the new group
	name. The new groups are created on the Windows NT domain controller; it is only
	the file and folder permissions for these groups that are not created.
	
	CAUSE
	=====
	
	This problem occurs because of improper sorting of the mapped group names. The
	Migration Tool for NetWare uses a binary compare of the existing group list and
	the mapped group list.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: NWConv Migrate convert
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork kbWinNT400sp4fix kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbServicesNetwareSearch kbFPNW400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
