---
layout: page
title: "Q124084: FTP OnNet 1.1 PPP Client Hangs Windows NT 3.5 RAS Service"
permalink: kb/124/Q124084/
---

## Q124084: FTP OnNet 1.1 PPP Client Hangs Windows NT 3.5 RAS Service

	Article: Q124084
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using FTP's OnNet version 1.1 software on Windows for Workgroups 3.11 as a
	dial-in PPP client to a Windows NT version 3.5 RAS server, the hangup script
	used can cause the RAS services on the server to stop responding (hang).
	Additionally, an unexpected disconnect, such as turning off the modem can also
	cause the RAS service to hang. Event Viewer shows event ID 20077 from source
	RemoteAccess. Attempts to restart the RAS service will cause event ID 7024 -
	service specific error 1066.
	
	In order to start the RAS service, the server must be rebooted.
	
	NOTE: This problem also occurs if the client PPP product uses a Trumpet Winsock.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	OnNet is manufactured by FTP, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: point-to-point wfw wfwg prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
