---
layout: page
title: "Q163578: TN3270 Client's Session Drops"
permalink: /kb/163/Q163578/
---

## Q163578: TN3270 Client's Session Drops

	Article: Q163578
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using a TN3270e client against the TN3270 service, the TN3270e
	client session drops.
	
	CAUSE
	=====
	
	The host had not yet sent a Change Direction (CD) indicator telling the TN3270
	client that it had direction to send data.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. In the hotfix, the
	TN3270 server discards all data received from a TN3270 emulator if the host has
	not yet sent a CD message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 and 2.11 Service Pack 1. This problem was corrected in the latest Microsoft
	SNA Server 2.11 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	SNA Server sends the TN3270 service a message inbound from the host. A TN3270
	trace shows the following (notice that there is no CD bit set):
	
	  FMI    ---------------------------------------------- 14:23:29.63
	  FMI    01020E02->0B1D0001 FMI DATA
	  FMI                       NO ACK reqd Key:312 Seq:309 BCI ECI CEI
	  FMI                       BBIUI EBIUI
	  FMI
	  FMI    ---- Header  at address 00DA4620, 1 elements ----
	  FMI    00050138 600E2C00 05010135 0100B100     <...8`.,....5....>
	  FMI
	  FMI    ---- Element at address 0129B000, start 4, end 23 ----
	  FMI    2C000501 01350390 00F14011 F56F1D40     <,....5...1@.5o.@>
	  FMI    1161F013                                <.a0.            >
	
	The following is the TN3270 Service sending the same message to the client:
	
	  >06/12 14:23:29.645 (+ smidgen )  Event=TEV_DataToClient
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   LU-LU Data
	   Number of bytes = 30
	
	  >06/12 14:23:29.645 (+ smidgen )  Event=TEV_TCPSendIssued
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   Number of bytes = 30
	   000000  0000 0100 f401 c111 086f 1d40 3c0a 5000  |....4.A..?. ..&.|
	   000010  3c0c 3000 3c00 0000 1108 7013 ffef       |..............  |
	
	  >06/12 14:23:29.645 (+ smidgen )  Event=TEV_CRTReadProcessed
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   State = OPER        InputState = IDLE        OutputState = TCPWRITE
	   Toggle = LU-LU       LU State = RCV         CanQueue = YES
	   Bracket = INB         DTActive
	
	  >06/12 14:23:29.645 (+ smidgen )  Event=TEV_TCPSendCompleted
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   Bytes transferred = 30
	
	  >06/12 14:23:29.645 (+ smidgen )  Event=TEV_DataToSNA
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   VCB address=0x0027775C
	   verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8003 (READ)
	   sid=0x00000001  correlator=0x00277598  post_handle=0x000001F8
	   prim_rc=LUA_OK  sec_rc=LUA_SEC_RC_OK
	   lua_max_length=0x00000800
	
	  >06/12 14:23:29.655 (+ 10 msecs)  Event=TEV_DataFromSNA
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   VCB address=0x0027775C
	   verb in progress -- opcode=0x8003 (READ)
	
	  >06/12 14:23:29.655 (+ smidgen )  Event=TEV_CRTOutboundWriteComplete
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   State = OPER        InputState = IDLE        OutputState = SNAREAD
	   Toggle = LU-LU       LU State = RCV         CanQueue = YES
	   Bracket = INB         DTActive
	
	  >06/12 14:23:29.655 (+ smidgen )  Event=TEV_DataFromSNAAsync
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   VCB address=0x0027775C
	   verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8003 (READ)
	   sid=0x00000001  correlator=0x00277598  post_handle=0x000001F8
	   prim_rc=LUA_OK  sec_rc=LUA_SEC_RC_OK
	   lu_norm    lua_data_length=0x0000000B
	   lua_message_type=0x01 (LUA_MESSAGE_TYPE_LU_DATA)
	   TH Only    efi=0  oadi=0  daf=05  oaf=01  snf=0135
	   RH  REQ FMD fi=0   sdi=0  bci=1  eci=1  (Only)
	   03 90 00    dr1=1  dr2=0  ri=1   qri=0  pi=0
	               bbi=0  ebi=0  cdi=0  csi=0  edi=0  pdi=0
	   000000  f14011f5 6f1d4011 61f013             *1 .5?. ./0.     *
	
	  >06/12 14:23:29.655 (+ smidgen )  Event=TEV_DataToClient
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   LU-LU Data
	   Number of bytes = 18
	
	  >06/12 14:23:29.655 (+ smidgen )  Event=TEV_TCPSendIssued
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   Number of bytes = 18
	   000000  0000 0100 f501 4011 f56f 1d40 1161 f013  |....5. .5?. ./0.|
	   000010  ffef                                     |..              |
	
	  >06/12 14:23:29.665 (+ 10 msecs)  Event=TEV_CRTReadProcessed
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   State = OPER        InputState = IDLE        OutputState = TCPWRITE
	   Toggle = LU-LU       LU State = RCV         CanQueue = YES
	   Bracket = INB         DTActive
	
	  >06/12 14:23:29.665 (+ smidgen )  Event=TEV_TCPSendCompleted
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   Bytes transferred = 18
	
	  >06/12 14:23:29.665 (+ smidgen )  Event=TEV_DataToSNA
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   VCB address=0x0027775C
	   verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8003 (READ)
	   sid=0x00000001  correlator=0x00277598  post_handle=0x000001F8
	   prim_rc=LUA_OK  sec_rc=LUA_SEC_RC_OK
	   lua_max_length=0x00000800
	
	  >06/12 14:23:29.665 (+ smidgen )  Event=TEV_DataFromSNA
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   VCB address=0x0027775C
	   verb in progress -- opcode=0x8003 (READ)
	
	  >06/12 14:23:29.665 (+ smidgen )  Event=TEV_CRTOutboundWriteComplete
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   State = OPER        InputState = IDLE        OutputState = SNAREAD
	   Toggle = LU-LU       LU State = RCV         CanQueue = YES
	   Bracket = INB         DTActive
	
	  >06/12 14:23:32.159 (+  2 secs )  Event=TEV_TCPRecvCompleted
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   Bytes returned = 10
	
	The following is the client sending data to the TN3270 service when it does
	not have direction to send:
	
	  >06/12 14:23:32.159 (+ smidgen )  Event=TEV_DataFromClient
	   Thread = 0x000000DC  Session = 0x00277598  Socket = 0x0000005C
	   000000  0000 0100 e87d 61f0 ffef                 |....Y'/0..      |
	
	The following is the TN3270 service rejecting the client's message:
	
	  >06/12 14:23:32.179 (+ 20 msecs)  Event=TEV_LogicError
	   InboundLULUData
	   LUSessionStateConfused
	
	  FMI    ---------------------------------------------- 14:23:32.25
	  FMI    0B1D0001->01020502 CLOSE SSCP REQUEST
	  FMI
	  FMI    ---- Header  at address 00DA4620, 0 elements ----
	  FMI    01010001 600E2C00 05010135 0100C800     <....`.,....5..H.>
	  FMI    ---------------------------------------------- 14:23:32.26
	  FMI    01020502->0B1D0001 CLOSE SSCP RSP OK
	  FMI
	  FMI    ---- Header  at address 00DA4620, 0 elements ----
	  FMI    02010001 600E2C00 05010135 0100C800     <....`.,....5..H.>
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
