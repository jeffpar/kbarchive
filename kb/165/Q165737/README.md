---
layout: page
title: "Q165737: CSNW/GSNW Unable to Connect to NetWare Server"
permalink: /kb/165/Q165737/
---

## Q165737: CSNW/GSNW Unable to Connect to NetWare Server

	Article: Q165737
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a computer running Windows NT Workstation or Server 3.51 or 4.0 tries to
	connect to a NetWare server with IPX checksum-enabled through a NET USE command,
	the following error message is displayed:
	
	  System Error 86 - the specified network password is not correct.
	
	No connections can be made to the NetWare server.
	
	CAUSE
	=====
	
	The problem is caused when a NetWare server has the following setting in
	Startup.ncf :
	
	  SET ENABLE IPX CHECKSUMS=2
	
	Possible server settings:
	
	  0= checksums are disabled
	  1= checksums are used if enabled at the client (default)
	  2= checksums are required
	
	With the checksums value set at 2, Windows NT will try to establish a session
	with a NetWare server. It is after the session is set up that the NetWare server
	parses the IPX header for the checksum. At this point, the NetWare server will
	reject packets from the Windows NT client because the checksum value set in the
	IPX header is FFFF. Currently, Windows NT does not use the checksum field.
	
	WORKAROUND
	==========
	
	To work around this issue, make the following change in the Startup.ncf file on
	the NetWare server:
	
	  ENABLE CHECKSUMS=1 or 0
	
	It is important to note that "checksums only" does a check of the IPX header
	only, not the data or frame.
	
	MORE INFORMATION
	================
	
	Windows NT does not implement the checksum feature as it adds unnecessary
	overhead and only checks the validity of the header. There are no plans for
	implementing this in the future.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
