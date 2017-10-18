---
layout: page
title: "Q223373: SNA Server Rejects Host's BIND Response"
permalink: kb/223/Q223373/
---

## Q223373: SNA Server Rejects Host's BIND Response

	Article: Q223373
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade your VTAM version to 4.4 on the host, SNA Server starts
	rejecting the host's BIND responses with an UNBIND(06):
	
	  Invalid session parameters:
	  The BIND negotiation has failed because the primary half-session cannot
	  support parameters specified by the secondary.
	
	In the Windows NT application log the following event may be seen:
	
	  Event ID: 22
	  Description: APPC session activation failure:
	  BIND negotiated parameters unacceptable, Sense data = 10050000.
	
	CAUSE
	=====
	
	SNA Server checks the BIND response pacing parameters to ensure that the PRIMARY
	RECEIVE WINDOW FIELD SIZE is equal to THE SECONDARY SEND WINDOW SIZE. If this is
	not true, then the BIND response is rejected.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To workaround this problem, change the configuration files on the host that are
	responsible for coding the BIND image so that the BIND RSP ensures the PRIMARY
	RCV WINDOW SIZE = THE SECONDARY SEND WINDOW SIZE rather then making byte 13
	equal zero.
	
	Also note that IBM has produced a PTF and an APAR that addresses this problem for
	OS390 V2.5 and VTAM 4.4. For information about obtaining this PTF and APAR,
	please contact IBM Technical Support or visit IBM's Web site at
	http://www.ibm.com.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	The IBM Formats Reference Manual indicates the following for byte 13 of a BIND
	response:
	
	- Bits 0-1: Reserved
	- Bits 2-7: Primary receive window size, in binary, for session-level pacing
	
	NOTE: A value of 0 means no pacing of requests flowing to the primary (for
	one-stage pacing in the secondary-to-primary direction, this field is redundant
	with, and will indicate the same value as, the secondary send window size--see
	byte 8, bits 2-7).
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact , click the appropriate article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: BIND PACING
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
