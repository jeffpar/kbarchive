---
layout: page
title: "Q135679: IGMP Group members Do Not Respond to IGMP Group Query Frames"
permalink: /kb/135/Q135679/
---

## Q135679: IGMP Group members Do Not Respond to IGMP Group Query Frames

	Article: Q135679
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that use IGMP correctly add Windows NT computers to a multicast
	group, but do not maintain membership to the multicast group.
	
	CAUSE
	=====
	
	Windows NT does not respond to the multicast group query frames sent by the
	router to verify that there are still members in the group. If there are no
	other computers capable of responding to group query on that segment, the group
	is be disabled.
	
	WORKAROUND
	==========
	
	To work around this problem, place a computer running Windows NT 3.51 or Windows
	for Workgroups and Microsoft TCP/IP-32a for Windows for Workgroups, version
	3.11b or later, on the same segment. This computer will handle the group
	queries. You can resolve the problem by upgrading the computer running Windows
	NT 3.5 to Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt multi cast mcast
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
