---
layout: page
title: "Q123980: PPP Message: RAS Has Connected Using an Earlier RAS Protocol"
permalink: /kb/123/Q123980/
---

## Q123980: PPP Message: RAS Has Connected Using an Earlier RAS Protocol

{% raw %}

	Article: Q123980
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
	
	SUMMARY
	=======
	
	When you connect to a Windows NT 3.1 RAS server over Remote Access Services
	(RAS) from a Windows NT 3.5 computer configured to use the Point-to-Point (PPP)
	protocol, the following message appears:
	
	  You have connected successfully using an older Remote Access protocol.
	  The remote server does not respond to the newer PPP protocols required
	  to run native TCP/IP and IPX applications.
	
	  Press Accept to use the connection as is, or Hang Up to disconnect.
	  Press F1 for more information.
	
	MORE INFORMATION
	================
	
	The PPP protocol has become the standard for RAS. It is defined in RFC 1548
	published by the Internet Engineering Task Force and other working groups. PPP
	provides a standard method of sending network packets, or datagrams, over a
	point to point link. This standard allows Windows NT 3.5 to support the use of
	other protocols such as TCP/IP, NetBEUI, and IPX over RAS. Windows NT version
	3.1 does not support PPP. It only allows the use of NetBEUI over RAS.
	
	When a Windows NT 3.5 RAS computer connects to a Windows NT 3.1 RAS server the
	following message appears:
	
	  RAS has connected using an earlier RAS protocol. The current entry is
	  configured to use the PPP protocol; however, the RAS server you dialed
	  in to is probably an earlier version of the Microsoft Remote Access
	  Service and does not support PPP. The server also does not support
	  clients using TCP/IP or IPX (native TCP/IP or IPX) to communicate
	  directly to servers on the LAN.
	
	  If you do not require PPP using native TCP/IP or IPX , click Accept to
	  continue. If you require PPP using native TCP/IP or IPX, click the Hang
	  Up button and try a server that supports PPP. To change the LAN
	  protocols for this entry, click the Change button.
	
	  If you expect the down-level server will be upgraded to Windows NT 3.5,
	  which supports PPP, you should not change PPP configuration. Click
	  accept each time this dialog appears. When the server is upgraded to use
	  PPP, this entry will automatically use PPP before using the earlier RAS
	  protocol and this dialog will not appear again.
	
	  If you do not expect to upgrade your RAS servers you can prevent this
	  message from appearing by changing the PPP configuration for this entry.
	  Click the Change button and ensure no protocols are selected in the PPP
	  box.
	
	  This will not result in faster connections, but the Down-level Server
	  dialog box will not appear.
	
	This message implies that it will continue to appear as long as the server does
	not support PPP. The message will not continue to appear because the negotiated
	protocol is saved as part of the phone book entry in RASPHONE.PBK. The message
	also states when the server is upgraded, connections will attempt to use PPP. If
	in fact the server is updated, connections will be based on the previously saved
	protocol or NetBEUI. The only way to get the connection to attempt to negotiate
	using PPP is to delete the saved information. To do this, edit RASPHONE.PBK and
	find the paragraph for the specific entry. Change the SkipDownLevelDialog
	setting from 1 to 0.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
