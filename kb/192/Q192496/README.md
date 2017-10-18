---
layout: page
title: "Q192496: Slow Write Performance Using IBM DOS Lan Requester"
permalink: kb/192/Q192496/
---

## Q192496: Slow Write Performance Using IBM DOS Lan Requester

	Article: Q192496
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Write operations are a magnitude slower that read operations against a server
	running Windows NT when using IBM DOS LAN Requester.
	
	MORE INFORMATION
	================
	
	
	In the Network Monitor trace below, the client uses a send window of 1. With this
	send window, the client does not send any more frames before the last frame has
	been acknowledged. When Windows NT receives this frame, it does not immediately
	acknowledge it to optimize the number of frames sent in return. If several
	frames arrive in a short period of time, they can be acknowledged in one reply.
	When the server has any data to send back to the client, the acknowledgement can
	be sent together (piggybacked) with the response.
	
	To use these optimizations (also known as delayed acknowledgement), Windows NT
	NetBEUI waits for a maximum of 150 ms (T2), and then sends an acknowledgement.
	
	This causes a round-trip delay of about 200 ms for each frame, seriously
	degrading throughput.
	
	303 17.903 SMB C write block raw, FID = 0x802, Write 0xfd8 of 0xabec at
	0xabec
	304 18.086 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x5E
	305 18.089 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	306 18.286 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x5F
	307 18.289 NETBIOS Data Only Last (0x16): LSN = 0x04, RSN = 0x3D, Length =
	2028
	308 18.292 NETBIOS Data Ack (0x14): LSN = 0x3D, RSN = 0x04
	309 18.292 SMB     R write block raw
	310 18.292 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x26
	311 18.293 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x27
	312 18.293 NETBIOS Data Ack (0x14): LSN = 0x04, RSN = 0x3D
	313 18.486 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x61
	314 18.490 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	315 18.687 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x62
	316 18.691 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	317 18.887 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x63
	318 18.890 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	319 19.087 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x64
	320 19.090 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	321 19.287 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x65
	322 19.291 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	323 19.489 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x66
	324 19.492 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	325 19.688 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x67
	326 19.691 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	327 19.888 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x68
	328 19.891 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	329 20.089 LLC     RR DSAP=0xF0 SSAP=0xF1 R N(R) = 0x69
	330 20.092 NETBIOS Data First Middle (0x15): LSN = 0x04, RSN = 0x3D,
	Length = 2028
	
	RESOLUTION
	==========
	
	Use an updated client that uses a send window or sets the POLL bit in the LLC
	header for immediate acknowledgements or Change MaximumIncomingFrames in the
	registry to 1. However, this setting will degrade performance for all clients.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q102998 REG: Network Services Entries, Part 4
	
	
	For information regarding this product, please connect to IBM's main Web page:
	
	  http://www.software.ibm.com
	
	The third party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: slow performance delayed nbf
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
