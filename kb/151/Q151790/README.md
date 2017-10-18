---
layout: page
title: "Q151790: XFOR: NDR with Diagnostic: 12 Erroneous Content Syntax"
permalink: kb/151/Q151790/
---

## Q151790: XFOR: NDR with Diagnostic: 12 Erroneous Content Syntax

	Article: Q151790
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail users sending messages through the MSMAIL connector to valid
	X.400 addresses containing DDA type and DDA value, such as
	
	  C=FR;A=ATLAS;P=INTERNET;DDA.TYPE=RFC-822;DDA.VALUE=user(a)domain.fr
	
	receive non-delivery reports (NDRs) with diagnostic 12 (erroneous content
	syntax).
	
	The Microsoft Exchange message transfer agent (MTA) reports in the Event log the
	following IDs :
	
	  Event 210
	
	  An internal MTA error occurred. Content conversion for message C=FR;A=ATLAS;
	  P=MSFRANCE;L=MICROSOFT-ILE-00000155 failed. Conversion error: 258, Object at
	  fault: 0600004F, Original content type: 2A864886F7140501, New content type:
	  56010A00. [2 MTA DISP:FANOUT 9] (14)
	
	  Event 62
	
	  A delivery failure occurred for the message with message transfer service
	  identifier C=FR;A=ATLAS;P=MSFRANCE;L=MICROSOFT-ILE-00000155. X.400 reason
	  code unable-to-transfer. Diagnostic content-syntax-error. Contact Microsoft
	  Product Support Services. [0 MTA DISP:FANOUT 12 112] (12)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
