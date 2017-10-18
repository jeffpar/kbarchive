---
layout: page
title: "Q145703: Windows Socket Error Running Program Using IPX/SPX"
permalink: kb/145/Q145703/
---

## Q145703: Windows Socket Error Running Program Using IPX/SPX

	Article: Q145703
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run a program that uses the IPX/SPX protocol, such as ArcServe
	Backup Agent for NetWare by Cheyenne, you may receive the following error
	message:
	
	  Windows Socket error, Couldn't create socket(10047)
	
	CAUSE
	=====
	
	This error can occur if the Wsock32.dll file is missing, is damaged, or has been
	replaced by a third-party protocol stack's sockets interface.
	
	RESOLUTION
	==========
	
	Extract a new copy of the original Wsock32.dll file. To do so, follow these
	steps:
	
	1. Rename the Wsock32.dll file in the Windows\System folder to Wsock32.3rd.
	
	2. Use the Extract tool to extract a new copy of the Wsock32.dll file from your
	  original Windows 95 disks or CD-ROM to the Windows\System folder. For
	  information about using the Extract tool, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	
	MORE INFORMATION
	================
	
	A socket contains three pieces of information: an internetwork address, a
	protocol, and a port number. The address information must contain a network ID
	and a node ID. Because both TCP/IP and IPX/SPX have network and node information
	incorporated in their addressing schemes, either protocol can use the sockets
	interface. The port number combined with the protocol determines whether the
	socket uses TCP, UDP, or IPX, and which service will be used.
	
	The component files that make up the sockets interface for Windows 95 are
	Winsock.dll and Wsock32.dll. The files that are included with Windows 95 support
	the sockets interface for both TCP/IP and IPX/SPX. The Cheyenne ArcServe Agent
	makes calls directly to Wsock32.dll to obtain an IPX socket for communication
	with a NetWare server to perform backup operations over the network.
	
	Because some third-party vendors may require functionality from the sockets
	interface for their proprietary protocol stacks, they may replace the component
	files that make up the sockets interface with their own proprietary versions of
	these files. If the third-party vendor's sockets interface does not support
	sockets using IPX/SPX, any program that uses the sockets interface to
	communicate using IPX/SPX may generate an error message.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
