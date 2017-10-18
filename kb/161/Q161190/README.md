---
layout: page
title: "Q161190: TN3270 Error 520 When the Host Unbinds and Binds a Session"
permalink: kb/161/Q161190/
---

## Q161190: TN3270 Error 520 When the Host Unbinds and Binds a Session

	Article: Q161190
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
	
	The TN3270 client loses its session, receiving an error 520. The Application
	Event Logs on the computer running SNA Server show an event 603 with the
	following description:
	
	  TN3270E Service Error 520
	
	  Internal LU session state error in FirstInboundByteProcess.
	  State error id - 2 (expected CONT,SND,RCV).
	  Current state - LU-LU, SNDNXMT
	
	The TN3270 Server traces show the following:
	
	  >09/24 10:33:35.850 (+ smidgen )  Event=TEV_DataFromSNA
	   Thread = 0x0000010B  Session = 0x00180478  Socket = 0x00000238
	   VCB address=0x00180684
	   verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8004 (WRITE)
	   sid=0x000000A8  correlator=0x00180478  post_handle=0x00000150
	   prim_rc=LUA_OK  sec_rc=LUA_SEC_RC_OK
	   lu_norm    lua_data_length=0x00000000
	   TH Only    efi=0  oadi=0  daf=00  oaf=00  snf=0002
	   RH +RSP FMD fi=0   sdi=0  bci=1  eci=1  (Only)
	   83 80 00    dr1=1  dr2=0  ri=0   qri=0  pi=0
	               bbi=0  ebi=0  cdi=0  csi=0  edi=0  pdi=0
	
	  >09/24 10:33:35.850 (+ smidgen )  Event=TEV_CRTOutboundWriteComplete
	   Thread = 0x0000010B  Session = 0x00180478  Socket = 0x00000238
	   State = OPER        InputState = IGNORE      OutputState = SNAREAD
	   Toggle = LU-LU       LU State = SND         CanQueue = DATAPEND
	   Bracket = INB         DTActive
	
	  >09/24 10:33:35.860 (+ 10 msecs)  Event=TEV_LogicError
	   FirstInboundByteProcess
	   LUSessionStateConfused
	
	CAUSE
	=====
	
	A session status flag in the TN3270 Server is not being reset when the host
	unbinds and rebinds a session.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 Service Pack 1. This problem was corrected in the latest
	Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
