---
layout: page
title: "Q135358: WfWG 3.11 Computer Hangs Trying to Access Network Using RAS"
permalink: /kb/135/Q135358/
---

## Q135358: WfWG 3.11 Computer Hangs Trying to Access Network Using RAS

	Article: Q135358
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups version 3.11 hangs when you attempt to logon to a remote
	domain or connect to a shared resource on a remote network you have connected to
	using Remote Access Services (RAS).
	
	CAUSE
	=====
	
	This problem can occur on a laptop computer that is not installed in its docking
	station that contains a network interface card (NIC) or on a computer that is
	configured to use a NIC that is not physically connected to a network.
	
	In these cases, your computer has both NIC and RAS drivers installed. If your
	default protocol is bound to the NIC, your computer hangs when it attempts to
	access the remote network.
	
	RESOLUTION
	==========
	
	Set the NetBEUI protocol that is bound to the RAS driver as the default
	protocol. To do this:
	
	1. Run Network Setup in the Network group.
	
	2. Choose the Drivers button.
	
	3. In the Network Drivers dialog, select the Microsoft NetBEUI protocol entry
	  that is listed under the Remote Access Service [NDIS3] driver.
	
	4. Choose the Set As Default Protocol button.
	
	Additional query words: 3.11 lock halt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
