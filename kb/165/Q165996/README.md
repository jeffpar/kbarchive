---
layout: page
title: "Q165996: SNA Server Print Service Needs to Convert NL to CRLF"
permalink: /kb/165/Q165996/
---

## Q165996: SNA Server Print Service Needs to Convert NL to CRLF

	Article: Q165996
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A NewLine (NL) character ('15') may be converted to a Carriage Return (CR) in an
	LU1 data stream. It should convert it to a Carriage Return; Line Feed (CRLF).
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
