---
layout: page
title: "Q176501: Explanation of Windows 95 Netlogon Packets"
permalink: /kb/176/Q176501/
---

## Q176501: Explanation of Windows 95 Netlogon Packets

{% raw %}

	Article: Q176501
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Your Microsoft Windows 95 clients may send one or more of the following types of
	Netlogon request packets:
	
	- SAM LOGON Request from client
	
	-or-
	
	- LM1.0/2.0 LOGON Request from client
	
	A single client may send one or both of the above packets during an attempt to
	log on to the domain. This article discusses the difference between these
	Netlogon request packets and the cause of the SAM LOGON request from client
	packet.
	
	MORE INFORMATION
	================
	
	SAM LOGON Request from Client
	-----------------------------
	
	When a Windows 95 computer is configured for User-Level access control in Network
	Properties, it will send the SAM LOGON request from client packets to the domain
	controllers or the Windows NT Server computer for which it is configured.
	Mssp.vxd is sending these packets through the Windows 95 redirector to
	\MAILSLOT\MSSP on the security provider.
	
	This is pass-through authentication being done from the Windows 95 computer.
	Windows 95 does not implement its own unique user-level security mechanism, so
	it must use the services of an existing user-level security provider, in this
	case a Windows NT domain controller or Windows NT Server computer, on the
	network. The Windows 95 computer sends these packets during its boot sequence to
	dynamically locate its security provider in preparation for future pass-through
	authentication needs.
	
	
	LM1.0/2.0 LOGON Request from Client
	-----------------------------------
	
	The LM1.0/2.0 LOGON request from client packets are the standard Windows NT logon
	validation packets sent to \MAILSLOT\TEMP\NETLOGON on the domain controller
	where the Windows 95 computer is configured to perform its network logon
	request. This is controlled through the Client for Microsoft Networks properties
	page on the Windows 95 computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
