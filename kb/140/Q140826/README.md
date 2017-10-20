---
layout: page
title: "Q140826: TN3270 Server Rejects First Data RU After Host's CLEAR Message"
permalink: /kb/140/Q140826/
---

## Q140826: TN3270 Server Rejects First Data RU After Host's CLEAR Message

{% raw %}

	Article: Q140826
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A host application, such as TeleView, allows a user at a terminal to make a
	connection and then spawn additional sessions on the SNA host. Under normal
	conditions, the user may terminate a session with no further incident. In this
	case, however, when a user ends even just one session, the rest of the sessions
	are terminated. This condition may occur when running the TN3270 Service for
	Windows NT. The TN3270 Server may also generate the following error:
	
	  sense data = 081B0000
	
	The IBM Systems Network Architecture (SNA) Formats guide provides the following
	information regarding this error:
	
	  081B0000
	  Receiver in Transmit Mode:
	  A race condition exists: a normal-flow request was received while the
	  half-duplex contention state was NOT-RECEIVED, or while resources (such
	  as buffers) necessary for handling normal-flow data were unavailable.
	
	Contrary to the explanation given in the IBM SNA Formats guide, a race condition
	does not exist in this case. The error is exhibited in the following diagnostic
	tools:
	
	From the Application Log:
	
	  Event ID: 309
	  INIT failed with LUA_COMM_SUBSYSTEM_NOT_LOADED / LUA_SEC_RC_OK for
	  <IP_address> (port <port_number>).
	
	  Event ID: 603
	  TN3270 session with client at <IP_address> (port <port_number>) using LU
	  <LU_name> terminated abnormally because:
	     TN3270 Service Error 505
	     SNA API verb INIT failed.
	        Failure described as:
	        SNA Server has not been started.
	
	  Event ID: 698
	  Invalid Destination L-value. Parameter: 0, Message: 0, Valid range
	                                                                   <range>
	
	  Event ID: 699
	  Invalid message: MsgType 31, MhType 31
	
	  Event  ID: 1955
	  RUI_INIT failed for LU, primary_rc=4f0, secondary_rc=0
	
	From an SNA Server API Trace:
	
	  ...
	  ... RUI    ---------------------------------------------- 13:50:43.15
	  ... RUI    RUI_READ request
	  ...
	  ... RUI    ---------------------------------------------- 13:50:43.56
	  ... RUI    RUI_READ response
	  ... RUI    OK - OK
	  ...
	  ... RUI    ---------------------------------------------- 13:50:43.57
	  ... RUI    RUI_WRITE request
	  ...
	  ... RUI    ---- Data at address 00119CC4 ----
	  ... RUI    081B0000                                <....            >
	  ... RUI    ---------------------------------------------- 13:50:43.65
	  ... RUI    RUI_WRITE response
	  ... RUI    OK - OK
	  ...
	  ... RUI    ---- Data at address 00119CC4 ----
	  ... RUI    081B0000                                <....            >
	  ...
	
	From a TN3270 Server Trace:
	
	  ...
	  >11/27 13:50:43.062 (+ smidgen )  Event=TEV_DataToSNA
	   Thread = 0x000000C3  Session = 0x0026B7D0  Socket = 0x0000017C
	   VCB address=0x0026B9D8
	   verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8004 (WRITE)
	   sid=0x00010006  correlator=0x0026B7D0  post_handle=0x00000198
	   prim_rc=LUA_OK  sec_rc=LUA_SEC_RC_OK
	   lu_norm    lua_data_length=0x00000004
	   TH Only    efi=0  oadi=0  daf=FD  oaf=01  snf=0001
	   RH -RSP FMD fi=0   sdi=0  bci=1  eci=1  (Only)
	   83 91 80    dr1=1  dr2=0  ri=1   qri=0  pi=1
	               bbi=1  ebi=0  cdi=0  csi=0  edi=0  pdi=0
	   000000  081b0000                             *....            *
	  ...
	  >11/27 13:50:43.562 (+ smidgen )  Event=TEV_DataToSNA
	   Thread = 0x000000C3  Session = 0x0026B7D0  Socket = 0x0000017C
	   VCB address=0x0026B9D8
	   verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8004 (WRITE)
	   sid=0x00010006  correlator=0x0026B7D0  post_handle=0x00000198
	   prim_rc=LUA_OK  sec_rc=LUA_SEC_RC_OK
	   lu_norm    lua_data_length=0x00000004
	   TH Only    efi=0  oadi=0  daf=FD  oaf=01  snf=0002
	   RH -RSP FMD fi=0   sdi=1  bci=1  eci=1  (Only)
	   87 91 20    dr1=1  dr2=0  ri=1   qri=0  pi=1
	               bbi=0  ebi=0  cdi=1  csi=0  edi=0  pdi=0
	   000000  081b0000                             *....            *
	  ...
	
	CAUSE
	=====
	
	After receiving a CLEAR message from the SNA host, the TN3270 Server may reject
	the first data response unit (RU) from the SNA host. There are two issues here,
	both of which have now been fixed:
	
	1. When the TN3270 Server receives a CLEAR message from the SNA host, it does
	  not reset its internal state which keeps track of whether the TN3270 emulator
	  or the host application has permission to send. This causes the TN3270 Server
	  to reject the first data message received from the SNA host with a sense data
	  = 081B0000, because the TN3270 Server assumes that the TN3270 emulator still
	  has the permission to send. The TN3270 Server then rejects the next data
	  message from the host. At this point, the host application gives up and
	  terminates the session.
	
	2. When the node receives data from the host application which it believes to be
	  out of bracket it passes a message up to a Request Unit Interface (RUI)
	  application with the Sense Data Included Indicator (sdi) bit set. On
	  receiving this, the RUI application is supposed to send a negative response
	  with the sense data which the node passed up to it. The TN3270 Server,
	  however, was not checking for this bit.
	
	RESOLUTION
	==========
	
	Microsoft has updated the files, TN3NTMSG.DLL and TN3SERVR.EXE, to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
