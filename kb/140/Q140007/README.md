---
layout: page
title: "Q140007: WFW Direct Hosting over ODI Drivers Drop Network Connections"
permalink: kb/140/Q140007/
---

## Q140007: WFW Direct Hosting over ODI Drivers Drop Network Connections

	Article: Q140007
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Windows for Workgroups 3.11 client, running IPX and connecting to an Windows
	NT version 3.5 or 3.51 Server or Workstation by default uses direct hosting.
	Direct hosting is a method of bypassing the NetBIOS layer and sending
	client/server messages (SMBs) directly over the transport, in this case, IPX.
	
	If the Windows for Workgroups 3.11 client is using an Open Datalink Interface
	(ODI) driver rather than an NDIS driver, the client may drop packets from the
	server and lose the connection.
	
	This is most evident where you have large file reads and a fast server.
	
	MORE INFORMATION
	================
	
	You may be able to improve the connection reliability by not using direct
	hosting from client to server. This forces NetBIOS to manage the session, rather
	than making the redirector manage retransmissions. To turn direct hosting off at
	the client, add the following parameter to the [network] section of system.ini:
	
	     directhost=no
	
	Note: Page 4-12 of the "Windows for Workgroups Resource Kit", Addendum for
	Version 3.11 incorrectly states this parameter as 'directhosting'. This is a
	documentation error.
	
	Additionally, you must install the IPX/SPX Compatible Transport with NetBIOS on
	the Windows for Workgroups client.
	
	When you turn direct hosting off, large file read requests from the client are
	requested in a read block raw SMB, and the data is transferred over the NetBIOS
	session. The following trace shows at frame 20, the client initiates a read
	block raw, and the data is returned by the server over the NetBIOS session:
	
	#    DeltaT  Src MAC     Dst MAC   Protocol Description
	
	20   0.004   WFW Client  NT server   SMB     C read block raw, FID = 0x800,
	                                               Read 0xfe00 at
	21   0.147   NT server   WFW Client  NBIPX   Session Data
	22   0.001   NT server   WFW Client  NBIPX   Session Data, Send Seq 0x0C,
	                                               Offset 0x5AC
	23   0.002   WFW Client  NT server   NBIPX   Session Data, Ack, Recv Seq
	                                               0x0D, 0x10 Bytes Received
	24   0.002   NT server   WFW Client  NBIPX   Session Data
	25   0.002   NT server   WFW Client  NBIPX   Session Data
	26   0.001   NT server   WFW Client  NBIPX   Session Data, Send Seq 0x0F,
	                                               Offset 0x16B0
	27   0.002   WFW Client  NT server   NBIPX   Session Data, Ack, Recv Seq
	                                               0x10, 0x13 Bytes Received
	
	If direct hosting is on, then the redirector initiates a read block multiplex,
	and the data is sent back in read block multiplex response SMBs, directly over
	IPX. The following trace shows a read block multiplex coming from the client at
	frame 19. Frames 20 through 29 show the server responding with read block
	multiplex responses, and frame 30 is another read block multiplex command from
	the client:
	
	#    DeltaT  Src MAC     Dst MAC   Protocol Description
	
	19   0.005   WFW Client  NT server    SMB   C read block mpx, FID = 0x800,
	                                              Read 0x3750 at 0x00000000
	20   0.003   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	21   0.006   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	22   0.001   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	23   0.002   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	24   0.002   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	25   0.001   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	26   0.001   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	27   0.002   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	28   0.001   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	29   0.001   NT server   WFW Client   SMB   R read block mpx, Read 0x588 of
	                                              0x3750
	30   0.004   WFW Client  NT server    SMB   C read block mpx, FID = 0x800,
	                                              Read 0x3750 at 0x00003750
	
	In this case, the redirector is responsible for requesting resends of lost
	packets in either direction. This may be too much of a burden on the Windows for
	Workgroups redirector which is running over an ODI driver. The extra layer
	needed to map NDIS 3.0 protocols to an ODI NIC driver (MSODISUP.386) may also
	contribute to the problem, as running direct hosting over NDIS drivers does not
	seem to exhibit this problem.
	
	Additional query words: prodnt 3.11 3.50 3.51 directhost directhosting
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5,3.51
	
	=============================================================================
	
