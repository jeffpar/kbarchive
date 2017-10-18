---
layout: page
title: "Q105732: Network-Based Installation Issues with WFWG 3.11"
permalink: kb/105/Q105732/
---

## Q105732: Network-Based Installation Issues with WFWG 3.11

	Article: Q105732
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups version 3.11 differs from previous versions of
	Windows (including Windows for Workgroups 3.1) with respect to the requirements
	for, and the limitations of, network server-based shared installations (that is,
	SETUP /A and SETUP /N installations).
	
	This article is intended to provide system administrators with some guidelines
	for performing such installations.
	
	MORE INFORMATION
	================
	
	When you set up a server-based shared installation of Windows for Workgroups
	3.11, be aware of the following:
	
	- In the Microsoft LAN Manager and Windows NT environment (or any network
	  requiring the installation of the real-mode Windows for Workgroups 3.11
	  redirector prior to accessing the server with the shared, SETUP /A,
	  directory), Windows for Workgroups 3.11 nodes have client functionality
	  only.
	
	  NOTE: Because Novell NetWare requires its own real-mode redirector (giving the
	  node access to the shared directory before loading Windows for Workgroups and
	  its peer-to-peer network components), this limitation may not exist in
	  integrated Windows for Workgroups 3.11/NetWare environments.
	
	- When running SETUP /N to a workstation from a Novell server, the Windows for
	  Workgroups Setup program requires that Novell's Windows support files exist
	  in the shared directory on the server (that is, the directory created with
	  SETUP /A). The following files need to be copied to the shared Windows
	  directory prior to running SETUP /N:
	
	  NETWARE.DRV
	  NETWARE.HLP
	  NWPOPUP.EXE
	  VNETWARE.386
	  VIPX.386
	
	  NOTE: Other third-party networks may present the same restrictions; refer to
	  your network product documentation or vendor for more information.
	
	Novell NetWare is manufactured by Novell, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.11 novell net set up set-up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
