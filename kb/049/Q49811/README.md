---
layout: page
title: "Q49811: Network ROM for OS/2 LAN Manager 2.0 RPL"
permalink: kb/049/Q49811/
---

## Q49811: Network ROM for OS/2 LAN Manager 2.0 RPL

	Article: Q49811
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article describes the network adapter ROM requirements to initiate the
	Remote Initial Program Load (RPL) service on an OS/2 LAN Manager server in order
	to boot MS-DOS or OS/2 over the network.
	
	MORE INFORMATION
	================
	
	The OS/2 LAN Manager version 2.0 RPL service allows personal computer
	"requesting devices" to boot OS/2 or MS-DOS from a network server "loading
	device."
	
	Instead of booting MS-DOS or OS/2 from the local disk drive, the requesting
	device attaches to the network and broadcasts a boot request. The boot request
	must be functionally compatible with the SEND.FILE.REQUEST frame, which is sent
	by the IBM Remote Program Load Module. The IBM Remote Program Load Module is an
	optional ROM chip attached to an IBM token ring network adapter. The request is
	sent using frames in IEEE 802.2 format encapsulated in token ring or Ethernet
	packets.
	
	Before an OS/2 LAN Manager server can respond to the request, it must be running
	the RIPL service and must be configured to accept boot requests from the
	requesting device. When a valid boot request is received from a requesting
	device, the RIPL server sends the appropriate boot image to the device. Once the
	boot image has been transferred, the requesting device transfers control to the
	boot image.
	
	The following sequence describes how LAN Manager supports remoteboot for a
	workstation with an RPL ROM installed.
	
	                                    Loading Device (OS/2 LAN
	Requesting Device (with Remote        Manager with RIPL service
	Program Load Module installed)        installed)
	----------------------------------    -------------------------
	                                     1. OS/2, LAN Manager, and the
	                                        RIPL services are loaded and
	                                        active. The RIPL service
	                                        waits for a FIND frame
	                                        from a requesting device.
	
	2. After power-on, the IBM Remote
	  Program Load Module attaches to
	  the ring and sends a FIND frame
	  to a loading device that includes
	  its network address.
	
	                                     3. The FIND frame is received,
	                                        and a FOUND frame is sent
	                                        back to the requesting
	                                        device that includes the
	                                        network address of the
	                                        loading device.
	
	4. The FOUND frame is received,
	  and a SEND.FILE.REQUEST frame
	  (requesting the boot image) is
	  sent back to the loading device.
	
	                                     5. The SEND.FILE.REQUEST is
	                                        received. The RIPL service
	                                        validates the machine
	                                        request, then sends the
	                                        appropriate boot image
	                                        (either MS-DOS or OS/2),
	                                        depending on the RIPL
	                                        configuration specified
	                                        for the machine by the LAN
	                                        administrator.
	
	6. Once the SEND.FILE.REQUEST has
	  been completed, control is passed
	  to the boot image, which then
	  performs all necessary initialization
	  under either MS-DOS or OS/2.
	
	Below is a list of available IBM products that describe the operation of the IBM
	Remote Program Load ROM and provide sample source code for server-based
	bootstrap and loader programs under MS-DOS. Please note that the bootstrap and
	loader programs described in the IBM products are replaced by OS/2 LAN Manager
	version 2.0 RIPL and OEM-adapted RIPL DLLs (dynamic-link libraries) for the OS/2
	remote boot.
	
	   Product ID   Description
	  ----------   -----------
	
	  83X7839      IBM Remote Program Load: 5.25-inch disk and "RPL
	               User's Guide" (for IBM Token Ring Network PC Adapter
	               and Adapter IIs)
	
	  83X8881      IBM Remote Program Load: 3.5-inch disk and "RPL User's
	               Guide" (for IBM Token Ring Network Adapter /A)
	
	Remote Boot ROMs for Ethernet cards are available from the adapter manufacturers.
	Another source is LAN Works Technologies in Ontario Canada (416-238-5528), which
	has available ROMs for 3COM, Novell, SMC/Western Digital Racal Interlan, IBM,
	and other network cards.
	
	Additional query words: 2.00 2.0 RPL remote boot ROM
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
