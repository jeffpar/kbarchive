---
layout: page
title: "Q97844: Framing Difference Prevents Comms from NetWare to ArcNet"
permalink: /kb/097/Q97844/
---

## Q97844: Framing Difference Prevents Comms from NetWare to ArcNet

	Article: Q97844
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	In a mixed LAN Manager/NetWare environment, LAN Manager's NDIS drivers use 802
	framing for what goes out through the ArcNet card, and Novell NetWare uses
	ArcNet framing. The framing difference prevents communication, unless you are
	using a monolithic stack for an ArcNet driver under LAN Manager. Otherwise, you
	cannot talk to NetWare on ArcNet.
	
	The same condition exists in Windows for Workgroups 3.1.
	
	Additional query words: wfw wfwg 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
