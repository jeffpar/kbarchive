---
layout: page
title: "Q178089: Thorn_Icelandic_Capital cannot be Mapped to a Macro in a PDF"
permalink: kb/178/Q178089/
---

## Q178089: Thorn_Icelandic_Capital cannot be Mapped to a Macro in a PDF

	Article: Q178089
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the character parameter THORN_ICELANDIC_CAPITAL (EBCDIC 0xAE) is sent from
	the host to the SNA Print Service, using a PDT, the character is always
	converted to ASCII 0xDE. This happens regardless of what macro
	THORN_ICELANDIC_CAPITAL is mapped to in the PDF File.
	
	CAUSE
	=====
	
	The ASCII codes for THORN_ICELANDIC_CAPITAL and THORN_ICELANDIC_SMALL in the SNA
	Server character table are incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
