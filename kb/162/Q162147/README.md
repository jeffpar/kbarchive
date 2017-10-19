---
layout: page
title: "Q162147: TN3270 Server Loses Client Session"
permalink: /kb/162/Q162147/
---

## Q162147: TN3270 Server Loses Client Session

	Article: Q162147
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you press the ENTER key repeatedly in the Attachmate EPC 6.1 TN3270
	emulator, a TN3270/E session may be dropped. There may also be many other ways
	to manifest the underlying problem.
	
	See the CAUSE section of this article for trace symptoms.
	
	
	CAUSE
	=====
	
	The problem has to do with direction (which half-session has permission to send
	data). A host may give the emulator permission to send by setting the change
	direction (CD) bit in the Request Header. It is up to the application to
	acknowledge this CD message before any emulator data flows to the host. However,
	a TN3270 or TN3270E emulator cannot tell whether the host has given it
	direction, and may send data out of order. In the failing case, by the time the
	data from the emulator reaches the TN3270 server, the host has in fact sent a CD
	on a Request Definite Response (RQD) message to the computer running SNA Server.
	The TN3270 server then forwards the message to the client, requesting a positive
	response. So, when the TN3270 Server gets the data from the emulator, it thinks
	that the emulator sent the data correctly, because it now has a direction to
	send. Therefore, it sends the data on to the computer running SNA Server, which
	rejects the data because it has not yet received a response to the CD message
	from the TN3270 Server.
	
	The following is the message from the host with the CD bit set:
	
	  DLC    ---------------------------------------------- 09:59:44.35
	  DLC    05160000->01020101 DLC DATA
	  DLC                       DAF:05 OAF:01 ODAI:off Normal
	  DLC                       RQD FMD BC EC DR1 CD
	  DLC
	  DLC    ---- Header  at address 00DA43B0, 1 elements ----
	  DLC    04050100 00002C00 05010018 0100BD00     <......,.........>
	  DLC
	  DLC    ---- Element at address 0129AB70, start 10, end 12 ----
	  DLC    038020                                  <..              >
	  FMI    ---------------------------------------------- 09:59:44.35
	  FMI    01020202->0B1D0001 FMI DATA
	  FMI                       ACK reqd Key:25 Seq:24 BCI ECI CDI CEI BBIUI
	  FMI                       EBIUI
	  FMI
	  FMI    ---- Header  at address 00DA43B0, 1 elements ----
	  FMI    01050019 620E2C00 05010018 0100BD00     <....b.,.........>
	  FMI
	  FMI    ---- Element at address 0129AB70, start 4, end 12 ----
	  FMI    2C000501 00180380 20                    <,.......        >
	  FMI    ---------------------------------------------- 09:59:44.35
	  FMI    0B1D0001->01020202 FMIST RSRC
	  FMI                       Credit:1
	  FMI
	  FMI    ---- Header  at address 00DA43B0, 0 elements ----
	  FMI    04050001 620E2C00 05010018 0100CF00     <....b.,.........>
	
	The following is the message sent from the client emulator:
	
	  >10/24 09:59:44.365 (+ smidgen )  Event=TEV_DataToSNA
	     Thread = 0x00000049  Session = 0x00267DA8  Socket = 0x000001D0
	     VCB address=0x00267FB8
	     verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8004 (WRITE)
	     sid=0x00000003  correlator=0x00267DA8  post_handle=0x000001EC
	     prim_rc=LUA_OK  sec_rc=LUA_SEC_RC_OK
	     lu_norm    lua_data_length=0x00000003
	     RH  REQ FMD fi=0   sdi=0  bci=1  eci=1  (Only)
	     03 90 20    dr1=1  dr2=0  ri=1   qri=0  pi=0
	                 bbi=0  ebi=0  cdi=1  csi=0  edi=0  pdi=0
	     000000  f8c37e                               *8C=             *
	
	The following is where the TN3270 Server sends the client emulator message to the
	SNA Server Service:
	
	  FMI    ---------------------------------------------- 09:59:44.36
	  FMI    0B1D0001->01020202 FMI DATA
	  FMI                       NO ACK reqd Key:1 Seq:24 BCI ECI CDI CEI
	  FMI                       BBIUI EBIUI
	  FMI
	  FMI    ---- Header  at address 00DA43B0, 1 elements ----
	  FMI    00050001 620E2C00 05010018 0100CF00     <....b.,.........>
	  FMI
	  FMI    ---- Element at address 0129AB70, start 4, end 15 ----
	  FMI    2C000000 00000390 20F8C37E              <,....... 8C~    >
	  FMI    ---------------------------------------------- 09:59:44.36
	  FMI    01020202->0B1D0001 FMIST RSRC
	  FMI                       Credit:1
	  FMI
	  FMI    ---- Header  at address 00DA44B4, 0 elements ----
	  FMI    04050001 00002C00 05010018 0100CF00     <......,.........>
	
	The server rejects this incoming data from the client because the client does not
	have a direction to send.
	
	  FMI    ---------------------------------------------- 09:59:44.36
	  FMI    01020202->0B1D0001 FMIST NACK-2
	  FMI                       Msg key:1 Fail: NONCRIT  Err1:200D Err2:0000
	  FMI
	  FMI    ---- Header  at address 00DA43B0, 0 elements ----
	  FMI    01040001 6200200D 00000100 0100CF00     <....b. .........>
	
	  >10/24 09:59:44.365 (+ smidgen )  Event=TEV_DataFromSNA
	     Thread = 0x00000049  Session = 0x00267DA8  Socket = 0x000001D0
	     VCB address=0x00267FB8
	     verb in progress -- opcode=0x8004 (WRITE)
	
	  >10/24 09:59:44.365 (+ smidgen )  Event=TEV_CRTInboundDataSent
	     Thread = 0x00000049  Session = 0x00267DA8  Socket = 0x000001D0
	     State = OPER        InputState = COLLECT     OutputState = SNARESP
	     Toggle = LU-LU       LU State = SNDXMT      CanQueue = NO
	     Bracket = INB         DTActive
	
	  >10/24 09:59:44.375 (+ 10 msecs)  Event=TEV_DataFromSNAAsync
	     Thread = 0x00000049  Session = 0x00267DA8  Socket = 0x000001D0
	     VCB address=0x00267FB8
	     verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8004 (WRITE)
	     sid=0x00000003  correlator=0x00267DA8  post_handle=0x000001EC
	     prim_rc=0x1400 (LUA_UNSUCCESSFUL)
	     sec_rc=0x00000D20 (LUA_RSP_BEFORE_SENDING_REQ)
	     lu_norm    lua_data_length=0x00000003
	     RH  REQ FMD fi=0   sdi=0  bci=1  eci=1  (Only)
	     03 90 20    dr1=1  dr2=0  ri=1   qri=0  pi=0
	                 bbi=0  ebi=0  cdi=1  csi=0  edi=0  pdi=0
	
	  >10/24 09:59:44.375 (+ smidgen )  Event=TEV_DataToClient
	     Thread = 0x00000049  Session = 0x00267DA8  Socket = 0x000001D0
	     NEG RSP
	     Number of bytes = 8
	
	  >10/24 09:59:44.375 (+ smidgen )  Event=TEV_TCPSendIssued
	     Thread = 0x00000049  Session = 0x00267DA8  Socket = 0x000001D0
	     Number of bytes = 8
	     000000  0200 0100 0000 ffef                      |........        |
	
	  >10/24 09:59:44.385 (+ 10 msecs)  Event=TEV_SessionTerminationScheduled
	     Thread = 0x00000049  Session = 0x00267DA8  Socket = 0x000001D0
	     SNAError
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. The fix involved
	changing the TN3270E server so that it does not let a TN3270E client send data
	to the host until it has sent to the host a response to any CD message it has
	received. Previously, the TN3270e server would let the TN3270E client send data
	once the TN3270 server had received a CD message from the host.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 Service Pack 1. This problem was corrected in the latest SNA
	Server version 2.11 U.S. Service Pack. For information on obtaining this Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna SP1 RH
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	
	=============================================================================
	
