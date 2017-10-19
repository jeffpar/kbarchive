---
layout: page
title: "Q157218: Possible Data Corruption w/ SNA Windows 95 Client Using TCP/IP"
permalink: /kb/157/Q157218/
---

## Q157218: Possible Data Corruption w/ SNA Windows 95 Client Using TCP/IP

	Article: Q157218
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you transfer a large amount of data using the Microsoft SNA Server Windows
	95 client configured to use TCP/IP sockets to communicate with the server, some
	data bytes (15-20 bytes) may be corrupt when passed to the Win32 application. No
	APPC or CPIC errors will occur, though some data bytes received by the
	application may be corrupt.
	
	This problem has been observed in the following configuration:
	
	- SNA Server Windows 95 client software (from 2.11.sp1) configured to use
	  TCP/IP sockets.
	
	- Using a 32-bit Windows application that reads or receives large messages and
	  simultaneously sends data.
	
	Applications that have encountered data corruption include:
	
	- IBM Client Access/95, after retrieving a PTF download from the AS/400, which
	  is unable to run due to random DLL errors when starting.
	
	- Win32 APPC/CPIC database applications that receive large data messages. Part
	  of the received data may be corrupt (or include "garbage" characters).
	
	CAUSE
	=====
	
	The SNA Server Windows 95 TCP/IP client transport was not properly receiving
	large TCP/IP data messages for a Win32 application, when the same application
	was simultaneously trying to send data. In one case, data corruption occurred.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft SNA Server Windows
	95 client included in SNA Server 2.11 Service Pack 1. This problem was corrected
	in the latest Microsoft SNA Server 2.11 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
