---
layout: page
title: "Q150823: Trap 0xA When Token Ring Source Routing Data Exceeds 18 Bytes"
permalink: /kb/150/Q150823/
---

## Q150823: Trap 0xA When Token Ring Source Routing Data Exceeds 18 Bytes

	Article: Q150823
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	It is possible for a Trap 0xA to occur on a Windows NT computer in a Token Ring
	network if packets are received with source routing information exceeding the
	maximum length of 18 bytes.
	
	In a reported case, a STOP Message (blue screen) resulted when source routing
	data of 22 bytes was received. A partial frame is shown below. The value d6
	resolves to the following:
	
	        /-------- Single route Broadcast
	             /---- SR data length 0x16 (22 bytes decimal)
	
	d6   110 10110
	
	Frame:
	db f869e4ca-d l60
	f869e4bd 40 c0 00 00 00 00 80 90-00 5a 72 ac 5b d6 00 a3 @........Zr.[..
	f869e4cd 11 06 41 c4 a1 06 51 a2-04 bb c2 00 51 50 d1 04 ..A...Q.....QP.
	f869e4dd d1 50 f0 f0 f0 03 2c 00-ff ef 0a 17 1d 00 00 00 .P....,........
	f869e4ed 1d 00 4e 4f 42 46 53 30-31 20 20 20 20 20 20 20 ..NOBFS01
	f869e4fd 20 20 42 4f 42 31 30 36-32 38 20 20 20 20 20 20   BOB10628
	f869e50d 20 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00 ...............
	
	
	CAUSE
	=====
	
	The additional Source Routing information exceeded the length of a static
	buffer. This results in the address containing the connection link being
	overwritten. Several routines (NbfResetLink and MacConstructHeader) attempted to
	use the overwritten link value and thus, generated the traps.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	This problem has been corrected for Windows NT 3.51 with an updated version of
	NBF.SYS. The bad packet is rejected at a lower level in
	NbfGeneralReceiveHandler, since it is considered a malformed token ring packet.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
