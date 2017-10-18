---
layout: page
title: "Q118963: WFWG Err Msg: Shell-332-21: Network Server Could Not Be Found"
permalink: kb/118/Q118963/
---

## Q118963: WFWG Err Msg: Shell-332-21: Network Server Could Not Be Found

	Article: Q118963
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message after configuring Microsoft Windows
	for Workgroups 3.11 to use Novell connectivity with VLM or NETX:
	
	  Shell-332-21: a network server could not be found
	
	CAUSE
	=====
	
	The frame type used by the workstation is different from the default frame type
	used on the server. This problem also occurs if either of the following
	conditions exists:
	
	- NETX is loading on the workstation and bindery services are not set up on the
	  NetWare 4.x server.
	
	- On a system loading VLM, Windows for Workgroups added ETHERNET_802.2 as the
	  default frame type when it configured NET.CFG. The workstation was previously
	  configured for ETHERNET_802.3.
	
	RESOLUTION
	==========
	
	To correct this problem, use the appropriate method below.
	
	- Change the frame type of the workstation to match the frame type of the
	  server. To determine the frame type being used by the server, type "config"
	  (without the quotation marks) at the server prompt on the NetWare server. The
	  default frame type on the workstation is the first frame type listed in the
	  LINK DRIVER section of the NET.CFG file.
	
	- Use VLM instead of NETX as the shell. Double-click the Network Setup icon in
	  the Network group to configure Windows for Workgroups to use Novell NetWare
	  (Workstation Shell Version 4.0 and above).
	
	- Verify that the network card settings are correct in the LINK DRIVER section
	  of the Net.cfg file. For example, verify that the INT, PORT, and MEM entries
	  are present and correct.
	
	
	Additional query words: 3.11 frame err msg netx vlm shell shell-332-21
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
