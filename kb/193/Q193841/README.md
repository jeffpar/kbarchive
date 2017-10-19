---
layout: page
title: "Q193841: Adjusting PPTP KeepAlive Frequency"
permalink: /kb/193/Q193841/
---

## Q193841: Adjusting PPTP KeepAlive Frequency

	Article: Q193841
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Some ISDN Connected Clients/Networks that use PPTP may notice high costs
	associated with continuos ISDN link caused by the idle inactivity timer never
	expiring. This PPTP keepalive packet can be controlled to reduce the frequency
	of this test so that it is greater than the idle inactivity timeout value. PPTP,
	by default, sends "keepalive" packet every 60 seconds to verify the tunnel. This
	frequency can be adjusted by altering the registry.
	
	MORE INFORMATION
	================
	
	The keepalive traffic consists of an echo request and an echo reply. When there
	is no traffic through the tunnel for 60 seconds, the client sends an echo
	request to confirm the validity of the tunnel. To confirm that these keepalive
	packets are being sent, the user can use Network Monitor to parse the traffic.
	
	The packets look like the following:
	
	  PPTP: Control Packet (1): Echo Request (5)
	
	  PPTP: Control Packet (1): Echo Reply (6)
	
	Please note the release version of Network Monitor has to be altered to correctly
	display the PPTP packets. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q164601 How to Enable PPTP Port for Network Monitor
	
	This must be set at both ends of the connection to limit the "tunnel test"
	
	The InactivityIdleSeconds registry setting starts a timer that measures the
	number of seconds between packets. When the timer reaches the default of 60
	seconds, it instructs the system to send a control channel packet to the server.
	The EchoReplyTimeoutSeconds registry setting defines how long the client will
	wait for a response to the echo request.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To alter the default, the user must add the following registry parameters to the
	system.
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Raspptpe\Parameters
	\Configuration\ 
	
	InactivityIdleSeconds: REG_DWORD:  default: 60
	Number of seconds PPTP will go with no activity on the control channel.
	
	EchoReplyTimeoutSeconds: REG_DWORD:  default: 60
	Number of seconds PPTP will wait for a reply from an echo request. If
	reply is not received, PPTP drops the connection.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q164601 How to Enable PPTP Port for Network Monitor
	
	  Q181431 How Windows NT RAS Handles Auto Disconnect
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
