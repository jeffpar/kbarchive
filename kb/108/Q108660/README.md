---
layout: page
title: "Q108660: MS TCP/IP Does Not Load with ODINSUP on Token Ring"
permalink: /kb/108/Q108660/
---

## Q108660: MS TCP/IP Does Not Load with ODINSUP on Token Ring

	Article: Q108660
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	
	On a LAN Manager 2.2 enhanced MS-DOS workstation under Windows for Workgroups 3.1
	or 3.11, trying to load Microsoft TCP/IP on top of a Novell Netware ODI MLID and
	ODINSUP fails with this error:
	
	  Unloadable TCP 1.0 not loaded
	
	Microsoft NetBEUI loads and functions in this configuration.
	
	CAUSE
	=====
	
	TCP/IP issues an OpenAdapter NDIS call to determine if a token ring network card
	is available and functional. If this call fails, TCP/IP fails to load.
	
	Novell's ODINSUP NDIS support layer for ODI drivers does not provide support for
	the OpenAdapter call. Instead it performs its own adapter initialization and
	sets bit 4 of the MAC status table's flag field to indicate that the adapter is
	already open.
	
	RESOLUTION
	==========
	
	The TCPTSR driver was changed so that it does not attempt an OpenAdapter NDIS
	call until it checks bit 4 of the MAC Service Specific Status Table to see if
	the adapter is already open. This fix is available as CSD00.071.
	
	Additional query words: wfw wfwg 2.20 2.2 ipxodi ipx netx snoball
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
