---
layout: page
title: "Q135360: Periodic Re-Transmit Times for Packets"
permalink: /kb/135/Q135360/
---

## Q135360: Periodic Re-Transmit Times for Packets

	Article: Q135360
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some network traffic occurs simply because the network is active. For example,
	some network traffic occurs as a result of periodic retransmission of packets as
	"keepalive" requests, browser requests, polling, and the acknowledgment packets
	sent for each of these requests.
	
	MORE INFORMATION
	================
	
	The following table documents packet types and their default send intervals.
	
	Packet Type    Protocol   Transport           Interval
	-----------    --------   ---------           --------
	NetLogon       SMB        TCP/IP & NetBEUI    300 seconds
	Browse         SMB        TCP/IP & NetBEUI    300 seconds (Windows NT 3.1)
	                                             720 seconds (Windows NT 3.5x)
	KeepAlive      NetBIOS    TCP/IP               60 minutes (Windows NT 3.5x)
	SessionAlive   NetBIOS    NetBEUI              30 seconds (LAN Manager)
	Poll/Final     LLC        NetBEUI              30 seconds (or ACK to Poll)
	KeepAlive      NetBIOS    IPX                  30 seconds
	Echo SMB       SMB        Direct Host IPX     240 seconds
	
	NOTE: The Browse packet type mentioned above indicates network traffic between a
	Windows NT primary domain controller (PDC) and its backup domain controllers
	(BDCs).
	
	The Windows NT redirector echoes an SMB every 30 seconds to each server that has
	an associated Long Term Request outstanding.
	
	Some of the default values can be adjusted by changing the appropriate values in
	the Windows NT registry. For more information about these settings, query on the
	following words in the Microsoft Knowledge Base:
	
	  winnt registry keepalive | session timeout
	
	For additional information on adjusting PDC browse broadcasts, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q134985
	  TITLE : Browsing & Other Traffic Incur High Costs over ISDN Routers
	
	
	Additional query words: 3.10 prodnt polling pulse background bdc keep alvie time out
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
