---
layout: page
title: "Q101235: TN3270 Server Now Supports Client-Side Hot Backup"
permalink: kb/101/Q101235/
---

## Q101235: TN3270 Server Now Supports Client-Side Hot Backup

	Article: Q101235
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If all the resources are in use on the SNA Server 2.11 TN3270 server the
	Hot-Backup feature of some TN3270 emulators does not work.
	
	The Hot-Backup feature, implemented in some TN3270 emulators, allows you to
	specify the IP addresses of several TN3270 Servers for the emulator to attempt
	to connect to. If access is denied it attempts to connect to the next IP address
	specified.
	
	CAUSE
	=====
	
	The SNA Server TN3270 Server always listens on a socket, allowing an emulator to
	connect (that is, it fails to deny the socket connection), even if all of the
	configured resources on the server are in use causing it not be able to service
	that connection. When the emulator successfully opens a socket connection to one
	of the addresses, in this case the address of the SNA Server TN3270 Server, the
	emulator is locked into that address and cannot try another IP address specified
	with the Hot-Backup feature.
	
	RESOLUTION
	==========
	
	Microsoft has enhanced the SNA Server 2.11 files, TN3SERVR.EXE and TN3NTMSG.DLL,
	to fully support the Hot-Backup feature of TN3270 emulators.
	
	This update supports the option to stop listening once all of the configured SNA
	resources are in use, and to start listening again once some become available.
	This feature is turned on by setting the following registry entry under the
	HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	  \CurrentControlSet\Services\TN3270\Parameters\CloseListenSocket
	
	Type:  RG_EXPAND_SZ
	Value: YES
	
	In SNA Server 3.0 (and future SNA Server 2.11 service packs beyond SP1), the
	CloseListenSocket option must be set to "ON". The administration tool has been
	updated to support configuration of this parameter, so manual adjustment of the
	registry is not necessary. If this setting is not configured or is set to any
	other value, then the TN3270 Server does not stop listening.
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	
	=============================================================================
	
