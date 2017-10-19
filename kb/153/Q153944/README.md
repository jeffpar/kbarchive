---
layout: page
title: "Q153944: RAS Server Fails to Autodisconnect Inactive RAS Clients With TCP"
permalink: /kb/153/Q153944/
---

## Q153944: RAS Server Fails to Autodisconnect Inactive RAS Clients With TCP

	Article: Q153944
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Windows NT Remote Access (RAS) Server fails to disconnect idle RAS clients
	that have dialed in using the TCP/IP protocol or a combination of the TCP/IP
	protocol with IPX or NetBEUI.
	
	CAUSE
	=====
	
	When the TCP/IP protocol is used over the RAS connection, a Host Announcement
	from the RAS client causes the RAS server to reset the RAS Autodisconnect
	timer.
	
	On a Windows NT machine, the Announce parameter defaults to 720 seconds (or 12
	minutes). On a Windows NT RAS server, the RAS Autodisconnect parameter defaults
	to 20 minutes. If your RAS client is also a Windows NT machine, the RAS
	Autodisconnect timer will reset every 12 minutes, and therefore, the RAS client
	will never timeout.
	
	If you do not use the TCP/IP protocol over the RAS connection, a Host
	Announcement from the RAS client will not cause the RAS Autodisconnect parameter
	to reset.
	
	By design, the RAS Autodisconnect parameter sets the time interval after which
	inactive connections are terminated. This inactivity is measured by lack of
	NetBIOS session data transfer. A Host Announcement is not considered NetBIOS
	session activity.
	
	RESOLUTION
	==========
	
	Configure the value of the RAS Autodisconnect parameter so that it is less than
	the value of the Announce parameter (which specifies the interval of time that a
	server uses between sending out a Host Announcement).
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	The Announce parameter can be configured via the following Registry parameter:
	
	  HKEY_LOCAL_MACHINE\SYSTEM
	
	     \CurrentControlSet\Services\LanmanServer\parameters
	
	        Announce   REG_DWORD   1 to 65535 seconds, Default: 720
	
	The RAS Autodisconnect parameter can be configured via the following Registry
	parameter:
	
	  HKEY_LOCAL_MACHINE\SYSTEM
	
	     \CurrentControlSet\Services\RemoteAccess\parameters
	
	        Autodisconnect   REG_DWORD   0 to 1000 minutes, Default: 20
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
