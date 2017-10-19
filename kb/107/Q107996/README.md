---
layout: page
title: "Q107996: WFWG 3.11: Real-Mode Redirector and Direct Hosting"
permalink: /kb/107/Q107996/
---

## Q107996: WFWG 3.11: Real-Mode Redirector and Direct Hosting

	Article: Q107996
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Windows for Workgroups 3.11 has been configured to provide Novell NetWare
	connectivity and you try to connect to a Windows for Workgroups 3.1, 3.11, or
	Windows NT 3.1 server with the real-mode redirector, the following error may
	occur:
	
	  Error 53: The computer name specified in the network path cannot be located.
	
	This error may occur when you run a NET USE or NET VIEW command with the Windows
	for Workgroups 3.11 real-mode redirector. This error may also occur when you are
	using the real-mode redirector even though no error occurs when you are
	connected to the same servers from within Windows for Workgroups 3.11 while
	using the protected-mode redirector.
	
	CAUSE
	=====
	
	When Windows for Workgroups 3.11 is configured to provide Novell NetWare
	connectivity, the real-mode redirector uses the IPX transport provided by the
	Novell NetWare IPXODI driver.
	
	A relationship called direct hosting is formed between the real-mode redirector
	and the IPX transport. Direct hosting allows data to be transferred between
	these two layers without requiring the presence of a NetBIOS interface.
	
	Under this configuration, you cannot use the real-mode redirector to access a
	server unless the server is running an IPX/SPX compatible transport.
	
	RESOLUTION
	==========
	
	With this configuration, a Windows for Workgroups 3.11 server must be configured
	to use the IPX/SPX Compatible Transport or IPX/SPX Compatible Transport with
	NetBIOS to be accessible by the real-mode redirector.
	
	There is no resolution available for a Windows NT server because the NWLink
	IPX/SPX Compatible Transport provided with Windows NT requires a NetBIOS
	interface that is not provided by the real-mode redirector in Windows for
	Workgroups when a direct-hosting relationship exists.
	
	MORE INFORMATION
	================
	
	When you are using Microsoft Windows for Workgroups 3.11 in a Novell NetWare
	environment, you can install support for Novell NetWare connectivity in addition
	to the Microsoft Windows Network.
	
	To install support for Novell NetWare connectivity, select Novell NetWare
	(Workstation Shell) as an additional network in the Networks dialog box of
	Network Setup. This support also requires selecting one of the following drivers
	from the Network Driver dialog box of Network Setup:
	
	  IPXODI Support Driver (ArcNet)
	  IPXODI Support Driver (Ethernet)
	  IPXODI Support Driver (Token Ring)
	
	This configuration allows Windows for Workgroups 3.11 to enable Novell NetWare
	connectivity by interfacing with the IPX transport contained in the Novell
	NetWare ODI drivers.
	
	When you use this configuration with the Windows for Workgroups real-mode
	redirector to connect to Windows for Workgroups servers, one of the following
	protocol drivers should be selected in the Network Drivers dialog box of Network
	Setup on the Windows for Workgroups server machine.
	
	  IPX/SPX Compatible Transport
	
	  -or-
	
	  IPX/SPX Compatible Transport with NetBIOS
	
	Installing one of these IPX/SPX compatible transports enables the real-mode
	redirector to connect to the Windows for Workgroups server.
	
	Additional query words: err msg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
