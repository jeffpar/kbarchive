---
layout: page
title: "Q153457: Host TPX Application Problem Leads to 3270 Emulator 2004 Error"
permalink: /kb/153/Q153457/
---

## Q153457: Host TPX Application Problem Leads to 3270 Emulator 2004 Error

{% raw %}

	Article: Q153457
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use TPX version 4.0.03 on an IBM MVS system (MVS v5.1 and VTAM v4r2),
	you will get the following Windows NT application event log entry indicating a
	3270 emulation error using SNA Server and Wall Data Rumba.
	
	  Event 21
	  Negative response sent on connection <value> (SENSE = 2004)
	
	Where 2004 indicates a DIRECTION ERROR. See the "IBM SNA Formats Guide" (IBM part
	number GA27-3136) for a description of SNA sense code errors.
	
	NOTE: If this specific problem occurs, it would occur with any 3270 emulator. To
	confirm this is the problem, SNA Server DLC and 3270 message traces should be
	captured.
	
	CAUSE
	=====
	
	The TPX host application sends a message to the 3270 emulator when it did not
	have the direction flag. An SNA Server DLC message trace shows the following
	message sequence:
	
	SNA Server     Host (TPX)
	--------------------------------------------------------
	        <- BIND (appname = "TPX")
	BIND +RSP ->
	        <- SDT
	SDT +RSP ->
	
	RQE FMD BC EC DR1 BB CD ->
	(User Request)
	
	        <- RQE FMD BC EC DR1 CD
	           (TPX response)
	
	RQE FMD BC EC DR1 CD BBIU ->
	(Security system screen)
	
	(second part) EBIU ->
	
	        <- RQE FMD BC EC DR1 CD
	           (TPX response)
	
	        <- RQE FMD BC EC DR1 EB
	           (NCCF NETVIEW screen data)
	
	-RSP FMD SD BC EC DR1 ->
	(sense code 20040000)
	
	In the above flow diagram, the TPX application sends an FMD message (the NCCF
	Netview screen) after it is already sent the Change Direction flag on the
	previous message. This is an SNA protocol violation that causes SNA Server to
	send a 2004 error (direction error).
	
	RESOLUTION
	==========
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
