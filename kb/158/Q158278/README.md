---
layout: page
title: "Q158278: Explanation of How Windows NT Server 4.0 Remoteboot Works"
permalink: /kb/158/Q158278/
---

## Q158278: Explanation of How Windows NT Server 4.0 Remoteboot Works

	Article: Q158278
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the benefits and inner workings of the Windows NT 4.0
	Remoteboot utility.
	
	MORE INFORMATION
	================
	
	The Remoteboot Process
	----------------------
	
	When you start a computer, the operating system is loaded into memory. When a
	Remote Initial Program Load (RPL) ROM chip is placed on a network interface card
	(NIC), the client computer will retrieve startup and configuration software from
	the server when the client starts. This RPL ROM interrupts the computer's
	standard startup process and redirects the calls for the operating system to the
	NIC. The RPL ROM also establishes a basic network connection between the
	workstation and server during the startup process. This process is known as
	booting remotely, or the remoteboot process.
	
	How Remoteboot Works
	--------------------
	
	The server provides two kinds of services to the remoteboot client. The first
	service is called a Boot Block, which contains all the information needed to
	start the client. The second service is called the remoteboot profile. This
	profile defines the client's operating system environment after the initial
	startup process. Both services are sent across the network in frames. These
	frames consist of a boot request, boot acknowledgment, boot block request, and
	the boot block.
	
	When the client computer is switched on, the RPL ROM initializes and broadcasts a
	Boot Request frame (FIND frame), which contains the adapter's media access
	control address (adapter ID). The adapter ID is assigned by the NIC's
	manufacturer, and is a unique 12-digit hexadecimal number. The first six digits
	identify the adapter and the manufacturer. When the server receives the FIND
	frame, it compares the adapter ID to the database of known adapters. If the
	server does not recognize the adapter ID or if the adapter ID does not have an
	assigned profile, the server records the information temporarily in its database
	but does not respond to the client's request. The client continues to send FIND
	frames until it receives an acknowledgment (ACK).
	
	If the server has a match for the adapter ID with a valid profile, it responds
	with an acknowledgment (FOUND frame). This frame contains the server's adapter
	ID and the client's adapter ID. At this point, the DLC protocol is being used
	for all communications between the client and the server. If multiple Remoteboot
	servers reply to the initial FIND broadcast, the client only responds to the
	first received ACK.
	
	After the client receives the ACK, it then sends a request for the boot block
	request (SEND.FILE.REQUEST frame) to the first server that replied. The server
	receives the request and replies with a boot block (FILE.DATA.RESPONSE frame)
	telling the client where the boot image file is located.
	
	After the client receives this information, it passes control from the RPL ROM
	and starts running the entry point of the boot block. At this point the
	operating system is being loaded into memory, and the system switches from DLC
	to the real-mode network drivers (usually NetBEUI).
	
	The Windows 95 Remote Boot Process
	----------------------------------
	
	Windows 95 uses the same process, except for a few differences.
	
	Windows 95 creates a RAM disk to act as a hard disk drive, and then copies the
	real-mode files from the server to the RAM disk. After the information has been
	loaded into the RAM disk, it loads the real-mode drivers and connects to the
	server, which contains a server-based setup and computer directory for Windows
	95.
	
	Why Use Remoteboot?
	-------------------
	
	Remoteboot allows for a secured network by eliminating the need for hard or
	floppy disk drives. Users cannot load programs or infect the network with
	viruses. It also allows greater control over the distribution of software. In
	addition, centralized software updates reduce costs.
	
	Additional query words: adaptor MAC
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
