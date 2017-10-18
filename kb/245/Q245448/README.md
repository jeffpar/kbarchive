---
layout: page
title: "Q245448: WNet Calls Require Fully Qualified User Name"
permalink: kb/245/Q245448/
---

## Q245448: WNet Calls Require Fully Qualified User Name

	Article: Q245448
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbnetwork 3rdpartynet kb3rdPartyNetClient
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Novell server with NetWare Directory Services
	(NDS) by using a WNet call, you may receive error 1317 ("The specified user does
	not exist"). This error is also returned if you make a connection attempt from
	an Internet Server Application Programming Interface (ISAPI) dynamic-link
	library (DLL) on a Microsoft Internet Information Server (IIS) server by using
	the WNet call.
	
	CAUSE
	=====
	
	This behavior can occur if you are trying to connect to a volume on a Novell 4.x
	server that is running outside of the bindery emulation context.
	
	RESOLUTION
	==========
	
	Always use an NDS fully qualified user name to connect to a NetWare server from
	a Windows NT 4.0-based server.
	
	MORE INFORMATION
	================
	
	NDS is a service that is part of the NetWare 4.x operating system. NDS regulates
	access to network information, resources, and services.
	
	Windows NT Gateway Services for NetWare (GSNW) cannot connect to a volume that is
	contained in an NDS branch. Windows NT can only set up a gateway to a volume
	that is contained in a branch by using bindery emulation.
	
	To check for bindery emulation volumes, type "config" (without the quotation
	marks) at the NetWare 4.x server's system console. This displays server
	information and, on the bottom of the screen, a section titled "Bindery
	Context." This section tells you which branch is running in bindery emulation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 3rdpartynet kb3rdPartyNetClient 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
