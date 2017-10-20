---
layout: page
title: "Q170661: TN3270E Printer Can't Connect; LUSessionStateConfused"
permalink: /kb/170/Q170661/
---

## Q170661: TN3270E Printer Can't Connect; LUSessionStateConfused

{% raw %}

	Article: Q170661
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade from SNA Server 2.11 Service Pack 1 (SP1) to SP2 (or SNA 3.0
	or 3.0 SP1), a TN3270E printer emulator may be unable to get a printer session
	through the TN3270 server. The TN3270 server reports Event 902 to the Windows NT
	application event log, indicating an LUSessionStateConfused error in the
	InboundLULUData function.
	
	CAUSE
	=====
	
	The TN3270 server is expecting 3270 data by checking for DT_3270_DATA (screen
	data) but is ignoring valid DT_SCS_DATA (print data).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 2 (SP2) and 3.0 SP1. This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A TN3270 internal trace will indicate the following entries:
	
	  >05/01 18:50:30.582 (+ smidgen )  Event=TEV_LogicError InboundLULUData
	  LUSessionStateConfused
	
	  >05/01 18:50:30.582 (+ smidgen )  Event=TEV_SessionTerminationScheduled
	  Thread = 0x00000056  Session = 0x00264278  Socket = 0x000001A8
	  InternalError
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211
	Version           : WINDOWS:2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
