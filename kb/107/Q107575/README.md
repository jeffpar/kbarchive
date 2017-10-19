---
layout: page
title: "Q107575: WFWG: Adapter Media Type Information Is Incorrect"
permalink: /kb/107/Q107575/
---

## Q107575: WFWG: Adapter Media Type Information Is Incorrect

	Article: Q107575
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 146 of the Microsoft Workgroup Add-On for Windows "User's Guide," the
	"Computers or NetWare servers are not listed" section incorrectly states that an
	improper Adapter Media Type setting may cause NetWare servers to be missing from
	the Connect dialog box.
	
	MORE INFORMATION
	================
	
	This information is true only if you are using MSIPX.COM.
	
	The correct frame type is required in order to connect to NetWare servers or
	other Windows for Workgroups machines that are running the IPX/SPX compatible
	protocol. The frame type should be set to the same type as your NetWare servers.
	You must configure both your real-mode protocol (IPXODI) and, if it is
	installed, the protected-mode IPX/SPX Compatible protocol.
	
	For example, if your NetWare servers are set up for the ETHERNET_802.2 frame
	type, you must configure the IPX/SPX Compatible protocol on all Windows for
	Workgroups machines for ETHERNET_802.2. You also must configure your real-mode
	protocol used to connect to the file server for the ETHERNET_802.2 frame type.
	To do this, either place the "Frame Type ETHERNET_802.2" line first in the Link
	Driver section of the NET.CFG file, or specify it on the Protocol line in the
	Link Driver section.
	
	Additional query words: 3.11 3rdparty doc err documentation error frametype frame_type
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
