---
layout: page
title: "Q191625: TN3270 Server Rejects Valid BIND with 0821 Sense Code"
permalink: /kb/191/Q191625/
---

## Q191625: TN3270 Server Rejects Valid BIND with 0821 Sense Code

{% raw %}

	Article: Q191625
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TN3270 server included with SNA Server may incorrectly reject a valid BIND
	with an IBM Sense Code of 0821. The SNA Server computer logs the following event
	in the Windows NT Application Event Log when this occurs:
	
	  Event ID: 21
	  Source: SNA Server
	  Description: (1124) Negative Response Sent on Connection <connection 
	  name> (SENSE = 821).
	
	This was reported by a customer who was using a TN3287 session to access an LU1
	print session on the mainframe.
	
	CAUSE
	=====
	
	The TN3270 server checks incoming BINDs to verify certain BIND parameters. One
	of the validity checks done is to see whether Byte 7 (Common LU Protocols) of
	the BIND is set to x'80'. If this byte is set to any other value, the TN3270
	server rejects it with IBM Sense Code 0821, which indicates invalid session
	parameters.
	
	In the reported instance of this problem, the LU1 BIND from the mainframe had
	Byte 7 set to x'88', therefore it was being rejected.
	
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
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	This problem can be resolved by changing the BIND such that Byte 7 is set to
	x'80'. Byte 7 of the BIND (Common LU Protocols) is set by the second byte of the
	COMPROT parameter of the Log Mode Table (MODEENT) being used by the LU on the
	mainframe. A normal COMPROT value for an LU1 (SCS) printer is x'3080'. In the
	reported case, COMPROT was set to x'7088' which resulted in Byte 7 of the BIND
	being set to x'88'.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The TN3270 server only needs to check the first four bits of Byte 7 in the BIND.
	The hotfix changes the BIND checking mechanism so that only the first four bits
	of Byte 7 are checked. The last four bits of this Byte are then ignored.
	
	The following is a sample LU1 BIND that the TN3270 server rejects unless the
	hotfix is applied:
	
	  DLC   04160000->01020101 DLC DATA
	  DLC                      DAF:03 OAF:01 ODAI:off Exp.
	  DLC                      BIND   RQD SC  FI BC EC DR1
	  DLC
	  DLC   ---- Header  at address 01454140, 1 elements ----
	  DLC   09020100 00012D00 030104CF 0100E600     <......-.......W.>
	  DLC
	  DLC   ---- Element at address 0194B6D8, start 10, end 49 ----
	  DLC   6B800031 010303B1 90708800 0185C780
	<k..1.....ph..eG.>
	  DLC   00010000 01E10000 00000000 000008C3
	<...............C>
	  DLC   D6D4D7D3 C5E3F600                       <OMPLET6.>
	
	Byte 7 of this BIND (where Byte 0 is x'31') is set to x'88'.
	
	Please refer to the following for more information on the format of the BIND as
	well as the 0821 Sense Code:
	
	- IBM SNA Formats Guide (GA27-3136)
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
