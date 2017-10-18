---
layout: page
title: "Q178022: NetBIOS SEND WAIT Over TCP/IP Completes Without NetBIOS RECEIVE"
permalink: kb/178/Q178022/
---

## Q178022: NetBIOS SEND WAIT Over TCP/IP Completes Without NetBIOS RECEIVE

	Article: Q178022
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr2 win95 kbAPI kbNetBIOS kbSDKPlatform kbGrpDSNet
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program issues a synchronous NetBIOS SEND (SEND_WAIT) command using
	Transmission Control Protocol/Internet Protocol (TCP/IP) on a Windows 95- based
	computer, the command immediately returns indicating successful completion, even
	if the computer to which the command is sent does not receive the data at the
	NetBIOS layer. Specifically, the SEND command may be completed even if the
	recipient does not post a NetBIOS RECEIVE Network Control Block (NCB).
	
	This may be a problem if the sending program terminates the session immediately
	after the synchronous SEND command is completed. If the recipient computer posts
	a NetBIOS RECEIVE NCB after it acknowledges the TCP/IP data, the sent data may
	no longer be available to be received.
	
	CAUSE
	=====
	
	The Microsoft TCP/IP protocol included with Windows 95 acknowledges the receipt
	of NetBIOS data before the data is received at the NetBIOS layer, even if a
	NetBIOS RECEIVE NCB has not been posted.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This behavior is by design. However, the behavior of the NCBSENDWAIT command
	over TCP/IP is inconsistent with the behavior of the NCBSENDWAIT command over
	other protocols included with Windows 95 (such as Internetwork Packet
	Exchange/Sequenced Packet Exchange [IPX/SPX]- compatible protocol and NetBIOS
	Enhanced User Interface [NetBEUI] protocol). With other protocols, the
	NCBSENDWAIT command does not return until the recipient receives the data at the
	NetBIOS layer.
	
	This behavior may be undesirable if a program sends NetBIOS data, then terminates
	as soon as the SEND command is returned. Instead, if the program posts a NetBIOS
	RECEIVE command and waits for the recipient to complete the receive, this
	behavior has no adverse impact.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr2 win95 kbAPI kbNetBIOS kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	
