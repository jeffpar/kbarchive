---
layout: page
title: "Q123965: Can't Get Zone Information with Compaq Netflex II TR NIC"
permalink: /kb/123/Q123965/
---

## Q123965: Can't Get Zone Information with Compaq Netflex II TR NIC

	Article: Q123965
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Compaq Netflex II Token Ring (TR) network interface card (NIC) on
	a Windows NT 3.5 server, you are not able to get zone information. Macintosh
	clients cannot see Windows NT 3.5 servers that use this NIC from Chooser. You
	cannot get zone information either when you are first configuring zones during
	the installation of Services for Macintosh, or later, after restarting the
	server or Services for Macintosh.
	
	CAUSE
	=====
	
	This problem is caused by the way functional addresses (TR equivalent of a
	multicast address) are added. There is no problem if the driver is written so it
	completes calls synchronously. However, if a driver is written so calls are made
	asynchronously, the request buffer becomes corrupted and no routing information
	is passed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sfm adapter prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
