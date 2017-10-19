---
layout: page
title: "Q194028: DHCP Server Fails to Start with Event 1007, 1008 and SCM 7023"
permalink: /kb/194/Q194028/
---

## Q194028: DHCP Server Fails to Start with Event 1007, 1008 and SCM 7023

	Article: Q194028
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following Service Control Manager pop-up error message:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	DHCP Server service fails to start with DHCPSERVER event 1007 and 1008 and
	Service Control Manager (SCM) event 7023.
	
	  Event 1007,
	  Source: DHCPSERVER
	  Description: The DHCP Server failed to initialize winsock data. The
	               following error occurred.
	
	  Data: 002741 (WORD)  or 0000:   41 27 00 00     A' . .   (Byte)
	
	  Event 1008:
	  Source: DHCPSERVER
	  Description: The DHCP Server is shutting down due to the following
	               error:
	
	  Data: 002741 (Word) or 0000:   41 27 00 00     A' . .   (Byte)
	
	  Event 7023
	  Source: SCM
	  Description: The Microsoft DHCP Server terminated with the following
	               error: (blank)
	
	  Data: (none)
	
	When you start the DHCP Server service manually from Control Panel, you receive
	the following error message:
	
	  Can't start the Microsoft DHCP Server Service on \\<machine-name>.
	  Error 2140: An Internal Windows NT Error Occurred.
	
	When you start the DHCP Server service from a command line, the following error
	message will be produced:
	
	  System error 10049 has occurred.
	  The system cannot find message for message number 0x2741.
	  The message file for BASE.
	
	CAUSE
	=====
	
	There may be more than one reason for this problem. One possible reason is that
	the server's IP address or addresses listed in the registry contains leading
	zeros in one or more octets. For example:
	
	  015.057.120.001
	
	When the DHCP Server service starts, it fails to come up on any of these
	computer.
	
	Adding leading zeros to the IP address from TCP/IP GUI Setup will not write to
	registry. However, it is possible to enter leading zeros in IP addresses in an
	Unattend.txt file; these leading zeros can be written to registry.
	
	RESOLUTION
	==========
	
	Do not use leading zeros for any of the IP addresses listed in an Unattend.txt
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	Additional query words: dhcp winsock SCM Event Registry unattended
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
