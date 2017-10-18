---
layout: page
title: "Q134858: Removing NetBIOS from Above TCP/IP-32 for Windows for Workgroups"
permalink: kb/134/Q134858/
---

## Q134858: Removing NetBIOS from Above TCP/IP-32 for Windows for Workgroups

	Article: Q134858
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	To remove the NetBIOS support layer that is above TCP/IP-32 for Windows for
	Workgroups 3.11, remove the file name VNBT.386 from the transport line in
	the [386Enh] section of your SYSTEM.INI file:
	
	  transport=....,vnbt.386
	
	NetBIOS applications and NetBIOS browsing and name resolution do not work
	after this change, however, the Sockets application interface is still
	available for applications like FTP and Telnet.
	
	Additional query words: wfw wfwg 3.11 3.11a 3.11b
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b; WINDOWS:3.11
	
	=============================================================================
	
