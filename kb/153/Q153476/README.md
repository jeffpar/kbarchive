---
layout: page
title: "Q153476: Windows NT 3.51 DHCP Server Stops Assigning IP Addresses to Clie"
permalink: kb/153/Q153476/
---

## Q153476: Windows NT 3.51 DHCP Server Stops Assigning IP Addresses to Clie

	Article: Q153476
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DHCP server stops assigning IP addresses, and Event Viewer logs this event:
	
	  DHCP Event 1014 The JET Database call returned the following Error with a hex
	  data status of "ff fd ff ff (0xfffffdff = -513)."
	
	CAUSE
	=====
	
	The volume that contains the DHCP database is full. There is no more room to
	expand the Dhcp.mdb file.
	
	RESOLUTION
	==========
	
	Free up hard drive space on the partition that contains the Dhcp.mdb file.
	
	Additional query words: DHCP jet winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
