---
layout: page
title: "Q106053: Cannot Attach to NetWare Server After Installing WFWG 3.11"
permalink: kb/106/Q106053/
---

## Q106053: Cannot Attach to NetWare Server After Installing WFWG 3.11

	Article: Q106053
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the frame type being used on your Novell NetWare server does not correspond
	with the frame type specified in the NET.CFG file, you cannot attach to the
	NetWare server after you install Windows for Workgroups 3.11. This problem
	occurs only if you are running the Novell ODI drivers.
	
	CAUSE
	=====
	
	The Windows for Workgroups Setup program may change the default frame type for
	IPXODI in the NET.CFG file. IPXODI defaults to the first frame type listed in
	the Link Driver section of the NET.CFG unless the frame type is specified on a
	PROTOCOL line.
	
	RESOLUTION
	==========
	
	To correct this situation, use one of the following methods:
	
	- Add a PROTOCOL line to the NET.CFG file with the appropriate frame type
	  specified as follows:
	
	  1. Open the NET.CFG file in a text editor (such as Microsoft Windows
	     Notepad).
	
	  2. Add the PROTOCOL line under the Link Driver section:
	
	            Link Driver <MLID>
	               Frame Ethernet_802.3
	               Frame Ethernet_802.2
	               Frame Ethernet_II
	               Frame Ethernet_SNAP
	               Protocol IPX E0 Ethernet_802.2
	
	     (this last line was added)
	
	  -or-
	
	- Change the order of the frame types to specify the server's frame type first.
	  For example, if the server is set up to use the Ethernet_802.2 frame type,
	  you would do as follows:
	
	  1. Open the NET.CFG file in a text editor (such as Notepad).
	
	  Move the required frame type to the beginning of the Link Driver section:
	
	           Link Driver <MLID>
	               Frame Ethernet_802.2    (this line was moved up one line)
	               Frame Ethernet_802.3
	               Frame Ethernet_II
	               Frame Ethernet_SNAP
	
	Additional query words: 3.11 file server not found frametype
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
