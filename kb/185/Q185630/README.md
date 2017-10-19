---
layout: page
title: "Q185630: 3270 Sessions May Hang When Emulator Rejects Host Bind"
permalink: /kb/185/Q185630/
---

## Q185630: 3270 Sessions May Hang When Emulator Rejects Host Bind

	Article: Q185630
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	3270 sessions may appear to stop responding occasionally if the 3270 Emulator
	rejects an application BIND that it receives from the host. In addition, the
	computer running SNA Server that the 3270 session is defined on may log the
	following message in the Windows NT Application Event Log:
	
	  Event ID: 9
	  Source: SNA Server
	  Description: (1117) A protocol error occurred due to a message
	  sent by a 3270 emulator or link service
	
	  EXPLANATION
	  A protocol error occurred due to a message sent by a 3270 emulator
	  or link service.
	
	  SUBCODE INFORMATION
	  X'1117'  A 3270 emulator used by the following user caused an error,
	  though the user's 3270 session was not interrupted:
	
	     Client Domain:  <domain name>
	     Client User:    <username>
	     LU name:        <3270 LU name>
	     FMI Sense Code: <error code>
	
	NOTE: The Event 9 message was enhanced in SNA Server 3.0 SP3 and SNA Server 4.0
	to include the additional client, LU, and FMI Sense Code information shown
	here.
	
	This particular problem only occurs with SNA Server versions 3.0 SP2, 3.0 SP3,
	and 4.0.
	
	CAUSE
	=====
	
	SNA Server occasionally discards OPEN PLU RSP ERROR messages it receives from
	3270 emulators. When SNA Server discards this message, it fails to sends a BIND
	-RSP to the host for that particular session (for example, 3270 LU). This causes
	the session to stop responding because the host is waiting for a response to the
	application BIND that it sent for that session.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2, 3.0
	SP3, and 4.0. This problem was first corrected in SNA Server 3.0 Service Pack
	4.
	
	
	MORE INFORMATION
	================
	
	Event 9 messages can occur for other reasons and do not usually cause the system
	to stop responding or drop 3270 sessions.
	
	For additional information about Event 9 and Event 12 messages, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q181121 Enhanced Event Logging for SNA Server Event 9, 12
	
	When a user signs on to a host application (for example, TSO, IMS, and so forth),
	the host sends an application BIND to SNA Server. SNA Server sends this BIND to
	the emulator through the Function Management Interface (FMI) OPEN PLU REQUEST
	message. If the 3270 emulator/application rejects the BIND that it receives in
	the OPEN PLU REQUEST, it returns an OPEN PLU ERROR RESPONSE message. SNA Server
	is supposed to send a BIND -RSP to the host when it receives an OPEN PLU ERROR
	RESPONSE. This problem occurs when the SNA Server fails to send a BIND -RSP to
	the host when it receives an OPEN PLU ERROR RESPONSE.
	
	The following is an excerpt of SNA Server Data Link Control and 3270 Message
	traces that capture the problem:
	
	  DLC   01020201->04160000 DLC DATA
	  DLC                      DAF:00 OAF:47 ODAI:off Normal
	  DLC                      RQD FMD BC EC DR1
	  DLC
	  DLC   ---- Header  at address 0122DB90, 1 elements ----
	  DLC   01000000 00012C00 0047008C 01000000
	<......,..G......>
	  DLC
	  DLC   ---- Element at address 0179CA4C, start 10, end 15 ----
	  DLC   038000C9 D4E2                           <...IMS>
	
	The user enters IMS to get to access IMS on the host.
	
	<data omitted for brevity>
	
	  DLC   04160000->01020201 DLC DATA
	  DLC                      DAF:47 OAF:01 ODAI:off Exp.
	  DLC                      BIND   RQD SC  FI BC EC DR1
	  DLC
	  DLC   ---- Header  at address 0122DD64, 1 elements ----
	  DLC   01000000 00012D00 470144A9 01004E00     <......-.G.Dz..N.>
	  DLC
	  DLC   ---- Element at address 0179CA4C, start 10, end 47 ----
	  DLC   6B800031 010303B1 90308000 00888680
	<k..1.....0...hf.>
	  DLC   00020000 00000018 5018507F 000006D4
	<........P.P<7F>...M>
	  DLC   C9C9D4E2 D400                           <IIMSM.>
	
	The host sends a BIND for the IMS application.
	
	  FMI   01026E03->33120000 OPEN  PLU  REQUEST
	  FMI                      FMI  CredR:0 CredS:0
	  FMI
	  FMI   ---- Header  at address 0122DB90, 2 elements ----
	  FMI   01020247 001A0000 0000008C 0100C100
	<...G..........A.>
	  FMI
	  FMI   ---- Element at address 0179D124, start 1, end 26 ----
	  FMI   44434250 54323339 00202020 20202020     <DCBPT239.>
	  FMI   20202020 00000800 0200                  <    ......>
	  FMI
	  FMI   ---- Element at address 0179CA4C, start 4, end 47 ----
	  FMI   2D004701 44A96B80 00310103 03B19030     <-.G.Dzk..1.....0>
	  FMI   80000088 86800002 00000000 00185018
	<...hf.........P.>
	  FMI   507F0000 06D4C9C9 D4E2D400              <P<7F>...MIIMSM.>
	  FMI
	
	The BIND is sent to the 3270 emulator in this OPEN PLU REQUEST
	
	  FMI   3312001A->01026E03 OPEN  PLU  RSP ERROR
	  FMI                      FMI  Err1:0805 Err2:0000 Non-neg Bind
	  FMI
	  FMI   ---- Header  at address 0122DB90, 0 elements ----
	  FMI   03020247 001A0805 0000008C 0100C100
	<...G..........A.>
	
	The SNA Server does not send a BIND -RSP to the host after receiving this
	message. The 3270 session stops responding until the user ends the session.
	
	Additional query words: hang hangs hung
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP2
	Version           : :3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
