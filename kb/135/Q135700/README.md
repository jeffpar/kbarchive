---
layout: page
title: "Q135700: Modifications to NETBT.SYS to Support Layered Drivers"
permalink: kb/135/Q135700/
---

## Q135700: Modifications to NETBT.SYS to Support Layered Drivers

	Article: Q135700
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	
	Under Windows NT, when a device driver creates an I/O Request Packet (IRP) to
	pass to an underlying driver, it creates the IRP with a fixed number of I/O
	stack locations, one for each driver in the chain of layered drivers for which
	the request is bound. Each stack location contains the parameters, function
	codes, and context used by the corresponding driver to determine what it is
	supposed to be doing with the request.
	
	In Windows NT 3.51, I/O Request Packets built by the NETBT.SYS driver always have
	a stack frame size of 1. This presents a problem should device driver developers
	wish to "layer" an additional driver between NETBT.SYS and TCPIP.SYS because
	there are not enough stack frames in the IRP for the vertical driver to use.
	
	For certain operations, NetBT also incorrectly passes IRPs directly to TCP/IP,
	thereby skipping any intermediate drivers in the driver chain.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	To correct this problem, apply the fix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Workstation
	or Server version 3.51. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt irp stack frame
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
