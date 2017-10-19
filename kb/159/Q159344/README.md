---
layout: page
title: "Q159344: Fatal Exception in DLC Running Program from NetWare Server"
permalink: /kb/159/Q159344/
---

## Q159344: Fatal Exception in DLC Running Program from NetWare Server

	Article: Q159344
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork osr2 win95 kbAPI kbDLC kbSDKPlatform kbGrpDSNet
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program that uses the Microsoft 32-bit DLC protocol (MSDLC-32)
	from a NetWare server, you may receive an error message on a blue screen similar
	to the following message:
	
	  Fatal exception 0E at 0028:C16AC573 in VXD DLC(01) + 0001C3EF.
	  This was called from 0028:C003C47C in VXD NDIS (01) + 00000D7C.
	
	CAUSE
	=====
	
	This error can occur when you are running a program (such as a terminal
	emulation program) from a NetWare file server when both DLC and IPX traffic is
	going through a single network adapter.
	
	RESOLUTION
	==========
	
	You can work around this problem by using one of the following methods:
	
	- Install the terminal emulator on the local workstation, instead of running it
	  from a shared installation on the NetWare file server.
	
	- Install an additional network adapter in the workstation, and configure the
	  installed protocols so that MSDLC-32 is bound to only one adapter, and the
	  IPX/SPX-compatible Protocol (NWLINK) is bound to only the other adapter.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork osr2 win95 kbAPI kbDLC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
