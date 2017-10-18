---
layout: page
title: "Q167666: SNA TN3270 Access Violation, Event ID 5"
permalink: kb/167/Q167666/
---

## Q167666: SNA TN3270 Access Violation, Event ID 5

	Article: Q167666
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TN3270 Server service fails abnormally with an access violation and logs the
	following event to the Windows NT application log:
	
	  Event ID: 5
	  Source: TN3270 Server
	  Description:
	  The TN3270E Service has abnormally terminated.
	
	  EXPLANATION:
	  An exception (0xC0000005) has occurred that has caused the TN3270E
	  Service to terminate.
	
	An entry may be logged in the <NTRoot>\Drwtsn32.log file indicating a
	failure in the Tn3servr.exe process. For example:
	
	  ------------------------------------------------------------------
	  Application exception occurred:
	         App: exe\tn3servr.DBG
	         Exception number: c0000005 (access violation)
	
	  <data omitted>
	
	  Function: RtlDestroyHeap
	           <data omitted>
	   FAULT -> 77f7ebf  f3ab   rep  stosd      es:00194000=??????
	
	  *----> Stack Back Trace <----*
	
	  FramePtr         Function Name
	  <data omitted>   ntdll!RtlDestroyHeap
	                   ntdll!RtlAllocateHeap
	                   kernel32!LocalAlloc
	                   tn3servr!TnAlloc
	                   tn3servr!SMG_CB_Allocate
	                   tn3servr!SMGScheduleSessionInitialization
	                   tn3servr!TCPSessionTerminate
	  -----------------------------------------------------------------
	
	However, when attached with the NTSD or CDB debugger, the failure may actually
	occur in the following function:
	
	   Function:  RtlpFindAndCommitPages
	
	   Stack Back Trace - Function Names
	   ntdll!RtlpFindAndCommitPages+0xde
	   ntdll!RtlpExtendHeap+0x52
	   ntdll!RtlAllocateHeapSlowly+0x894
	   ntdll!RtlAllocateHeap+0x67a
	   kernel32!LocalAlloc+0x71
	   tn3servr!TnAlloc+0xd
	   tn3servr!SMG_CB_Allocate+0xb
	   tn3servr!SMGScheduleSessionInitiali
	   tn3servr!TCPSessionTerminate+0x23d
	   tn3servr!TCPThreadMain+0x1d7
	   tn3servr!TnMain+0x79
	   kernel32!BaseThreadStart+0x51
	
	
	CAUSE
	=====
	
	The TN3270 service does not account for the 5-byte TN3270E header when receiving
	data from a TN3270E client causing the TN3270 service to overwrite the end of
	the buffer that was allocated for the received data. This results in the
	application exception described previously.
	
	RESOLUTION
	==========
	
	The TN3270 service has been updated to allocate buffers that account for the
	5-byte TN3270E header when receiving data from TN3270E clients. The following
	configuration change to the TN3270 Server successfully resolved the problem at a
	customer location, therefore it can be used as an interim solution until the fix
	can be applied.
	
	1. In SNA Server Manager, go to the TN3270 Server Properties dialog box.
	
	2. Choose the Settings folder.
	
	3. Change the following parameters to the values below:
	
	  Default RU Sizes:
	  Inbound: 2048 (Default is 1024)
	  Outbound: 4096 (Default is 2048)
	
	This particular customer's host system was sending SNA BIND commands indicating
	the above maximum secondary and primary RU sizes above. The TN3270 Server
	Inbound RU size should be set to the maximum secondary RU size indicated by the
	host system. The TN3270 Server Outbound RU size should be set to the maximum
	primary RU size indicated by the host system.
	
	Note that the host configuration determines these maximum RU size values for a
	non-negotiable 3270 session. The host administrator should be contacted to
	determine these RU sizes. If this is not possible, the host RU sizes can be
	determined by enabling SNA Server Data Link Control messages, or TN3270 Internal
	Traces using the SNA Trace too. A BIND command will appear in the TN3270 trace
	as follows:
	
	 >04/10 11:09:42.751 (+260 msecs)  Event=TEV_DataFromSNAAsync
	  Thread = 0x000000A5  Session = 0x001F7ED8  Socket = 0x00000390
	  VCB address=0x001F80AC
	  verb_length=0x0044  verb=0x0052 (RUI)  opcode=0x8003 (READ)
	  sid=0x00020003  correlator=0x001F7ED8  post_handle=0x000003A4
	  prim_rc=LUA_OK  sec_rc=LUA_SEC_RC_OK
	  lu_exp     lua_data_length=0x00000023
	  lua_message_type=0x31 (LUA_MESSAGE_TYPE_BIND)
	  TH Only    efi=1  oadi=0  daf=FD  oaf=01  snf=9E05
	  RH  REQ SC  fi=1   sdi=0  bci=1  eci=1  (Only)
	  6B 80 00    dr1=1  dr2=0  ri=0   qri=0  pi=0
	              bbi=0  ebi=0  cdi=0  csi=0  edi=0  pdi=0
	  000000  31010303 b1903080 00018889 80000280  *..........hi....*
	  000010  00000000 00000000 03000006 c2c3c3d7  *............BCCP*
	  000020  f4f800                               *48.             *
	
	The BIND command data appears in the data portion of the above message, starting
	at 0x31 (the BIND command, which is byte 0 of the BIND). The maximum secondary
	and primary RU sizes appear at offset 10 and 11 (starting at 0 origin) in the
	above trace:
	
	offset 10 = 0x88 (maximum secondary RU size)
	offset 11 = 0x89 (maximum primary RU size)
	
	This value is converted to an actual RU size using the following algorithm
	(assuming the RU size = 0xMN):
	
	  M * (2**N)
	
	Here are some common RU sizes:
	
	  0x87 = 1024
	  0x88 = 2048
	  0x89 = 4096
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0
	Service Pack 1, and 3.0 Service Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
