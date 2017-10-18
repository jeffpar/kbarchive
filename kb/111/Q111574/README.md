---
layout: page
title: "Q111574: Server Problems After Extended Use w/EtherExpress &amp; EXP16ODI"
permalink: kb/111/Q111574/
---

## Q111574: Server Problems After Extended Use w/EtherExpress &amp; EXP16ODI

	Article: Q111574
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running Microsoft Windows for Workgroups (WFWG) version 3.11 for several
	hours, you can connect to other workstations and other network features still
	work, but no one can connect to your workstation.
	
	CAUSE
	=====
	
	If you are using the Intel EtherExpress 16 network interface card (NIC) with the
	EXP16ODI.COM MAC driver, the server portion of Windows for Workgroups 3.11 may
	stop functioning. You can use other network features; however, your workstation
	is unable to act as a server until it is rebooted.
	
	It appears that NWNBLINK.386 resets the NIC and the ODI MAC driver does not
	replace the multicast list for the network after the NIC is reset.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	as it becomes available.
	
	Additional query words: 3.11 hangs locks
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
