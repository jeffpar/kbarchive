---
layout: page
title: "Q220942: TN5250 Clients May Fail with a STATE_CHECK Error"
permalink: /kb/220/Q220942/
---

## Q220942: TN5250 Clients May Fail with a STATE_CHECK Error

	Article: Q220942
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	TN5250 clients of the the SNA Server TN5250 service may fail with a STATE_CHECK
	AP_SEND_DATA_NO_LL_BDY, because of the way the datastream is interpreted.
	
	CAUSE
	=====
	
	The TN5250 data stream that is exchanged is composed of a header followed by the
	5250 client data stream. The header is variable in length and composed of two
	parts:
	
	- A fixed part
	
	  This is six octets long and contains the logical record length, record type,
	  and a reserved field.
	
	- A variable part
	
	  This includes a one-octet length field, flags, and an opcode field. The opcode
	  field indicates the operation requested (for example, get/put/read
	  immediate).
	
	The 5250 client data stream follows, and is terminated by two octets, (IAC) with
	value 0xFF, and (EOR) with value 0xFF. The (IAC) (EOR) combination marks the end
	of the record. To uniquely identify these two octets as the termination, each
	0xFF in the data stream is doubled.
	
	The problem occurs when the doubled IAC character 0xFF sent by the emulator is
	exactly between the two SEND buffers (first one ends with FF and second one
	begins with the remaining FF). The TN5250 translator fails to undouble it
	(0xFFFF should become 0xFF), so an extra character is sent to APPC. APPC is
	waiting for a SEND buffer with n characters, and receives a send buffer with n+1
	characters. This behavior generates a STATE_CHECK AP_SEND_DATA_NOT_LL_BDY.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 SP1, 3.0
	SP2, 3.0 SP3, SNA Server 4.0, 4.0 SP1, 4.0 SP2. This problem was first corrected
	in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
