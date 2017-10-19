---
layout: page
title: "Q107382: SNA Server Application Exception"
permalink: /kb/107/Q107382/
---

## Q107382: SNA Server Application Exception

	Article: Q107382
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An application exception occurs in SNA Server and a Dr. Watson log is generated.
	The log shows that exception C0000005 has occurred in module SNASERVR. This only
	happens when the Attachmate Extra print emulator communicates with SNA Server.
	
	
	CAUSE
	=====
	
	This error is observed when the Attachmate Extra print emulator sends an
	Open(PLU) response to the SNA Server over it's SSCP-LU connection, rather than
	the PLU-SLU connection. The OPEN(PLU) response uses the FMI interface which is a
	trusted interface. Because this is a trusted interface SNA Server does not
	verify that the destination value is correct. When the PLU session attempts to
	process the incorrect response, the exception occurs.
	
	RESOLUTION
	==========
	
	Microsoft has updated the SNA Server 2.11 file, SNASERVR.EXE, to validate the
	destination of the Open(PLU) response, rather than simply attempting to process
	the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	
	=============================================================================
	
