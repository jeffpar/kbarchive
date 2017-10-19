---
layout: page
title: "Q139507: SNA Server Twinax Connection to IBM 5494 Traps with 0x00000050"
permalink: /kb/139/Q139507/
---

## Q139507: SNA Server Twinax Connection to IBM 5494 Traps with 0x00000050

	Article: Q139507
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you stop an SNA Server that is connected through Twinax to an IBM 5494 or
	5394 Controller (that is connected to an AS/400) and then restart the server,
	the server fails with the following STOP message:
	
	  STOP:0x00000050
	
	CAUSE
	=====
	
	The SNA Server Twinax driver support is not handling the startup sequence
	properly when connecting through an IBM 5394 or 5494, which differs slightly
	from the native startup to an AS/400.
	
	When the SNA Server Twinax link service starts, a Memory Descriptor List (MDL)
	entry that is passed from User Mode to Kernel Mode is corrupt, hence the
	bugcheck is called displaying the STOP:0x00000050.
	
	
	RESOLUTION
	==========
	
	When you stop the SNA Server service, reboot the server before restarting the
	service.
	
	Microsoft has updated the following files to correct this problem:
	
	  IBMTDLC.SYS
	  ANDWTDLC.SYS
	  SNATDLC.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.11 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
