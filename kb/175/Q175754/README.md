---
layout: page
title: "Q175754: FPNW Event ID 2025 and Packet Spoofing Information"
permalink: /kb/175/Q175754/
---

## Q175754: FPNW Event ID 2025 and Packet Spoofing Information

{% raw %}

	Article: Q175754
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	File and Print Services for NetWare (FPNW) is logging the following event:
	
	  Event Id: 2025
	  Source: FPNWSrv
	  Type: Warning
	  Description: The server detected attempted packet spoofing for client
	  "xxx" on connection "yyy". The connection has been closed.
	
	CAUSE
	=====
	
	It is possible that a router on the LAN has been configured to spoof IPX, SPX,
	or NetBIOS over IPX to keep packets alive. The built-in security check of the
	FPNW server is detecting this spoof and closing the connection. This is by
	design.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Disable IPX/SPX packet spoofing on your routers
	
	  -or-
	
	- Disable this behavior within FPNW by adding a registry entry. This entry is
	  not in the registry by default, it must be added manually. To add this entry
	  to the registry, perform the following steps:
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	
	  1. Run Registry Editor (Regedt32.exe), and go to the following subkey:
	
	     HKEY_LOCAL_MACINE\SYSTEM\CurrentControlSet\Services
	     \FPNWsrv\Parameters
	
	     NOTE: The registry key above is all one path; it has been wrapped for
	     readability.
	
	  2. On the Edit menu, click Add Value and type the following entry:
	
	     Value Name: AllowableBadSequencePkts
	     Data Type:  REG_DWORD
	     Value:   0
	     (Default:   10)
	
	  3. Stop and restart the FPNW server.
	
	MORE INFORMATION
	================
	
	In an IPX/SPX environment connections between hosts (clients and/or servers) may
	at times go idle. The following may occur:
	
	- With an IPX-based connection, a server will intermittently send IPX Watchdog
	  packets to a connected client to ensure that the client is still connected.
	
	- With either an SPX- or NWLINK- (NetBIOS over IPX) based connection, both the
	  client and the server (or two connected servers) will send probe packets to
	  one another, ensuring that the other computer is still detecting the other
	  computer.
	
	In a LAN environment, there is very little overhead associated with these
	keep-alive packets. In an environment where the cost of the WAN link is based on
	usage, these keep-alive packets may cause the WAN link to be opened frequently
	or possibly to remain up indefinitely, incurring very high costs.
	
	Some WAN routers have the ability to spoof these keep-alive packets. When the
	router sees that a keep-alive packet is to be forwarded over the WAN it silently
	discards the packet and responds to the originating server or client as though
	the router were the remote server or client. The WAN connection is not opened
	and no charges are incurred.
	
	When FPNW receives these spoofed packets, it will view them as a possible
	security breach by default and close the connection with the remote client or
	server.
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
