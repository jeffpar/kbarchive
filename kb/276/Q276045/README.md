---
layout: page
title: "Q276045: Telnet IP+DM Is Ignored If TN3270 Server Is Already Queuing Data"
permalink: /kb/276/Q276045/
---

## Q276045: Telnet IP+DM Is Ignored If TN3270 Server Is Already Queuing Data

	Article: Q276045
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you use the Rumba TN3270 client, the emulator may stop responding (hang) when
	it is used with the TN3270 Server to access a host application.
	
	If a network analysis tool, such as Microsoft Network Monitor, is used to capture
	a network trace of the TCPIP traffic between the TN3270 client and TN3270
	Server, this problem may occur after the client sends an Interrupt Process (IP)
	and Data Mark (DM) message sequence (FFF4FFF2) in the inbound data stream.
	
	Network Monitor frame illustration:
	
	  + Frame: Base frame properties
	  + ETHERNET: ETYPE = 0x0800 : Protocol = IP:DOD Internet Protocol
	  + IP: ID = 0x7CC1; Proto = TCP; Len: 44
	
	  TCP: .AP..., len: 4, seq:60113-60117, ack: 84013, win: 7744, src: 1097 dst:
	  23 (TELNET)
	  TCP: Source Port = 0x0449
	  TCP: Destination Port = Telnet
	  TCP: Sequence Number = 60113 (0xEAD1)
	  TCP: Acknowledgement Number = 84013(0x1482D)
	  TCP: Data Offset = 20 (0x14)
	  TCP: Reserved = 0 (0x0000)
	  TCP: Flags = 0x18 : .AP...
	
	  TCP: ..0..... = No urgent data
	  TCP: ...1.... = Acknowledgementfield significant
	  TCP: ....1... = Push function
	  TCP: .....0.. = No Reset
	  TCP: ......0. = No Synchronize
	  TCP: .......0 = No Fin
	
	  TCP: Window = 7744 (0x1E40)
	  TCP: Checksum = 0x7502
	  TCP: Urgent Pointer = 0 (0x0)
	  TCP: Data: Number of data bytes remaining = 4 (0x0004)
	
	  TELNET: To Server From Port = 1097
	  TELNET: Telnet Command = IAC IP(INTERRUPT PROCESS)
	  TELNET: Telnet Command = IAC DM (DATA MARK)
	
	  00000: 00 00 0C 07 AC 02 00 C0 4F 61 6B 94 08 00 45 10
	  00010: 00 2C 7C C1 40 00 80 06 98 BC 9D CB A3 8C 9D CB
	  00020: 06 1B 04 49 00 17 00 00 EA D1 00 01 48 2D 50 18
	  00030: 1E 40 75 02 00 00 FF F4 FF F2
	
	CAUSE
	=====
	
	The problem is that TN3270 client emulators can send data or, as in this case, a
	function key (PA1 key), when the client does not have direction on the session
	flow.
	
	To enable TN3270 clients to work in this manner and to avoid a TN3270 session
	protocol violation error, SNA Server internally queues such data until the
	client is granted direction on the session and can legitimately send inbound
	data.
	
	In this instance, however, after the client's illegal PA1 key is queued, the
	TN3270 Server subsequently fails to process the following IP-DM sequence. This
	is because the TN3270 Server adds it to the queue of data for later inbound
	transmission to the host when the client is granted direction on the session
	flow. As a result, no SIGNAL is sent, which typically is expected when an IP
	command is processed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	(all Service Packs).
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The TN3270 Server has been enhanced so that it no longer tries to act as a
	broker to resolve protocol ambiguities between the TN3270 client and host. The
	DisableDataQueuing registry option, which turns off queuing of data by the
	TN3270 Server, has been implemented as follows:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CCS\Services\TN3270\Parameters
	
	NOTE: This registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DisableDataQueuing
	  Data Type: REG_EXPAND_SZ
	  Value: YES
	
	4. Quit Registry Editor.
	
	This registry option is a generic solution to problems that are caused by clients
	that are not working correctly (sending data when they don't have direction)
	and/or hosts that are not working correctly (failing to lock the client's
	keyboard appropriately through the WCC byte).
	
	
	Additional query words: sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
