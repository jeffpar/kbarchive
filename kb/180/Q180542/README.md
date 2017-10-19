---
layout: page
title: "Q180542: Configuring NWLink Frame Type in Windows NT 4.0"
permalink: /kb/180/Q180542/
---

## Q180542: Configuring NWLink Frame Type in Windows NT 4.0

	Article: Q180542
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to check and configure the NWLink transport to enable
	Windows NT to communicate with a NetWare Server. By default, the NWLink
	transport uses the 802.2 frame type for Ethernet and the Token_Ring frame type
	for Token Ring.
	
	MORE INFORMATION
	================
	
	In most configurations, the Auto Frame Type Detection option functions properly.
	However, in some network configurations it may be necessary for you to manually
	select the frame type and network number. To manually assign this information,
	use the following procedures.
	
	How to Check the Frame Type on a NetWare Server
	-----------------------------------------------
	
	1. At the NetWare Server System Console prompt, type the following command:
	
	  " load edit sys:system\autoexec.ncf" (without the quotation marks)
	
	2. Locate the line that loads the network card driver and note the frame type
	  specified. The line should look similar to the following line:
	
	  Load EXP16 int=5 port=300 frame=Ethernet_802.2 Name=EtherExpress
	
	3. Locate the line that binds the IPX protocol to the network card and note the
	  network number. The line should look similar to the following:
	
	  Bind IPX to Etherexpress Net=9D999400
	
	How to Configure NWLink on Windows NT
	-------------------------------------
	
	To manually configure NWLink on Windows NT:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Protocols tab, click NWLink IPX/SPX Compatible Transport, and then
	  click Properties.
	
	3. On the General tab, click the appropriate adapter in the list.
	
	4. Click Manual Frame Type Detection.
	
	5. Click Add.
	
	6. Click the appropriate frame type in the list, and then type the network
	  number.
	
	7. Click OK, and then click Close.
	
	8. Restart your computer when you are prompted to do so.
	
	NOTE: By default, NetWare version 2.2 and 3.11 servers use the Ethernet_802.3
	frame type. NetWare version 3.12 (and later versions) use the Ethernet_802.2
	frame type by default.
	
	For information about how to configure the NWLink protocol in previous versions
	of Windows NT, see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q117298
	  TITLE : Configuring NWLink Frame Type
	
	Additional query words: NWCONV Migrate convert csnw gsnw nwcs
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
