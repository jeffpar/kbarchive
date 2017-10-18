---
layout: page
title: "Q143142: NetWare Clients Cannot Connect to FPNW Server"
permalink: kb/143/Q143142/
---

## Q143142: NetWare Clients Cannot Connect to FPNW Server

	Article: Q143142
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install File and Print Services for NetWare (FPNW) on your computer
	running Windows NT, if NetWare clients are not able to connect to the FPNW
	server, check to see if FPNW was installed in the absence of a NetWare server.
	If so, then the resulting Network Number of all zeros is not valid.
	
	MORE INFORMATION
	================
	
	When you install FPNW it will automatically detect any network numbers that are
	being used (see page 3 in the Windows NT FPNW Administrators Guide). It will
	then assign itself a number based on what it detects. If there are no network
	numbers assigned or FPNW does not detect any (that is, no NetWare servers are
	running), it will assign itself a number of all zeros. In the absence of any
	NetWare Servers this is not a valid number and NetWare clients will not be able
	to connect to the FPNW server.
	
	With NetWare Netx clients, the error received is "No Free Connection Slots
	Available".
	
	To change the network number from all zeros to a valid network number:
	
	1. Run Control Panel and choose Network.
	
	2. Select NWLink and choose Configure.
	
	3. Do one of the following:
	
	   - Set the frame type and the network number:
	
	     a. If you know the frame type used on your network, set the frame type
	        from Auto to your network frame, otherwise leave it at Auto.
	
	        NOTE: Changing Auto to the specific frame type speeds up frame
	        processing because it eliminates the frame type detection process.
	
	     b. If you have a NetWare server on your network, specify the network
	        number used by that server and all NetWare workstations. If you do not
	        have a NetWare server on your network specify a network number
	        containing any combination of the letters A-F and numbers 0-9,
	        excluding all Fs or all 0s (zeros).
	
	-or-
	
	   - Change the Internal Network number to a number that is unique on your
	     network and not used by any other computer. That number may contain any
	     combination of the letters A-F and numbers 0-9, excluding all Fs or all 0s
	     (zeros).
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
