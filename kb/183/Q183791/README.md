---
layout: page
title: "Q183791: APPC/CPI-C Program Unexpectedly Hangs Through SNA Server 4.0"
permalink: kb/183/Q183791/
---

## Q183791: APPC/CPI-C Program Unexpectedly Hangs Through SNA Server 4.0

	Article: Q183791
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An APPC or CPI-C application may unexpectedly hang while sending data on an
	active conversation to a partner program running on a remote system. This
	problem only occurs with SNA Server 4.0.
	
	This problem only occurs when the remote system has initiated the LU6.2 session
	by sending a BIND to SNA Server that contains either a Length- Checked
	Compression control vector (key 0x66) or Fully Qualified PCID control vectors
	(key 0x60), or both. The format of the SNA BIND command and control vectors can
	be found in the following IBM reference:
	
	IBM SNA Formats Guide, IBM part number: GA27-3136:
	
	- For BIND command format, see Chapter 5, "Request/Response Units (RUs)".
	
	- For control vector formats, see Chapter 8, "Common Fields".
	
	
	CAUSE
	=====
	
	If SNA Server 4.0 receives an LU6.2 BIND request that contains a compression
	control vector or fully qualified PCID control vector, this could corrupt
	internal SNA client-server credit settings. This could cause the SNA Server
	client APPC interface to stop sending requests to SNA Server after several
	hundred messages are sent.
	
	WORKAROUND
	==========
	
	Reconfigure the remote system so that it does not initiate any LU6.2 sessions,
	and change SNA Server so that it always initiates the LU6.2 session. In SNA
	Server, automatic LU6.2 session activation can be accomplished by configuring a
	non-zero automatic activation limit on the APPC mode entry, and partnering the
	Local APPC LU with the Remote APPC LU that the APPC or CPI-C application will be
	using.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
