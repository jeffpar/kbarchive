---
layout: page
title: "Q93088: NCR Wavelan Requires MediaType=Ethernet_II for Novell in WFWG"
permalink: /kb/093/Q93088/
---

## Q93088: NCR Wavelan Requires MediaType=Ethernet_II for Novell in WFWG

	Article: Q93088
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NCR Wavelan card is a wireless Ethernet card that operates on radio waves.
	To function correctly with Novell NetWare, it requires the following entry in
	the [MS$IPX] section of the PROTOCOL.INI file:
	
	     MediaType=Ethernet_II
	
	If the Novell/Ethernet Media Type is incorrectly specified for the NCR Wavelan
	card and MSIPX.SYS, MSIPX.COM, and NETX.COM are loading, the system may hang
	when NETX loads, or you may receive a file server error message.
	
	You can set the MediaType in the Networks dialog box of Control Panel.
	
	MORE INFORMATION
	================
	
	The Ethernet_II entry sets up the media access control (MAC) driver to receive
	DIX Ethernet frame types, rather than 802.3 (Novell/Ethernet). Many of the
	Novell file servers with these cards are using 802.3. The server must also be
	modified to support the Ethernet_II frame type by adding the line "ethernetii"
	to the NET.CFG file.
	
	To change the setting through Control Panel:
	
	1. In the Control Panel window, choose the Network icon.
	
	2. Choose the Adapters button.
	
	3. Choose the Setup button and select Protocols.
	
	4. Select Novell IPX and choose the Settings button.
	
	5. Change the value of Media Type to Ethernet_II, then choose the OK button.
	
	Additional query words: 3.10 file wave lan two ii
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
