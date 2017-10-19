---
layout: page
title: "Q140603: SNMP Trap Frames Appear to be Dropped"
permalink: /kb/140/Q140603/
---

## Q140603: SNMP Trap Frames Appear to be Dropped

	Article: Q140603
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNMP Trap Frames appear to be dropped when they are sent with an extremely small
	delay between frames (1ms or less) to an SNMP Monitor application, such as
	SNMPUTIL.EXE, running locally, or on a remote station.
	
	CAUSE
	=====
	
	The Trap Frames appear to be dropped because they are never received by the SNMP
	Monitor application, even though they may have arrived at the station
	successfully. The SNMP Monitor application fails to receive all the Trap Frames
	because of the following two problems:
	
	- The size of the pipe created by SNMPTRAP.EXE that collects Trap PDUs
	  (Protocol Data Unit) from Trap Frames collected on UDP port 162 is equal to
	  the maximum size of only one Trap PDU.
	
	- MGMTAPI.DLL (loaded by SNMP Monitoring applications such as SNMPUTIL.EXE)
	  does not change the state of the pipe created by SNMPTRAP.EXE to message
	  mode. When the messages start queuing up on the server side of the pipe
	  (SNMPTRAP.EXE), the client side of the pipe (SNMP Monitor) assumes that each
	  read consists of only one Trap PDU. Because the mode of the pipe created by
	  SNMPTRAP.EXE was never set manually by MGMTAPI.DLL, it would default to byte
	  mode and the SNMP Monitor application would end up reading multiple Trap PDUs
	  but only decoding the first one in the buffer, effectively dropping the rest.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
