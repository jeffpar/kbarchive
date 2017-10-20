---
layout: page
title: "Q195883: 3270 EIS/FMI Applications Fail if RU size in BIND Set To 32 KB"
permalink: /kb/195/Q195883/
---

## Q195883: 3270 EIS/FMI Applications Fail if RU size in BIND Set To 32 KB

{% raw %}

	Article: Q195883
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	3270 EIS (Emulator Interface Specification)/FMI (Function Management Interface)
	applications used with SNA Server fail if the application BIND received from the
	host specifies an RU (Request Unit) size of 32 KB. SNA Server will send the BIND
	to the 3270 application in an OPEN PLU REQUEST message. The 3270 Applet included
	with SNA Server responds to this message with an OPEN PLU CONFIRM ERROR
	(Err1:0821 Err2:000A). SNA Server then sends a BIND -RSP to the host with an IBM
	Sense Code of 0835000A. Other 3270 applications may return slightly different
	errors.
	
	This problem also occurs when using TN3270. In this case, SNA Server sends a BIND
	+RSP back to the host if the RU Size is 32 KB. However, a subsequent RUI READ
	verb fails with a LUA_RU_LENGTH_ERROR message.
	
	CAUSE
	=====
	
	SNA Server stores the maximum RU size in a signed two-byte integer which is
	capable of storing values up to +32767. The value of 32 KB is 32768, which is
	larger than can be stored in that signed two-byte integer. As a result, all FMI
	applications using 32 KB RUs are rejected.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server Versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Please refer to the IBM SNA Formats Guide (GA27-3136) for more details on how
	the RU size is specified in the BIND. IBM Sense Codes are also documented in
	this manual, which is also available on the SNA Server 4.0 CD
	(I386\Sdk\Formats.hlp).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
