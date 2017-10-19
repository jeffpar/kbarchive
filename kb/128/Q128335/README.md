---
layout: page
title: "Q128335: IPX Subnet Clients Unable to Connect to Windows NT"
permalink: /kb/128/Q128335/
---

## Q128335: IPX Subnet Clients Unable to Connect to Windows NT

	Article: Q128335
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When IPX clients from a subnet attempt to connect to a server, the following
	error message appears:
	
	  DOS error 53 - name not found
	
	CAUSE
	=====
	
	This problem occurs if the connection request originates from a client whose IPX
	four byte network number contains 06 in the second byte. The server responds
	with a name recognized to a FindName Query from any other network excluding the
	range mentioned above.
	
	When the NBIPX portion of the code receives the frame, it checks certain frame
	properties. If the second byte in the NBIPX header is 06, it assumes it is a
	session data frame. As a result, NameRecognize is not processed.
	
	The following is a sample FindName frame that does not get a response:
	
	NOTE: TransmissionControl is set to 1 (indicating 1 hop). Second byte in the
	NBIPX header contains 00 06. The network number in the IPX header (x6112) is not
	the same in the NBIPX portion. This is a modified FindName frame that was
	transmitted on the wire using Network Monitor.
	
	USER1STA *BROADCAST NBIPX Find Name USER101        <00>
	ETHERNET: 802.3 Length = 98
	IPX: NetBIOS Packet - 6112.08002B314A12.455 -> 0.FFFFFFFFFFFF.455 - 1 Hops
	
	   IPX: Checksum = 65535 (0xFFFF)
	   IPX: IDP Length = 80 (0x50)
	   IPX: Transport control = 1 (0x1)
	   IPX: Packet type = WAN Broadcast
	   IPX: Destination Address Summary 0.FFFFFFFFFFFF.455
	       IPX: IPX Address = 00000000.FFFFFFFFFFFF
	       IPX: Destination Net Number = 0 (0x0)
	       IPX: Destination Socket Number = NetBIOS
	   IPX: Source Address Summary 6112.08002B314A12.455
	       IPX: IPX Address = 00006112.08002B314A12
	       IPX: Source Net Number = 24850 (0x6112)
	       IPX: Source Socket Number = NetBIOS
	   IPX: Data: Number of data bytes remaining = 50 (0x0032)
	
	NBIPX: Find Name USER101        <00>
	
	   NBIPX: Routing Info
	       NBIPX: Routing information = 393216 (0x60000)
	       NBIPX: Routing information = 0 (0x0)
	       NBIPX: Routing information = 0 (0x0)
	       NBIPX: Routing information = 0 (0x0)
	       NBIPX: Routing information = 0 (0x0)
	       NBIPX: Routing information = 0 (0x0)
	       NBIPX: Routing information = 0 (0x0)
	       NBIPX: Routing information = 0 (0x0)
	   NBIPX: Name type flag
	       NBIPX: 0....... = Unique Name
	       NBIPX: .0...... = Name not used
	       NBIPX: .....0.. = Name not Registered
	       NBIPX: ......0. = Name not Duplicated
	       NBIPX: .......0 = Name not Deregistered
	   NBIPX: Data stream type 2 = Find Name
	   NBIPX: Name = USER101        <00>
	   NBIPX: Data: Number of data bytes remaining = 1 (0x0001)
	
	00000:  FF FF FF FF FF FF 08 00 2B 31 4A 12 00 54 E0 E0   ........+1J..T..
	00010:  03 FF FF 00 50 01 14 00 00 00 00 FF FF FF FF FF   ....P...........
	00020:  FF 04 55 00 00 61 12 08 00 2B 31 4A 12 04 55 00   ..U..a...+1J..U.
	00030:  06 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
	00040:  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
	00050:  01 4D 4F 48 41 4B 30 31 20 20 20 20 20 20 20 20   .USER101
	00060:  00 00                                             ..
	
	Source: private\ntos\tdi\isn\nb\Receive.c
	routine nbireceive()
	
	if((PacketSize >= sizeof(NB_CONNECTION)) &&
	(NbFrame->Connection.Session.DataStreamType== NB_CMD_SESSION_DATA))
	{
	NbiProcessSessionData();
	} else {
	<BR/><BR/>
	if (NbFrame->Connectionless.IpxHeader.PacketType == 0x14)
	{
	DataStreamType= NbFrame->Connectionless.NameFrame.DataStreamType2;
	}
	else
	{ DataStreamType= NbFrame->Connectionless.NameFrame.DataStreamType;
	.....
	
	Debugging info:
	Setting a break point at nwlnknb!_NbiReceive and stepping thro
	thro the code when it hits the break point:
	
	fcd975f1 8b4c2418      mov   ecx,[esp+0x18]
	fcd975f5 6681791c0455  cmp   word ptr [ecx+0x1c],0x5504 <<NB_SOCKET
	fcd975fb 8bec          mov   ebp,esp
	fcd975fd 0f85b7000000  jne   nwlnknb!_NbiReceive+0xca (fcd976ba)
	fcd97603 a138bbd9fc    mov   eax,[nwlnknb!_NbiDevice (fcd9bb38)]
	fcd97608 ff804c040000  inc   dword ptr [eax+0x44c]
	fcd9760e 8b4524        mov   eax,[ebp+0x24]
	fcd97611 83f830        cmp   eax,0x30 << check for size of frame
	fcd97614 7224          jb    nwlnknb!_NbiReceive+0x4a (fcd9763a)
	
	Problem occurs here !!
	fcd97616 80791f06   cmp  byte ptr [ecx+0x1f],0x6 <<sessiondata ???
	
	fcd9761a 751e          jnz   nwlnknb!_NbiReceive+0x4a (fcd9763a)
	fcd9761c 50            push  eax
	fcd9761d ff7520        push  dword ptr [ebp+0x20]
	fcd97620 ff751c        push  dword ptr [ebp+0x1c]
	fcd97623 51            push  ecx
	fcd97624 ff7514        push  dword ptr [ebp+0x14]
	fcd97627 ff7510        push  dword ptr [ebp+0x10]
	fcd9762a ff750c        push  dword ptr [ebp+0xc]
	fcd9762d ff7508        push  dword ptr [ebp+0x8]
	fcd97630 e8171e0000    call  nwlnknb!_NbiProcessSessionData
	
	WORKAROUND
	----------
	
	To work around this problem, use an IPX network number that does not have 06 as
	the second byte in the network number.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: 3.50 nwlink nwnblink prodnt find name recognize
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11,3.5
	
	=============================================================================
	
